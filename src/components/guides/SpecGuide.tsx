import { LucideIcon, CheckCircle2, ArrowRight, Info, Zap, AlertTriangle, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { DisclaimerBox } from "@/components/common/Common";

interface SpecGuideProps {
  title: string;
  category: string;
  lastUpdated: string;
  icon: LucideIcon;
  oneLineMeaning: string;
  whatToCheckFirst: string;
  pros: string[];
  cons: string[];
  prePurchaseCheck: string[];
  relatedTest?: {
    name: string;
    href: string;
  };
}

export function SpecGuide({
  title,
  category,
  lastUpdated,
  icon: Icon,
  oneLineMeaning,
  whatToCheckFirst,
  pros,
  cons,
  prePurchaseCheck,
  relatedTest
}: SpecGuideProps) {
  return (
    <div className="mx-auto max-w-4xl pb-20 px-4">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-8">
        <div>
          <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            {category} Guide • {lastUpdated}
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">{title}</h1>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
          <Icon className="h-6 w-6" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          {/* 한 줄 뜻 */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight">
              <Info className="h-4 w-4 text-blue-500" />
              한 줄 뜻
            </h2>
            <p className="text-lg font-medium leading-relaxed text-slate-700 dark:text-slate-300 bg-blue-50/50 dark:bg-blue-900/10 p-5 rounded-2xl border border-blue-100 dark:border-blue-900/20">
              {oneLineMeaning}
            </p>
          </section>

          {/* 먼저 확인할 것 */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight">
              <Search className="h-4 w-4 text-slate-500" />
              먼저 확인할 것
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {whatToCheckFirst}
            </p>
          </section>

          {/* 좋은 점 & 주의점 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="rounded-2xl bg-emerald-50/50 dark:bg-emerald-900/5 p-6 border border-emerald-100 dark:border-emerald-900/20">
              <h2 className="mb-4 flex items-center gap-2 text-sm font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-tight">
                <Zap className="h-4 w-4" />
                좋은 점
              </h2>
              <ul className="space-y-3">
                {pros.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-2xl bg-amber-50/50 dark:bg-amber-900/5 p-6 border border-amber-100 dark:border-amber-900/20">
              <h2 className="mb-4 flex items-center gap-2 text-sm font-bold text-amber-700 dark:text-amber-400 uppercase tracking-tight">
                <AlertTriangle className="h-4 w-4" />
                주의점
              </h2>
              <ul className="space-y-3">
                {cons.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Sidebar: 구매 전 체크 */}
        <aside className="space-y-6">
          <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm sticky top-24">
            <h2 className="mb-6 flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight">
              <ShoppingBag className="h-4 w-4 text-blue-500" />
              구매 전 체크
            </h2>
            <ul className="space-y-4">
              {prePurchaseCheck.map((item, i) => (
                <li key={i} className="flex items-start gap-3 border-b border-slate-50 dark:border-slate-800 pb-4 last:border-0 last:pb-0">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500">
                    {i + 1}
                  </div>
                  <p className="text-xs font-medium leading-normal text-slate-700 dark:text-slate-300">{item}</p>
                </li>
              ))}
            </ul>

            {relatedTest && (
              <Link 
                href={relatedTest.href}
                className="mt-8 flex items-center justify-between rounded-xl bg-slate-900 dark:bg-white p-4 text-white dark:text-black transition-all hover:bg-slate-800 dark:hover:bg-slate-100"
              >
                <div className="text-left">
                  <p className="text-[9px] font-bold uppercase tracking-widest opacity-70 mb-1">Recommended</p>
                  <p className="text-xs font-bold">{relatedTest.name}</p>
                </div>
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </section>
          
          <DisclaimerBox className="bg-transparent border-0 p-0 text-slate-400" />
        </aside>
      </div>
    </div>
  );
}
