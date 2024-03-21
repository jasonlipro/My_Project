"use client";
import React from "react";
import Image from "next/image";

export default function ChatPage() {
  return (
    <div className="flex w-full">
      <div className="flex flex-col justify-between border-solid border-0 border-r p-4">
        <div className="">
          <h3 className="text-xl font-bold text-gray-900">History</h3>
          <p className="text-xs mb-2">Recent jobs</p>
          <div className="flex p-3 cursor-pointer rounded-lg hover:bg-slate-100">
            <Image width={32} height={32} className="rounded-md mr-4" src="/img/michael.png" alt="" />
            <div className="text-xs">
              <span className="font-semibold">Michael</span>
              <span className="font-light"> - Management Consultant</span>
              <p className="font-semibold">&quot;Significance of the Number 12&quot;</p>
            </div>
          </div>
          <div className="flex p-3 cursor-pointer rounded-lg hover:bg-slate-100">
            <Image width={32} height={32} className="w-8 h-8 rounded-md mr-4" src="/img/michael.png" alt="" />
            <div className="text-xs">
              <span className="font-semibold">Michael</span>
              <span className="font-light"> - Management Consultant</span>
              <p className="font-semibold">&quot;Blockchain Dodge the Blocks&quot;</p>
            </div>
          </div>
        </div>
        <div className="flex items-center border-solid border-2 rounded-md text-center cursor-pointer hover:bg-slate-100">
          <div className="flex items-center mx-auto">
            <p className="text-sm leading-10 mr-2">Start a new job</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-2 w-[768px] mx-auto relative">
        <div className="flex justify-center">
          <div className="flex items-center mt-6 p-2 border-solid border-2 rounded cursor-pointer">
            <Image width={40} height={40} className="rounded-md mr-4" src="/img/michael.png" alt="" />
            <div className="text-sm mr-6">
              <span className="font-semibold">Michael</span>
              <span className="font-light"> - Management Consultant</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-6 w-full">
          <div className="flex justify-between">
            <div className="flex">
              <button className="border-solid border-2 text-xs font-light px-2 py-1 rounded hover:bg-slate-100">
                /&nbsp;Commands
              </button>
              <p className="mb-0 ml-2 text-xs font-light leading-10">Default cmd: /Auto</p>
            </div>
            <button className=" flex items-center border-solid border-2 text-xs font-light px-2 py-1 rounded ml-auto hover:bg-slate-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                />
              </svg>
              Select or upload files
            </button>
          </div>
          <div className="relative">
            <input
              className="border-solid border-2 py-3 px-4 mt-1 rounded-md text-sm w-full"
              type="text"
              placeholder="Send a message... (Press / for commands and Shift+Enter for new line)"
            />
            <div className="flex justify-center items-center w-6 h-6 absolute top-4 right-2 cursor-pointer rounded-md hover:bg-slate-100">
              <svg
                stroke="gray"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 h-4 w-4"
                height="1em"
                width="1em"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </div>
          </div>
          <p className="text-xs text-center mt-2 font-light">
            NexusGPT may produce inaccurate information about people, places, or facts.
          </p>
        </div>
      </div>
    </div>
  );
}
