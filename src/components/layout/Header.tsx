"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Monitor, Keyboard, Search, Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/ThemeProvider";

const navigation = [
  { name: "테스트 도구", href: "/kr/tests", icon: Monitor },
  { name: "구매 가이드", href: "/kr/guides", icon: Keyboard },
  { name: "마우스 찾기", href: "/kr/finder/mouse-fit", icon: Search },
  { name: "키보드 찾기", href: "/kr/finder/keyboard-fit", icon: Search },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/kr" className="flex items-center gap-2 transition-opacity hover:opacity-90">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)] text-[var(--background)]">
              <Monitor className="h-5 w-5" />
            </div>
            <span className="font-outfit text-xl font-black tracking-tight text-[var(--primary)]">SetupRadar</span>
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
                      ? "bg-[var(--secondary)] text-[var(--accent)]" 
                      : "text-[var(--muted)] hover:bg-[var(--secondary)] hover:text-[var(--primary)]"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] transition-all hover:bg-[var(--secondary)] hover:text-[var(--primary)]"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>

          <Link 
            href="/kr/tests" 
            className="hidden sm:flex h-10 items-center justify-center rounded-lg bg-[var(--primary)] px-5 text-sm font-bold text-[var(--background)] transition-all hover:opacity-90"
          >
            시작하기
          </Link>
          
          <button 
            className="flex md:hidden p-2 text-[var(--muted)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)] px-4 py-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-xl p-4 text-base font-bold",
                  pathname.startsWith(item.href) ? "bg-[var(--secondary)] text-[var(--accent)]" : "text-[var(--muted)]"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
            <Link 
              href="/kr/tests" 
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex h-14 items-center justify-center rounded-xl bg-[var(--primary)] text-lg font-bold text-[var(--background)]"
            >
              테스트 시작하기
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
