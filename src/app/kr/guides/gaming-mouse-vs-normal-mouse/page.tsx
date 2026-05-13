import { Mouse } from "lucide-react";
import { SpecGuide } from "@/components/guides/SpecGuide";

export default function GamingMouseGuide() {
  return (
    <SpecGuide
      title="게이밍 마우스 vs 일반 마우스"
      category="Mouse"
      lastUpdated="2026-05-13"
      icon={Mouse}
      oneLineMeaning="단순 사무용을 넘어 세밀한 조작과 빠른 반응이 필요한 환경을 위한 고정밀 장치입니다."
      whatToCheckFirst="본인의 손 크기와 평소 마우스를 쥐는 습관(그립법)에 따라 체감이 크게 다를 수 있습니다."
      pros={[
        "고성능 센서로 빠른 움직임에도 포인터가 정확하게 따라올 수 있습니다.",
        "내구성이 강화된 스위치를 사용하여 클릭 불량 가능성을 낮출 수 있습니다.",
        "DPI 조절 기능을 통해 본인에게 딱 맞는 속도를 찾기 용이합니다.",
        "가벼운 무게로 설계된 모델은 장시간 사용 시 손목 피로를 줄여줄 수 있습니다."
      ]}
      cons={[
        "사무용 제품에 비해 가격대가 높게 형성되어 있을 수 있습니다.",
        "배터리 효율보다 성능 위주로 설계된 무선 모델은 충전 주기가 짧을 수 있습니다.",
        "디자인이나 조명 효과가 환경에 따라 다소 화려하게 느껴질 수 있습니다."
      ]}
      prePurchaseCheck={[
        "마우스의 등 높이가 본인의 손바닥 굴곡과 잘 맞는지 확인이 필요합니다.",
        "좌우 대칭형과 비대칭형 중 평소 편안함을 느끼는 형태를 확인해보세요.",
        "자신의 주력 게임이나 작업 환경에서 요구하는 성능(센서 등)인지 살펴보세요.",
        "무게가 너무 가볍거나 무거우면 적응에 시간이 걸릴 수 있으니 주의가 필요합니다."
      ]}
      relatedTest={{
        name: "더블클릭 테스트",
        href: "/kr/tests/double-click"
      }}
    />
  );
}
