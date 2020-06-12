const cors = require("koa-cors");
const Koa = require("koa");
const Router = require("koa-router");
const { createProxyMiddleware } = require("http-proxy-middleware");
const k2c = require("koa2-connect");

// 实例化 koa
const app = new Koa();

const PORT = 3000;

// 跨域
app.use(cors());

app.use(async (ctx, next) => {
  if (ctx.url.startsWith("/api/hitokoto")) {
    // 匹配有hitokoto字段的请求url
    ctx.respond = false; // 绕过koa内置对象response ，写入原始res对象，而不是koa处理过的response
    await k2c(
      createProxyMiddleware({
        target:
          "https://api.imjad.cn/hitokoto/?cat=&charset=utf-8&length=28&encode=json",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api/hitokoto": "",
        },
      })
    )(ctx, next);
  }
  await next();
});

app.use(
  new Router()
    .get("/api/getSchoolList", async (ctx, next) => {
      ctx.response.type = "application/json"; //指定content type
      ctx.response.body = {
        schoolList: [
          { id: 1, name: "动物大学" },
          { id: 2, name: "植物大学" },
          { id: 3, name: "建筑大学" },
          { id: 4, name: "服装大学" },
        ],
      };
    })
    .routes()
);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`the server is running at http://localhost:${PORT}`);
  }
});
