"use client";
import React from "react";
export default function Add() {
  return (
    <div className="w-full bg-gray-50">
      <div className="sticky top-0 z-40 flex justify-between w-full">
        <div className="w-full px-4 bg-white border-b border-gray-200 h-14 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-semibold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">Add SMS integration
            </h2>
          </div>
        </div>
      </div>
      <div className="sticky top-14 z-30 flex w-full justify-between">
        <div className="h-10 w-full border-b border-gray-200 bg-white px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex min-w-0 flex-1 flex-row items-center">
            <a href="/integrations"><div className="relative text-left text-sm leading-[20px] text-[#37394a] hover:underline">Integrations</div></a>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            <div className="relative text-left text-sm leading-[20px] text-gray-500">Add SMS integration</div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex h-[calc(100vh-148px)] flex-col rounded-xl bg-white  shadow-[0px_0px_0px_1px_rgba(3,_7,_18,_0.08),_0px_1px_2px_-1px_rgba(3,_7,_18,_0.08),_0px_2px_4px_rgba(3,_7,_18,_0.04)]">
          <div className="flex w-full flex-1 flex-col overflow-scroll">
            <div className="-mt-px flex w-full shrink-0  flex-row items-center gap-3 border-t p-6 py-4 font-semibold text-gray-900 transition-colors border-gray-200">
              <div className="relative flex shrink-0 flex-col items-center justify-center overflow-hidden rounded-full border p-1 shadow-[0px_0px_0px_2px_#fff_inset,_0px_0px_0px_3px_rgba(229,_231,_235,_0.4)_inset,_0px_0px_0px_1px_rgba(3,_7,_18,_0.08)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0)_45.52%,_rgba(3,_7,_18,_0.03)_91.59%),_#fff]">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.70387 12.2959L7.11062 9.7036L5.81445 10.9998L9.70387 14.8892L16.1847 8.40743L14.8895 7.11035L9.70387 12.2959Z" fill="white"></path></svg>
              </div>
              Name and describe your integration
            </div>
            <div className="max-h-[2000px] border-gray-200 -mt-6 mb-6 flex flex-1 flex-col overflow-hidden px-6  pl-[68px] transition-all ease-in-out md:flex-row">
              <div className="mr-4">
                <div className="w-full max-w-[700px] py-6">
                  <div className="relative self-stretch text-sm text-gray-500">
                    Give your integration a name and a description to help you identify it later.</div>
                  <div className="mt-4 flex flex-col gap-4 rounded-md border border-gray-200">
                    <div className="flex w-full flex-col gap-4 p-4">
                      <div className="flex-1">
                        <label  className="mb-1 block text-sm font-medium text-gray-700">Name</label>
                        <input className="focus:border-primary-500 focus:ring-primary-500 w-full rounded-md border border-gray-300 p-[10px] shadow-sm sm:text-sm" placeholder="Enter a name for your integration" value=""></input>
                      </div>
                      <div className="flex-1">
                        <label className="mb-1 block text-sm font-medium text-gray-700">Description</label>
                        <textarea className="focus:border-primary-500 focus:ring-primary-500 min-h-[150px] w-full rounded-md border p-[10px] border-gray-300 shadow-sm sm:text-sm" placeholder="Enter a description for your integration"></textarea>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-end gap-4 border-t border-gray-200 p-4 py-4">
                      <button className="group flex items-center justify-center gap-1 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm  shadow-[0px_0.25px_0px_rgba(3,_7,_18,_0.16),_0px_0.5px_0px_rgba(3,_7,_18,_0.16)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0),_rgba(3,_7,_18,_0.03)),_#fff]">
                        <div className="flex cursor-pointer flex-row items-center text-slate-700 group-hover:text-slate-900">Go back
                        </div>
                      </button>
                      <button className="group relative rounded-md px-3 py-2 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border border-[#0f0f0f] shadow-[0px_1.75px_0px_rgba(255,_255,_255,_0.16)_inset,_0px_0.25px_0px_rgba(3,_7,_18,_0.16),_0px_0.5px_0px_rgba(3,_7,_18,_0.16)] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.16),_rgba(255,_255,_255,_0)),_#191919] focus-visible:outline-primary-600 disabled:border-black/10 disabled:bg-black/50 disabled:shadow-none">
                        <div className="flex items-center justify-center">
                          <span className="inset-y-0 left-0 flex items-center"></span>Save and continue</div>
                        </button>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="ml-auto mr-4 h-min max-w-[300px] flex-1 overflow-hidden rounded-md border border-gray-200 p-4 text-sm">
                <div className="font-semibold">Need help?</div>
                <div className="text-gray-500">Check our documentation on how to setup your twilio account. 
                <a className="text-green-500 hover:underline" target="_blank" href="https://docs.gpt.nexus/integrations/twilio">here</a>
                </div>
                <div className="mt-3 font-medium">More specific needs?</div>
                <div className="text-gray-500"><a className="text-green-500 hover:underline" target="_blank" href="https://docs.gpt.nexus/integrations/sms">SMS integration</a>
                </div>
                <div className="text-gray-500"><a className="text-green-500 hover:underline" target="_blank" href="https://docs.gpt.nexus/integrations/whatsapp">WhatsApp integration</a>
                </div>
                <div className="text-gray-500"><a className="text-green-500 hover:underline" target="_blank" href="https://docs.gpt.nexus/integrations/facebook-messenger">Facebook messenger integration</a>
                </div>
              </div>
            </div>
            <div className="-mt-px flex w-full shrink-0  flex-row items-center gap-3 border-t p-6 py-4 font-semibold text-gray-900 transition-colors border-gray-200">
              <div className="relative flex shrink-0 flex-col items-center justify-center overflow-hidden rounded-full border p-1 shadow-[0px_0px_0px_2px_#fff_inset,_0px_0px_0px_3px_rgba(229,_231,_235,_0.4)_inset,_0px_0px_0px_1px_rgba(3,_7,_18,_0.08)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0)_45.52%,_rgba(3,_7,_18,_0.03)_91.59%),_#fff]">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.70387 12.2959L7.11062 9.7036L5.81445 10.9998L9.70387 14.8892L16.1847 8.40743L14.8895 7.11035L9.70387 12.2959Z" fill="white"></path>
                </svg>
              </div>Create a twilio account and get your credentials
            </div>
            <div className="-mt-px flex w-full shrink-0  flex-row items-center gap-3 border-t p-6 py-4 font-semibold text-gray-900 transition-colors border-gray-200">
              <div className="relative flex shrink-0 flex-col items-center justify-center overflow-hidden rounded-full border p-1 shadow-[0px_0px_0px_2px_#fff_inset,_0px_0px_0px_3px_rgba(229,_231,_235,_0.4)_inset,_0px_0px_0px_1px_rgba(3,_7,_18,_0.08)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0)_45.52%,_rgba(3,_7,_18,_0.03)_91.59%),_#fff]">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.70387 12.2959L7.11062 9.7036L5.81445 10.9998L9.70387 14.8892L16.1847 8.40743L14.8895 7.11035L9.70387 12.2959Z" fill="white"></path>
                </svg>
              </div>Select the employee you want to connect to this integration
            </div>
            <div className="-mt-px flex w-full shrink-0  flex-row items-center gap-3 border-t p-6 py-4 font-semibold text-gray-900 transition-colors border-gray-200">
            <div className="relative flex shrink-0 flex-col items-center justify-center overflow-hidden rounded-full border p-1 shadow-[0px_0px_0px_2px_#fff_inset,_0px_0px_0px_3px_rgba(229,_231,_235,_0.4)_inset,_0px_0px_0px_1px_rgba(3,_7,_18,_0.08)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0)_45.52%,_rgba(3,_7,_18,_0.03)_91.59%),_#fff]">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.70387 12.2959L7.11062 9.7036L5.81445 10.9998L9.70387 14.8892L16.1847 8.40743L14.8895 7.11035L9.70387 12.2959Z" fill="white"></path>
              </svg>
              </div>Setup on the Twilio side
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
