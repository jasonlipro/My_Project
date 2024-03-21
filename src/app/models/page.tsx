"use client";
import React from 'react'
import BlackDropdown from "@/components/common/black-dropdown";

export default function MyModels() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center border-solid border-0 border-b py-1.5 px-8">
        <h2 className="text-xl font-semibold leading-7 text-gray-900 sm:truncate sm:tracking-tight">My models</h2>
        <div className="flex gap-4">
          <BlackDropdown text="Add a model">
            <div
              className="absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform opacity-100 scale-100"
              role="menu"
              tab-index="0"
            >
              <div className="px-1 py-1 ">
                <a href="/models/host"><button
                  className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-white hover:bg-teal-600"
                  role="menuitem"
                  tab-index="-1"
                >
                  Host a model on Nexus
                </button></a>
                <a href="/models/connect"><button
                  className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-white hover:bg-teal-600"
                  role="menuitem"
                  tab-index="-1"
                >
                  Add a model you already host
                </button></a>
              </div>
            </div>
          </BlackDropdown>
        </div>
      </div>
      <div className="bg-slate-50 py-3 px-8 h-[94%]">
        <div className="flex gap-1">
          <button className="w-1/2 group flex aspect-[1.7] overflow-hidden border-slate-200 border-2 bg-white rounded-xl mb-3 relative">
            <a href="/models/host"><img src="https://app.gpt.nexus/images/host-model-3.svg" className="absolute left-0 top-0 w-full overflow-hidden"></img></a>
            <div className="font-inter relative mt-auto flex w-full flex-row items-end justify-start gap-[14px] bg-gradient-to-t from-white via-white via-80% to-transparent px-6 py-6 text-left text-[18px]">
              <div className="flex flex-1 flex-col items-start justify-start gap-[8px]">
                <div className="relative self-stretch font-semibold text-gray-900">
                  Host your own LLM on Nexus
                </div>
                <div className="relative self-stretch text-[14px] leading-[160%]">
                  Access a diverse range of open-source models, tailored to your unique needs. Experience the freedom of deploying your own model directly, supported by predictable costs thanks to fixed GPU pricing, starting at less than $1/hr.
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
          <a href="/models/connect"><img
              src="https://app.gpt.nexus/images/external-provider-3.svg" className="absolute left-0 top-0 w-full overflow-hidden"></img></a>
            <div className="font-inter relative mt-auto flex w-full flex-row items-end justify-start gap-[14px] bg-gradient-to-t from-white via-white via-80% to-transparent px-6 py-6 text-left text-[18px]">
              <div className="flex flex-1 flex-col items-start justify-start gap-[8px]">
                <div className="relative self-stretch font-semibold text-gray-900">Connect to an external LLM provider</div>
                <div className="relative self-stretch text-[14px] leading-[160%]">
                  Choose from the giants and integrate their cutting-edge Large Language Models (LLMs) into your projects. Ideal for beginners and those seeking simplicity, this path offers a straightforward setup without the burden of upfront costs.
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
