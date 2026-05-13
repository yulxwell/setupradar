import { Monitor, MousePointer2, Zap, Mouse, Keyboard, ArrowRight, ShieldCheck, LayoutGrid } from "lucide-react";
import { TestCard, GuideCard } from "@/components/cards/Cards";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pb-20">
      {/* Hero Section - Simplified & Functional */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 font-outfit text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
            장비의 상태를 <span className="text-blue-600">객관적으로</span> 확인하세요.
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-base text-slate-500 dark:text-slate-400">
            복잡한 설치 없이 브라우저에서 즉시 시작하는 <br className="hidden md:block" />
            PC 하드웨어 진단 도구 및 구매 가이드 서비스입니다.
          </p>
        </div>
      </section>

      {/* Main Action: Quick Test Cards (Priority 1) */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white md:text-2xl">즉시 테스트 가능한 도구</h2>
            <p className="text-sm text-slate-500">지금 바로 장비의 결함이나 성능을 체크해보세요.</p>
          </div>
          <Link href="/ko/tests" className="group hidden sm:flex items-center gap-1 text-xs font-bold text-blue-600 uppercase tracking-wider">
            모든 도구 <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <TestCard 
            title="불량화소 테스트" 
            description="모니터 구매 후 가장 먼저 해야 할 픽셀 결함 점검입니다."
            href="/ko/tests/dead-pixel"
            icon={Monitor}
            duration="1~3분"
            purpose="결함(데드픽셀) 유무 확인"
          />
          <TestCard 
            title="더블클릭 테스트" 
            description="마우스 스위치 노후화로 인한 중복 입력을 정밀 분석합니다."
            href="/ko/tests/double-click"
            icon={MousePointer2}
            duration="30초"
            purpose="스위치 채터링 진단"
          />
          <TestCard 
            title="폴링레이트 측정" 
            description="마우스의 실제 전송 속도(Hz)를 실시간으로 확인합니다."
            href="/ko/tests/polling-rate"
            icon={Zap}
            duration="10초"
            purpose="성능 및 동글 연결 확인"
          />
        </div>
      </section>

      {/* Beginner Guides (Priority 2) */}
      <section className="container mx-auto px-4 py-16 bg-slate-50/50 dark:bg-slate-900/20 rounded-[3rem]">
        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white md:text-2xl">하드웨어 가이드</h2>
          <p className="text-sm text-slate-500">복잡한 스펙 대신 구매 결정에 필요한 핵심만 정리했습니다.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <GuideCard 
            title="게이밍 마우스 vs 일반 마우스"
            description="센서와 무게가 왜 중요한지 알아보세요."
            href="/ko/guides/gaming-mouse-vs-normal-mouse"
            icon={Mouse}
          />
          <GuideCard 
            title="8K 폴링레이트, 필요한가요?"
            description="고주사율 유저를 위한 실질적 체감 가이드."
            href="/ko/guides/8k-polling-rate"
            icon={Zap}
          />
          <GuideCard 
            title="불량화소와 무결점 정책"
            description="브랜드별 교환 기준을 한눈에 비교합니다."
            href="/ko/guides/dead-pixel-policy"
            icon={ShieldCheck}
          />
        </div>
        <div className="mt-8 text-center">
          <Link href="/ko/guides" className="text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            모든 가이드 읽어보기 →
          </Link>
        </div>
      </section>

      {/* Future Feature Placeholders (Priority 3 - Muted) */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-slate-100 dark:border-slate-800 pt-16">
          <div>
            <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">나에게 맞는 장비 찾기 (준비 중)</h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              손 크기, 그립 형태, 선호하는 타건감을 분석하여 인생 장비를 추천해 드리는 기능이 추가될 예정입니다.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 text-center bg-slate-50/30 dark:bg-slate-900/10">
              <Mouse className="mx-auto mb-2 h-6 w-6 text-slate-300 dark:text-slate-700" />
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase">Mouse Fit</span>
            </div>
            <div className="flex-1 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 text-center bg-slate-50/30 dark:bg-slate-900/10">
              <Keyboard className="mx-auto mb-2 h-6 w-6 text-slate-300 dark:text-slate-700" />
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase">Key Finder</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 p-8 text-center">
          <LayoutGrid className="h-5 w-5 text-slate-300 dark:text-slate-700 mb-3" />
          <p className="text-[11px] text-slate-400 dark:text-slate-600 font-medium">
            최저가 및 실시간 핫딜 정보 연결 예정
          </p>
        </div>
      </section>
    </div>
  );
}
