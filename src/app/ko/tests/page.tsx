import { Monitor, MousePointer2, Zap, Mouse } from "lucide-react";
import { TestCard } from "@/components/cards/Cards";

export default function TestsPage() {
  return (
    <div className="mx-auto max-w-6xl py-16 px-4 md:py-24">
      <div className="mb-16 text-left border-b border-slate-100 dark:border-slate-800 pb-8">
        <h1 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-5xl">하드웨어 진단 도구</h1>
        <p className="max-w-lg text-slate-500 dark:text-slate-400">
          모니터와 마우스의 상태를 브라우저에서 즉시 확인할 수 있습니다.
          모든 테스트는 별도의 프로그램 설치가 필요하지 않습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <TestCard 
          title="불량화소 테스트" 
          description="9가지 색상 전채화면을 통해 데드픽셀, 휘점, 암점을 완벽하게 찾아냅니다."
          href="/ko/tests/dead-pixel"
          icon={Monitor}
          duration="1~3분"
          purpose="픽셀 결함 점검"
          caution="화면 먼지를 미리 닦아주세요"
        />
        <TestCard 
          title="빛샘 / IPS Glow" 
          description="어두운 화면에서 패널의 조명 균일도와 시야각 특성을 확인합니다."
          href="/ko/tests/backlight-bleed"
          icon={Monitor}
          duration="2분"
          purpose="백라이트 품질 체크"
          caution="어두운 환경에서 정확합니다"
        />
        <TestCard 
          title="더블클릭 테스트" 
          description="마우스 스위치 노후화로 인한 비정상적인 중복 입력을 진단합니다."
          href="/ko/tests/double-click"
          icon={MousePointer2}
          duration="1분 내외"
          purpose="스위치 채터링 점검"
          caution="마우스 설정에 따라 다를 수 있음"
        />
        <TestCard 
          title="CPS 테스트" 
          description="자신의 클릭 속도(Clicks Per Second) 등급을 측정해 보세요."
          href="/ko/tests/cps"
          icon={Mouse}
          duration="5~30초"
          purpose="클릭 피지컬 측정"
        />
        <TestCard 
          title="폴링레이트 측정" 
          description="마우스 전송 속도(Hz)가 설정값만큼 정상적으로 나오는지 측정합니다."
          href="/ko/tests/polling-rate"
          icon={Zap}
          duration="10초"
          purpose="데이터 전송률 확인"
          caution="브라우저 환경의 한계가 있음"
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
