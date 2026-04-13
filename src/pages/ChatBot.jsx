import "../css/ChatBot.css";

function ChatBot() {
  return (
    <div className="chatbot-page">
      <div className="chatbot-container">
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-avatar">🤖</div>
          <div>
            <h2>Mo-vies Assistant</h2>
            <span className="chatbot-status">Offline</span>
          </div>
        </div>

        {/* Messages Area */}
        <div className="chatbot-messages">
          <div className="chatbot-message bot">
            <span>
              👋 Hey! I'm your AI movie assistant — currently under
              construction.
            </span>
            <p>Coming soon, you'll be able to:</p>
            <ul>
              <li>🎬 Get personalized movie recommendations</li>
              <li>💬 Search movies using natural language</li>
              <li>🧠 Discover films based on mood, genre, or vibe</li>
              <li>⭐ Get smart summaries and insights</li>
            </ul>
            <p>Stay tuned 🚀</p>
          </div>
        </div>

        {/* Under Construction Banner */}
        <div className="under-construction">
          🚧 Under Construction 🚧
          <p>Our AI assistant is being built. Coming soon!</p>
        </div>

        {/* Input Area - disabled */}
        <div className="chatbot-input-area">
          <input
            type="text"
            placeholder="Chat coming soon..."
            disabled
            className="chatbot-input"
          />
          <button disabled className="chatbot-send-btn">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
