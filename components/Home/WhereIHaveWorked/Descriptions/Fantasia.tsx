import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Fantasia() {
  const tasks = [
    {
      text: "Meta Tune Club is the First & Only Solana Based HVAC Service System",
      keywords: ["Meta Tune Club"],
    },
    {
      text: "Used React / Next.js + Tailwind CSS for UI",
      keywords: ["React / Next.js", "Tailwind CSS"],
    },
    {
      text: "Implemented Mint of Home Profile NFT, Service Appointment NFT, Contractor Profile NFT, Messenger and Invoice NFT",
      keywords: ["Home Profile", "Service Appointment", "Contractor Profile", "Messenger", "Invoice"],
    },
    {
      text: "Integrate a Home Energy Calculator to provide homeowners with an estimated cost of their HVAC usage",
      keywords: ["Home Energy Calculator"],
    }
  ];
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Solana Full Stack Developer <span className="text-AAsecondary">@ Meta Tune Club</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">April 2024 - Current</span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
      {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
