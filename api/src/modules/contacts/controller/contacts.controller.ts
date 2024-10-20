import { FastifyReply, FastifyRequest } from "fastify";
import authSchemaValidator from "../../auth/schemas/auth.schema.validator";
import contactsSchemaValidator from "../schemas/contacts.schema.validator";
import contactsService from "../service/contacts.service";

const getContacts = async (request: FastifyRequest, reply: FastifyReply) => {
  const headerApiKey = request.headers["apikey"];

  const parsedApiKey = authSchemaValidator.apiKey({ apiKey: headerApiKey });

  const { apiKey } = parsedApiKey;

  const contactList = await contactsService.getContacts(apiKey);

  reply.status(200).send({ contactList });
};

const getMessages = async (request: FastifyRequest, reply: FastifyReply) => {
  const headerApiKey = request.headers["apikey"];

  const parsedApiKey = authSchemaValidator.apiKey({ apiKey: headerApiKey });

  const { apiKey } = parsedApiKey;

  const messages = await contactsService.getMessages(apiKey);

  console.log(messages);

  reply.status(200).send({ messages });
};

const getContactMessages = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const headerApiKey = request.headers["apikey"];

  const parsedApiKey = authSchemaValidator.apiKey({ apiKey: headerApiKey });

  const { apiKey } = parsedApiKey;

  const { id } = contactsSchemaValidator.id(request.params);

  const messages = await contactsService.getContactMessages(apiKey, id);

  reply.status(200).send({ messages });
};

export default {
  getContacts,
  getContactMessages,
  getMessages,
};
