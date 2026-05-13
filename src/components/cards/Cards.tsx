import Link from "next/link";
import { LucideIcon, ArrowRight, Clock, Target, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  duration?: string;
  purpose?: string;
  caution?: string;
}

export function TestCard({ title, description, href, icon: Icon, duration, purpose, caution }: TestCardProps) {
  return (
    <Link 
      href={href}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-blue-500 hover:shadow-lg active:scale-[0.98] dark:border-slate-800 dark:bg-slate-900/40"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:bg-blue-900/20 dark:group-hover:text-blue-400">
        <Icon className="h-6 w-6" />
      </div>
      
      <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {description}
      </p>

      {(duration || purpose || caution) && (
        <div className="mb-6 space-y-2 border-t border-slate-100 pt-4 dark:border-slate-800">
          {duration && (
            <div className="flex items-center gap-2 text-[11px] font-medium text-slate-500 dark:text-slate-400">
              <Clock className="h-3 w-3 text-slate-400" />
              <span>소요 시간: {duration}</span>
            </div>
          )}
          {purpose && (
            <div className="flex items-center gap-2 text-[11px] font-medium text-slate-500 dark:text-slate-400">
              <Target className="h-3 w-3 text-slate-400" />
              <span>용도: {purpose}</span>
            </div>
          )}
          {caution && (
            <div className="flex items-center gap-2 text-[11px] font-medium text-amber-600 dark:text-amber-400">
              <AlertTriangle className="h-3 w-3 shrink-0" />
              <span>주의: {caution}</span>
            </div>
          )}
        </div>
      )}

      <div className="mt-auto flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors">
        테스트 시작하기 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

interface GuideCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export function GuideCard({ title, description, href, icon: Icon }: GuideCardProps) {
  return (
    <Link 
      href={href}
      className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900/20 dark:hover:border-slate-700 dark:hover:bg-slate-900/40"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 group-hover:bg-white dark:bg-slate-800 dark:text-slate-500">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <h4 className="mb-1 text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h4>
        <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-500">{description}</p>
      </div>
    </Link>
  );
}
