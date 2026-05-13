"use client";

import { useState, useCallback, useRef } from "react";
import { MousePointer2, RotateCcw, AlertTriangle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ClickEvent {
  id: number;
  interval: number;
  timestamp: number;
  isSuspect: boolean;
}

const THRESHOLD = 80; // ms

export function DoubleClickTest() {
  const [clicks, setClicks] = useState<ClickEvent[]>([]);
  const lastClickTime = useRef<number>(0);
  const clickCount = useRef<number>(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const now = performance.now();
    const interval = lastClickTime.current ? Math.round(now - lastClickTime.current) : 0;
    
    const isSuspect = interval > 0 && interval < THRESHOLD;
    
    const newClick: ClickEvent = {
      id: ++clickCount.current,
      interval,
      timestamp: now,
      isSuspect
    };

    setClicks((prev) => [newClick, ...prev].slice(0, 50));
    lastClickTime.current = now;
  }, []);

  const reset = () => {
    setClicks([]);
    lastClickTime.current = 0;
    clickCount.current = 0;
  };

  const suspectCount = clicks.filter(c => c.isSuspect).length;

  return (
    <div className="flex flex-col gap-8">
      {/* Click Target Area */}
      <div 
        onMouseDown={handleMouseDown}
        className={cn(
          "relative flex aspect-[21/9] w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed transition-all select-none",
          clicks[0]?.isSuspect 
            ? "border-red-500 bg-red-500/5" 
            : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-blue-500"
        )}
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <div className={cn(
            "flex h-16 w-16 items-center justify-center rounded-2xl transition-colors",
            clicks[0]?.isSuspect ? "bg-red-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-400"
          )}>
            <MousePointer2 className="h-8 w-8" />
          </div>
          <div>
            <p className="text-xl font-bold text-slate-900 dark:text-white">이 영역을 클릭하세요</p>
            <p className="text-sm text-slate-500">클릭 간격(ms)을 실시간으로 분석합니다.</p>
          </div>
        </div>

        {/* Real-time Result Overlay */}
        {clicks.length > 0 && (
          <div className="absolute top-6 right-6 flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white">
            <span className="text-slate-400">마지막 간격:</span>
            <span className={cn(clicks[0].isSuspect ? "text-red-400" : "text-blue-400")}>
              {clicks[0].interval}ms
            </span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Statistics */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-100 dark:border-slate-800 p-6 bg-slate-50/50 dark:bg-slate-900/20">
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">진단 요약</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">전체 클릭</span>
                <span className="text-lg font-bold text-slate-900 dark:text-white">{clicks.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">의심 사례</span>
                <span className={cn("text-lg font-bold", suspectCount > 0 ? "text-red-500" : "text-emerald-500")}>
                  {suspectCount}
                </span>
              </div>
            </div>
            
            <button 
              onClick={reset}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <RotateCcw className="h-4 w-4" /> 기록 초기화
            </button>
          </div>

          <div className="rounded-2xl bg-blue-50/50 dark:bg-blue-900/10 p-6 border border-blue-100 dark:border-blue-900/20">
            <h4 className="mb-2 flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-400">
              <CheckCircle2 className="h-3.5 w-3.5" /> 판정 기준
            </h4>
            <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
              보통 사람이 의도적으로 클릭할 수 있는 최소 간격은 80ms~100ms입니다. 이보다 짧은 간격이 빈번하게 발생하면 스위치 결함(채터링)일 가능성이 큽니다.
            </p>
          </div>
        </div>

        {/* Click Log */}
        <div className="md:col-span-2 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-950">
          <div className="border-b border-slate-100 dark:border-slate-800 p-4">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-tight">클릭 이력 (최근 50개)</h3>
          </div>
          <div className="h-[320px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {clicks.map((click) => (
                <div 
                  key={click.id} 
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-2 text-[11px] font-medium border",
                    click.isSuspect 
                      ? "bg-red-50 border-red-100 text-red-600 dark:bg-red-900/20 dark:border-red-900/30 dark:text-red-400" 
                      : "bg-slate-50 border-slate-100 text-slate-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400"
                  )}
                >
                  <span className="opacity-50">#{click.id}</span>
                  <span className="font-bold">{click.interval}ms</span>
                  {click.isSuspect && <AlertTriangle className="h-3 w-3" />}
                </div>
              ))}
              {clicks.length === 0 && (
                <div className="col-span-full py-20 text-center text-slate-400 text-xs">
                  클릭을 시작하면 여기에 로그가 표시됩니다.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
