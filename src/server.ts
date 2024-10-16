import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { routes } from "./routes/routes";
import { client } from "./utils/blip-connection";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(routes);

client.addMessageReceiver("text/plain", function (message) {
  // TODO: Proccess the received message
  console.log(message);
});

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log("Server is running on port 3000");
  });
