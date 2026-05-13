import { AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface DisclaimerBoxProps {
  className?: string;
  type?: "info" | "warning";
}

export function DisclaimerBox({ className, type = "info" }: DisclaimerBoxProps) {
  return (
    <div className={cn(
      "rounded-2xl p-5 flex gap-4 border",
      type === "info" 
        ? "bg-blue-50/50 border-blue-100 text-blue-800 dark:bg-blue-900/10 dark:border-blue-900/20 dark:text-blue-400"
        : "bg-amber-50/50 border-amber-100 text-amber-800 dark:bg-amber-900/10 dark:border-amber-900/20 dark:text-amber-400",
      className
    )}>
      {type === "info" ? <Info className="h-5 w-5 shrink-0" /> : <AlertCircle className="h-5 w-5 shrink-0" />}
      <div className="space-y-1">
        <p className="text-xs font-bold uppercase tracking-widest opacity-80">Disclaimer</p>
        <p className="text-[11px] leading-relaxed font-medium">
          본 테스트 결과는 브라우저 환경 및 측정 시점의 시스템 상태에 영향을 받을 수 있습니다. 
          전문적인 진단이나 교환 판정의 절대적인 근거가 될 수 없으므로, 참고용으로만 활용해 주시기 바랍니다.
        </p>
      </div>
    </div>
  );
}

export function SectionTitle({ title, description, badge }: { title: string; description?: string; badge?: string }) {
  return (
    <div className="mb-10">
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-blue-600 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
          {badge}
        </span>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-sm text-slate-500 max-w-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export function ComingSoonBox({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[2rem] border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 p-12 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 shadow-sm">
        <Info className="h-8 w-8 text-slate-300 dark:text-slate-600" />
      </div>
      <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
      <p className="max-w-xs text-sm text-slate-500">{description}</p>
    </div>
  );
}

