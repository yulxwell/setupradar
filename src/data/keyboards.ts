export interface Keyboard {
  id: string;
  name: string;
  brand: string;
  layout: "full" | "tkl" | "75%" | "65%" | "compact";
  switchType: ("linear" | "tactile" | "clicky")[];
  features: string[];
  priceRange: string;
  isHotSwap: boolean;
  material: "plastic" | "aluminum" | "polycarbonate";
}

export const KEYBOARD_DATABASE: Keyboard[] = [
  {
    id: "rainy75",
    name: "Rainy75",
    brand: "WOB Lab",
    layout: "75%",
    switchType: ["linear"],
    features: ["가성비 종결", "풀 알루미늄", "무선 3모드"],
    priceRange: "10만원대",
    isHotSwap: true,
    material: "aluminum",
  },
  {
    id: "leobog-hi75",
    name: "Hi75",
    brand: "LEOBOG",
    layout: "75%",
    switchType: ["linear", "tactile"],
    features: ["노브 탑재", "가성비 알루미늄", "유선 전용"],
    priceRange: "7만원대",
    isHotSwap: true,
    material: "aluminum",
  },
  {
    id: "gmmk-pro",
    name: "GMMK PRO",
    brand: "Glorious",
    layout: "75%",
    switchType: ["linear", "tactile", "clicky"],
    features: ["전통의 베스트셀러", "다양한 커스텀 파츠", "노브 탑재"],
    priceRange: "20만원대",
    isHotSwap: true,
    material: "aluminum",
  },
  {
    id: "bridge75",
    name: "Bridge75",
    brand: "Shortcut Studio",
    layout: "75%",
    switchType: ["linear"],
    features: ["깔끔한 디자인", "우수한 빌드 퀄리티", "무선 3모드"],
    priceRange: "13만원대",
    isHotSwap: true,
    material: "aluminum",
  },
  {
    id: "keychron-q1",
    name: "Keychron Q1",
    brand: "Keychron",
    layout: "75%",
    switchType: ["linear", "tactile"],
    features: ["맥/윈도우 완벽 호환", "QMK/VIA 지원", "가스켓 마운트"],
    priceRange: "19만원대",
    isHotSwap: true,
    material: "aluminum",
  },
  {
    id: "realforce-r3",
    name: "Realforce R3",
    brand: "Topre",
    layout: "full",
    switchType: ["tactile"],
    features: ["무접점 방식", "독보적인 타건감", "APC 기능"],
    priceRange: "30만원대",
    isHotSwap: false,
    material: "plastic",
  },
];
