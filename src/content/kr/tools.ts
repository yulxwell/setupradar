export interface ToolContent {
  id: string;
  title: string;
  description: string;
  iconName: string; // We'll map this to the component
  duration: string;
  purpose: string;
  caution?: string;
  href: string;
}

export const TEST_TOOLS: ToolContent[] = [
  {
    id: "dead-pixel",
    title: "불량화소 테스트",
    description: "색상별 전체화면을 통해 화면 속 작은 점(불량화소)이 있는지 확인합니다.",
    iconName: "Monitor",
    duration: "1~3분",
    purpose: "화면 결함 유무 확인",
    caution: "먼지를 닦으면 더 정확할 수 있습니다",
    href: "/kr/tests/dead-pixel",
  },
  {
    id: "backlight-bleed",
    title: "빛샘 / IPS Glow",
    description: "어두운 곳에서 화면 가장자리가 하얗게 들뜨는 현상을 점검합니다.",
    iconName: "Monitor",
    duration: "2분",
    purpose: "빛샘 및 패널 균일도 확인",
    caution: "주변이 어두울 때 정확할 수 있습니다",
    href: "/kr/tests/backlight-bleed",
  },
  {
    id: "double-click",
    title: "더블클릭 테스트",
    description: "한 번만 눌렀는데 두 번 클릭되는 마우스 고장 증상을 진단합니다.",
    iconName: "MousePointer2",
    duration: "1분 내외",
    purpose: "스위치 고장 가능성 확인",
    caution: "브라우저 설정에 따라 다를 수 있습니다",
    href: "/kr/tests/double-click",
  },
  {
    id: "cps",
    title: "CPS 테스트",
    description: "1초당 몇 번의 클릭이 가능한지 자신의 속도를 측정해보세요.",
    iconName: "Mouse",
    duration: "5~30초",
    purpose: "클릭 속도 및 반응 확인",
    href: "/kr/tests/cps",
  },
  {
    id: "polling-rate",
    title: "폴링레이트 측정",
    description: "마우스가 PC와 데이터를 주고받는 실제 속도를 확인합니다.",
    iconName: "Zap",
    duration: "10초",
    purpose: "전송 속도(Hz) 정상 여부 확인",
    caution: "환경에 따라 오차가 있을 수 있습니다",
    href: "/kr/tests/polling-rate",
  },
  {
    id: "keyboard-rollover",
    title: "키보드 동시입력",
    description: "여러 키를 동시에 눌렀을 때 모두 잘 인식되는지 테스트합니다.",
    iconName: "Keyboard",
    duration: "1분",
    purpose: "동시 입력(무한입력) 확인",
    href: "/kr/tests/keyboard-rollover",
  },
];
