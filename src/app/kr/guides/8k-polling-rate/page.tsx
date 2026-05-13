import { Zap } from "lucide-react";
import { SpecGuide } from "@/components/guides/SpecGuide";

export default function PollingRateGuide() {
  return (
    <SpecGuide
      title="8K 폴링레이트, 필요한가요?"
      category="Performance"
      lastUpdated="2026-05-13"
      icon={Zap}
      oneLineMeaning="마우스가 PC에 데이터를 보내는 횟수를 늘려 움직임을 더 부드럽고 촘촘하게 만드는 기술입니다."
      whatToCheckFirst="사용 중인 모니터의 주사율(Hz)이 높을수록(240Hz 이상) 효과를 체감할 가능성이 커집니다."
      pros={[
        "고주사율 모니터에서 화면을 빠르게 돌릴 때 끊김이 적게 느껴질 수 있습니다.",
        "미세한 지연시간을 줄여 보다 즉각적인 반응이 가능할 수 있습니다.",
        "트래킹이 더 정교해져 정밀한 에이밍에 도움이 될 수 있습니다."
      ]}
      cons={[
        "PC 사양에 따라 CPU 점유율이 높아져 게임 프레임이 오히려 떨어질 수 있습니다.",
        "성능 위주의 작동 방식으로 인해 배터리 소모가 일반 모드보다 훨씬 빠를 수 있습니다.",
        "일부 게임에서는 화면이 튀는 등 호환성 문제가 발생할 수 있어 주의가 필요합니다."
      ]}
      prePurchaseCheck={[
        "자신의 PC가 고사양 게임과 8K 입력을 동시에 처리할 만큼 여유로운지 확인해보세요.",
        "사용 중인 모니터가 240Hz 이상의 환경인지 살펴보는 것이 좋습니다.",
        "무선 모델의 경우 8K 전용 수신기가 포함되어 있는지 확인이 필요합니다.",
        "배터리를 자주 충전해야 하는 번거로움보다 성능을 우선하는지 고민해보세요."
      ]}
      relatedTest={{
        name: "폴링레이트 측정",
        href: "/kr/tests/polling-rate"
      }}
    />
  );
}
