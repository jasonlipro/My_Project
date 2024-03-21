"use client";
import React from "react";

export default function Add() {
  return (
    <div className="w-full bg-gray-50">
      <div className="sticky top-0 z-40 flex justify-between w-full">
        <div className="w-full px-4 bg-white border-b border-gray-200 h-14 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-semibold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">Knowledge
            </h2>
          </div>
        </div>
      </div>
      <div className="sticky top-14 z-30 flex w-full justify-between">
        <div className="h-10 w-full border-b border-gray-200 bg-white px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex min-w-0 flex-1 flex-row items-center">
            <a href="/knowledge"><div className="relative text-left text-sm leading-[20px] text-[#37394a] hover:underline">My knowledge</div></a>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            <div className="relative text-left text-sm leading-[20px] text-gray-500">Upload knowledge</div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex h-[calc(100vh-148px)] flex-col rounded-xl bg-white  shadow-[0px_0px_0px_1px_rgba(3,_7,_18,_0.08),_0px_1px_2px_-1px_rgba(3,_7,_18,_0.08),_0px_2px_4px_rgba(3,_7,_18,_0.04)]">
            <div className="flex w-full flex-1 flex-col gap-4 overflow-scroll p-6 py-4">
                <img className="text-black-00 font-inter relative -mb-16 -mt-4 h-[268px] w-full shrink-0 overflow-hidden text-left text-[20px] visible" src="https://app.gpt.nexus/images/upload-knowledge/index.svg" data-xblocker="passed"></img>
                <div className="z-10 mx-auto grid w-full max-w-[800px] grid-cols-2 gap-2">
                    <div className="col-span-2 mb-1 ml-auto flex w-full flex-row items-center rounded-md bg-gray-100 p-1 text-sm">
                    <button className="flex-1 rounded-[4px]  border px-2 py-1 shadow-[0px_0.25px_0px_rgba(3,_7,_18,_0.16),_0px_0.5px_0px_rgba(3,_7,_18,_0.16)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0),_rgba(3,_7,_18,_0.03)),_#fff]">Static data</button>
                    <button className="flex-1 rounded-[4px]  border px-2 py-1 border-transparent text-gray-500">Live data</button>
                    </div>
                    <a className="cursor-pointer" href=""><button className="group flex items-center justify-center gap-1 rounded-md border border-gray-200 px-3 py-2 text-sm shadow-[0px_0.25px_0px_rgba(3,_7,_18,_0.16),_0px_0.5px_0px_rgba(3,_7,_18,_0.16)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0),_rgba(3,_7,_18,_0.03)),_#fff]   disabled:bg-gray-50/50 disabled:text-gray-500 disabled:shadow-none w-full !py-0 " ><div className="flex h-10 w-full min-w-[200px] items-center "><svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-3"><path d="M10.8337 5.83333L9.90404 3.9741C9.6365 3.439 9.50271 3.17144 9.30313 2.97597C9.12664 2.80311 8.91393 2.67164 8.68039 2.59109C8.4163 2.5 8.11716 2.5 7.5189 2.5H4.33366C3.40024 2.5 2.93353 2.5 2.57701 2.68166C2.2634 2.84144 2.00844 3.09641 1.84865 3.41002C1.66699 3.76654 1.66699 4.23325 1.66699 5.16667V5.83333M1.66699 5.83333H14.3337C15.7338 5.83333 16.4339 5.83333 16.9686 6.10582C17.439 6.3455 17.8215 6.72795 18.0612 7.19836C18.3337 7.73314 18.3337 8.4332 18.3337 9.83333V13.5C18.3337 14.9001 18.3337 15.6002 18.0612 16.135C17.8215 16.6054 17.439 16.9878 16.9686 17.2275C16.4339 17.5 15.7338 17.5 14.3337 17.5H5.66699C4.26686 17.5 3.5668 17.5 3.03202 17.2275C2.56161 16.9878 2.17916 16.6054 1.93948 16.135C1.66699 15.6002 1.66699 14.9001 1.66699 13.5V5.83333Z" stroke="#37394A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>Upload file or folder<div className="ml-auto flex h-full flex-row items-center border-l border-gray-200 pl-3"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></div></button></a>
                    
                    <a className="cursor-pointer" href=""><button className="group flex items-center justify-center gap-1 rounded-md border border-gray-200 px-3 py-2 text-sm shadow-[0px_0.25px_0px_rgba(3,_7,_18,_0.16),_0px_0.5px_0px_rgba(3,_7,_18,_0.16)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0),_rgba(3,_7,_18,_0.03)),_#fff]   disabled:bg-gray-50/50 disabled:text-gray-500 disabled:shadow-none w-full !py-0 " ><div className="flex h-10 w-full min-w-[200px] items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-3"><g clip-path="url(#clip0_841_28296)"><path d="M10.0003 1.66699C12.0847 3.94895 13.2693 6.91035 13.3337 10.0003C13.2693 13.0903 12.0847 16.0517 10.0003 18.3337M10.0003 1.66699C7.91593 3.94895 6.73137 6.91035 6.66699 10.0003C6.73137 13.0903 7.91593 16.0517 10.0003 18.3337M10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337M10.0003 1.66699C14.6027 1.66699 18.3337 5.39795 18.3337 10.0003C18.3337 14.6027 14.6027 18.3337 10.0003 18.3337M2.08367 7.50033H17.917M2.08366 12.5003H17.917" stroke="#37394A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_841_28296"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>Website<div className="ml-auto flex h-full flex-row items-center border-l border-gray-200 pl-3"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></div></button></a>

                    <a className="cursor-pointer" href=""><button className="group flex items-center justify-center gap-1 rounded-md border border-gray-200 px-3 py-2 text-sm shadow-[0px_0.25px_0px_rgba(3,_7,_18,_0.16),_0px_0.5px_0px_rgba(3,_7,_18,_0.16)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0),_rgba(3,_7,_18,_0.03)),_#fff]   disabled:bg-gray-50/50 disabled:text-gray-500 disabled:shadow-none w-full !py-0 " ><div className="flex h-10 w-full min-w-[200px] items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-3"><path d="M3.33301 5.83301C3.33301 5.05644 3.33301 4.66815 3.45988 4.36187C3.62903 3.95349 3.95349 3.62903 4.36187 3.45988C4.66815 3.33301 5.05644 3.33301 5.83301 3.33301H14.1663C14.9429 3.33301 15.3312 3.33301 15.6375 3.45988C16.0459 3.62903 16.3703 3.95349 16.5395 4.36187C16.6663 4.66815 16.6663 5.05644 16.6663 5.83301M7.49967 16.6663H12.4997M9.99967 3.33301V16.6663" stroke="#37394A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>Paste text<div className="ml-auto flex h-full flex-row items-center border-l border-gray-200 pl-3"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></div></button></a>

                    <button className="group flex items-center justify-center gap-1 rounded-md border border-gray-200 px-3 py-2 text-sm shadow-[0px_0.25px_0px_rgba(3,_7,_18,_0.16),_0px_0.5px_0px_rgba(3,_7,_18,_0.16)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0),_rgba(3,_7,_18,_0.03)),_#fff]   disabled:bg-gray-50/50 disabled:text-gray-500 disabled:shadow-none w-full cursor-default !bg-white !py-0" ><div className="flex h-10 w-full min-w-[200px] items-center"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-3"><path d="M1.40282 6.21319C1.48315 4.97646 2.47747 4.00723 3.71529 3.9459C5.50774 3.8571 8.06967 3.75 10 3.75C11.9303 3.75 14.4923 3.8571 16.2847 3.9459C17.5225 4.00723 18.5169 4.97646 18.5972 6.21319C18.6741 7.39808 18.75 8.85604 18.75 10C18.75 11.144 18.6741 12.6019 18.5972 13.7868C18.5169 15.0235 17.5225 15.9928 16.2847 16.0541C14.4923 16.1429 11.9303 16.25 10 16.25C8.06967 16.25 5.50774 16.1429 3.71529 16.0541C2.47747 15.9928 1.48315 15.0235 1.40282 13.7868C1.32585 12.6019 1.25 11.144 1.25 10C1.25 8.85604 1.32585 7.39808 1.40282 6.21319Z" fill="#37394A"></path><path d="M8.125 7.5V12.5L13.125 10L8.125 7.5Z" fill="white"></path></svg>Youtube <span className="ml-auto text-gray-500 ">(coming soon)</span></div></button>
                </div>
            </div>
        </div>
      </div>
    </div>

  );
}