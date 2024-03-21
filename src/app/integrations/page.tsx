"use client";
import React from 'react'
import BlackDropdown from "@/components/common/black-dropdown";

export default function Integrations() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center border-solid border-0 border-b py-1.5 px-8">
        <h2 className="text-xl font-semibold leading-7 text-gray-900 sm:truncate sm:tracking-tight">My integrations</h2>
        <div className="flex gap-4">
          <BlackDropdown text="Add an integration">
            <div
              className="absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform opacity-100 scale-100"
              role="menu"
              tab-index="0"
            >
              <div className="px-1 py-1 ">
                <a href="/integrations/add"><button
                  className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-white hover:bg-teal-600"
                  role="menuitem"
                  tab-index="-1"
                >
                  Add a Slack integration
                </button></a>
                <a href="/integrations/add"><button
                  className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-white hover:bg-teal-600"
                  role="menuitem"
                  tab-index="-1"
                >
                  Add a Twilio integraion
                </button></a>
              </div>
            </div>
          </BlackDropdown>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6 bg-slate-50">
        <div className="flex w-full flex-1 flex-col gap-4 overflow-scroll p-6 pb-4 pt-0">
          <div className="flex flex-col items-start justify-start gap-[2px]">
            <div className="relative self-stretch font-semibold ">Integrations</div>
            <div className="relative self-stretch text-sm text-gray-500">Integrate the tools you already use on Nexus with to automate workflows and improve productivity.</div>
          </div>
          <div className="font-inter relative flex w-full flex-col items-center justify-start text-left text-base">
            <div className="grid grid-cols-1 items-start justify-center gap-2 self-stretch sm:grid-cols-2 md:grid-cols-4">
              <div className="relative box-border flex h-60 flex-1 flex-col items-start justify-between overflow-hidden rounded-lg bg-white p-4 shadow-[0px_0px_0px_1px_rgba(3,_7,_18,_0.08),_0px_1px_2px_-1px_rgba(3,_7,_18,_0.08),_0px_2px_4px_rgba(3,_7,_18,_0.04)]">
                <div className="flex flex-col items-start justify-center gap-[12px_0px] self-stretch"><div className="flex flex-row items-center justify-center overflow-hidden rounded-lg p-2.5 shadow-[0px_0px_0px_1px_#fff_inset,_0px_0px_0px_2px_rgba(229,_231,_235,_0.4)_inset,_0px_0px_0px_1px_rgba(3,_7,_18,_0.08)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0),_rgba(3,_7,_18,_0.03)),_#fff]"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.66554 7.91667H9.99887M6.66554 10.8333H12.4989M10.4155 16.6667C14.3276 16.6667 17.4989 13.4953 17.4989 9.58333C17.4989 5.67132 14.3276 2.5 10.4155 2.5C6.50352 2.5 3.33221 5.67132 3.33221 9.58333C3.33221 10.375 3.46208 11.1363 3.70168 11.8472C3.79185 12.1147 3.83693 12.2484 3.84506 12.3512C3.85309 12.4527 3.84702 12.5238 3.82192 12.6225C3.7965 12.7223 3.74037 12.8262 3.62812 13.034L2.26507 15.557C2.07064 15.9168 1.97343 16.0968 1.99519 16.2356C2.01414 16.3566 2.08533 16.4631 2.18985 16.5269C2.30985 16.6001 2.51329 16.579 2.92016 16.537L7.18768 16.0958C7.31691 16.0825 7.38153 16.0758 7.44042 16.0781C7.49835 16.0803 7.53924 16.0857 7.59573 16.0987C7.65317 16.112 7.72539 16.1398 7.86984 16.1954C8.65988 16.4998 9.51822 16.6667 10.4155 16.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div className="flex flex-col items-start justify-start gap-[8px_0px] self-stretch"><div className="relative self-stretch font-semibold leading-[20px]">SMS</div><div className="relative self-stretch text-sm leading-[18px] text-gray-500">Connect to send and receive SMS</div></div></div>
                <a href="/integrations/add"><button className="group relative rounded-md px-3 py-2 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border border-[#0f0f0f] shadow-[0px_1.75px_0px_rgba(255,_255,_255,_0.16)_inset,_0px_0.25px_0px_rgba(3,_7,_18,_0.16),_0px_0.5px_0px_rgba(3,_7,_18,_0.16)] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.16),_rgba(255,_255,_255,_0)),_#191919] focus-visible:outline-primary-600 disabled:border-black/10 disabled:bg-black/50 disabled:shadow-none flex flex-row items-center justify-start !py-1.5 text-center text-sm text-white"><div className="flex items-center justify-center"><span className="inset-y-0 left-0 flex items-center"></span>Connect</div></button></a>
              </div>
              <div className="relative box-border flex h-60 flex-1 flex-col items-start justify-between overflow-hidden rounded-lg bg-white p-4 shadow-[0px_0px_0px_1px_rgba(3,_7,_18,_0.08),_0px_1px_2px_-1px_rgba(3,_7,_18,_0.08),_0px_2px_4px_rgba(3,_7,_18,_0.04)]">
                <div className="flex flex-col items-start justify-center gap-[12px_0px] self-stretch"><div className="flex flex-row items-center justify-center overflow-hidden rounded-lg p-2.5 shadow-[0px_0px_0px_1px_#fff_inset,_0px_0px_0px_2px_rgba(229,_231,_235,_0.4)_inset,_0px_0px_0px_1px_rgba(3,_7,_18,_0.08)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0),_rgba(3,_7,_18,_0.03)),_#fff]"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 19.375C14.8325 19.375 18.75 15.4575 18.75 10.625C18.75 5.79251 14.8325 1.875 10 1.875C5.16751 1.875 1.25 5.79251 1.25 10.625C1.25 12.1943 1.66312 13.6671 2.38655 14.9406L1.25 19.375L5.82179 18.3149C7.06336 18.9909 8.48682 19.375 10 19.375ZM10 18.0288C14.089 18.0288 17.4038 14.714 17.4038 10.625C17.4038 6.53597 14.089 3.22115 10 3.22115C5.91097 3.22115 2.59615 6.53597 2.59615 10.625C2.59615 12.2038 3.09031 13.6672 3.9324 14.8689L3.26923 17.3558L5.79996 16.7231C6.99335 17.5466 8.44036 18.0288 10 18.0288Z" fill="#BFC8D0"></path><path d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C8.4201 17.5 6.9543 17.0115 5.74541 16.1773L3.18182 16.8182L3.8536 14.299C3.00058 13.0817 2.5 11.5993 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" fill="url(#paint0_linear_1870_17094)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.16751 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.16751 1.25 10C1.25 11.5693 1.66312 13.0421 2.38655 14.3156L1.25 18.75L5.82179 17.6899C7.06336 18.3659 8.48682 18.75 10 18.75ZM10 17.4038C14.089 17.4038 17.4038 14.089 17.4038 10C17.4038 5.91097 14.089 2.59615 10 2.59615C5.91097 2.59615 2.59615 5.91097 2.59615 10C2.59615 11.5788 3.09031 13.0422 3.9324 14.2439L3.26923 16.7308L5.79996 16.0981C6.99335 16.9216 8.44036 17.4038 10 17.4038Z" fill="white"></path><path d="M7.81251 5.93737C7.60447 5.51951 7.28533 5.5565 6.96292 5.5565C6.38673 5.5565 5.48828 6.24668 5.48828 7.53116C5.48828 8.58386 5.95216 9.73621 7.51526 11.46C9.02377 13.1236 11.0059 13.9842 12.6514 13.9549C14.2969 13.9256 14.6354 12.5096 14.6354 12.0314C14.6354 11.8194 14.5039 11.7137 14.4133 11.685C13.8525 11.4158 12.8183 10.9144 12.583 10.8202C12.3477 10.726 12.2248 10.8534 12.1484 10.9227C11.935 11.1261 11.512 11.7254 11.3672 11.8602C11.2224 11.995 11.0064 11.9268 10.9166 11.8758C10.5859 11.7432 9.68933 11.3444 8.97467 10.6516C8.09083 9.7948 8.03896 9.50003 7.87244 9.23763C7.73922 9.02772 7.83698 8.89892 7.88576 8.84264C8.07619 8.62292 8.33913 8.28368 8.45705 8.1151C8.57496 7.94652 8.48135 7.69058 8.42518 7.53116C8.18361 6.84557 7.97895 6.27166 7.81251 5.93737Z" fill="white"></path><defs><linearGradient id="paint0_linear_1870_17094" x1="16.5625" y1="4.375" x2="2.5" y2="17.5" gradientUnits="userSpaceOnUse"><stop stop-color="#5BD066"></stop><stop offset="1" stop-color="#27B43E"></stop></linearGradient></defs></svg></div><div className="flex flex-col items-start justify-start gap-[8px_0px] self-stretch"><div className="relative self-stretch font-semibold leading-[20px]">WhatsApp</div><div className="relative self-stretch text-sm leading-[18px] text-gray-500">Connect to send and receive WhatsApp</div></div></div>
                <a href="/integrations/add"><button className="group relative rounded-md px-3 py-2 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border border-[#0f0f0f] shadow-[0px_1.75px_0px_rgba(255,_255,_255,_0.16)_inset,_0px_0.25px_0px_rgba(3,_7,_18,_0.16),_0px_0.5px_0px_rgba(3,_7,_18,_0.16)] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.16),_rgba(255,_255,_255,_0)),_#191919] focus-visible:outline-primary-600 disabled:border-black/10 disabled:bg-black/50 disabled:shadow-none flex flex-row items-center justify-start !py-1.5 text-center text-sm text-white"><div className="flex items-center justify-center"><span className="inset-y-0 left-0 flex items-center"></span>Connect</div></button></a>
              </div>
              <div className="relative box-border flex h-60 flex-1 flex-col items-start justify-between overflow-hidden rounded-lg bg-white p-4 shadow-[0px_0px_0px_1px_rgba(3,_7,_18,_0.08),_0px_1px_2px_-1px_rgba(3,_7,_18,_0.08),_0px_2px_4px_rgba(3,_7,_18,_0.04)]">
                <div className="flex flex-col items-start justify-center gap-[12px_0px] self-stretch"><div className="flex flex-row items-center justify-center overflow-hidden rounded-lg p-2.5 shadow-[0px_0px_0px_1px_#fff_inset,_0px_0px_0px_2px_rgba(229,_231,_235,_0.4)_inset,_0px_0px_0px_1px_rgba(3,_7,_18,_0.08)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0),_rgba(3,_7,_18,_0.03)),_#fff]"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.612C14.4873 17.612 18.125 14.0891 18.125 9.74348C18.125 5.39784 14.4873 1.875 10 1.875C5.51269 1.875 1.875 5.39784 1.875 9.74348C1.875 12.107 2.95105 14.2271 4.6546 15.6695V17.2617C4.6546 17.8841 5.2885 18.3015 5.85368 18.0513L7.62062 17.2692C8.37315 17.4921 9.17212 17.612 10 17.612Z" fill="url(#paint0_linear_1870_17104)"></path><path d="M8.05438 8.07082L5.69827 11.2931C5.44565 11.6386 5.89996 12.0536 6.24584 11.7933L8.25767 10.2793C8.46246 10.1252 8.74951 10.1231 8.95668 10.2742L10.746 11.5795C11.0891 11.8298 11.5795 11.7578 11.8293 11.4205L14.3003 8.0838C14.5566 7.73775 14.0988 7.31934 13.7524 7.58303L11.6254 9.20225C11.4206 9.35818 11.132 9.36104 10.9239 9.20922L9.14041 7.90819C8.79584 7.65682 8.30314 7.73061 8.05438 8.07082Z" fill="white"></path><defs><linearGradient id="paint0_linear_1870_17104" x1="10" y1="1.875" x2="7.39289" y2="18.0365" gradientUnits="userSpaceOnUse"><stop stop-color="#00B1FF"></stop><stop offset="1" stop-color="#006BFF"></stop></linearGradient></defs></svg></div><div className="flex flex-col items-start justify-start gap-[8px_0px] self-stretch"><div className="relative self-stretch font-semibold leading-[20px]">Facebook Messenger</div><div className="relative self-stretch text-sm leading-[18px] text-gray-500">Connect to send and receive Facebook Messager</div></div></div>
                <a href="/integrations/add"><button className="group relative rounded-md px-3 py-2 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border border-[#0f0f0f] shadow-[0px_1.75px_0px_rgba(255,_255,_255,_0.16)_inset,_0px_0.25px_0px_rgba(3,_7,_18,_0.16),_0px_0.5px_0px_rgba(3,_7,_18,_0.16)] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.16),_rgba(255,_255,_255,_0)),_#191919] focus-visible:outline-primary-600 disabled:border-black/10 disabled:bg-black/50 disabled:shadow-none flex flex-row items-center justify-start !py-1.5 text-center text-sm text-white"><div className="flex items-center justify-center"><span className="inset-y-0 left-0 flex items-center"></span>Connect</div></button></a>
              </div>
              <div className="relative box-border flex h-60 flex-1 flex-col items-start justify-between overflow-hidden rounded-lg bg-white p-4 shadow-[0px_0px_0px_1px_rgba(3,_7,_18,_0.08),_0px_1px_2px_-1px_rgba(3,_7,_18,_0.08),_0px_2px_4px_rgba(3,_7,_18,_0.04)]">
                <div className="flex flex-col items-start justify-center gap-[12px_0px] self-stretch"><div className="flex flex-row items-center justify-center overflow-hidden rounded-lg p-2.5 shadow-[0px_0px_0px_1px_#fff_inset,_0px_0px_0px_2px_rgba(229,_231,_235,_0.4)_inset,_0px_0px_0px_1px_rgba(3,_7,_18,_0.08)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0),_rgba(3,_7,_18,_0.03)),_#fff]"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17.3646C5.93268 17.3646 2.63539 14.0673 2.63539 10C2.63539 5.93268 5.93268 2.63547 10 2.63547C14.0673 2.63547 17.3645 5.93268 17.3645 10C17.3645 14.0673 14.0673 17.3646 10 17.3646ZM10 0C4.47718 0 0 4.47726 0 10C0 15.5229 4.47718 20 10 20C15.5228 20 20 15.5229 20 10C20 4.47726 15.5229 0 10 0Z" fill="#CF272D"></path><path d="M10.4105 7.50892C10.4105 6.36063 11.3415 5.42969 12.4899 5.42969C13.6382 5.42969 14.5691 6.36063 14.5691 7.50892C14.5691 8.65737 13.6382 9.58824 12.4899 9.58824C11.3415 9.58824 10.4105 8.65737 10.4105 7.50892ZM10.4105 12.4899C10.4105 11.3416 11.3415 10.4105 12.4899 10.4105C13.6382 10.4105 14.5691 11.3416 14.5691 12.4899C14.5691 13.6382 13.6382 14.5692 12.4899 14.5692C11.3415 14.5692 10.4105 13.6382 10.4105 12.4899ZM5.42969 12.4899C5.42969 11.3416 6.36071 10.4105 7.509 10.4105C8.65737 10.4105 9.58831 11.3416 9.58831 12.4899C9.58831 13.6382 8.65737 14.5692 7.509 14.5692C6.36071 14.5692 5.42969 13.6382 5.42969 12.4899ZM5.42969 7.509C5.42969 6.36063 6.36071 5.42977 7.509 5.42977C8.65737 5.42977 9.58831 6.36063 9.58831 7.509C9.58831 8.65745 8.65737 9.58831 7.509 9.58831C6.36071 9.58831 5.42969 8.65745 5.42969 7.509Z" fill="#CF272D"></path></svg></div><div className="flex flex-col items-start justify-start gap-[8px_0px] self-stretch"><div className="relative self-stretch font-semibold leading-[20px]">Twilio</div><div className="relative self-stretch text-sm leading-[18px] text-gray-500">Connect any Twilio account to send and receive SMS, WhatsApp, Facebook Messenger, and more.</div></div></div>
                <a href="/integrations/add"><button className="group relative rounded-md px-3 py-2 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border border-[#0f0f0f] shadow-[0px_1.75px_0px_rgba(255,_255,_255,_0.16)_inset,_0px_0.25px_0px_rgba(3,_7,_18,_0.16),_0px_0.5px_0px_rgba(3,_7,_18,_0.16)] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.16),_rgba(255,_255,_255,_0)),_#191919] focus-visible:outline-primary-600 disabled:border-black/10 disabled:bg-black/50 disabled:shadow-none flex flex-row items-center justify-start !py-1.5 text-center text-sm text-white"><div className="flex items-center justify-center"><span className="inset-y-0 left-0 flex items-center"></span>Connect</div></button></a>
              </div>
              <div className="relative box-border flex h-60 flex-1 flex-col items-start justify-between overflow-hidden rounded-lg bg-white p-4 shadow-[0px_0px_0px_1px_rgba(3,_7,_18,_0.08),_0px_1px_2px_-1px_rgba(3,_7,_18,_0.08),_0px_2px_4px_rgba(3,_7,_18,_0.04)]">
                <div className="flex flex-col items-start justify-center gap-[12px_0px] self-stretch"><div className="flex flex-row items-center justify-center overflow-hidden rounded-lg p-2.5 shadow-[0px_0px_0px_1px_#fff_inset,_0px_0px_0px_2px_rgba(229,_231,_235,_0.4)_inset,_0px_0px_0px_1px_rgba(3,_7,_18,_0.08)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0),_rgba(3,_7,_18,_0.03)),_#fff]"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_409_5255)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.3329 0C6.22733 0.000815494 5.33257 0.896228 5.33339 1.99959C5.33257 3.10296 6.22814 3.99837 7.33372 3.99918H9.33404V2.00041C9.33486 0.897044 8.43929 0.00163099 7.3329 0C7.33372 0 7.33372 0 7.3329 0ZM7.3329 5.33333H2.00033C0.894756 5.33415 -0.000814894 6.22956 2.23311e-06 7.33293C-0.00163202 8.43629 0.893939 9.3317 1.99951 9.33333H7.3329C8.43847 9.33252 9.33404 8.43711 9.33323 7.33374C9.33404 6.22956 8.43847 5.33415 7.3329 5.33333Z" fill="#36C5F0"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.9992 7.33293C20.0001 6.22956 19.1045 5.33415 17.9989 5.33333C16.8933 5.33415 15.9978 6.22956 15.9986 7.33293V9.33333H17.9989C19.1045 9.33252 20.0001 8.43711 19.9992 7.33293ZM14.6659 7.33293V1.99959C14.6667 0.897044 13.7719 0.00163099 12.6663 0C11.5608 0.000815494 10.6652 0.896228 10.666 1.99959V7.33293C10.6644 8.43629 11.56 9.3317 12.6655 9.33333C13.7711 9.33252 14.6667 8.43711 14.6659 7.33293Z" fill="#2EB67D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.6663 20.0002C13.7719 19.9993 14.6675 19.1039 14.6667 18.0006C14.6675 16.8972 13.7719 16.0018 12.6663 16.001H10.666V18.0006C10.6652 19.1031 11.5608 19.9985 12.6663 20.0002ZM12.6663 14.666H17.9997C19.1053 14.6652 20.0009 13.7698 20.0001 12.6664C20.0017 11.5631 19.1061 10.6676 18.0005 10.666H12.6672C11.5616 10.6668 10.666 11.5622 10.6668 12.6656C10.666 13.7698 11.5608 14.6652 12.6663 14.666Z" fill="#ECB22E"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.58721e-07 12.6666C-0.000816568 13.7699 0.894755 14.6654 2.00033 14.6662C3.1059 14.6654 4.00147 13.7699 4.00065 12.6666V10.667H2.00033C0.894755 10.6678 -0.000816568 11.5632 5.58721e-07 12.6666ZM5.33339 12.6666V17.9999C5.33175 19.1033 6.22733 19.9987 7.3329 20.0003C8.43847 19.9995 9.33404 19.1041 9.33322 18.0007V12.6682C9.33486 11.5649 8.43929 10.6694 7.33372 10.6678C6.22733 10.6678 5.33257 11.5632 5.33339 12.6666Z" fill="#E01E5A"></path></g><defs><clipPath id="clip0_409_5255"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg></div><div className="flex flex-col items-start justify-start gap-[8px_0px] self-stretch"><div className="relative self-stretch font-semibold leading-[20px]">Slack</div><div className="relative self-stretch text-sm leading-[18px] text-gray-500">Connect agents to a Slack account to send and receive messages directly in your workspace.</div></div></div>
                <a href="/integrations/add"><button className="group relative rounded-md px-3 py-2 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border border-[#0f0f0f] shadow-[0px_1.75px_0px_rgba(255,_255,_255,_0.16)_inset,_0px_0.25px_0px_rgba(3,_7,_18,_0.16),_0px_0.5px_0px_rgba(3,_7,_18,_0.16)] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.16),_rgba(255,_255,_255,_0)),_#191919] focus-visible:outline-primary-600 disabled:border-black/10 disabled:bg-black/50 disabled:shadow-none flex flex-row items-center justify-start !py-1.5 text-center text-sm text-white"><div className="flex items-center justify-center"><span className="inset-y-0 left-0 flex items-center"></span>Connect</div></button></a>
              </div>
              <div className="relative box-border flex h-60 flex-1 flex-col items-start justify-between overflow-hidden rounded-lg bg-white p-4 shadow-[0px_0px_0px_1px_rgba(3,_7,_18,_0.08),_0px_1px_2px_-1px_rgba(3,_7,_18,_0.08),_0px_2px_4px_rgba(3,_7,_18,_0.04)]">
                <div className="flex flex-col items-start justify-center gap-[12px_0px] self-stretch"><div className="flex flex-row items-center justify-center overflow-hidden rounded-lg p-2.5 shadow-[0px_0px_0px_1px_#fff_inset,_0px_0px_0px_2px_rgba(229,_231,_235,_0.4)_inset,_0px_0px_0px_1px_rgba(3,_7,_18,_0.08)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0),_rgba(3,_7,_18,_0.03)),_#fff]"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_409_5279)"><path d="M10.5632 6.66676C12.1471 6.66676 13.4311 5.36083 13.4311 3.74988C13.4311 2.13894 12.1471 0.833008 10.5632 0.833008C8.9793 0.833008 7.69531 2.13894 7.69531 3.74988C7.69531 5.36083 8.9793 6.66676 10.5632 6.66676Z" fill="#7B83EB"></path><path opacity="0.1" d="M10.3592 4.375H7.76172L7.77462 4.43312L7.77585 4.43812L7.78937 4.49187C7.97811 5.21982 8.43603 5.84546 9.06753 6.23817C9.69902 6.63088 10.4553 6.76029 11.1783 6.59938V5.20813C11.1777 4.98737 11.0912 4.77584 10.9377 4.61975C10.7842 4.46365 10.5763 4.37566 10.3592 4.375Z" fill="black"></path><path opacity="0.2" d="M9.74487 5H7.97266C8.20525 5.49877 8.57222 5.92016 9.03093 6.21523C9.48964 6.51029 10.0213 6.66691 10.564 6.66687V5.83313C10.5634 5.61237 10.4768 5.40084 10.3234 5.24475C10.1699 5.08865 9.96192 5.00066 9.74487 5Z" fill="black"></path><path d="M17.016 6.875C18.2038 6.875 19.1667 5.89562 19.1667 4.6875C19.1667 3.47938 18.2038 2.5 17.016 2.5C15.8282 2.5 14.8652 3.47938 14.8652 4.6875C14.8652 5.89562 15.8282 6.875 17.016 6.875Z" fill="#5059C9"></path><path d="M18.8592 7.5H14.0286C13.9243 7.5 13.8242 7.54214 13.7505 7.61716C13.6767 7.69217 13.6353 7.79391 13.6353 7.9V12.9688C13.622 13.7023 13.8569 14.4183 14.3007 14.9968C14.7444 15.5752 15.3702 15.981 16.073 16.1462C16.5207 16.2418 16.9836 16.2346 17.4282 16.1252C17.8728 16.0158 18.2878 15.8069 18.643 15.5138C18.9982 15.2206 19.2846 14.8506 19.4815 14.4307C19.6783 14.0108 19.7806 13.5515 19.7809 13.0862V8.4375C19.7809 8.18886 19.6838 7.9504 19.5109 7.77459C19.3381 7.59877 19.1036 7.5 18.8592 7.5Z" fill="#5059C9"></path><path d="M15.4804 8.4375V14.375C15.481 15.4753 15.1245 16.5451 14.4662 17.4183C13.8079 18.2915 12.8847 18.9193 11.8397 19.2042C10.7948 19.4892 9.68656 19.4153 8.68709 18.9942C7.68761 18.573 6.85276 17.8281 6.3121 16.875C6.19385 16.6751 6.09112 16.4661 6.00485 16.25C5.92442 16.0462 5.85669 15.8375 5.80206 15.625C5.70076 15.2163 5.64916 14.7965 5.64844 14.375V8.4375C5.64828 8.31434 5.67201 8.19236 5.71827 8.07854C5.76454 7.96472 5.83243 7.86131 5.91805 7.77422C6.00368 7.68713 6.10535 7.61808 6.21726 7.57103C6.32916 7.52397 6.4491 7.49984 6.57019 7.5H14.5587C14.6798 7.49984 14.7997 7.52397 14.9116 7.57103C15.0235 7.61808 15.1252 7.68713 15.2108 7.77422C15.2964 7.86131 15.3643 7.96472 15.4106 8.07854C15.4569 8.19236 15.4806 8.31434 15.4804 8.4375Z" fill="#7B83EB"></path><path opacity="0.2" d="M9.74487 5H7.97266C8.20525 5.49877 8.57222 5.92016 9.03093 6.21523C9.48964 6.51029 10.0213 6.66691 10.564 6.66687V5.83313C10.5634 5.61237 10.4768 5.40084 10.3234 5.24475C10.1699 5.08865 9.96192 5.00066 9.74487 5Z" fill="black"></path><path opacity="0.1" d="M11.1789 7.5V15.4188C11.1789 15.6072 11.1155 15.7899 10.9993 15.9366C10.883 16.0833 10.7209 16.185 10.5399 16.225C10.482 16.2425 10.422 16.2509 10.3617 16.25H6.00485C5.92442 16.0462 5.85669 15.8375 5.80206 15.625C5.70076 15.2163 5.64916 14.7965 5.64844 14.375V8.4375C5.64828 8.31434 5.67201 8.19236 5.71827 8.07854C5.76454 7.96472 5.83243 7.86131 5.91805 7.77422C6.00368 7.68713 6.10535 7.61808 6.21726 7.57103C6.32916 7.52397 6.4491 7.49984 6.57019 7.5H11.1789Z" fill="black"></path><path opacity="0.2" d="M10.5644 7.5V16.0438C10.5653 16.1051 10.557 16.1662 10.5399 16.225C10.5006 16.4091 10.4005 16.574 10.2563 16.6923C10.1121 16.8105 9.9324 16.875 9.74715 16.875H6.3121C6.19385 16.6751 6.09112 16.4661 6.00485 16.25C5.92442 16.0462 5.85669 15.8375 5.80206 15.625C5.70076 15.2163 5.64916 14.7965 5.64844 14.375V8.4375C5.64828 8.31434 5.67201 8.19236 5.71827 8.07854C5.76454 7.96472 5.83243 7.86131 5.91805 7.77422C6.00368 7.68713 6.10535 7.61808 6.21726 7.57103C6.32916 7.52397 6.4491 7.49984 6.57019 7.5H10.5644Z" fill="black"></path><path opacity="0.2" d="M10.5644 7.5V14.7937C10.5635 15.0139 10.477 15.2248 10.324 15.3804C10.1709 15.5361 9.96361 15.624 9.74715 15.625H5.80206C5.70076 15.2163 5.64916 14.7965 5.64844 14.375V8.4375C5.64828 8.31434 5.67201 8.19236 5.71827 8.07854C5.76454 7.96472 5.83243 7.86131 5.91805 7.77422C6.00368 7.68713 6.10535 7.61808 6.21726 7.57103C6.32916 7.52397 6.4491 7.49984 6.57019 7.5H10.5644Z" fill="black"></path><path opacity="0.2" d="M6.57019 7.5C6.4491 7.49984 6.32916 7.52397 6.21726 7.57103C6.10535 7.61808 6.00368 7.68713 5.91805 7.77422C5.83243 7.86131 5.76454 7.96472 5.71827 8.07854C5.67201 8.19236 5.64828 8.31434 5.64844 8.4375V14.375C5.64916 14.7965 5.70076 15.2163 5.80206 15.625H9.13265C9.34911 15.624 9.55643 15.5361 9.70949 15.3804C9.86255 15.2248 9.94897 15.0139 9.94994 14.7937V7.5H6.57019Z" fill="black"></path><path d="M0.936316 5H9.13006C9.34731 5 9.55565 5.08778 9.70927 5.24402C9.86289 5.40026 9.94919 5.61217 9.94919 5.83313V14.1669C9.94919 14.3878 9.86289 14.5997 9.70927 14.756C9.55565 14.9122 9.34731 15 9.13006 15H0.936316C0.71907 15 0.510721 14.9122 0.357105 14.756C0.203488 14.5997 0.117188 14.3878 0.117188 14.1669L0.117188 5.83313C0.117188 5.61217 0.203488 5.40026 0.357105 5.24402C0.510721 5.08778 0.71907 5 0.936316 5Z" fill="#4B53BC"></path><path d="M7.47931 8.10918H5.64196V13.1217H4.43631V8.10918H2.58789V6.87793H7.47931V8.10918Z" fill="white"></path></g><defs><clipPath id="clip0_409_5279"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg></div><div className="flex flex-col items-start justify-start gap-[8px_0px] self-stretch"><div className="relative self-stretch font-semibold leading-[20px]">Microsoft Teams</div><div className="relative self-stretch text-sm leading-[18px] text-gray-500">Connect agents to a Microsoft Teams account to send and receive messages.</div></div></div>
                <a href="/integrations/add"><button className="group relative rounded-md px-3 py-2 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border border-[#0f0f0f] shadow-[0px_1.75px_0px_rgba(255,_255,_255,_0.16)_inset,_0px_0.25px_0px_rgba(3,_7,_18,_0.16),_0px_0.5px_0px_rgba(3,_7,_18,_0.16)] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.16),_rgba(255,_255,_255,_0)),_#191919] focus-visible:outline-primary-600 disabled:border-black/10 disabled:bg-black/50 disabled:shadow-none flex flex-row items-center justify-start !py-1.5 text-center text-sm text-white"><div className="flex items-center justify-center"><span className="inset-y-0 left-0 flex items-center"></span>Connect</div></button></a>
              </div>
              <div className="relative box-border flex h-60 flex-1 flex-col items-start justify-between overflow-hidden rounded-lg bg-white p-4 shadow-[0px_0px_0px_1px_rgba(3,_7,_18,_0.08),_0px_1px_2px_-1px_rgba(3,_7,_18,_0.08),_0px_2px_4px_rgba(3,_7,_18,_0.04)]">
                <div className="flex flex-col items-start justify-center gap-[12px_0px] self-stretch"><div className="flex flex-row items-center justify-center overflow-hidden rounded-lg p-2.5 shadow-[0px_0px_0px_1px_#fff_inset,_0px_0px_0px_2px_rgba(229,_231,_235,_0.4)_inset,_0px_0px_0px_1px_rgba(3,_7,_18,_0.08)] [background:linear-gradient(180deg,_rgba(3,_7,_18,_0),_rgba(3,_7,_18,_0.03)),_#fff]"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.9375 1.875H4.0625C3.31683 1.87583 2.60194 2.17241 2.07468 2.69968C1.54741 3.22694 1.25083 3.94183 1.25 4.6875V12.1875C1.25083 12.9332 1.54741 13.6481 2.07468 14.1753C2.60194 14.7026 3.31683 14.9992 4.0625 15H5V17.5C4.99997 17.6188 5.03382 17.7352 5.09758 17.8355C5.16134 17.9358 5.25236 18.0158 5.35999 18.0662C5.46761 18.1166 5.58737 18.1352 5.70523 18.12C5.82308 18.1047 5.93414 18.0562 6.02539 17.9801L9.59922 15H15.9375C16.6832 14.9992 17.3981 14.7026 17.9253 14.1753C18.4526 13.6481 18.7492 12.9332 18.75 12.1875V4.6875C18.7492 3.94183 18.4526 3.22694 17.9253 2.69968C17.3981 2.17241 16.6832 1.87583 15.9375 1.875ZM6.25 9.6875C6.00277 9.6875 5.7611 9.61419 5.55554 9.47684C5.34998 9.33948 5.18976 9.14426 5.09515 8.91585C5.00054 8.68745 4.97579 8.43611 5.02402 8.19364C5.07225 7.95116 5.1913 7.72843 5.36612 7.55362C5.54093 7.3788 5.76366 7.25975 6.00614 7.21152C6.24861 7.16329 6.49995 7.18804 6.72835 7.28265C6.95676 7.37726 7.15199 7.53748 7.28934 7.74304C7.42669 7.9486 7.5 8.19027 7.5 8.4375C7.5 8.76902 7.3683 9.08696 7.13388 9.32138C6.89946 9.5558 6.58152 9.6875 6.25 9.6875ZM10 9.6875C9.75277 9.6875 9.5111 9.61419 9.30554 9.47684C9.09998 9.33948 8.93976 9.14426 8.84515 8.91585C8.75054 8.68745 8.72579 8.43611 8.77402 8.19364C8.82225 7.95116 8.9413 7.72843 9.11612 7.55362C9.29093 7.3788 9.51366 7.25975 9.75614 7.21152C9.99861 7.16329 10.2499 7.18804 10.4784 7.28265C10.7068 7.37726 10.902 7.53748 11.0393 7.74304C11.1767 7.9486 11.25 8.19027 11.25 8.4375C11.25 8.76902 11.1183 9.08696 10.8839 9.32138C10.6495 9.5558 10.3315 9.6875 10 9.6875ZM13.75 9.6875C13.5028 9.6875 13.2611 9.61419 13.0555 9.47684C12.85 9.33948 12.6898 9.14426 12.5952 8.91585C12.5005 8.68745 12.4758 8.43611 12.524 8.19364C12.5723 7.95116 12.6913 7.72843 12.8661 7.55362C13.0409 7.3788 13.2637 7.25975 13.5061 7.21152C13.7486 7.16329 13.9999 7.18804 14.2284 7.28265C14.4568 7.37726 14.652 7.53748 14.7893 7.74304C14.9267 7.9486 15 8.19027 15 8.4375C15 8.76902 14.8683 9.08696 14.6339 9.32138C14.3995 9.5558 14.0815 9.6875 13.75 9.6875Z" fill="#00AD9A"></path></svg></div><div className="flex flex-col items-start justify-start gap-[8px_0px] self-stretch"><div className="relative self-stretch font-semibold leading-[20px]">Embed a chatbot</div><div className="relative self-stretch text-sm leading-[18px] text-gray-500">Embed a chatbot in your website to provide instant support to your customers with your own employees.</div></div></div>
                <div className="right-4 top-4 rounded-full border border-gray-200 p-1 px-2 text-sm">Coming soon </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
