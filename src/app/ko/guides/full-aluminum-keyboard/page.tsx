import { Keyboard } from "lucide-react";
import { SpecGuide } from "@/components/guides/SpecGuide";

export default function FullAluminumGuide() {
  return (
    <SpecGuide
      title="풀알루미늄 키보드 입문"
      category="Keyboard"
      lastUpdated="2026-05-13"
      icon={Keyboard}
      oneLineMeaning="플라스틱 하우징 대신 금속 통짜 하우징을 사용하여 묵직하고 정갈한 타건감을 극대화한 키보드입니다."
      whatToCheckFirst="내 책상의 공간과 무거운 키보드(보통 2kg+)를 수용할 수 있는지 확인하세요."
      pros={[
        "통울림 없는 정갈하고 단단한 타건음",
        "묵직한 무게감으로 타건 시 키보드 밀림 현상 완벽 방지",
        "금속 특유의 고급스러운 질감과 뛰어난 내구성"
      ]}
      cons={[
        "휴대가 거의 불가능한 무거운 무게",
        "겨울철에 표면이 매우 차가워질 수 있음",
        "플라스틱 모델 대비 비싼 가격"
      ]}
      prePurchaseCheck={[
        "스위치 교체가 자유로운 핫스왑(Hot-swap) 방식인가?",
        "정전기 방지를 위한 내부 절연 처리가 되어 있는가?",
        "가스켓 마운트 등 충격 흡수 구조를 채택했는가?",
        "VIA/QMK 등 키 매핑 소프트웨어를 지원하는가?"
      ]}
    />
  );
}
