"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronRight, ChevronLeft, X, Monitor, MousePointer2 } from "lucide-react";
import { cn } from "@/lib/utils";

const colors = [
  { name: "Black (검정)", value: "#000000" },
  { name: "White (흰색)", value: "#ffffff" },
  { name: "Red (빨강)", value: "#ff0000" },
  { name: "Green (초록)", value: "#00ff00" },
  { name: "Blue (파랑)", value: "#0000ff" },
  { name: "Gray (회색)", value: "#808080" },
  { name: "Yellow (노랑)", value: "#ffff00" },
  { name: "Cyan (하늘)", value: "#00ffff" },
  { name: "Magenta (분홍)", value: "#ff00ff" },
];

export function DeadPixelTest() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showUI, setShowUI] = useState(true);

  const nextColor = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % colors.length);
  }, []);

  const prevColor = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + colors.length) % colors.length);
  }, []);

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

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") nextColor();
      if (e.key === "ArrowLeft") prevColor();
      if (e.key === "Escape") {
        if (document.fullscreenElement) document.exitFullscreen();
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextColor, prevColor]);

  return (
    <div 
      className={cn(
        "relative flex flex-col items-center justify-center transition-colors duration-200",
        isFullscreen ? "fixed inset-0 z-[100] cursor-none" : "aspect-video w-full rounded-2xl border border-[var(--border)] overflow-hidden bg-[var(--secondary)]"
      )}
      style={{ backgroundColor: colors[currentIndex].value }}
      onClick={() => isFullscreen && nextColor()}
    >
      {/* Test UI Controls (Start Screen) */}
      {showUI && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--background)]/80 backdrop-blur-md p-6 text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--primary)] text-[var(--background)] border border-[var(--border)]">
            <Monitor className="h-8 w-8" />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-[var(--primary)]">불량화소 테스트</h2>
          <p className="mb-8 max-w-sm text-[var(--muted)] text-sm leading-relaxed">
            화면의 먼지를 닦아낸 뒤 &apos;테스트 시작&apos;을 눌러주세요.<br />
            전체화면에서 색상을 변경하며 픽셀 결함을 확인합니다.
          </p>
          
          <button
            onClick={toggleFullscreen}
            className="flex h-14 w-full max-w-[280px] items-center justify-center rounded-xl bg-[var(--primary)] px-8 text-lg font-bold text-[var(--background)] transition-all hover:opacity-90 active:scale-95"
          >
            테스트 시작하기
          </button>
          
          <div className="mt-12 flex flex-col items-center gap-3">
            <p className="text-[10px] text-[var(--muted)] uppercase tracking-widest font-bold opacity-60">Operation Tips</p>
            <div className="flex gap-4 text-xs font-medium text-[var(--muted)] opacity-80">
              <span className="flex items-center gap-1.5"><MousePointer2 className="h-3.5 w-3.5" /> 클릭: 다음 색상</span>
              <span className="flex items-center gap-1.5"><X className="h-3.5 w-3.5" /> ESC: 종료</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating HUD in Fullscreen (Visible on Hover/Interact) */}
      {!showUI && isFullscreen && (
        <div 
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-2xl bg-black/60 px-6 py-4 backdrop-blur-lg border border-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={prevColor} className="p-2 text-white hover:opacity-80 transition-opacity">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex flex-col items-center min-w-[140px]">
            <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest mb-0.5">
              {currentIndex + 1} / {colors.length}
            </span>
            <span className="text-sm font-bold text-white">{colors[currentIndex].name}</span>
          </div>
          <button onClick={nextColor} className="p-2 text-white hover:opacity-80 transition-opacity">
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="h-8 w-[1px] bg-white/20 mx-2" />
          <button 
            onClick={toggleFullscreen} 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500/30 text-xs font-bold transition-all"
          >
            <X className="h-4 w-4" /> 종료
          </button>
        </div>
      )}

      {/* Brief Hint for Mobile/New Users */}
      {!showUI && isFullscreen && (
        <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 animate-fade-out">
          <p className="rounded-full bg-black/40 px-4 py-2 text-[11px] font-bold text-white/70 backdrop-blur-sm border border-white/5">
            화면 클릭: 다음 색상전환
          </p>
        </div>
      )}
    </div>
  );
}
