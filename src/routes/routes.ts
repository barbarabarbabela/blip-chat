import { ClientBuilder } from "blip-sdk/dist/blip-sdk";
import { FastifyInstance } from "fastify";
import WebSocketTransport from "lime-transport-websocket";
import { createApiKeySchema } from "../schemas/api-key.schema";

let validApiKey: string | null = null;
let validIdentifier: string | null = null;

export async function routes(fastify: FastifyInstance) {
  fastify.post("/login", async (request, reply) => {
    const { body } = createApiKeySchema.parse(request);

    console.log(body);

    try {
      const client = new ClientBuilder()
        .withIdentifier(body.identifier)
        .withAccessKey(body.accessKey)
        .withTransportFactory(() => new WebSocketTransport())
        .build();

      console.log("client", client);

      await client
        .connect()
        .then(function (session) {
          console.log("session", session);
          console.log("Application started. Press Ctrl + c to stop.");
        })
        .catch(function (err) {
          console.log(err.message);
        });

      validApiKey = body.accessKey;
      validIdentifier = body.identifier;

      return reply.redirect("/");
    } catch (err) {
      return reply.status(401).send({
        message: "Autenticação falhou no Blip. Verifique suas credenciais.",
      });
    }
  });

  fastify.get("/", async (request, reply) => {
    if (!validApiKey || !validIdentifier) {
      return reply.status(401).send({ message: "Usuário não autenticado." });
    }

    return reply
      .status(200)
      .send({ message: "Usuário autenticado com sucesso!" });
  });
}
