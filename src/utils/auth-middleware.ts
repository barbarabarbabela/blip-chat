import { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";
import { blipConnection } from "../utils/blip-connection";
import { env } from "../env";

export async function authMiddleware(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const token = request.cookies.authToken;

    if (!token) {
      return reply.status(401).send({ message: "Token não fornecido." });
    }

    const decoded = jwt.verify(token, env.JWT_SECRET) as {
      identifier: string;
      accessKey: string;
    };

    const connection = await blipConnection(
      decoded.identifier,
      decoded.accessKey
    );

    if (!connection) {
      return reply
        .status(401)
        .send({ message: "Token inválido ou autenticação falhou no Blip." });
    }
  } catch (err) {
    return reply
      .status(401)
      .send({ message: "Token inválido ou autenticação falhou no Blip." });
  }
}
