"use client";
import React from "react";

export default function connect() {
  return (
    <div className="w-full bg-gray-50">
      <div className="sticky top-0 z-40 flex justify-between w-full">
        <div className="w-full px-4 bg-white border-b border-gray-200 h-14 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-semibold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">Add a custom model
            </h2>
          </div>
        </div>
      </div>
      <div className="sticky top-14 z-30 flex w-full justify-between">
        <div className="h-10 w-full border-b border-gray-200 bg-white px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex min-w-0 flex-1 flex-row items-center">
            <a href="/models"><div className="relative text-left text-sm leading-[20px] text-[#37394a] hover:underline">My models</div></a>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            <div className="relative text-left text-sm leading-[20px] text-gray-500">Add a custom model</div>
          </div>
        </div>
      </div>
      <div className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="flex flex-col rounded-md bg-white p-5 shadow-[0px_0px_0px_1px_rgba(3,_7,_18,_0.08),_0px_1px_2px_-1px_rgba(3,_7,_18,_0.08),_0px_2px_4px_rgba(3,_7,_18,_0.04)]   mt-4 rounded-lg">
          <div className="relative grid w-full flex-row items-start justify-between py-0 pl-0 text-left text-sm md:grid-cols-3">
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <div className="relative self-stretch font-semibold leading-[20px]">General information</div>
              <div className="relative self-stretch leading-[20px] text-gray-500">Add a custom model so you can use it in your tasks</div>
            </div>
            <div className="md:col-span-2">
              <div className="flex  max-w-[512px] flex-col items-start justify-start gap-[16px]">
                <div className="flex flex-col items-start justify-center gap-[8px] self-stretch">
                  <div className="relative self-stretch text-sm font-medium leading-[18px]">
                      Name your model
                  </div>
                  <div className="w-full">
                    <div className="relative w-full rounded-md">
                      <input type="text" id="custom_model_name" className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 w-full rounded-md border border-gray-200 p-2 " placeholder="Insert your " value="" />
                    </div>
                    <p className="mt-2 text-sm text-red-600" id="email-error"></p>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-center self-stretch">
                  <div className="relative self-stretch font-medium leading-[18px]">Describe the model</div>
                  <div className="flex"><label className="block text-sm font-medium leading-6 text-gray-900" /></div>
                  <p className="text-sm text-gray-500"></p>
                  <div className="mt-2 flex w-full"><textarea id="custom_model_description" className="focus:ring-primary-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset disabled:bg-gray-100 sm:text-sm sm:leading-6 min-h-[100px] w-full rounded-md border border-gray-200 p-2" placeholder="Insert your "></textarea></div>
                  <p className="mt-2 text-sm text-red-600" id="email-error"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-6 w-full border-t border-gray-200"></div>
          <div className="relative grid w-full flex-row items-start justify-between py-0 pl-0 text-left text-sm md:grid-cols-3">
            <div className="flex flex-col items-start justify-start gap-[2px]"><div className="relative self-stretch font-semibold leading-[20px]">Choose provider</div><div className="relative self-stretch leading-[20px] text-gray-500">Select the provider you want to use for your model</div></div>
            <div className="md:col-span-2"><div className="flex  max-w-[512px] flex-col items-start justify-start gap-[16px]"><div className="relative -mb-3 self-stretch font-medium leading-[18px]">Provider</div><div className="relative w-full" data-headlessui-state=""><button className="relative box-border flex w-full flex-row items-center justify-start gap-[10px] rounded-lg border-[1px] border-solid bg-white p-[11px] text-left text-[14px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.04)]" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:r10:"><div className="flex flex-1 flex-row items-center justify-start gap-[12px]"><div className="relative w-5 h-5 overflow-hidden bg-white rounded shrink-0"><img className="absolute left-[calc(50%_-_10px)] top-[calc(50%_-_10px)] h-5 w-5 object-cover" alt="" src="https://app.gpt.nexus/images/providers/anthropic.png" /></div><div className="relative flex-1 font-medium leading-[20px]">Anthropic</div></div><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative h-[18px] w-[18px] shrink-0 overflow-hidden object-cover"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button></div>
            {/* <div style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;"></div> */}
            </div></div>
          </div>
          <div className="my-6 w-full border-t border-gray-200"></div>
          <div className="relative grid w-full flex-row items-start justify-between py-0 pl-0 text-left text-sm md:grid-cols-3">
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <div className="relative self-stretch font-semibold leading-[20px]">General information</div>
              <div className="relative self-stretch leading-[20px] text-gray-500">Add a custom model so you can use it in your tasks</div>
              <button className="group mt-1 flex flex-row items-center font-medium text-green-500"><p className="text-sm">How to set-up</p><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="group ml-1 h-5 w-5 transition-all duration-200 group-hover:ml-2"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button>
            </div>
            <div className="md:col-span-2"><div className="flex  w-full max-w-[512px] flex-col items-start justify-start gap-[16px]"><div className="flex w-full flex-col items-stretch justify-center gap-[8px] self-stretch"><div><label className="block text-sm font-medium leading-6 text-gray-900">modelName</label><div className="relative mt-2"><button className=" relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 disabled:bg-slate-100 sm:text-sm sm:leading-6" id="headlessui-listbox-button-:r3:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state=""><span className="block truncate">modelName </span><span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-5 w-5 text-gray-400"><path fill-rule="evenodd" d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z" clip-rule="evenodd"></path></svg></span></button></div></div><div className="flex w-full flex-row gap-x-2"><p className="relative self-stretch text-sm font-medium capitalize leading-[18px]">temperature - <span className="text-primary-500">0</span></p></div>
            <span dir="ltr" data-orientation="horizontal" aria-disabled="false" className="SliderRoot w-full" >
              <span data-orientation="horizontal" className="SliderTrack">
                <span data-orientation="horizontal" className="SliderRange left-0 right-full"></span>
              </span>
              <span className="absolute">
                {/* <span role="slider" aria-label="temperature" aria-valuemin="0" aria-valuemax="1" aria-orientation="horizontal" data-orientation="horizontal"  className="SliderThumb" data-radix-collection-item="" aria-valuenow="0" >
                </span> */}
              </span>
            </span><div className=""><div className="relative self-stretch text-sm font-medium capitalize leading-[18px]">anthropicApiKey</div><div className="w-full"><div className="relative w-full rounded-md"><input type="password" security="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 mt-2 w-full rounded-md border border-gray-200 p-2 " placeholder="Insert your " value="" /></div><p className="mt-2 text-sm text-red-600" id="email-error" ></p></div></div></div></div></div>
            
          </div>
          <div className="flex flex-row items-center justify-end"><button className="group flex items-center justify-center gap-1 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm  shadow-[0px_0.25px_0px_rgba(3,_7,_18,_0.16),_0px_0.5px_0px_rgba(3,_7,_18,_0.16)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0),_rgba(3,_7,_18,_0.03)),_#fff] ml-auto mt-8 px-4 py-3"><div className="flex cursor-pointer flex-row items-center text-slate-700 group-hover:text-slate-900">Cancel</div></button><button className="group relative rounded-md px-3 py-2 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border border-[#0f0f0f] shadow-[0px_1.75px_0px_rgba(255,_255,_255,_0.16)_inset,_0px_0.25px_0px_rgba(3,_7,_18,_0.16),_0px_0.5px_0px_rgba(3,_7,_18,_0.16)] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.16),_rgba(255,_255,_255,_0)),_#191919] focus-visible:outline-primary-600 disabled:border-black/10 disabled:bg-black/50 disabled:shadow-none ml-2 mt-8 px-4 py-3 "><div className="flex items-center justify-center"><span className="inset-y-0 left-0 flex items-center"></span>Add your model</div></button></div>
        </div>
      </div>
    </div>

  );
}
