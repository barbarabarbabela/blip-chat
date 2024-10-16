import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { routes } from "./routes/routes";
import fastifyCookie from "@fastify/cookie";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(fastifyCookie);

app.register(routes);

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log("Server is running on port 3000");
  });
