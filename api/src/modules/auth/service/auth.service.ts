import { validateCredentials } from "../../../utils/validate.credentials";
import { ClientBuilder, Client } from "blip-sdk/dist/blip-sdk";
import WebSocketTransport from "lime-transport-websocket";

const IDENTIFIER = validateCredentials(process.env.IDENTIFIER);

const takeBlip: {
  [key: string]: Client;
} = {};

const login = async (apiKey: string) => {
  let session;
  try {
    session = takeBlip[apiKey] = new ClientBuilder()
      .withIdentifier(IDENTIFIER)
      .withAccessKey(apiKey)
      .withTransportFactory(() => new WebSocketTransport())
      .build();

    await takeBlip[apiKey].connect();
  } catch (error) {
    session.close();

    throw new Error("Login failed");
  }
};

const getClient = (apiKey: string) => {
  if (!takeBlip[apiKey]) {
    throw new Error("Client not found");
  }

  return takeBlip[apiKey];
};

export default {
  login,
  getClient,
};
