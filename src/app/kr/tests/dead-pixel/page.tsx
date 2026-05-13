import { Metadata } from "next";
import { DeadPixelTest } from "@/components/tests/DeadPixelTest";
import { DisclaimerBox } from "@/components/common/Common";

export const metadata: Metadata = {
  title: "모니터 불량화소 테스트 | SetupRadar",
  description: "모니터 구매 직후 결함(데드픽셀, 휘점, 암점)을 색상별로 꼼꼼히 확인하세요.",
};

export default function DeadPixelPage() {
  return (
    <div className="mx-auto max-w-4xl py-12 px-4 md:py-20">
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">불량화소 테스트</h1>
        <p className="mx-auto max-w-lg text-slate-400">
          모니터 패널의 데드픽셀, 휘점, 암점을 여러 색상에서 확인합니다.
          전체화면 모드로 진단하는 것이 가장 정확합니다.
        </p>
      </div>

      <div className="mb-10">
        <DeadPixelTest />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6 md:p-8">
          <h2 className="mb-4 text-xl font-bold text-white">테스트 방법</h2>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-[10px] font-bold text-blue-500 border border-blue-500/20">1</span>
              <span>모니터 화면의 먼지를 깨끗하게 닦아주세요.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-[10px] font-bold text-blue-500 border border-blue-500/20">2</span>
              <span>&apos;테스트 시작&apos;을 눌러 전체화면 모드로 진입합니다.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-[10px] font-bold text-blue-500 border border-blue-500/20">3</span>
              <span>마우스 클릭이나 방향키로 색상을 변경하며 관찰하세요.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-[10px] font-bold text-blue-500 border border-blue-500/20">4</span>
              <span>종료하려면 ESC 키를 누르거나 화면의 X 버튼을 클릭합니다.</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-white">무엇을 확인하나요?</h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wide mb-1">휘점 (Bright Pixel)</p>
                <p className="text-[13px] text-slate-500 leading-relaxed">검은색 화면에서 혼자 밝게 빛나는 픽셀</p>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wide mb-1">암점 (Dark Pixel)</p>
                <p className="text-[13px] text-slate-500 leading-relaxed">흰색/유채색 화면에서 검게 보이거나 색이 안 나오는 픽셀</p>
              </div>
            </div>
          </div>
          <DisclaimerBox className="bg-slate-900/50 border-white/5" />
        </div>
      </div>
    </div>
  );
}
