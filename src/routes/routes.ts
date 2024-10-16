import { FastifyInstance } from "fastify";
import { createApiKeySchema } from "../schemas/api-key.schema";
import { blipConnection } from "../utils/blip-connection";
import jwt from "jsonwebtoken";
import { authMiddleware } from "../utils/auth-middleware";
import { env } from "../env";

const JWT_SECRET = env.JWT_SECRET;

export async function routes(fastify: FastifyInstance) {
  fastify.post("/login", async (request, reply) => {
    const { body } = createApiKeySchema.parse(request);

    try {
      await blipConnection(body.identifier, body.accessKey);

      const token = jwt.sign(
        {
          identifier: body.identifier,
          accessKey: body.accessKey,
        },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      reply
        .setCookie("authToken", token, {
          httpOnly: true,
          maxAge: 3600,
        })
        .redirect("/");
    } catch (err) {
      return reply.status(401).send({
        message: "Autenticação falhou no Blip. Verifique suas credenciais.",
      });
    }
  });

  fastify.get("/", { preHandler: authMiddleware }, async (request, reply) => {
    return reply.send({ message: "Acesso permitido à rota!" });
  });
}
