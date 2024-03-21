import React, { useState, ReactNode } from "react";

export default function BlackDropdown({ text, children }: { text: string; children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="relative inline-block text-center" data-headlessui-state="">
        {/* <button type="button" aria-haspopup="menu" aria-expanded="false" onClick={handleClick}>
          <div className="group relative rounded-md px-3 py-2 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border border-[#0f0f0f] shadow-[0px_1.75px_0px_rgba(255,_255,_255,_0.16)_inset,_0px_0.25px_0px_rgba(3,_7,_18,_0.16),_0px_0.5px_0px_rgba(3,_7,_18,_0.16)] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.16),_rgba(255,_255,_255,_0)),_#fff] focus-visible:outline-primary-600 disabled:border-black/10 disabled:bg-black/50 disabled:shadow-none">
            <div className="flex items-center justify-center">
              <span className="inset-y-0 left-0 flex items-center"></span>
              {text}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="ml-2 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
              </svg>
            </div>
          </div>
        </button> */}

        <button type="button" aria-haspopup="menu" aria-expanded="false" onClick={handleClick}>
          <div className="flex  h-10 flex-row items-center justify-center rounded-md border border-gray-200  py-0 pr-0 shadow-[0px_0.25px_0px_rgba(3,_7,_18,_0.16),_0px_0.5px_0px_rgba(3,_7,_18,_0.16)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0),_rgba(3,_7,_18,_0.04)),_#fff]">
            <div className="flex items-center justify-center gap-[12px] text-sm/[14px]">
              <span className="inset-y-0 left-0 flex items-center"></span>
              {text}
              <div className="flex flex-row items-center justify-center self-stretch border-l-[1px] border-gray-200  px-2 py-0">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M4 6.5L8 10.5L12 6.5" stroke="#666D80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div></div></button>
        {isOpen && children}
      </div>
    </>
  );
}
