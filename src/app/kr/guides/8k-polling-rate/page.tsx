import { Zap } from "lucide-react";
import { SpecGuide } from "@/components/guides/SpecGuide";

export default function PollingRateGuide() {
  return (
    <SpecGuide
      title="8K 폴링레이트, 필요한가요?"
      category="Performance"
      lastUpdated="2026-05-13"
      icon={Zap}
      oneLineMeaning="마우스가 PC에 데이터를 보내는 횟수를 초당 8,000번까지 늘려 지연시간을 극한으로 줄이는 기술입니다."
      whatToCheckFirst="사용 중인 모니터의 주사율(Hz)과 CPU의 성능(최소 i7 이상 권장)을 확인하세요."
      pros={[
        "마우스 트래킹이 더 부드럽고 촘촘하게 느껴짐",
        "클릭 지연시간(Click Latency)을 수치상 최소화",
        "고주사율(240Hz+) 모니터에서 화면 밀림 현상 방지"
      ]}
      cons={[
        "CPU 점유율이 급격히 상승하여 게임 프레임 드랍 발생 가능",
        "무선 사용 시 배터리 소모량이 1K 대비 몇 배 빠름",
        "일부 구형 게임에서 시야가 튀는 호환성 문제 발생 가능"
      ]}
      prePurchaseCheck={[
        "내 모니터가 최소 240Hz 이상의 고주사율인가?",
        "주로 즐기는 게임이 8K 고주사율 입력을 지원하는가?",
        "전용 8K 리시버(동글)가 기본 포함된 제품인가?",
        "배터리 수명보다 퍼포먼스를 더 중요하게 생각하는가?"
      ]}
      relatedTest={{
        name: "폴링레이트 측정",
        href: "/kr/tests/polling-rate"
      }}
    />
  );
}
