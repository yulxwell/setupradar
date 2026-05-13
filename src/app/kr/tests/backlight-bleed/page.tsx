import { Metadata } from "next";
import { BacklightBleedTest } from "@/components/tests/BacklightBleedTest";
import { DisclaimerBox } from "@/components/common/Common";

export const metadata: Metadata = {
  title: "모니터 빛샘 및 IPS Glow 테스트 | SetupRadar",
  description: "어두운 환경에서 모니터의 빛샘 현상과 IPS 패널 특유의 Glow 현상을 진단합니다.",
};

export default function BacklightBleedPage() {
  return (
    <div className="mx-auto max-w-4xl py-12 px-4 md:py-20">
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-3xl font-bold text-[var(--primary)] md:text-5xl">빛샘 / IPS Glow 테스트</h1>
        <p className="mx-auto max-w-lg text-[var(--muted)]">
          완전한 블랙 화면에서 패널의 조명 균일도를 확인합니다.
          어두운 환경에서 테스트하는 것이 가장 정확합니다.
        </p>
      </div>

      <div className="mb-10">
        <BacklightBleedTest />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--secondary)]/50 p-6 md:p-8">
          <h2 className="mb-4 text-xl font-bold text-[var(--primary)]">테스트 준비물</h2>
          <ul className="space-y-4 text-sm text-[var(--muted)]">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--secondary)] text-[10px] font-bold text-[var(--muted)] border border-[var(--border)]">01</span>
              <p>주변 조명을 끄거나 방을 최대한 어둡게 만들어주세요.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--secondary)] text-[10px] font-bold text-[var(--muted)] border border-[var(--border)]">02</span>
              <p>모니터 밝기(Brightness)를 100% 가깝게 높여주세요.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--secondary)] text-[10px] font-bold text-[var(--muted)] border border-[var(--border)]">03</span>
              <p>전체화면 모드에서 정면, 그리고 대각선 방향에서 관찰하세요.</p>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--secondary)]/50 p-6 md:p-8 text-sm leading-relaxed text-[var(--muted)]">
            <p className="mb-4">
              <strong className="text-[var(--primary)]">IPS Glow와 빛샘의 차이:</strong><br />
              시야각에 따라 빛의 위치가 변하거나 정면에서 보았을 때 완화된다면 대부분 정상적인 <span className="text-[var(--accent)] font-bold">Glow 현상</span>입니다. 반면, 위치가 고정되어 있고 테두리에서 강하게 번지는 것은 <span className="text-red-500 font-bold opacity-80">빛샘</span>일 가능성이 큽니다.
            </p>
          </div>
          <DisclaimerBox className="bg-[var(--secondary)]/30 border-[var(--border)]" />
        </div>
      </div>
    </div>
  );
}
