import { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

const verifyToken = async (request: FastifyRequest, reply: FastifyReply) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return reply.status(401).send({ message: "Token não fornecido" });
  }

  const token = authHeader.split(" ")[1];

  try {
    jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return reply.status(403).send({ message: "Token inválido ou expirado" });
  }
};

export default verifyToken;
