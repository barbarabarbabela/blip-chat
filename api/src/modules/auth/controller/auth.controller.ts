import { FastifyReply, FastifyRequest } from "fastify";
import authSchemaValidator from "../schemas/auth.schema.validator";
import authService from "../service/auth.service";

const login = async (request: FastifyRequest, reply: FastifyReply) => {
  const parsedBody = authSchemaValidator.apiKey(request.body);

  const { apiKey } = parsedBody;

  await authService.login(apiKey);

  reply.status(200).send({ message: "Login realizado com sucesso!" });
};

export default {
  login,
};
