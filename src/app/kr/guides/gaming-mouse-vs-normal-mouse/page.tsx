import { Mouse } from "lucide-react";
import { SpecGuide } from "@/components/guides/SpecGuide";

export default function GamingMouseGuide() {
  return (
    <SpecGuide
      title="게이밍 마우스 vs 일반 마우스"
      category="Mouse"
      lastUpdated="2026-05-13"
      icon={Mouse}
      oneLineMeaning="단순 사무용을 넘어 0.1mm의 오차도 허용하지 않는 고정밀 입력 장치입니다."
      whatToCheckFirst="내 손 크기(F1~F12 기준)와 현재 마우스를 잡는 방법(그립법)을 먼저 확인하세요."
      pros={[
        "고성능 센서로 빠른 가속에도 끊김 없는 추적",
        "수천만 번 클릭을 견디는 고내구성 스위치",
        "소프트웨어를 통한 미세한 감도(DPI) 조절 가능",
        "경량화 설계를 통해 장시간 사용 시 손목 부담 감소"
      ]}
      cons={[
        "사무용 대비 상대적으로 높은 가격대",
        "무선 모델의 경우 주기적인 충전 필요",
        "특유의 화려한 디자인이 호불호를 탈 수 있음"
      ]}
      prePurchaseCheck={[
        "손 크기 대비 마우스의 등 부분이 너무 높지 않은가?",
        "좌우 대칭형인가, 비대칭형(오른손잡이용)인가?",
        "센서 등급이 최신 세대(PAW3395 이상 등)인가?",
        "무게가 60g 이하의 초경량 모델을 선호하는가?"
      ]}
      relatedTest={{
        name: "더블클릭 테스트",
        href: "/kr/tests/double-click"
      }}
    />
  );
}
