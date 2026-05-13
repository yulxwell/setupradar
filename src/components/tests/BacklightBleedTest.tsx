"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function BacklightBleedTest() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showUI, setShowUI] = useState(true);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        alert(`전체화면 모드를 시작할 수 없습니다: ${e.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const active = !!document.fullscreenElement;
      setIsFullscreen(active);
      setShowUI(!active);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return (
    <div 
      className={cn(
        "relative flex flex-col items-center justify-center bg-black transition-all",
        isFullscreen ? "fixed inset-0 z-[100]" : "aspect-video w-full rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
      )}
    >
      {/* Preparation UI */}
      {showUI && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-md p-6 text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
            <Moon className="h-8 w-8 text-white" />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-white">빛샘 / IPS Glow 테스트</h2>
          
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl text-left">
            <div className="rounded-xl bg-white/5 p-4 border border-white/5">
              <p className="mb-2 flex items-center gap-2 text-xs font-bold text-slate-300">
                <Sun className="h-3 w-3 text-amber-400" /> 모니터 밝기 100%
              </p>
              <p className="text-[11px] text-slate-500 leading-normal">
                정확한 측정을 위해 모니터 설정에서 밝기를 최대로 높여주세요.
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-4 border border-white/5">
              <p className="mb-2 flex items-center gap-2 text-xs font-bold text-slate-300">
                <Moon className="h-3 w-3 text-blue-400" /> 주변 조명 끄기
              </p>
              <p className="text-[11px] text-slate-500 leading-normal">
                방 안을 최대한 어둡게 만들어야 빛이 새는 영역이 잘 보입니다.
              </p>
            </div>
          </div>

          <button
            onClick={toggleFullscreen}
            className="flex h-14 w-full max-w-[280px] items-center justify-center rounded-xl bg-blue-600 px-8 text-lg font-bold text-white transition-all hover:bg-blue-500 active:scale-95"
          >
            블랙화면 시작하기
          </button>
        </div>
      )}

      {/* Fullscreen Overlay Controls */}
      {!showUI && isFullscreen && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-3 rounded-2xl bg-slate-900/80 p-4 border border-white/10 backdrop-blur-md">
            <div className="text-left">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">판별 가이드</p>
              <p className="text-xs text-white leading-normal">
                각도를 바꿔보세요. 위치가 변하면 <span className="text-blue-400 font-bold">Glow(특성)</span>, <br />
                그대로면 <span className="text-amber-400 font-bold">빛샘(불량)</span>입니다.
              </p>
            </div>
            <div className="h-10 w-[1px] bg-white/10 mx-2" />
            <button 
              onClick={toggleFullscreen}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600/30 text-xs font-bold transition-all"
            >
              <X className="h-4 w-4" /> 종료
            </button>
          </div>
        </div>
      )}
      
      {/* Brief Hint */}
      {!showUI && isFullscreen && (
        <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 animate-fade-out">
          <p className="rounded-full bg-slate-900/40 px-4 py-2 text-[11px] font-bold text-white/70 backdrop-blur-sm border border-white/5">
            전체 블랙 화면 상태입니다. 모니터를 구석구석 확인하세요.
          </p>
        </div>
      )}
    </div>
  );
}
