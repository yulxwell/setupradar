import { Mouse, Keyboard, Zap, ShieldCheck, Moon } from "lucide-react";
import { GuideCard } from "@/components/cards/Cards";

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-6xl py-16 px-4 md:py-24">
      <div className="mb-16 text-left border-b border-[var(--border)] pb-8">
        <h1 className="mb-4 text-3xl font-bold text-[var(--primary)] md:text-5xl">하드웨어 구매 가이드</h1>
        <p className="max-w-lg text-[var(--muted)]">
          광고 문구 대신 실제 구매 시 확인해야 할 체크리스트와 핵심 정보를 정리했습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <GuideCard 
          title="키보드 스위치 가이드"
          description="복잡한 축 이름 뒤에 숨겨진 실제 타건감과 구매 팁을 확인하세요."
          href="/kr/switches"
          icon={Zap}
        />
        <GuideCard 
          title="게이밍 마우스 vs 일반 마우스"
          description="센서와 무게가 왜 중요한지, 내게 맞는 선택 기준을 제안합니다."
          href="/kr/guides/gaming-mouse-vs-normal-mouse"
          icon={Mouse}
        />
        <GuideCard 
          title="8K 폴링레이트, 필요한가요?"
          description="고주사율 유저라면 확인해보세요. 성능 향상과 주의사항을 정리했습니다."
          href="/kr/guides/8k-polling-rate"
          icon={Zap}
        />
        <GuideCard 
          title="불량화소와 무결점 정책"
          description="모니터 브랜드별 교환 기준과 체크리스트를 한눈에 비교합니다."
          href="/kr/guides/dead-pixel-policy"
          icon={ShieldCheck}
        />
        <GuideCard 
          title="빛샘 vs IPS Glow"
          description="패널 특성에 따른 정상 범위를 알고 불필요한 고민을 줄여보세요."
          href="/kr/guides/backlight-bleed-vs-ips-glow"
          icon={Moon}
        />
        <GuideCard 
          title="풀알루미늄 키보드 입문"
          description="금속 하우징이 만드는 정갈한 소리와 선택 시 꼭 확인해야 할 점들."
          href="/kr/guides/full-aluminum-keyboard"
          icon={Keyboard}
        />
      </div>

      <div className="mt-20 flex flex-col items-center justify-center p-12 text-center border border-[var(--border)] rounded-3xl bg-[var(--secondary)]/30">
        <h3 className="text-lg font-bold text-[var(--primary)] mb-2">장비 추천 기능 준비 중</h3>
        <p className="text-sm text-[var(--muted)] max-w-sm">
          단순 정보 제공을 넘어, 사용자 데이터 기반 맞춤형 제품 매칭 시스템을 준비하고 있습니다.
        </p>
      </div>
    </div>
  );
}
