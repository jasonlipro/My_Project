"use client";
import React, { useState } from "react";
import Image from "next/image";
import Loading from "@/components/loading";

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState("agents");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleWelcomeClose = () => {
    document.getElementById("welcomeMsg")?.classList.add("hidden");
  };

  return (
    <div className="w-full">
      <div className="border-solid border-0 border-b py-[13px] px-8">
        <h2 className="text-xl font-semibold leading-7 text-gray-900 sm:truncate sm:tracking-tight">Marketplace</h2>
      </div>
      <div className="bg-slate-50 py-3 px-8 h-[94%]">
        <div className="w-full border-slate-200 border-2 bg-white rounded-xl py-4 px-7 mb-3 relative" id="welcomeMsg">
          <div className="flex">
            <Image width={251} height={190} src="https://app.gpt.nexus/images/marketplace-header.svg" alt="" />
            <div className="p-8">
              <h2 className="text-xl font-semibold leading-10 text-gray-900 sm:truncate sm:tracking-tight">
                Welcome to marketplace!
              </h2>
              <div className="self-stretch text-[14px] leading-[160%] text-gray-500">
                Explore Nexus Marketplace: where simplicity meets innovation. Buy and sell AI agents effortlessly.
                Enhance your AI with ready-to-use agents or tools for various tasks. Fine-tune skills or leverage Large
                Language Models for specific projects. Connect, share, and grow peer-to-peer. Nexus Marketplace is your
                user-friendly hub for hassle-free AI trading.
              </div>
            </div>
          </div>
          <button className="absolute right-4 top-4" onClick={handleWelcomeClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="z-[2] mx-[!important] my-0 h-7 w-7 shrink-0 overflow-hidden rounded-md p-1 hover:bg-gray-50"
            >
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"></path>
            </svg>
          </button>
        </div>
        <div className="w-full border-slate-200 border-2 bg-white rounded-xl">
          <ul
            className="flex list-none flex-row flex-wrap text-sm border-solid border-0 border-b px-2"
            role="tablist"
            data-te-nav-ref
          >
            <li
              className={`pt-4 pb-2 px-4 ml-5 text-gray-500 cursor-pointer ${
                activeTab === "agents" && "text-black border-black border-b-2"
              }`}
              onClick={() => handleTabClick("agents")}
            >
              Agents
            </li>
            <li
              className={`pt-4 pb-2 px-4 text-gray-500 cursor-pointer ${
                activeTab === "tools" && "text-black border-black border-b-2"
              }`}
              onClick={() => handleTabClick("tools")}
            >
              Tools
            </li>
          </ul>

          <div className="py-2 px-6">
            <div className={`${activeTab === "agents" ? "block" : "hidden"}`}>
              <div className="flex justify-between pt-2">
                <div className="">
                  <div className="font-semibold">Available agents</div>
                  <div className="text-sm text-gray-500">List of available agents</div>
                </div>
                <div className="relative w-[398px]">
                  <input
                    className="border-solid border-2 py-2 px-4 mt-1 rounded-lg text-sm w-full"
                    type="text"
                    placeholder="Find a freelancer..."
                  />
                  <div className="flex justify-center items-center w-6 h-6 absolute top-1 right-0 cursor-pointer rounded-md hover:bg-slate-100">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute right-2 top-2.5 z-20 mr-4 h-5 w-5 text-gray-400"
                    >
                      <path
                        d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-6 mb-6">
                <button className="group flex items-center justify-center gap-1 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm  shadow-[0px_0.25px_0px_rgba(3,_7,_18,_0.16),_0px_0.5px_0px_rgba(3,_7,_18,_0.16)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0),_rgba(3,_7,_18,_0.03)),_#fff]">
                  <div className="flex flex-row items-center cursor-pointer text-slate-700 group-hover:text-slate-900">
                    <div
                      className="inline-block h-7 w-7 animate-spin rounded-full border-[3px] border-solid border-current border-r-transparent align-[-0.125em] text-primary-500 motion-reduce:animate-[spin_1.5s_linear_infinite] ml-2"
                      role="status"
                    ></div>
                  </div>
                </button>
              </div>
            </div>
            <div className={`${activeTab === "tools" ? "block" : "hidden"}`}>
              <div className="flex justify-between pt-2">
                <div className="">
                  <div className="font-semibold">Available tools</div>
                  <div className="text-sm text-gray-500">List of available tools</div>
                </div>
                <div className="relative w-[398px]">
                  <input
                    className="border-solid border-2 py-2 px-4 mt-1 rounded-lg text-sm w-full"
                    type="text"
                    placeholder="Find a tool... (ex: Trellom, MessageBird)"
                  />
                  <div className="flex justify-center items-center w-6 h-6 absolute top-1 right-0 cursor-pointer rounded-md hover:bg-slate-100">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute right-2 top-2.5 z-20 mr-4 h-5 w-5 text-gray-400"
                    >
                      <path
                        d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-6 mb-6">
                <button className="group flex items-center justify-center gap-1 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm  shadow-[0px_0.25px_0px_rgba(3,_7,_18,_0.16),_0px_0.5px_0px_rgba(3,_7,_18,_0.16)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0),_rgba(3,_7,_18,_0.03)),_#fff]">
                  <Loading />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
