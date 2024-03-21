"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Brand } from "../icons/Brand";
import {
  ChatIcon,
  DollarIcon,
  MarketplaceIcon,
  AgentIcon,
  ToolsIcon,
  ModelsIcon,
  IntegrationsIcon,
  KnowledgeIcon,
  DocsIcon,
  SettingsIcon,
  CollapseIcon,
} from "../icons/sidebar-icons";

export default function Sidebar() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("dashboard");

  useEffect(() => {
    setActiveItem(pathname.slice(1, pathname.length));
  }, []);

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className="border-solid border-0 border-r border-gray-200 min-w-64 py-3 h-screen">
      <div className="flex justify-between ml-6 mr-3">
        <Link href="/">
          <Brand />
        </Link>
        <div className="border-2 rounded-md p-[2px] h-9">
          <CollapseIcon />
        </div>
      </div>
      <div className="flex flex-col justify-between border-solid border-0 border-t border-gray-200 p-4 h-[96%]">
        <div className="flex flex-col gap-0.5">
          <Link
            href="/chats"
            className={`flex p-2 gap-2 text-sm hover:cursor-pointer hover:text-teal-700 hover:bg-slate-50 hover:rounded-lg ${
              activeItem === "chats" && "text-teal-700 bg-slate-50 rounded-lg"
            }`}
            onClick={() => handleItemClick("chats")}
          >
            <ChatIcon />
            <span className="leading-7">Chat</span>
          </Link>
          <Link
            href="/marketplace"
            className={`flex p-2 gap-2 text-sm hover:cursor-pointer hover:text-teal-700 hover:bg-slate-50 hover:rounded-lg ${
              activeItem === "marketplace" && "text-teal-700 bg-slate-50 rounded-lg"
            }`}
            onClick={() => handleItemClick("marketplace")}
          >
            <MarketplaceIcon />
            <span className="leading-7">Marketplace</span>
          </Link>
          <Link
            href="/agents"
            className={`flex p-2 gap-2 text-sm hover:cursor-pointer hover:text-teal-700 hover:bg-slate-50 hover:rounded-lg ${
              activeItem === "agents" && "text-teal-700 bg-slate-50 rounded-lg"
            }`}
            onClick={() => handleItemClick("agents")}
          >
            <AgentIcon />
            <span className="leading-7">Agents</span>
          </Link>
          <Link
            href="/tools"
            className={`flex p-2 gap-2 text-sm hover:cursor-pointer hover:text-teal-700 hover:bg-slate-50 hover:rounded-lg ${
              activeItem === "tools" && "text-teal-700 bg-slate-50 rounded-lg"
            }`}
            onClick={() => handleItemClick("tools")}
          >
            <ToolsIcon />
            <span className="leading-7">Tools</span>
          </Link>
          <Link
            href="/integrations"
            className={`flex p-2 gap-2 text-sm hover:cursor-pointer hover:text-teal-700 hover:bg-slate-50 hover:rounded-lg ${
              activeItem === "data" && "text-teal-700 bg-slate-50 rounded-lg"
            }`}
            onClick={() => handleItemClick("integrations")}
          >
            <IntegrationsIcon />
            <span className="leading-7">Integrations</span>
          </Link>
          <Link
            href="/knowledge"
            className={`flex p-2 gap-2 text-sm hover:cursor-pointer hover:text-teal-700 hover:bg-slate-50 hover:rounded-lg ${
              activeItem === "data" && "text-teal-700 bg-slate-50 rounded-lg"
            }`}
            onClick={() => handleItemClick("knowledge")}
          >
            <KnowledgeIcon />
            <span className="leading-7">Knowledge</span>
          </Link>
          <Link
            href="/models"
            className={`flex p-2 gap-2 text-sm hover:cursor-pointer hover:text-teal-700 hover:bg-slate-50 hover:rounded-lg ${
              activeItem === "models" && "text-teal-700 bg-slate-50 rounded-lg"
            }`}
            onClick={() => handleItemClick("models")}
          >
            <ModelsIcon />
            <span className="leading-7">Models</span>
          </Link>
        </div>
        <div className="">
          <Link
            href="/docs"
            className={`flex p-2 gap-2 text-sm hover:cursor-pointer hover:text-teal-700 hover:bg-slate-50 hover:rounded-lg ${
              activeItem === "docs" && "text-teal-700 bg-slate-50 rounded-lg"
            }`}
            onClick={() => handleItemClick("docs")}
          >
            <DocsIcon />
            <span className="leading-7">Docs</span>
          </Link>
          <Link
            href="/settings"
            className={`flex p-2 gap-2 text-sm hover:cursor-pointer hover:text-teal-700 hover:bg-slate-50 hover:rounded-lg ${
              activeItem === "settings" && "text-teal-700 bg-slate-50 rounded-lg"
            }`}
            onClick={() => handleItemClick("settings")}
          >
            <SettingsIcon />
            <span className="leading-7">Settings</span>
          </Link>
          <div className="flex items-center group w-[221px] p-2 mt-1 bg-red-50 border-red-700 border rounded-md cursor-pointer hover:bg-red-100">
            <DollarIcon />
            <div className="mr-10">
              <p className="text-red-700 text-sm">&nbsp;-$0.17</p>
              <p className="text-red-700 text-xs">Your balance is low</p>
            </div>
            <svg
              className="h-8 w-5 text-red-700"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="9 6 15 12 9 18" />
            </svg>
          </div>
          <div className="flex items-center w-full p-2 mt-2 border rounded-md cursor-pointer hover:bg-slate-100">
            <Image width={32} height={32} className="rounded" src="/img/google_profile.png" alt="" />
            <div className="ml-9 mr-9">
              <p className="text-sm">minion boss</p>
            </div>
            <svg
              className="h-8 w-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="9 6 15 12 9 18" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
