import { ComingSoonBox } from "@/components/common/Common";
import Link from "next/link";
import { ChevronLeft, MousePointer2, Ruler, Hand } from "lucide-react";

export const metadata = {
  title: "Mouse Fit Finder | SetupRadar",
  description: "나의 손 크기와 파지법에 맞는 최적의 마우스를 찾아보세요",
};

export default function MouseFitPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link 
        href="/ko" 
        className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        메인으로 돌아가기
      </Link>

      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">Mouse Fit Finder</h1>
        <p className="text-zinc-400">데이터 기반으로 당신의 인생 마우스를 추천해 드립니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="flex flex-col items-center p-6 rounded-2xl bg-zinc-900/50 border border-white/5 opacity-50">
          <Ruler className="h-10 w-10 text-blue-500 mb-4" />
          <h3 className="font-bold text-white mb-2">1. 손 크기 측정</h3>
          <p className="text-xs text-zinc-500 text-center">F1~F12 기준의 손 크기를 입력합니다.</p>
        </div>
        <div className="flex flex-col items-center p-6 rounded-2xl bg-zinc-900/50 border border-white/5 opacity-50">
          <Hand className="h-10 w-10 text-blue-500 mb-4" />
          <h3 className="font-bold text-white mb-2">2. 파지법 선택</h3>
          <p className="text-xs text-zinc-500 text-center">팜, 클로, 핑거팁 그립 중 선호하는 방식을 고릅니다.</p>
        </div>
        <div className="flex flex-col items-center p-6 rounded-2xl bg-zinc-900/50 border border-white/5 opacity-50">
          <MousePointer2 className="h-10 w-10 text-blue-500 mb-4" />
          <h3 className="font-bold text-white mb-2">3. 맞춤형 추천</h3>
          <p className="text-xs text-zinc-500 text-center">무게, 크기, 성능을 고려한 제품 리스트를 보여줍니다.</p>
        </div>
      </div>

      <ComingSoonBox 
        title="Mouse Fit Finder" 
        description="사용자의 손 크기와 그립법에 최적화된 마우스를 추천해 드리는 기능입니다. 현재 알고리즘 고도화 작업 중입니다." 
      />
    </div>
  );
}
