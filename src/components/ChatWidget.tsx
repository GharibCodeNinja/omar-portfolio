"use client";
import { useState, useRef, useEffect } from "react";

type Msg = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hi! Ask me anything about Omar's work, skills, or experience." },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);


  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user", content: text } as Msg];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Something went wrong." }]);
    }
    setLoading(false);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 flex h-[28rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e16] shadow-2xl">
          <div className="border-b border-white/10 px-4 py-3 text-sm font-semibold text-white">
            Ask Omar
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto p-3 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                <span
                  className={`inline-block max-w-[85%] rounded-xl px-3 py-2 ${
                    m.role === "user" ? "bg-indigo-500 text-white" : "bg-white/10 text-gray-100"
                  }`}
                >
                  {m.content}
                </span>
              </div>
            ))}
            {loading && <div className="text-xs text-gray-400">Typingâ€¦</div>}
            <div ref={endRef} />
          </div>
          <div className="flex gap-2 border-t border-white/10 p-3">
            <input
              value={input}
              maxLength={500}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="What has he built with Flutter?"
              className="flex-1 rounded-lg bg-white/10 px-3 py-2 text-sm text-white outline-none placeholder:text-gray-500"
            />
            <button onClick={send} className="rounded-lg bg-indigo-500 px-3 text-sm text-white">
              Send
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Ask Omar"
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500 text-2xl text-white shadow-lg"
      >
        {open ? "âœ•" : "ðŸ’¬"}
      </button>
    </div>
  );
}
