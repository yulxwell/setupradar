import { Monitor, MousePointer2, Zap, Mouse, Keyboard } from "lucide-react";
import { TestCard } from "@/components/cards/Cards";

export default function TestsPage() {
  return (
    <div className="mx-auto max-w-6xl py-16 px-4 md:py-28">
      <div className="relative mb-16 overflow-hidden rounded-3xl bg-slate-900 px-8 py-12 text-center md:px-12 md:py-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-500">
          <Monitor className="h-6 w-6" />
        </div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">하드웨어 진단 도구</h1>
        <p className="mx-auto max-w-xl text-slate-400 md:text-lg">
          모니터와 마우스의 상태를 브라우저에서 즉시 확인하세요. <br className="hidden md:block" />
          모든 테스트는 소프트웨어 설치 없이 완전 무료로 제공됩니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <TestCard 
          title="불량화소 테스트" 
          description="9가지 색상 전채화면을 통해 데드픽셀, 휘점, 암점을 완벽하게 찾아냅니다."
          href="/kr/tests/dead-pixel"
          icon={Monitor}
          duration="1~3분"
          purpose="픽셀 결함 점검"
          caution="화면 먼지를 미리 닦아주세요"
        />
        <TestCard 
          title="빛샘 / IPS Glow" 
          description="어두운 화면에서 패널의 조명 균일도와 시야각 특성을 확인합니다."
          href="/kr/tests/backlight-bleed"
          icon={Monitor}
          duration="2분"
          purpose="백라이트 품질 체크"
          caution="어두운 환경에서 정확합니다"
        />
        <TestCard 
          title="더블클릭 테스트" 
          description="마우스 스위치 노후화로 인한 비정상적인 중복 입력을 진단합니다."
          href="/kr/tests/double-click"
          icon={MousePointer2}
          duration="1분 내외"
          purpose="스위치 채터링 점검"
          caution="마우스 설정에 따라 다를 수 있음"
        />
        <TestCard 
          title="CPS 테스트" 
          description="자신의 클릭 속도(Clicks Per Second) 등급을 측정해 보세요."
          href="/kr/tests/cps"
          icon={Mouse}
          duration="5~30초"
          purpose="클릭 피지컬 측정"
        />
        <TestCard 
          title="폴링레이트 측정" 
          description="마우스 전송 속도(Hz)가 설정값만큼 정상적으로 나오는지 측정합니다."
          href="/kr/tests/polling-rate"
          icon={Zap}
          duration="10초"
          purpose="데이터 전송률 확인"
          caution="브라우저 환경의 한계가 있음"
        />
        <TestCard 
          title="키보드 동시입력" 
          description="여러 키를 동시에 눌렀을 때의 인식 개수와 누락 여부를 테스트합니다."
          href="/kr/tests/keyboard-rollover"
          icon={Keyboard}
          duration="1분"
          purpose="N-Key Rollover 확인"
        />
      </div>

      <div className="mt-20 rounded-3xl bg-slate-50 dark:bg-slate-900/40 p-10 text-center border border-slate-100 dark:border-slate-800">
        <h2 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">준비 중인 테스트</h2>
        <p className="text-sm text-slate-500">
          키보드 무한 동시입력, 모니터 잔상 테스트 등이 곧 추가될 예정입니다.
        </p>
      </div>
    </div>
  );
}
