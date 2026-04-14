import { useState, useEffect } from "react";

function EmojiEditor() {
  const [text, setText] = useState("");
  const [emoji, setEmoji] = useState("😊");
  const [size, setSize] = useState(40);
  const [bgColor, setBgColor] = useState("#ffffff");

  // Load saved data
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("emojiData"));
    if (saved) {
      setText(saved.text);
      setEmoji(saved.emoji);
      setSize(saved.size);
      setBgColor(saved.bgColor);
    }
  }, []);

  // Save data automatically
  useEffect(() => {
    localStorage.setItem(
      "emojiData",
      JSON.stringify({ text, emoji, size, bgColor })
    );
  }, [text, emoji, size, bgColor]);

  return (
    <div style={{
      textAlign: "center",
      padding: "20px",
      backgroundColor: bgColor,
      minHeight: "100vh"
    }}>
      
      <h1>✨ Emoji Editor</h1>

      <input
        type="text"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "10px", width: "60%" }}
      />

      <br /><br />

      <select onChange={(e) => setEmoji(e.target.value)}>
        <option>😊</option>
        <option>🔥</option>
        <option>❤️</option>
        <option>😎</option>
        <option>🎉</option>
      </select>

      <br /><br />

      <label>Size: {size}px</label><br />
      <input
        type="range"
        min="20"
        max="100"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />

      <br /><br />

      <input
        type="color"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
      />

      <br /><br />

      <div style={{
        marginTop: "30px",
        padding: "20px",
        borderRadius: "15px",
        background: "#f5f5f5",
        display: "inline-block",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
      }}>
        <h2>{text}</h2>
        <span style={{ fontSize: `${size}px` }}>{emoji}</span>
      </div>

    </div>
  );
}

export default EmojiEditor;