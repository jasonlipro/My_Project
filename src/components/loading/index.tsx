import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-row items-center cursor-pointer text-slate-700 group-hover:text-slate-900">
      <div
        className="inline-block h-7 w-7 animate-spin rounded-full border-[3px] border-solid border-current border-r-transparent align-[-0.125em] text-primary-500 motion-reduce:animate-[spin_1.5s_linear_infinite] ml-2"
        role="status"
      />
    </div>
  );
}
