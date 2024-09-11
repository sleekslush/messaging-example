import { sendToContentScript, type PlasmoMessaging } from "@plasmohq/messaging"
 
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const response = await sendToContentScript({
    name: "send-to-content",
    body: req.body
  })

  res.send(response)
}

export default handler