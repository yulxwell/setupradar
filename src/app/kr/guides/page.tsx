import { Mouse, Keyboard, Zap, ShieldCheck, Moon } from "lucide-react";
import { GuideCard } from "@/components/cards/Cards";

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-6xl py-16 px-4 md:py-24">
      <div className="mb-16 text-left border-b border-slate-100 dark:border-slate-800 pb-8">
        <h1 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-5xl">하드웨어 구매 가이드</h1>
        <p className="max-w-lg text-slate-500 dark:text-slate-400">
          광고 문구 대신 실제 구매 시 확인해야 할 체크리스트와 핵심 정보를 정리했습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <GuideCard 
          title="게이밍 마우스 vs 일반 마우스"
          description="센서, 무게, 스위치의 차이를 알고 내게 맞는 마우스를 선택하세요."
          href="/kr/guides/gaming-mouse-vs-normal-mouse"
          icon={Mouse}
        />
        <GuideCard 
          title="8K 폴링레이트, 필요한가요?"
          description="고주사율 모니터 유저라면 필수 체크! 실질적 이득 분석."
          href="/kr/guides/8k-polling-rate"
          icon={Zap}
        />
        <GuideCard 
          title="불량화소와 무결점 정책"
          description="휘점과 암점의 차이, 브랜드별 교환 기준을 확인하세요."
          href="/kr/guides/dead-pixel-policy"
          icon={ShieldCheck}
        />
        <GuideCard 
          title="빛샘 vs IPS Glow"
          description="불필요한 교환/환불 수고를 줄여주는 패널 특성 판별법."
          href="/kr/guides/backlight-bleed-vs-ips-glow"
          icon={Moon}
        />
        <GuideCard 
          title="풀알루미늄 키보드 입문"
          description="묵직한 타건감과 정갈한 소리, 선택 시 주의사항."
          href="/kr/guides/full-aluminum-keyboard"
          icon={Keyboard}
        />
      </div>

      <div className="mt-20 flex flex-col items-center justify-center p-12 text-center border border-slate-100 dark:border-slate-800 rounded-3xl bg-slate-50/50 dark:bg-slate-900/20">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">장비 추천 기능 준비 중</h3>
        <p className="text-sm text-slate-500 max-w-sm">
          단순 정보 제공을 넘어, 사용자 데이터 기반 맞춤형 제품 매칭 시스템을 준비하고 있습니다.
        </p>
      </div>
    </div>
  );
}
