import { Keyboard } from "lucide-react";
import { SpecGuide } from "@/components/guides/SpecGuide";

export default function FullAluminumGuide() {
  return (
    <SpecGuide
      title="풀알루미늄 키보드 입문"
      category="Keyboard"
      lastUpdated="2026-05-13"
      icon={Keyboard}
      oneLineMeaning="플라스틱 대신 금속 소재를 하우징 전체에 사용하여 묵직하고 정갈한 타건감을 강조한 제품입니다."
      whatToCheckFirst="일반 키보드보다 훨씬 무거운 무게(2kg 내외)와 금속 특유의 질감을 선호하는지 고민해보세요."
      pros={[
        "플라스틱 특유의 통울림이 적어 보다 단단하고 정갈한 소리가 날 수 있습니다.",
        "무게감이 있어 타이핑 시 키보드가 밀리지 않고 안정적으로 고정될 수 있습니다.",
        "소재의 특성상 뒤틀림이 적고 내구성이 우수하게 느껴질 수 있습니다."
      ]}
      cons={[
        "무게가 매우 무거워 이동이나 휴대 시 불편함이 따를 수 있습니다.",
        "주변 온도에 민감하여 겨울철에는 표면이 매우 차갑게 느껴질 수 있습니다.",
        "가공 난이도로 인해 일반적인 제품보다 가격대가 높게 형성될 수 있습니다."
      ]}
      prePurchaseCheck={[
        "스위치를 직접 교체하며 취향을 찾아갈 수 있는 핫스왑 방식인지 확인해보세요.",
        "겨울철 정전기 등에 대비한 내부 절연 처리가 꼼꼼한지 살펴보는 것이 좋습니다.",
        "본인이 선호하는 타건감을 만들어줄 내부 구조(가스켓 등)인지 확인이 필요합니다.",
        "키 배열이 본인의 작업이나 게임 환경에 불편함이 없는지 다시 한번 체크해보세요."
      ]}
    />
  );
}
