"use client";
import { Message, useAssistant } from "ai/react";
import { Loader2 } from "lucide-react";
import React, { useEffect, useRef } from "react";

const roleToColorMap: any = {
  system: "red",
  user: "black",
  assistant: "green",
};

const AskAiModal = ({ setIsOpen }: { setIsOpen: any }) => {
  const messagesRef = useRef<HTMLDivElement>(null);
  const { status, messages, input, submitMessage, handleInputChange, error } =
    useAssistant({
      api: "/api/openai",
    });

  // When status changes to accepting messages, focus the input:
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (status === "awaiting_message") {
      inputRef.current?.focus();
    }
  }, [status]);

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <>
      <div
        className="w-screen h-screen  z-40 top-0 left-0 fixed bg-black/5"
        onClick={() => setIsOpen(() => false)}
      ></div>
      <div className="fixed z-50 border border-zinc-100 shadow-md rounded-lg top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[80vh] w-[50vw] bg-gradient-to-tr from-zinc-50 to-white">
        <div className="text-zinc-500 relative w-full gap-2  bg-white h-14 border-b rounded-t-lg border-zinc-100 shadow-sm shadow-zinc-100 flex items-center px-6">
          <svg
            className=" stroke-red-400 outline-red-400  fill-red-400 size-5"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M208 512a24.84 24.84 0 0 1-23.34-16l-39.84-103.6a16.06 16.06 0 0 0-9.19-9.19L32 343.34a25 25 0 0 1 0-46.68l103.6-39.84a16.06 16.06 0 0 0 9.19-9.19L184.66 144a25 25 0 0 1 46.68 0l39.84 103.6a16.06 16.06 0 0 0 9.19 9.19l103 39.63a25.49 25.49 0 0 1 16.63 24.1a24.82 24.82 0 0 1-16 22.82l-103.6 39.84a16.06 16.06 0 0 0-9.19 9.19L231.34 496A24.84 24.84 0 0 1 208 512M88 176a14.67 14.67 0 0 1-13.69-9.4l-16.86-43.84a7.28 7.28 0 0 0-4.21-4.21L9.4 101.69a14.67 14.67 0 0 1 0-27.38l43.84-16.86a7.3 7.3 0 0 0 4.21-4.21L74.16 9.79A15 15 0 0 1 86.23.11a14.67 14.67 0 0 1 15.46 9.29l16.86 43.84a7.3 7.3 0 0 0 4.21 4.21l43.84 16.86a14.67 14.67 0 0 1 0 27.38l-43.84 16.86a7.28 7.28 0 0 0-4.21 4.21l-16.86 43.84A14.67 14.67 0 0 1 88 176m312 80a16 16 0 0 1-14.93-10.26l-22.84-59.37a8 8 0 0 0-4.6-4.6l-59.37-22.84a16 16 0 0 1 0-29.86l59.37-22.84a8 8 0 0 0 4.6-4.6l22.67-58.95a16.45 16.45 0 0 1 13.17-10.57a16 16 0 0 1 16.86 10.15l22.84 59.37a8 8 0 0 0 4.6 4.6l59.37 22.84a16 16 0 0 1 0 29.86l-59.37 22.84a8 8 0 0 0-4.6 4.6l-22.84 59.37A16 16 0 0 1 400 256" />
          </svg>
          mAI
          <span className="text-xs text-zinc-400">BETA</span>
          <button
            onClick={() => setIsOpen(() => false)}
            className="absolute right-6 top-1/2 -translate-y-1/2 border border-zinc-100 hover:bg-zinc-50 size-10 flex items-center justify-center rounded"
          >
            <svg
              className="size-5 "
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
              />
            </svg>
          </button>
        </div>
        <div
          ref={messagesRef}
          className="flex flex-col h-[80%] w-full px-6 py-6 overflow-scroll"
        >
          {messages.map((m: Message) => (
            <div
              key={m.id}
              className=" whitespace-pre-wrap text-sm p-3 w-fit rounded-lg my-2 max-w-xl "
              style={{
                backgroundColor: m.role === "assistant" ? "#dcfce7" : "#f4f4f5",
                marginLeft: m.role === "user" ? "auto" : "0",
              }}
            >
              {m.role !== "data" && m.content}
              {m.role === "data" && (
                <>
                  <pre className={"bg-gray-200 "}>
                    {JSON.stringify(m.data, null, 2)}
                  </pre>
                </>
              )}
            </div>
          ))}
          {error && (
            <div className="bg-red-100 text-red-500 p-3 w-fit rounded-lg my-2 max-w-xl">
              {error.message}
            </div>
          )}
          {status === "in_progress" && (
            <div className="text-xs text-zinc-400">
              <Loader2 className="size-7 text-red-400 animate-spin" />
            </div>
          )}
        </div>
        <form
          onSubmit={(e) => {
            messagesRef.current?.scrollTo({
              top: messagesRef.current.scrollHeight,
              behavior: "smooth",
            });
            submitMessage(e);
          }}
          className="w-[49vw] h-16  absolute bottom-0 mb-2 px-2 rounded"
        >
          <button className=" absolute text-sm right-3 rounded-lg top-1/2 bg-red-400 border border-red-300 text-red-50 py-4 px-8 -translate-y-1/2 z-50">
            Send
          </button>

          <input
            ref={inputRef}
            disabled={status !== "awaiting_message"}
            className=" w-full h-full bg-white border rounded-lg px-4 placeholder:text-sm"
            value={input}
            placeholder="Ask a question about me."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </>
  );
};

export default AskAiModal;
