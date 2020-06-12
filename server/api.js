const cors = require("koa-cors");
const Koa = require("koa");
const Router = require("koa-router");
// 实例化 koa
const app = new Koa();

const PORT = 3000;

// 跨域
app.use(cors());

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
