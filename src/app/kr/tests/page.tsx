import { Monitor, MousePointer2, Zap, Mouse, Keyboard } from "lucide-react";
import { TestCard } from "@/components/cards/Cards";
import { TEST_TOOLS } from "@/content/kr/tools";

const ICON_MAP = {
  Monitor,
  MousePointer2,
  Zap,
  Mouse,
  Keyboard,
};

export default function TestsPage() {
  return (
    <div className="mx-auto max-w-6xl py-16 px-4 md:py-28">
      <div className="relative mb-16 overflow-hidden rounded-3xl bg-[var(--secondary)]/50 px-8 py-12 text-center md:px-12 md:py-16 border border-[var(--border)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)] text-[var(--background)]">
          <Monitor className="h-6 w-6" />
        </div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-[var(--primary)] md:text-5xl">하드웨어 진단 도구</h1>
        <p className="mx-auto max-w-xl text-[var(--muted)] md:text-lg">
          모니터와 마우스의 상태를 브라우저에서 즉시 확인하세요. <br className="hidden md:block" />
          모든 테스트는 소프트웨어 설치 없이 완전 무료로 제공됩니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEST_TOOLS.map((tool) => (
          <TestCard 
            key={tool.id}
            title={tool.title}
            description={tool.description}
            href={tool.href}
            icon={ICON_MAP[tool.iconName as keyof typeof ICON_MAP] || Monitor}
            duration={tool.duration}
            purpose={tool.purpose}
            caution={tool.caution}
          />
        ))}
      </div>

      <div className="mt-20 rounded-3xl bg-[var(--secondary)]/30 p-10 text-center border border-[var(--border)]">
        <h2 className="mb-2 text-lg font-bold text-[var(--primary)]">준비 중인 테스트</h2>
        <p className="text-sm text-[var(--muted)]">
          키보드 무한 동시입력, 모니터 잔상 테스트 등이 곧 추가될 예정입니다.
        </p>
      </div>
    </div>
  );
}
