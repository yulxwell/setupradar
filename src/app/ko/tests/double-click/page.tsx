import { Metadata } from "next";
import { DoubleClickTest } from "@/components/tests/DoubleClickTest";
import { DisclaimerBox } from "@/components/common/Common";

export const metadata: Metadata = {
  title: "마우스 더블클릭 테스트 | SetupRadar",
  description: "마우스 스위치 노후화로 인한 비정상 중복 입력을 정밀 진단합니다.",
};

export default function DoubleClickPage() {
  return (
    <div className="mx-auto max-w-4xl py-12 px-4 md:py-20">
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">더블클릭 테스트</h1>
        <p className="mx-auto max-w-lg text-slate-400">
          마우스 버튼을 한 번 눌렀는데 두 번 클릭되는 현상을 확인합니다.
          클릭 간격을 분석하여 기계적 결함 여부를 진단합니다.
        </p>
      </div>

      <div className="mb-12">
        <DoubleClickTest />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6 md:p-8">
          <h2 className="mb-4 text-xl font-bold text-white">진단 기준 안내</h2>
          <p className="mb-6 text-sm text-slate-500 leading-relaxed">
            일반적인 사용자가 의도적으로 더블클릭을 하는 간격은 보통 150ms 이상입니다. 
            만약 <span className="text-white font-bold">80ms(0.08초) 이하</span>의 간격으로 중복 입력이 발생한다면 하드웨어 결함(채터링)일 확률이 매우 높습니다.
          </p>
          <div className="flex items-center gap-4 border-t border-white/5 pt-6">
            <div className="text-center flex-1">
              <p className="text-xs font-bold text-slate-500 mb-1 uppercase tracking-tighter">정상 범위</p>
              <p className="text-lg font-bold text-emerald-500">100ms +</p>
            </div>
            <div className="h-8 w-[1px] bg-white/5" />
            <div className="text-center flex-1">
              <p className="text-xs font-bold text-slate-500 mb-1 uppercase tracking-tighter">결함 의심</p>
              <p className="text-lg font-bold text-red-500">80ms -</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6 md:p-8">
            <h2 className="mb-2 text-xl font-bold text-white">참고사항</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              마우스 설정에서 '클릭 속도'가 너무 빠르게 되어 있거나, 일부 고성능 게이밍 마우스의 '디바운스 타임' 설정에 따라 결과가 다를 수 있습니다.
            </p>
          </div>
          <DisclaimerBox className="bg-slate-900/50 border-white/5" />
        </div>
      </div>
    </div>
  );
}
