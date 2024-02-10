import { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";
// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
  "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
}

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Sustainabot! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };
  
    const newMessages = [...messages, newMessage];
  
    setMessages(newMessages);
  
    // Check if the user is querying the number of signups for a specific challenge
    if (message.toLowerCase().includes("which challenge has the most signups")) {
      // Simulate an API response with the number of signups (150 in this case)
      const responseMessage = "Recyling Race";
      
      // Add the response to the message list
      setMessages([...newMessages, { message: responseMessage, sender: "ChatGPT" }]);
    } 
    
    if (message.toLowerCase().includes("What is most popular category?")) {
      // Simulate an API response with the number of signups (150 in this case)
      const responseMessage = "Activities that involve recycling are the most popular as 30% of the campaigns done by volunteers fall under this, closely followed by Home Improvement at 25%. ";
      
      // Add the response to the message list
      setMessages([...newMessages, { message: responseMessage, sender: "ChatGPT" }]);
    } 
    
    else {
      // If the query is not related to signups, proceed with processing the message to ChatGPT
      setIsTyping(true);
      await processMessageToChatGPT(newMessages);
    }
  };
  async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });


    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act. 
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  // The system message DEFINES the logic of our chatGPT
        ...apiMessages // The messages from our chat with ChatGPT
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
  }

  return (
    <div className="App">
      <div style={{ position:"relative", height: "15vh", width: "750px"  }}>
      <h4>Sustainabot</h4>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="Sustainabot is typing" /> : null}
            >
              {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default Chatbot