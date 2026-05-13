import { Moon } from "lucide-react";
import { SpecGuide } from "@/components/guides/SpecGuide";

export default function BacklightBleedGuide() {
  return (
    <SpecGuide
      title="빛샘 vs IPS Glow"
      category="Monitor"
      lastUpdated="2026-05-13"
      icon={Moon}
      oneLineMeaning="어두운 화면에서 빛이 새어 나오는 현상 중, 결함(빛샘)과 특성(Glow)을 구분하는 기준입니다."
      whatToCheckFirst="방의 불을 끄고 모니터 밝기를 100%로 높인 뒤, 정면에서 1m 이상 떨어져서 확인하세요."
      pros={[
        "IPS 패널 특유의 넓은 시야각과 화사한 색감 제공",
        "심하지 않은 Glow는 실사용 시 거의 느껴지지 않음"
      ]}
      cons={[
        "어두운 방에서 공포 영화나 게임 시 몰입도를 해칠 수 있음",
        "빛샘이 심할 경우 특정 영역의 색왜곡이 발생함"
      ]}
      prePurchaseCheck={[
        "각도를 바꿔도 빛의 위치가 변하지 않는가? (그렇다면 빛샘/불량 확률 높음)",
        "각도에 따라 빛이 사라지거나 색이 변하는가? (그렇다면 IPS Glow/정상)",
        "테두리 마감 사이로 직접적인 백라이트 빛이 보이는가?",
        "블랙 표현이 중요한 작업을 주로 하는가? (그렇다면 VA/OLED 추천)"
      ]}
      relatedTest={{
        name: "빛샘 측정하기",
        href: "/ko/tests/backlight-bleed"
      }}
    />
  );
}
