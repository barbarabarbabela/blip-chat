import { FastifyReply, FastifyRequest } from "fastify";
import authSchemaValidator from "../schemas/auth.schema.validator";
import authService from "../service/auth.service";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

const login = async (request: FastifyRequest, reply: FastifyReply) => {
  const parsedBody = authSchemaValidator.apiKey(request.body);
  const { apiKey } = parsedBody;

  try {
    await authService.login(apiKey);
    const token = jwt.sign({ apiKey }, SECRET_KEY, {
      expiresIn: "1h",
    });

    reply
      .header("Authorization", `Bearer ${token}`)
      .status(200)
      .send({ token });
  } catch (error) {
    reply
      .status(401)
      .send({ message: "Falha no login. Verifique sua chave API." });
  }
};

export default {
  login,
};
