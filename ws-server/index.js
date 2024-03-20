import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });
console.log("Ws server started");
wss.on("connection", function connection(ws) {
  console.log("Un client s-a conectat");
  ws.on();
});
