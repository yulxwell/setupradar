"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, Keyboard, Info, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

export default function KeyboardRolloverPage() {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const [maxCount, setMaxCount] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      setPressedKeys((prev) => {
        const next = new Set(prev);
        next.add(e.code);
        if (next.size > maxCount) setMaxCount(next.size);
        return next;
      });
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      e.preventDefault();
      setPressedKeys((prev) => {
        const next = new Set(prev);
        next.delete(e.code);
        return next;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [maxCount]);

  const resetMax = () => setMaxCount(0);

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <Link 
        href="/kr/tests" 
        className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        테스트 목록으로 돌아가기
      </Link>

      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">Keyboard Rollover Test</h1>
          <p className="text-slate-500 dark:text-slate-400">동시 입력 가능한 키의 개수와 인식 상태를 확인합니다.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-blue-600 px-6 py-4 text-center text-white shadow-xl shadow-blue-500/20">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Max Rollover</p>
            <p className="text-3xl font-black">{maxCount}</p>
          </div>
          <button 
            onClick={resetMax}
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-400 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Visual Keyboard Area */}
      <div className="mb-12 rounded-[2rem] border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950/50 shadow-2xl">
        <div className="grid grid-cols-1 gap-2">
          {/* This is a simplified representation of a keyboard layout */}
          <div className="flex justify-center gap-1.5 mb-8">
            <div className="rounded-xl bg-blue-50 p-4 text-center dark:bg-blue-900/10">
              <p className="text-xs font-bold text-blue-600 mb-1">Current Pressed</p>
              <div className="flex flex-wrap justify-center gap-2 min-h-[2rem]">
                {Array.from(pressedKeys).map(key => (
                  <motion.span 
                    key={key}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="rounded-md bg-blue-600 px-3 py-1 text-xs font-bold text-white"
                  >
                    {key.replace("Key", "").replace("Digit", "")}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Keyboard Recognition Area</p>
            <div className="aspect-[21/9] w-full rounded-3xl border-4 border-slate-100 dark:border-slate-900 flex items-center justify-center bg-slate-50 dark:bg-slate-900/20">
               <div className="text-center p-12">
                 <Keyboard className={cn("mx-auto mb-4 h-16 w-16 transition-colors", pressedKeys.size > 0 ? "text-blue-500" : "text-slate-200 dark:text-slate-800")} />
                 <p className="text-sm font-bold text-slate-400">아무 키나 눌러보세요</p>
                 <p className="mt-1 text-[10px] text-slate-400">브라우저 보안 정책상 일부 시스템 키(Cmd, Alt 등)는 제한될 수 있습니다.</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-900/20">
          <h3 className="mb-3 flex items-center gap-2 font-bold text-slate-900 dark:text-white">
            <Info className="h-4 w-4 text-blue-500" />
            N-Key Rollover란?
          </h3>
          <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            여러 개의 키를 동시에 눌렀을 때 모든 키를 정확하게 인식하는 능력입니다. 
            게이밍 키보드라면 대부분 &apos;무한 동시입력&apos;을 지원하지만, 사무용 키보드는 보통 6개 전후의 제한(6-Key Rollover)이 있을 수 있습니다.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-900/20">
          <h3 className="mb-3 flex items-center gap-2 font-bold text-slate-900 dark:text-white">
            <Info className="h-4 w-4 text-blue-500" />
            테스트 팁
          </h3>
          <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            양손을 사용하여 최대한 많은 키를 동시에 꾹 눌러보세요. 
            만약 특정 키 조합에서 인식이 끊긴다면 해당 키보드의 고스트 현상(Ghosting)이나 고유한 동시입력 한계일 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
