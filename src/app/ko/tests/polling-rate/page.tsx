import { Metadata } from "next";
import { PollingRateTest } from "@/components/tests/PollingRateTest";
import { DisclaimerBox } from "@/components/common/Common";

export const metadata: Metadata = {
  title: "마우스 폴링레이트 측정 | SetupRadar",
  description: "마우스의 실제 전송 속도(Hz)를 실시간으로 측정하여 성능을 확인하세요.",
};

export default function PollingRatePage() {
  return (
    <div className="mx-auto max-w-4xl py-12 px-4 md:py-20">
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">폴링레이트 측정</h1>
        <p className="mx-auto max-w-lg text-slate-400">
          마우스와 PC가 데이터를 주고받는 빈도(Hz)를 측정합니다.
          움직임이 빠를수록 더 정확한 최대치를 측정할 수 있습니다.
        </p>
      </div>

      <div className="mb-12">
        <PollingRateTest />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6 md:p-8">
          <h2 className="mb-4 text-xl font-bold text-white">결과 읽는 법</h2>
          <div className="space-y-4 text-sm leading-relaxed text-slate-500">
            <p>
              <strong className="text-slate-300">125Hz:</strong> 일반적인 사무용 마우스 수준 (8ms 지연)
            </p>
            <p>
              <strong className="text-slate-300">500Hz:</strong> 보급형 게이밍 마우스 수준 (2ms 지연)
            </p>
            <p>
              <strong className="text-slate-300">1000Hz (1K):</strong> 표준 게이밍 마우스 수준 (1ms 지연)
            </p>
            <p>
              <strong className="text-slate-300">4000Hz ~ 8000Hz:</strong> 하이엔드 게이밍 마우스 (0.25~0.125ms 지연)
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6 md:p-8 text-sm text-slate-500 leading-relaxed">
            <p className="mb-2">측정값이 설정값보다 낮게 나온다면?</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>마우스 움직임이 충분히 빠르지 않음</li>
              <li>모니터 주사율이 낮게 설정됨</li>
              <li>USB 허브나 블루투스 연결 사용 중</li>
            </ul>
          </div>
          <DisclaimerBox className="bg-slate-900/50 border-white/5" />
        </div>
      </div>
    </div>
  );
}
