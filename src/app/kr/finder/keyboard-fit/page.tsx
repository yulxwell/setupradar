"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronLeft, Layout, Zap, RotateCcw, CheckCircle2, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { KEYBOARD_DATABASE } from "@/content/kr/products/keyboards";
import { getContentDisplay } from "@/content/utils";
import { cn } from "@/lib/utils";

type Step = "layout" | "switch" | "result";
type KeyboardLayout = "full" | "tkl" | "75%" | "65%";
type SwitchType = "linear" | "tactile" | "clicky";

export default function KeyboardFitPage() {
  const [step, setStep] = useState<Step>("layout");
  const [layout, setLayout] = useState<KeyboardLayout | null>(null);
  const [switchType, setSwitchType] = useState<SwitchType | null>(null);

  const filteredKeyboards = useMemo(() => {
    if (!layout || !switchType) return [];
    
    return KEYBOARD_DATABASE.filter(kb => {
      const layoutMatch = kb.layout === layout || (layout === "full" && kb.layout === "full");
      const switchMatch = kb.switchType.includes(switchType);
      return layoutMatch && switchMatch;
    });
  }, [layout, switchType]);

  const reset = () => {
    setStep("layout");
    setLayout(null);
    setSwitchType(null);
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
        <h1 className="mb-2 text-3xl font-bold text-[var(--primary)] md:text-4xl">Keyboard Finder</h1>
        <p className="text-[var(--muted)]">사용 목적과 취향에 맞는 기계식 키보드를 찾아드립니다.</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-12 flex items-center justify-between gap-4">
        {[
          { id: "layout", label: "배열 선택", icon: Layout },
          { id: "switch", label: "스위치", icon: Zap },
          { id: "result", label: "추천 결과", icon: CheckCircle2 },
        ].map((s, idx) => {
          const isActive = step === s.id;
          const isDone = (step === "switch" && s.id === "layout") || (step === "result" && (s.id === "layout" || s.id === "switch"));
          
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
        {step === "layout" && (
          <motion.div 
            key="layout"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="text-center md:text-left">
              <h2 className="mb-2 text-2xl font-bold text-[var(--primary)]">어떤 배열을 선호하시나요?</h2>
              <p className="text-sm text-[var(--muted)]">책상 공간과 숫자패드 필요 여부에 따라 선택하세요.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { id: "full", label: "풀 사이즈 (100%)", desc: "숫자패드가 있어 엑셀이나 작업에 편리할 수 있습니다" },
                { id: "tkl", label: "텐키리스 (80%)", desc: "숫자패드를 없애 마우스 공간을 넓게 쓸 수 있습니다" },
                { id: "75%", label: "75% 배열", desc: "필요한 키는 유지하면서 크기를 더 줄인 실용적인 배열입니다" },
                { id: "65%", label: "65% 배열", desc: "극강의 공간 효율을 위해 크기를 최소화한 배열입니다" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setLayout(item.id as KeyboardLayout);
                    setStep("switch");
                  }}
                  className="group flex flex-col items-center rounded-2xl border border-[var(--border)] bg-[var(--secondary)]/30 p-6 transition-all hover:border-[var(--accent)] hover:bg-[var(--secondary)]/50 hover:shadow-xl"
                >
                  <Layout className="mb-4 h-8 w-8 text-[var(--muted)] opacity-50 group-hover:text-[var(--accent)] group-hover:opacity-100" />
                  <span className="mb-1 text-lg font-bold text-[var(--primary)]">{item.label}</span>
                  <span className="text-center text-xs text-[var(--muted)] leading-tight">{item.desc}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === "switch" && (
          <motion.div 
            key="switch"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="text-center md:text-left">
              <h2 className="mb-2 text-2xl font-bold text-[var(--primary)]">선호하는 타건감은?</h2>
              <p className="text-sm text-[var(--muted)]">소음 정도와 손끝에 느껴지는 걸림을 선택하세요.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { id: "linear", label: "Linear (리니어)", desc: "걸림 없이 매끄럽게 눌리는 부드러운 타입", detail: "소음이 적고 반응이 빨라 게이밍과 사무용 모두 무난할 수 있습니다." },
                { id: "tactile", label: "Tactile (넌클릭)", desc: "중간에 톡 걸리는 구분감이 느껴지는 타입", detail: "타이핑할 때 확실한 피드백을 원하는 분들에게 잘 맞을 수 있습니다." },
                { id: "clicky", label: "Clicky (클릭)", desc: "찰칵거리는 경쾌한 소리와 강한 구분감", detail: "기계식 특유의 소리를 즐긴다면 좋으나, 조용한 장소에서는 주의가 필요합니다." },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSwitchType(item.id as SwitchType);
                    setStep("result");
                  }}
                  className="group flex flex-col items-center rounded-2xl border border-[var(--border)] bg-[var(--secondary)]/30 p-8 transition-all hover:border-[var(--accent)] hover:bg-[var(--secondary)]/50 hover:shadow-xl"
                >
                  <Zap className="mb-4 h-10 w-10 text-[var(--muted)] opacity-50 group-hover:text-[var(--accent)] group-hover:opacity-100" />
                  <span className="mb-2 text-lg font-bold text-[var(--primary)]">{item.label}</span>
                  <span className="text-center text-xs font-bold text-[var(--accent)] mb-2">{item.desc}</span>
                  <span className="text-center text-[10px] text-[var(--muted)] leading-relaxed">{item.detail}</span>
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => setStep("layout")}
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
                <h2 className="mb-2 text-2xl font-bold text-[var(--primary)]">당신을 위한 키보드 추천 결과</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-bold text-[var(--muted)] border border-[var(--border)]">
                    배열: {layout}
                  </span>
                  <span className="rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-bold text-[var(--muted)] border border-[var(--border)]">
                    스위치: {switchType?.toUpperCase()}
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

            {filteredKeyboards.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {filteredKeyboards.map((kb) => {
                  const display = getContentDisplay(kb);
                  return (
                    <div 
                      key={kb.id}
                      className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--secondary)]/30 p-6"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-tighter">{kb.brand || "Unknown"}</span>
                        <span className="text-sm font-bold text-[var(--primary)]">{kb.priceRange}</span>
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-[var(--primary)]">{kb.name}</h3>
                      <p className="mb-4 text-xs text-[var(--muted)] leading-relaxed">{display.summary}</p>
                      <div className="mb-6 space-y-1.5">
                        <p className="text-xs text-[var(--muted)] font-medium">주요 장점:</p>
                        <ul className="list-inside list-disc">
                          {display.strengths.slice(0, 2).map((s, i) => (
                            <li key={i} className="text-[10px] text-[var(--muted)]">{s}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-auto flex flex-wrap gap-1.5">
                        {kb.features.map(f => (
                          <span key={f} className="rounded-md bg-[var(--accent)]/10 px-2 py-0.5 text-[10px] font-bold text-[var(--accent)]">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-2xl border-2 border-dashed border-[var(--border)] p-20 text-center">
                <Info className="mx-auto mb-4 h-10 w-10 text-[var(--muted)] opacity-30" />
                <p className="text-lg font-bold text-[var(--primary)]">아직 완벽하게 일치하는 제품이 없네요.</p>
                <p className="text-sm text-[var(--muted)]">데이터베이스를 계속 업데이트 중입니다!</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
