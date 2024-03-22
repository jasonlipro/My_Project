"use client";
import React from "react";
import BlackDropdown from "@/components/common/black-dropdown";


export default function Agents() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center border-solid border-0 border-b py-1.5 px-8">
        <h2 className="text-xl font-semibold leading-7 text-gray-900 sm:truncate sm:tracking-tight">Agents</h2>
        <div className="flex gap-4">
          <button className="group flex items-center justify-center gap-1 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm  shadow-[0px_0.25px_0px_rgba(3,_7,_18,_0.16),_0px_0.5px_0px_rgba(3,_7,_18,_0.16)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0),_rgba(3,_7,_18,_0.03)),_#fff] h-10">
            <div className="flex flex-row items-center cursor-pointer text-slate-700 group-hover:text-slate-900">
              Finetuning Sessions
            </div>
          </button>
          <BlackDropdown text="Add agent">
            <div
              className="absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform opacity-100 scale-100"
              role="menu"
              tab-index="0"
            >
              <div className="px-1 py-1 ">
                <button
                  className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-white hover:bg-teal-600"
                  role="menuitem"
                  tab-index="-1"
                >
                  Create my own agent
                </button>
                <button
                  className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-white hover:bg-teal-600"
                  role="menuitem"
                  tab-index="-1"
                >
                  Hire agent from marketplace
                </button>
              </div>
            </div>
          </BlackDropdown>
        </div>
      </div>
      <div className="bg-slate-50 py-3 px-8 h-[94%]">
        <div className="flex gap-1">
          <button className="w-1/2 group flex aspect-[1.7] overflow-hidden border-slate-200 border-2 bg-white rounded-xl mb-3 relative">
            <img
              src="https://app.gpt.nexus/images/agent-marketplace-3.svg"
              className="absolute top-0 left-0 w-full overflow-hidden"
            />
            <div className="font-inter relative mt-auto flex w-full flex-row items-end justify-start gap-[14px] bg-gradient-to-t from-white via-white via-80% to-transparent px-6 py-6 text-left text-[18px]">
              <div className="flex flex-1 flex-col items-start justify-start gap-[8px]">
                <div className="relative self-stretch font-semibold text-gray-900">
                  Find an agent on the marketplace
                </div>
                <div className="relative self-stretch text-[14px] leading-[160%]">
                  Dive into our diverse marketplace, featuring AI agents fine-tuned by experts. These ready-made
                  solutions offer expertise catering to a wide range of needs. Ideal for those looking for quick
                  deployment and proven capabilities.
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
              src="https://app.gpt.nexus/images/create-agent-3.svg"
              className="absolute top-0 left-0 w-full overflow-hidden"
            />
            <div className="font-inter relative mt-auto flex w-full flex-row items-end justify-start gap-[14px] bg-gradient-to-t from-white via-white via-80% to-transparent px-6 py-6 text-left text-[18px]">
              <div className="flex flex-1 flex-col items-start justify-start gap-[8px]">
                <div className="relative self-stretch font-semibold text-gray-900">Create your own custom agent</div>
                <div className="relative self-stretch text-[14px] leading-[160%]">
                  Build an agent that&apos;s uniquely yours. Tailor it to perform specific tasks, designed and developed
                  on-the-fly by our intuitive AI assistant. This option is perfect for those who seek a personalized
                  touch and have specific requirements.
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
        <div className="-mb-6 mt-7">
          <div className="mb-10 md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-bold text-gray-900">My Agents</h2>
            </div>
          </div>
        </div>
        <div className="pb-8">
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <div className="flex-1 hover:cursor-pointer">
              <div className="font-inter relative box-border flex w-full flex-1 shrink-0 flex-col items-start justify-start gap-[18px] overflow-hidden rounded-xl bg-white p-5 text-left text-[16px] shadow-[0px_0px_0px_1px_rgba(3,_7,_18,_0.08),_0px_1px_2px_-1px_rgba(3,_7,_18,_0.08),_0px_2px_4px_rgba(3,_7,_18,_0.04)]">
                <div className="relative flex flex-row items-center justify-start gap-[12px] self-stretch">
                  <img
                    className="relative h-[42px] w-[42px] rounded-full object-cover"
                    alt="Riordan Michael"
                    src="https://snikpic-marketplace.s3.eu-west-3.amazonaws.com/virtual_employees/MichaelRiordan.png"
                  />
                  <div className="z-[1] flex flex-1 flex-col items-start justify-start gap-[4px]">
                    <div className="relative self-stretch font-semibold leading-[20px] text-gray-900">
                      Management Consultant
                    </div>
                    <div className="relative self-stretch text-[14px] leading-[18px] text-gray-700">
                      Michael Riordan
                    </div>
                  </div>
                  <div className="absolute bottom-[-0.5px] left-[27.5px] z-[2] mx-[!important] my-0 flex flex-row items-center justify-center rounded-[999px] border-[1px] border-solid border-white bg-[#00c94f] p-0.5">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative h-2.5 w-2.5 shrink-0 overflow-hidden text-white"
                    >
                      <path
                        d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="relative self-stretch h-px bg-gray-200"></div>
                <div className="text-color-text-normal flex h-[56px] flex-row flex-wrap items-center justify-start gap-[8px] self-stretch overflow-hidden text-xs">
                  <div className="flex flex-row items-center justify-center rounded-md bg-[#f6f8fa] px-2.5 py-1.5 ">
                    <div className="relative leading-[12px] text-gray-700">Management consulting</div>
                  </div>
                  <div className="flex flex-row items-center justify-center rounded-md bg-[#f6f8fa] px-2.5 py-1.5 ">
                    <div className="relative leading-[12px] text-gray-700">Problem solving</div>
                  </div>
                  <div className="flex flex-row items-center justify-center rounded-md bg-[#f6f8fa] px-2.5 py-1.5 ">
                    <div className="relative leading-[12px] text-gray-700">Excel modeling</div>
                  </div>
                  <div className="flex flex-row items-center justify-center rounded-md bg-[#f6f8fa] px-2.5 py-1.5 ">
                    <div className="relative leading-[12px] text-gray-700">Communication</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center w-full gap-2 mt-auto text-sm rounded-lg">
                  <a className="flex-1" href="/chats">
                    <button className="flex-1 w-full p-2 text-sm border text-black border-gray-200 rounded-md hover:bg-gray-50">
                      Chat with agent
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 hover:cursor-pointer">
              <div className="font-inter relative box-border flex w-full flex-1 shrink-0 flex-col items-start justify-start gap-[18px] overflow-hidden rounded-xl bg-white p-5 text-left text-[16px] shadow-[0px_0px_0px_1px_rgba(3,_7,_18,_0.08),_0px_1px_2px_-1px_rgba(3,_7,_18,_0.08),_0px_2px_4px_rgba(3,_7,_18,_0.04)]">
                <div className="relative flex flex-row items-center justify-start gap-[12px] self-stretch">
                  <img
                    className="relative h-[42px] w-[42px] rounded-full object-cover"
                    alt="Riordan Michael"
                    src="https://snikpic-marketplace.s3.amazonaws.com/virtual_employees/afb6d1d8-9e10-4898-81ac-4f631c2a9a33.jpg"
                  />
                  <div className="z-[1] flex flex-1 flex-col items-start justify-start gap-[4px]">
                    <div className="relative self-stretch font-semibold leading-[20px] text-gray-900">
                      Human Resources Recruiter
                    </div>
                    <div className="relative self-stretch text-[14px] leading-[18px] text-gray-700">Belinda West</div>
                  </div>
                </div>
                <div className="relative self-stretch h-px bg-gray-200"></div>
                <div className="text-color-text-normal flex h-[56px] flex-row flex-wrap items-center justify-start gap-[8px] self-stretch overflow-hidden text-xs">
                  <div className="flex flex-row items-center justify-center rounded-md bg-[#f6f8fa] px-2.5 py-1.5 ">
                    <div className="relative leading-[12px] text-gray-700">Human resources</div>
                  </div>
                  <div className="flex flex-row items-center justify-center rounded-md bg-[#f6f8fa] px-2.5 py-1.5 ">
                    <div className="relative leading-[12px] text-gray-700">Recruitment</div>
                  </div>
                  <div className="flex flex-row items-center justify-center rounded-md bg-[#f6f8fa] px-2.5 py-1.5 ">
                    <div className="relative leading-[12px] text-gray-700">Job descriptions</div>
                  </div>
                  <div className="flex flex-row items-center justify-center rounded-md bg-[#f6f8fa] px-2.5 py-1.5 ">
                    <div className="relative leading-[12px] text-gray-700">Applicant screening</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center w-full gap-2 mt-auto text-sm rounded-lg">
                  <a className="flex-1" href="/chats">
                    <button className="flex-1 w-full p-2 text-sm border text-black border-gray-200 rounded-md hover:bg-gray-50">
                      Chat with agent
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
