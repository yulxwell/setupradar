"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronLeft, Ruler, Hand, RotateCcw, CheckCircle2, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MOUSE_DATABASE } from "@/data/mouses";
import { cn } from "@/lib/utils";

type Step = "size" | "grip" | "result";
type HandSize = "small" | "medium" | "large";
type GripStyle = "palm" | "claw" | "fingertip";

export default function MouseFitPage() {
  const [step, setStep] = useState<Step>("size");
  const [handSize, setHandSize] = useState<HandSize | null>(null);
  const [gripStyle, setGripStyle] = useState<GripStyle | null>(null);

  const filteredMice = useMemo(() => {
    if (!handSize || !gripStyle) return [];
    
    return MOUSE_DATABASE.filter(mouse => {
      const sizeMatch = mouse.handSizeRange === handSize || mouse.handSizeRange === "all";
      const gripMatch = mouse.recommendedGrips.includes(gripStyle);
      return sizeMatch && gripMatch;
    });
  }, [handSize, gripStyle]);

  const reset = () => {
    setStep("size");
    setHandSize(null);
    setGripStyle(null);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl min-h-[70vh]">
      <Link 
        href="/kr" 
        className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        메인으로 돌아가기
      </Link>

      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">Mouse Fit Finder</h1>
        <p className="text-slate-500 dark:text-slate-400">데이터 기반으로 당신의 인생 마우스를 추천해 드립니다.</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-12 flex items-center justify-between gap-4">
        {[
          { id: "size", label: "손 크기", icon: Ruler },
          { id: "grip", label: "파지법", icon: Hand },
          { id: "result", label: "추천 결과", icon: CheckCircle2 },
        ].map((s, idx) => {
          const isActive = step === s.id;
          const isDone = (step === "grip" && s.id === "size") || (step === "result" && (s.id === "size" || s.id === "grip"));
          
          return (
            <div key={s.id} className="flex flex-1 items-center gap-3">
              <div className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all",
                isActive ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-500/20" : 
                isDone ? "border-green-500 bg-green-500 text-white" : 
                "border-slate-200 bg-white text-slate-400 dark:border-slate-800 dark:bg-slate-900"
              )}>
                <s.icon className="h-5 w-5" />
              </div>
              <div className="hidden md:block">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Step 0{idx + 1}</p>
                <p className={cn("text-sm font-bold", isActive ? "text-slate-900 dark:text-white" : "text-slate-400")}>{s.label}</p>
              </div>
              {idx < 2 && <div className="hidden flex-1 border-t-2 border-slate-100 dark:border-slate-800 md:block" />}
            </div>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {step === "size" && (
          <motion.div 
            key="size"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="text-center md:text-left">
              <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">본인의 손 크기는 어느 정도인가요?</h2>
              <p className="text-sm text-slate-500">키보드 상단 F1 키부터 어디까지 닿는지 측정해 보세요.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { id: "small", label: "S (Small)", range: "F1 ~ F9", desc: "작은 마우스 선호" },
                { id: "medium", label: "M (Medium)", range: "F1 ~ F10.5", desc: "표준 마우스 선호" },
                { id: "large", label: "L (Large)", range: "F11 ~ F12+", desc: "큰 마우스 선호" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setHandSize(item.id as HandSize);
                    setStep("grip");
                  }}
                  className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-600 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/40"
                >
                  <span className="mb-2 text-sm font-bold text-blue-600">{item.range}</span>
                  <span className="mb-1 text-xl font-bold text-slate-900 dark:text-white">{item.label}</span>
                  <span className="text-xs text-slate-500">{item.desc}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === "grip" && (
          <motion.div 
            key="grip"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="text-center md:text-left">
              <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">가장 선호하는 파지법(그립)은?</h2>
              <p className="text-sm text-slate-500">마우스를 쥘 때 손바닥과 손가락이 닿는 방식을 선택하세요.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { id: "palm", label: "Palm (팜 그립)", desc: "손바닥 전체가 밀착되어 안정감 우선" },
                { id: "claw", label: "Claw (클로 그립)", desc: "손가락 끝과 손목 뒷부분만 밀착" },
                { id: "fingertip", label: "Fingertip (핑거 그립)", desc: "손가락 끝만 사용하여 빠른 컨트롤" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setGripStyle(item.id as GripStyle);
                    setStep("result");
                  }}
                  className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-600 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/40"
                >
                  <Hand className="mb-4 h-10 w-10 text-slate-400 group-hover:text-blue-600" />
                  <span className="mb-2 text-lg font-bold text-slate-900 dark:text-white">{item.label}</span>
                  <span className="text-center text-xs text-slate-500">{item.desc}</span>
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => setStep("size")}
              className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-600"
            >
              <ChevronLeft className="h-4 w-4" /> 이전 단계로
            </button>
          </motion.div>
        )}

        {step === "result" && (
          <motion.div 
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-10"
          >
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-center md:text-left">
                <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">당신을 위한 마우스 추천 결과</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800">
                    손 크기: {handSize?.toUpperCase()}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800">
                    그립: {gripStyle?.toUpperCase()}
                  </span>
                </div>
              </div>
              <button 
                onClick={reset}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950"
              >
                <RotateCcw className="h-4 w-4" /> 다시 하기
              </button>
            </div>

            {filteredMice.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {filteredMice.map((mouse) => (
                  <div 
                    key={mouse.id}
                    className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/60"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-tighter">{mouse.brand}</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">{mouse.priceRange}</span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{mouse.name}</h3>
                    <div className="mb-6 space-y-1.5">
                      <p className="text-xs text-slate-500">센서: {mouse.sensor}</p>
                      <p className="text-xs text-slate-500">크기: {mouse.dimensions.length} x {mouse.dimensions.width} x {mouse.dimensions.height} mm</p>
                      <p className="text-xs text-slate-500">무게: {mouse.weight}g</p>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {mouse.features.map(f => (
                        <span key={f} className="rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border-2 border-dashed border-slate-200 p-20 text-center dark:border-slate-800">
                <Info className="mx-auto mb-4 h-10 w-10 text-slate-300" />
                <p className="text-lg font-bold text-slate-900 dark:text-white">아직 완벽하게 일치하는 제품이 없네요.</p>
                <p className="text-sm text-slate-500">데이터베이스를 계속 업데이트 중입니다!</p>
              </div>
            )}

            <div className="rounded-2xl bg-blue-50 p-6 dark:bg-blue-900/10">
              <p className="text-xs leading-relaxed text-blue-700 dark:text-blue-400">
                * 위 결과는 일반적인 사용자 통계에 기반한 추천이며, 개인의 세밀한 습관이나 감도 설정에 따라 체감 그립감은 다를 수 있습니다. 
                가급적 오프라인 매장에서 한 번 더 직접 쥐어보시는 것을 권장합니다.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

