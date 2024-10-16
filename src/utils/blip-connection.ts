import { ClientBuilder } from "blip-sdk/dist/blip-sdk";
import WebSocketTransport from "lime-transport-websocket";

export async function blipConnection(identifier, accessKey) {
  const client = new ClientBuilder()
    .withIdentifier(identifier)
    .withAccessKey(accessKey)
    .withTransportFactory(() => new WebSocketTransport())
    .build();

  try {
    const session = await client.connect();
    console.log("Application started. Press Ctrl + C to stop.");

    return session;
  } catch (err) {
    console.error("Connection failed:", err);
    client
      .close()
      .then(function () {
        /* Disconnection success */
        console.log("Disconnected");
      })
      .catch(function (err) {
        /* Disconnection failed */
      });
  }
}
