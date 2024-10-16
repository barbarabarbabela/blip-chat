import * as BlipSdk from "blip-sdk";
import * as WebSocketTransport from "lime-transport-websocket";

// Put your identifier and access key here
let IDENTIFIER = "teste638646125846294795";
let ACCESS_KEY = "barbara-barbabela-id237.ws.msging.net";

// Create a client instance passing the identifier and accessKey of your chatbot
export let client = new BlipSdk.ClientBuilder()
  .withIdentifier(IDENTIFIER)
  .withAccessKey(ACCESS_KEY)
  .withTransportFactory(() => new WebSocketTransport())
  .build();

// Connect with server asynchronously
// Connection will occurr via websocket on 8081 port.
client
  .connect() // This method return a 'promise'.
  .then(function (session) {
    // Connection success. Now is possible send and receive envelopes from server. */
    console.log("Application started. Press Ctrl + c to stop.");
  })
  .catch(function (err) {
    /* Connection failed. */
  });
