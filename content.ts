import { listen } from "@plasmohq/messaging/message"

listen((req, res) => {
  console.log("Received message from background:", req)
  res.send("response from content!")
})