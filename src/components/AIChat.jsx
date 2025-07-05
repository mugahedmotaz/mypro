// واجهة محادثة الذكاء الاصطناعي
import { useState } from "react";

const AIChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const send = () => {
    if (!input) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    // هنا يمكنك ربط OpenAI API لاحقاً
  };
  return (
    <div className="bg-white rounded shadow p-4">
      <div className="h-40 overflow-y-auto mb-2">
        {messages.map((m, i) => (
          <div key={i} className={m.from === "user" ? "text-right" : "text-left text-blue-600"}>{m.text}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <input value={input} onChange={e => setInput(e.target.value)} className="border rounded px-2 flex-1" />
        <button onClick={send} className="bg-blue-600 text-white px-4 py-1 rounded">إرسال</button>
      </div>
    </div>
  );
};

export default AIChat;
