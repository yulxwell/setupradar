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
        className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        메인으로 돌아가기
      </Link>

      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--primary)] md:text-4xl">Mouse Fit Finder</h1>
        <p className="text-[var(--muted)]">데이터 기반으로 당신의 인생 마우스를 추천해 드립니다.</p>
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
                isActive ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--background)] shadow-lg shadow-[var(--accent)]/20" : 
                isDone ? "border-emerald-600 bg-emerald-600 text-white" : 
                "border-[var(--border)] bg-[var(--background)] text-[var(--muted)]"
              )}>
                <s.icon className="h-5 w-5" />
              </div>
              <div className="hidden md:block">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] opacity-60">Step 0{idx + 1}</p>
                <p className={cn("text-sm font-bold", isActive ? "text-[var(--primary)]" : "text-[var(--muted)]")}>{s.label}</p>
              </div>
              {idx < 2 && <div className="hidden flex-1 border-t-2 border-[var(--border)] md:block" />}
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
              <h2 className="mb-2 text-2xl font-bold text-[var(--primary)]">본인의 손 크기를 확인해보세요</h2>
              <p className="text-sm text-[var(--muted)]">키보드 상단 F1 키 위에 손목을 두고, 중지가 어디까지 닿는지 확인해볼 수 있습니다.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { id: "small", label: "작은 편 (Small)", range: "F1 ~ F9", desc: "작고 가벼운 모델이 편할 수 있습니다" },
                { id: "medium", label: "보통 (Medium)", range: "F1 ~ F10.5", desc: "대부분의 표준형 모델이 잘 맞을 수 있습니다" },
                { id: "large", label: "큰 편 (Large)", range: "F11 ~ F12+", desc: "묵직하고 크기가 있는 모델이 안정적일 수 있습니다" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setHandSize(item.id as HandSize);
                    setStep("grip");
                  }}
                  className="group flex flex-col items-center rounded-2xl border border-[var(--border)] bg-[var(--secondary)]/30 p-8 transition-all hover:border-[var(--accent)] hover:bg-[var(--secondary)]/50 hover:shadow-xl"
                >
                  <span className="mb-2 text-sm font-bold text-[var(--accent)]">{item.range}</span>
                  <span className="mb-1 text-xl font-bold text-[var(--primary)]">{item.label}</span>
                  <span className="text-center text-xs text-[var(--muted)]">{item.desc}</span>
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
              <h2 className="mb-2 text-2xl font-bold text-[var(--primary)]">평소 마우스를 어떻게 쥐시나요?</h2>
              <p className="text-sm text-[var(--muted)]">가장 편안하다고 느껴지는 손 모양을 선택해주세요.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { id: "palm", label: "팜 그립 (Palm)", desc: "손바닥 전체를 마우스에 얹는 가장 일반적인 방식" },
                { id: "claw", label: "클로 그립 (Claw)", desc: "손가락 끝을 세우고 손바닥 뒷부분만 밀착하는 방식" },
                { id: "fingertip", label: "핑거 그립 (Fingertip)", desc: "손바닥을 떼고 손가락 끝으로만 조작하는 방식" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setGripStyle(item.id as GripStyle);
                    setStep("result");
                  }}
                  className="group flex flex-col items-center rounded-2xl border border-[var(--border)] bg-[var(--secondary)]/30 p-8 transition-all hover:border-[var(--accent)] hover:bg-[var(--secondary)]/50 hover:shadow-xl"
                >
                  <Hand className="mb-4 h-10 w-10 text-[var(--muted)] opacity-50 group-hover:text-[var(--accent)] group-hover:opacity-100" />
                  <span className="mb-2 text-lg font-bold text-[var(--primary)]">{item.label}</span>
                  <span className="text-center text-xs text-[var(--muted)]">{item.desc}</span>
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => setStep("size")}
              className="flex items-center gap-2 text-sm font-bold text-[var(--muted)] hover:text-[var(--primary)]"
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
                <h2 className="mb-2 text-2xl font-bold text-[var(--primary)]">당신을 위한 마우스 추천 결과</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-bold text-[var(--muted)] border border-[var(--border)]">
                    손 크기: {handSize?.toUpperCase()}
                  </span>
                  <span className="rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-bold text-[var(--muted)] border border-[var(--border)]">
                    그립: {gripStyle?.toUpperCase()}
                  </span>
                </div>
              </div>
              <button 
                onClick={reset}
                className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-5 py-3 text-sm font-bold text-[var(--primary)] hover:bg-[var(--secondary)]/80"
              >
                <RotateCcw className="h-4 w-4" /> 다시 하기
              </button>
            </div>

            {filteredMice.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {filteredMice.map((mouse) => (
                  <div 
                    key={mouse.id}
                    className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--secondary)]/30 p-6"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-tighter">{mouse.brand}</span>
                      <span className="text-sm font-bold text-[var(--primary)]">{mouse.priceRange}</span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-[var(--primary)]">{mouse.name}</h3>
                    <div className="mb-6 space-y-1.5">
                      <p className="text-xs text-[var(--muted)]">센서: {mouse.sensor}</p>
                      <p className="text-xs text-[var(--muted)]">크기: {mouse.dimensions.length} x {mouse.dimensions.width} x {mouse.dimensions.height} mm</p>
                      <p className="text-xs text-[var(--muted)]">무게: {mouse.weight}g</p>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {mouse.features.map(f => (
                        <span key={f} className="rounded-md bg-[var(--accent)]/10 px-2 py-0.5 text-[10px] font-bold text-[var(--accent)]">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border-2 border-dashed border-[var(--border)] p-20 text-center">
                <Info className="mx-auto mb-4 h-10 w-10 text-[var(--muted)] opacity-30" />
                <p className="text-lg font-bold text-[var(--primary)]">아직 완벽하게 일치하는 제품이 없네요.</p>
                <p className="text-sm text-[var(--muted)]">데이터베이스를 계속 업데이트 중입니다!</p>
              </div>
            )}

            <div className="rounded-2xl bg-[var(--accent)]/5 p-6 border border-[var(--accent)]/10">
              <p className="text-xs leading-relaxed text-[var(--accent)] opacity-80">
                * 위 추천 결과는 많은 사용자가 편안함을 느끼는 통계적 수치에 기반하고 있습니다. 
                개인의 세밀한 습관이나 감도(DPI) 설정에 따라 체감은 달라질 수 있으니, 
                가능하다면 오프라인 매장에서 직접 쥐어보며 자신만의 최적의 그립감을 확인해보시는 것을 권장합니다.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

