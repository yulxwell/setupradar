import { Monitor, MousePointer2, Zap, Mouse, Keyboard } from "lucide-react";
import { TestCard } from "@/components/cards/Cards";

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
        <TestCard 
          title="불량화소 테스트" 
          description="색상별 전체화면을 통해 화면 속 작은 점(불량화소)이 있는지 확인합니다."
          href="/kr/tests/dead-pixel"
          icon={Monitor}
          duration="1~3분"
          purpose="화면 결함 유무 확인"
          caution="먼지를 닦으면 더 정확할 수 있습니다"
        />
        <TestCard 
          title="빛샘 / IPS Glow" 
          description="어두운 곳에서 화면 가장자리가 하얗게 들뜨는 현상을 점검합니다."
          href="/kr/tests/backlight-bleed"
          icon={Monitor}
          duration="2분"
          purpose="빛샘 및 패널 균일도 확인"
          caution="주변이 어두울 때 정확할 수 있습니다"
        />
        <TestCard 
          title="더블클릭 테스트" 
          description="한 번만 눌렀는데 두 번 클릭되는 마우스 고장 증상을 진단합니다."
          href="/kr/tests/double-click"
          icon={MousePointer2}
          duration="1분 내외"
          purpose="스위치 고장 가능성 확인"
          caution="브라우저 설정에 따라 다를 수 있습니다"
        />
        <TestCard 
          title="CPS 테스트" 
          description="1초당 몇 번의 클릭이 가능한지 자신의 속도를 측정해보세요."
          href="/kr/tests/cps"
          icon={Mouse}
          duration="5~30초"
          purpose="클릭 속도 및 반응 확인"
        />
        <TestCard 
          title="폴링레이트 측정" 
          description="마우스가 PC와 데이터를 주고받는 실제 속도를 확인합니다."
          href="/kr/tests/polling-rate"
          icon={Zap}
          duration="10초"
          purpose="전송 속도(Hz) 정상 여부 확인"
          caution="환경에 따라 오차가 있을 수 있습니다"
        />
        <TestCard 
          title="키보드 동시입력" 
          description="여러 키를 동시에 눌렀을 때 모두 잘 인식되는지 테스트합니다."
          href="/kr/tests/keyboard-rollover"
          icon={Keyboard}
          duration="1분"
          purpose="동시 입력(무한입력) 확인"
        />
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
