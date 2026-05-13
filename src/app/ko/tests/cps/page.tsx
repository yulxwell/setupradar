import { Metadata } from "next";
import { CpsTest } from "@/components/tests/CpsTest";
import { DisclaimerBox } from "@/components/common/Common";

export const metadata: Metadata = {
  title: "마우스 클릭 속도 측정 (CPS) | SetupRadar",
  description: "당신의 클릭 속도는 상위 몇 %? 초당 클릭 횟수(CPS)를 측정하고 최고 기록을 확인하세요.",
};

export default function CpsPage() {
  return (
    <div className="mx-auto max-w-4xl py-12 px-4 md:py-20">
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">CPS 테스트</h1>
        <p className="mx-auto max-w-lg text-slate-400">
          초당 클릭 횟수(Clicks Per Second)를 측정합니다.
          모드(시간)를 선택한 뒤 화면을 연사로 클릭하여 자신의 실력을 확인해보세요.
        </p>
      </div>

      <div className="mb-12">
        <CpsTest />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6 md:p-8">
          <h2 className="mb-4 text-xl font-bold text-white">클릭 등급 가이드</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-sm font-bold text-slate-300">거북이</span>
              <span className="text-sm font-bold text-slate-500">0 ~ 5 CPS</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-sm font-bold text-blue-400">인간</span>
              <span className="text-sm font-bold text-slate-500">6 ~ 9 CPS</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-sm font-bold text-amber-500">프로게이머</span>
              <span className="text-sm font-bold text-slate-500">10 ~ 13 CPS</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-sm font-bold text-red-500">치타</span>
              <span className="text-sm font-bold text-slate-500">14+ CPS</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6 md:p-8 text-sm text-slate-500 leading-relaxed">
            최고 기록은 현재 사용 중인 기기의 브라우저(LocalStorage)에만 안전하게 저장됩니다. 서버로 전송되거나 공유되지 않습니다.
          </div>
          <DisclaimerBox className="bg-slate-900/50 border-white/5" />
        </div>
      </div>
    </div>
  );
}
