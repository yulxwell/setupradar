import { Monitor, MousePointer2, Zap, Mouse, Keyboard, ArrowRight, ShieldCheck, LayoutGrid, Info } from "lucide-react";
import { TestCard, GuideCard } from "@/components/cards/Cards";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pb-20">
      {/* Hero Section - Sober & Warm */}
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-28 md:pb-24 border-b border-[var(--border)]">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto mb-6 inline-flex items-center rounded-full bg-[var(--secondary)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] border border-[var(--border)]">
            SetupRadar Hardware Diagnostic
          </div>
          <h1 className="mb-6 font-outfit text-4xl font-bold tracking-tight text-[var(--primary)] md:text-6xl lg:text-7xl">
            장비의 상태를 <br className="md:hidden" />
            <span className="text-[var(--accent)]">객관적으로</span> 확인하세요.
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-base text-[var(--muted)] md:text-lg leading-relaxed">
            별도의 소프트웨어 설치 없이 브라우저에서 즉시 시작하는 <br className="hidden md:block" />
            고정밀 PC 하드웨어 진단 도구 및 스마트 구매 가이드입니다.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/kr/tests" className="flex h-12 items-center justify-center rounded-xl bg-[var(--primary)] px-8 text-sm font-bold text-[var(--background)] transition-all hover:opacity-90 active:scale-95">
              테스트 시작하기
            </Link>
            <Link href="/kr/guides" className="flex h-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] px-8 text-sm font-bold text-[var(--primary)] transition-all hover:bg-[var(--secondary)] active:scale-95">
              가이드 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="mb-12 flex items-end justify-between border-b border-[var(--border)] pb-8">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--primary)] md:text-3xl">즉시 사용 가능한 도구</h2>
            <p className="text-sm text-[var(--muted)]">장비의 결함이나 성능을 지금 바로 체크해보세요.</p>
          </div>
          <Link href="/kr/tests" className="group hidden sm:flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] uppercase tracking-widest transition-colors">
            전체 보기 <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <TestCard 
            title="불량화소 테스트" 
            description="새 모니터의 화면 결함을 점검합니다. 색상별 전체화면을 통해 숨겨진 점을 찾아낼 수 있습니다."
            href="/kr/tests/dead-pixel"
            icon={Monitor}
            duration="1~3분"
            purpose="화면 속 작은 점(결함) 유무 확인"
          />
          <TestCard 
            title="더블클릭 테스트" 
            description="마우스가 한 번 클릭으로 두 번 눌리는 증상을 진단하여 수리나 교체 시기를 판별합니다."
            href="/kr/tests/double-click"
            icon={MousePointer2}
            duration="30초"
            purpose="마우스 고장 및 오작동 진단"
          />
          <TestCard 
            title="폴링레이트 측정" 
            description="마우스가 PC와 얼마나 빠르게 통신하는지 측정하여 실제 성능이 정상인지 확인합니다."
            href="/kr/tests/polling-rate"
            icon={Zap}
            duration="10초"
            purpose="전송 속도 및 연결 안정성 확인"
          />
        </div>
      </section>

      {/* Beginner Guides */}
      <section className="container mx-auto px-4 py-16 bg-[var(--secondary)]/30 rounded-[3rem] border border-[var(--border)]">
        <div className="mb-10">
          <h2 className="text-xl font-bold text-[var(--primary)] md:text-2xl">하드웨어 가이드</h2>
          <p className="text-sm text-[var(--muted)]">복잡한 스펙 대신 구매 결정에 필요한 핵심만 정리했습니다.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <GuideCard 
            title="게이밍 마우스 vs 일반 마우스"
            description="센서와 무게가 왜 중요한지 알아보세요."
            href="/kr/guides/gaming-mouse-vs-normal-mouse"
            icon={Mouse}
          />
          <GuideCard 
            title="8K 폴링레이트, 필요한가요?"
            description="고주사율 유저를 위한 실질적 체감 가이드."
            href="/kr/guides/8k-polling-rate"
            icon={Zap}
          />
          <GuideCard 
            title="불량화소와 무결점 정책"
            description="브랜드별 교환 기준을 한눈에 비교합니다."
            href="/kr/guides/dead-pixel-policy"
            icon={ShieldCheck}
          />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <GuideCard 
            title="키보드 스위치 가이드" 
            description="감성적인 축 이름 뒤에 숨겨진 실제 체감과 스펙을 확인하세요." 
            href="/kr/switches" 
            icon={Zap}
          />
          <GuideCard 
            title="하드웨어 용어 사전" 
            description="어려운 하드웨어 용어와 스펙을 초보자 눈높이에서 풀어서 설명합니다." 
            href="/kr/guides" 
            icon={Info}
          />
        </div>
        <div className="mt-8 text-center">
          <Link href="/kr/guides" className="text-sm font-bold text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
            모든 가이드 읽어보기 →
          </Link>
        </div>
      </section>

      {/* Equipment Finders */}
      <section className="container mx-auto px-4 py-20 bg-[var(--card)] rounded-[3rem] border border-[var(--border)] my-12">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--primary)] md:text-3xl">내게 꼭 맞는 장비 찾기</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">데이터 기반 알고리즘으로 최적의 기어 세팅을 제안합니다.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <Link href="/kr/finder/mouse-fit" className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--background)] p-8 transition-all hover:border-[var(--accent)] hover:shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--secondary)] text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--background)] transition-colors">
                <MousePointer2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)]">Mouse Fit Finder</h3>
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
              자신의 손 크기와 마우스를 잡는 습관에 맞춰 <br/>
              가장 편안하고 무리가 없는 마우스를 찾아보세요.
            </p>
            <div className="flex items-center gap-2 text-sm font-bold text-[var(--accent)]">
              나의 마우스 찾기 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link href="/kr/finder/keyboard-fit" className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--background)] p-8 transition-all hover:border-[var(--accent)] hover:shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--secondary)] text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--background)] transition-colors">
                <Keyboard className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)]">Keyboard Finder</h3>
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
              원하는 소리와 타건감을 바탕으로 <br/>
              당신의 타이핑을 즐겁게 만들 키보드를 추천합니다.
            </p>
            <div className="flex items-center gap-2 text-sm font-bold text-[var(--accent)]">
              나의 키보드 찾기 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--secondary)]/30 p-8 text-center">
          <LayoutGrid className="h-5 w-5 text-[var(--muted)]/50 mb-3" />
          <p className="text-[11px] text-[var(--muted)] font-medium">
            최저가 및 실시간 핫딜 정보 연결 예정
          </p>
        </div>
      </section>
    </div>
  );
}
