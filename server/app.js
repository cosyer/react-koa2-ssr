import App from "../src/App";
import Koa from "koa";
import React from "react";
import Router from "koa-router";
import fs from "fs";
import koaStatic from "koa-static";
import path from "path";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";
import routes from "../src/routes";

import { Provider } from "react-redux";
import { getServerStore } from "../src/store/index";

const cors = require("koa-cors");

// 配置文件
const config = {
  port: 3030,
};

// 实例化 koa
const app = new Koa();

// 跨域
app.use(cors());

// 静态资源
app.use(
  koaStatic(path.join(__dirname, "../build"), {
    maxage: 365 * 24 * 60 * 1000,
    index: "root",
    // 这里配置不要写成'index'就可以了，因为在访问localhost:3030时，不能让服务默认去加载index.html文件，这里很容易掉进坑。
  })
);

// 设置路由
app.use(
  new Router()
    .get("*", async (ctx, next) => {
      let context = {};
      ctx.response.type = "html"; //指定content type
      let shtml = "";
      await new Promise((resolve, reject) => {
        fs.readFile(
          path.join(__dirname, "../build/index.html"),
          "utf-8",
          function (err, data) {
            if (err) {
              reject();
              return console.log(err);
            }
            shtml = data;
            resolve();
          }
        );
      });
      // 替换掉 {{root}} 为我们生成后的HTML
      // ctx.response.body = shtml.replace("{{root}}", renderToString(<App />));
      // 匹配多级路由

      let matchedRoutes = matchRoutes(routes, ctx.request.url);
      let promises = [];
      let store = getServerStore();
      matchedRoutes.forEach((item) => {
        let loadData = item.route.loadData;
        if (loadData) {
          // 部署在服务端只能请求本机端口 无法转发请求其他网址?!
          // 报错也执行resolve防止页面一直loading不渲染，失败状态改成成功
          const promise = new Promise((resolve) => {
            loadData(store).then(resolve).catch(resolve);
          });
          promises.push(promise);
        }
      });
      await Promise.all(promises);
      // koa2 写法https://github.com/koajs/koa/blob/master/docs/migration.md
      //   .then(() => {
      console.log(JSON.stringify(store.getState()));
      ctx.response.body = shtml
        .replace(
          "{{root}}",
          renderToString(
            <Provider store={store}>
              <StaticRouter context={context} location={ctx.request.url}>
                {/* {routes.map((route) => (
                  <Route {...route} />
                ))} */}
                {renderRoutes(routes)}
              </StaticRouter>
            </Provider>
          )
        )
        .replace(
          "{{water}}",
          `<script>
      window.context = {
        state: ${JSON.stringify(store.getState())}
      }
    </script>`
        );
      // 判断404
      if (context.NotFound) {
        ctx.response.status = 404;
      }
      // })
      // .catch((e) => {
      //   console.log(e);
      // });
    })
    .routes()
);

app.listen(config.port, function () {
  console.log("服务器启动，监听 port： " + config.port + "  running~");
});
