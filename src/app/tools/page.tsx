"use client";
import React from "react";

export default function Tools() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center border-solid border-0 border-b py-3 px-8">
        <h2 className="text-xl font-semibold leading-7 text-gray-900 sm:truncate sm:tracking-tight">My Tools</h2>
      </div>
      <div className="bg-slate-50 py-3 px-8 h-[94%]">
        <div className="flex gap-1">
          <button className="w-1/2 group flex aspect-[1.7] overflow-hidden border-slate-200 border-2 bg-white rounded-xl mb-3 relative">
            <img
              src="	https://app.gpt.nexus/images/marketplace-tools.svg"
              className="absolute top-0 left-0 w-full overflow-hidden"
            />
            <div className="font-inter relative mt-auto flex w-full flex-row items-end justify-start gap-[14px] bg-gradient-to-t from-white via-white via-80% to-transparent px-6 py-6 text-left text-[18px]">
              <div className="flex flex-1 flex-col items-start justify-start gap-[8px]">
                <div className="relative self-stretch font-semibold text-gray-900">Go to marketplace</div>
                <div className="relative self-stretch text-[14px] leading-[160%]">
                  Explore the Nexus Marketplace for AI tools, both free and paid, to enhance your agent&apos;s capabilities.
                  Each tool is ready for integration, simplifying your agent&apos;s development.
                </div>
              </div>
              <div className="relative flex flex-row items-center justify-center overflow-hidden rounded-full border p-3 shadow-[0px_0px_0px_1px_#fff_inset,_0px_0px_0px_2px_rgba(229,_231,_235,_0.4)_inset,_0px_0px_0px_1px_rgba(3,_7,_18,_0.08)] transition-all duration-300 [background:linear-gradient(180deg,_rgba(3,_7,_18,_0),_rgba(3,_7,_18,_0.04)),_#fff] group-hover:shadow-[0px_0px_0px_1px_#fff_inset,_0px_0px_0px_2px_rgba(229,_231,_235,_0.4)_inset,_0px_0px_0px_1px_rgba(3,_7,_18,_0.08)] group-hover:[background:linear-gradient(180deg,_rgba(255,_255,_255,_0.16),_rgba(255,_255,_255,_0)),_#191919]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-[#666D80] transition-all duration-500 ease-in-out group-hover:-rotate-[405deg] group-hover:text-white"
                >
                  <path
                    d="M4.16675 10.0001H15.8334M15.8334 10.0001L10.0001 4.16675M15.8334 10.0001L10.0001 15.8334"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </button>
          <button className="w-1/2 group flex aspect-[1.7] overflow-hidden border-slate-200 border-2 bg-white rounded-xl mb-3 relative">
            <img
              src="https://app.gpt.nexus/images/create-tool.svg
              "
              className="absolute top-0 left-0 w-full overflow-hidden"
            />
            <div className="font-inter relative mt-auto flex w-full flex-row items-end justify-start gap-[14px] bg-gradient-to-t from-white via-white via-80% to-transparent px-6 py-6 text-left text-[18px]">
              <div className="flex flex-1 flex-col items-start justify-start gap-[8px]">
                <div className="relative self-stretch font-semibold text-gray-900">Create a tool</div>
                <div className="relative self-stretch text-[14px] leading-[160%]">
                  Have a solution? Connect it with AI agents using its OpenAPI scheme and authentication (API key or
                  OAuth). This integrates your tool to nexus ecosystem for broad AI agent access.
                </div>
              </div>
              <div className="relative flex flex-row items-center justify-center overflow-hidden rounded-full border p-3 shadow-[0px_0px_0px_1px_#fff_inset,_0px_0px_0px_2px_rgba(229,_231,_235,_0.4)_inset,_0px_0px_0px_1px_rgba(3,_7,_18,_0.08)] transition-all duration-300 [background:linear-gradient(180deg,_rgba(3,_7,_18,_0),_rgba(3,_7,_18,_0.04)),_#fff] group-hover:shadow-[0px_0px_0px_1px_#fff_inset,_0px_0px_0px_2px_rgba(229,_231,_235,_0.4)_inset,_0px_0px_0px_1px_rgba(3,_7,_18,_0.08)] group-hover:[background:linear-gradient(180deg,_rgba(255,_255,_255,_0.16),_rgba(255,_255,_255,_0)),_#191919]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-[#666D80] transition-all duration-500 ease-in-out group-hover:-rotate-[405deg] group-hover:text-white"
                >
                  <path
                    d="M4.16675 10.0001H15.8334M15.8334 10.0001L10.0001 4.16675M15.8334 10.0001L10.0001 15.8334"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
