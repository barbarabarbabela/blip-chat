import { FastifyInstance } from "fastify";
import authController from "../modules/auth/controller/auth.controller";
import contactsController from "../modules/contacts/controller/contacts.controller";
import verifyToken from "../modules/auth/shared/auth.middleware";

export async function routes(fastify: FastifyInstance) {
  fastify.post("/login", authController.login);
  fastify.get(
    "/",
    { preHandler: [verifyToken] },
    contactsController.getContacts
  );
  fastify.get(
    "/messages",
    { preHandler: [verifyToken] },
    contactsController.getMessages
  );
  fastify.get(
    "/contato/:id",
    { preHandler: [verifyToken] },
    contactsController.getContactMessages
  );
}
