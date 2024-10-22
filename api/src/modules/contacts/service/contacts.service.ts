import authService from "../../auth/service/auth.service";
import Lime from "lime-js";

const getContacts = async (apiKey: string) => {
  const client = authService.getClient(apiKey);

  const takeBlipResponse = await client.sendCommand({
    id: Lime.Guid(),
    method: "get",
    uri: "/contacts",
  });

  const { resource } = takeBlipResponse;

  const { items: contactList } = resource;

  if (!contactList.length) {
    throw new Error("No contacts found");
  }

  return contactList;
};

const getMessages = async (apiKey: string) => {
  const client = authService.getClient(apiKey);

  const takeBlipResponse = await client.sendCommand({
    id: Lime.Guid(),
    method: "get",
    uri: "/messages",
  });

  const { resource } = takeBlipResponse;
  const { items: messages } = resource;

  if (!messages.length) {
    throw new Error("No contacts found");
  }

  return messages;
};

const getContactMessages = async (apiKey: string, contactId: string) => {
  const client = authService.getClient(apiKey);

  const takeBlipResponse = await client.sendCommand({
    id: Lime.Guid(),
    method: "get",
    uri: "/messages",
  });

  const { resource } = takeBlipResponse;
  const { items: messages } = resource;

  if (!messages.length) {
    throw new Error("No contacts found");
  }

  const filteredMessages = messages.filter((message) => {
    const from = message.from.split("@")[0];

    return from === contactId;
  });

  return filteredMessages;
};

export default {
  getContacts,
  getContactMessages,
  getMessages,
};
