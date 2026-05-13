import { Monitor, Mail, Globe } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-slate-950 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <Link href="/ko" className="flex items-center gap-2 mb-6">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-600 text-white">
                <Monitor className="h-4 w-4" />
              </div>
              <span className="font-outfit text-lg font-bold tracking-tight text-white">SetupRadar</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              하드웨어 성능을 가장 쉽고 빠르게 진단합니다. <br />
              내 소중한 장비, 제대로 사용하고 있는지 지금 바로 확인해 보세요.
            </p>
          </div>
          
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-300">테스트</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/ko/tests/dead-pixel" className="hover:text-blue-400 transition-colors">모니터 불량화소</Link></li>
              <li><Link href="/ko/tests/backlight-bleed" className="hover:text-blue-400 transition-colors">빛샘 / IPS Glow</Link></li>
              <li><Link href="/ko/tests/double-click" className="hover:text-blue-400 transition-colors">마우스 더블클릭</Link></li>
              <li><Link href="/ko/tests/polling-rate" className="hover:text-blue-400 transition-colors">마우스 폴링레이트</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-300">리소스</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/ko/guides" className="hover:text-blue-400 transition-colors">구매 가이드</Link></li>
              <li><Link href="/ko/finder/mouse-fit" className="hover:text-blue-400 transition-colors">마우스 핏(준비 중)</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-300">연락처</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@setupradar.com</span>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <Link href="#" className="hover:text-white transition-colors"><Globe className="h-5 w-5" /></Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-medium text-slate-600">
            © 2026 SetupRadar. All rights reserved. 본 서비스에서 제공하는 정보는 참고용입니다.
          </p>
          <div className="flex items-center gap-6 text-[11px] font-bold text-slate-600">
            <Link href="#" className="hover:text-slate-400">개인정보처리방침</Link>
            <Link href="#" className="hover:text-slate-400">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
