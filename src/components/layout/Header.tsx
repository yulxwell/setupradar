"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Monitor, MousePointer2, Keyboard, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "테스트 도구", href: "/ko/tests", icon: Monitor },
  { name: "구매 가이드", href: "/ko/guides", icon: Keyboard },
  { name: "장비 찾기", href: "/ko/finder/mouse-fit", icon: Search },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.05] bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/ko" className="flex items-center gap-2 transition-opacity hover:opacity-90">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Monitor className="h-5 w-5" />
            </div>
            <span className="font-outfit text-xl font-black tracking-tight text-white">SetupRadar</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition-all",
                    isActive 
                      ? "bg-white/5 text-blue-400" 
                      : "text-slate-400 hover:bg-white/5 hover:text-slate-100"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/ko/tests" 
            className="hidden sm:flex h-10 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-bold text-white transition-all hover:bg-blue-500"
          >
            시작하기
          </Link>
          
          <button 
            className="flex md:hidden p-2 text-slate-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.05] bg-slate-950 px-4 py-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-xl p-4 text-base font-bold",
                  pathname.startsWith(item.href) ? "bg-blue-500/10 text-blue-400" : "text-slate-400"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
            <Link 
              href="/ko/tests" 
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex h-14 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white"
            >
              테스트 시작하기
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
