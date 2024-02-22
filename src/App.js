import './App.css';

function App() {
  return(
    <>
    <div className="container">
    
    <div className="sidebar">
     
      <div className="new-chat">
        <p>New Chat</p>
      </div>
     
      <div className="history">
        <ul>
          <li>Installing Nginx</li>
          <li>Web server Devops</li>
          <li>Networking the OSI model</li>
          <li>This is the un overflow unordered list to the right</li>
        </ul>
      </div>
     
      <div className="author">
        <p>Developed by: Joseph Akaro</p>
      </div>
    
    </div>
   
    <div className="main">
      <div className="responds">
        <h1>Sabi-GPT</h1>
        <div className="suggestions">
          <ul>
            <li>Write a MVP for a Devops projects</li>
            <li>How to install Nginx in unbuntu machine</li>
            <li>Write a essay on OSI models in 5000 words</li>
            <li>Let granma teach you how to code and clean the bugs</li>
          </ul>
        </div>
      </div>

      <div className="prompt">
          <input type="text" placeholder="Message..." />
        <p>Straving to provide the user interactions through intractive tools</p>
      </div>
    
    </div>
    </div>
    </>
  )
}

export default App;
