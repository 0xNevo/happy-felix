import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function EnigmaValidator() {
  const tasks = [
    {
      text: "EnigmaValidator is a Validator & Infra provider on 40+ mainnets $HYPE, $SEI, $DYDX, $TIA, $ATOM and more.  Building indexers, bots & tools.",
      keywords: ["EnigmaValidator", "Validator", "Infra Provider", "$HYPE", "$SEI", "$DYDX", "$TIA", "$ATOM"],
    },
    {
      text: "Rebuilt flagship validator dashboard (enigma-validator.com) from ground up using Next.js 14, Tailwind, and Framer Motion",
      keywords: ["dashboard", "enigma-validator.com", "Next.js 14", "Tailwind", "Framer Motion"],
    },
    {
      text: "Implemented complex reveal animations, real-time staking metrics, and multi-chain indexer visualization",
      keywords: ["complex reveal animations", "real-time staking metrics", "multi-chain indexer visualization"],
    },
    {
      text: "Deployed to Vercel with edge functions, reducing latency by 70% for European users",
      keywords: ["vercel", "edge functions", "latency reduction", "70%"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Frontend Web3 Developer <span className="text-AAsecondary">@ EnigmaValidator</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            November 2024 - Current
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
