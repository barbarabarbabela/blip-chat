import { ClientBuilder } from "blip-sdk/dist/blip-sdk";
import WebSocketTransport from "lime-transport-websocket";

export const client = new ClientBuilder()
  .withIdentifier(process.env.IDENTIFIER)
  .withAccessKey(process.env.ACCESS_KEY)
  .withTransportFactory(() => new WebSocketTransport())
  .build();
