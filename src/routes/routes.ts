import { FastifyInstance } from "fastify";
import authController from "../modules/auth/controller/auth.controller";
import contactsController from "../modules/contacts/controller/contacts.controller";

export async function routes(fastify: FastifyInstance) {
  fastify.post("/login", authController.login);
  fastify.get("/", contactsController.getContacts);
  fastify.get("/messages", contactsController.getMessages);
  fastify.get("/contato/:contactId", contactsController.getContactMessages);
}
