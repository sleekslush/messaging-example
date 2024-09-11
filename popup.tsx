import { sendToBackground } from "@plasmohq/messaging"
import { useState } from "react"

function IndexPopup() {
  const [response, setResponse] = useState("")
  
  const sendMessage = async () => {
    const response = await sendToBackground({ name: "send-to-content", body: { message: "Hello from popup" } })
    setResponse(response)
  }

  return (
    <div>
      <button onClick={sendMessage}>Click me</button>
      <div><span>{response}</span></div>
    </div>
  )
}

export default IndexPopup
