export type Step = "layout" | "switch" | "result";
export type KeyboardLayout = "full" | "tkl" | "75%" | "65%" | "compact";
export type SwitchType = "linear" | "tactile" | "clicky" | "magnetic" | "optical" | "capacitive" | "unknown";
export type SoundLevel = "quiet" | "normal" | "loud" | "unknown";
export type ProductStatus = "draft" | "published";

export interface Keyboard {
  id: string;
  name: string;
  brand: string;
  layout: KeyboardLayout;
  switchType: SwitchType[];
  features: string[];
  priceRange: string;
  isHotSwap: boolean;
  material: "plastic" | "aluminum" | "polycarbonate";
}

export interface Mouse {
  id: string;
  name: string;
  brand: string;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  weight: number;
  sensor: string;
  recommendedGrips: ("palm" | "claw" | "fingertip")[];
  handSizeRange: "small" | "medium" | "large" | "all";
  priceRange: string;
  imageUrl?: string;
  features: string[];
}

export interface KeyboardSwitch {
  id: string;
  slug: string;
  nameKo: string;
  nameEn: string;
  brand: string;
  marketingNameKo?: string;
  switchType: SwitchType;
  feelKo: string;
  soundLevel: SoundLevel;
  actuationForceG: number | null;
  bottomOutForceG: number | null;
  travelMm: number | null;
  bestFor: ("gaming" | "office" | "typing" | "silent" | "beginner" | "custom")[];
  notForKo: string[];
  beginnerSummaryKo: string;
  buyingCheckKo: string[];
  cautionKo: string;
  similarToKo?: string;
  namingWarningKo?: string;
  status: ProductStatus;
  updatedAt: string;
}
