export type Step = "layout" | "switch" | "result";
export type KeyboardLayout = "full" | "tkl" | "75%" | "65%" | "compact";
export type SwitchType = "linear" | "tactile" | "clicky" | "magnetic" | "optical" | "capacitive" | "unknown";
export type SoundLevel = "quiet" | "normal" | "loud" | "unknown";
export type ProductStatus = "draft" | "published";

export type KeyboardBasicLayoutFilter = "full" | "tkl" | "compact" | "any";
export type KeyboardBasicConnectionFilter = "wired" | "wireless" | "multi_mode" | "any";
export type KeyboardBasicFeelFilter = "smooth_linear" | "tactile" | "clicky" | "quiet" | "unknown";
export type KeyboardBasicNoiseFilter = "quiet_preferred" | "no_preference";
export type KeyboardBasicPriceFilter = "budget" | "mid" | "premium" | "any";

export type KeyboardGamingFeatureFilter = "rapid_trigger" | "high_polling" | "no_preference";
export type KeyboardMultiDeviceFilter = "multi_pairing" | "no_preference";
export type KeyboardKeycapFilter = "pbt_preferred" | "no_preference";
export type KeyboardHousingFilter = "aluminum_preferred" | "lightweight_preferred" | "no_preference";
export type KeyboardBacklightFilter = "rgb_preferred" | "no_preference";
export type KeyboardWeightFeelFilter = "light" | "solid_heavy" | "no_preference";

export interface KeyboardBasicFilters {
  layout: KeyboardBasicLayoutFilter;
  connection: KeyboardBasicConnectionFilter;
  feel: KeyboardBasicFeelFilter;
  noise: KeyboardBasicNoiseFilter;
  price: KeyboardBasicPriceFilter;
}

export interface KeyboardAdvancedFilters {
  gamingFeature?: KeyboardGamingFeatureFilter;
  multiDevice?: KeyboardMultiDeviceFilter;
  keycap?: KeyboardKeycapFilter;
  housing?: KeyboardHousingFilter;
  backlight?: KeyboardBacklightFilter;
  weightFeel?: KeyboardWeightFeelFilter;
}

export interface KeyboardDetailSpecs {
  actuationForceG?: number | null;
  macroSupport?: boolean | null;
  responseTimeMs?: number | null;
  bluetoothVersion?: string | null;
  battery?: string | null;
  enterKeyShape?: string | null;
  legendPosition?: string | null;
  cableMaterial?: string | null;
  accessories?: string[];
  ps2Support?: boolean | null;
  stepSculpture?: boolean | null;
  windowsKeyLock?: boolean | null;
  dimensionsMm?: {
    width?: number;
    depth?: number;
    height?: number;
  };
}

export type KeyboardRawSpecs = Record<string, string | number | boolean | null | string[]>;

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
  basicFilters?: KeyboardBasicFilters;
  advancedFilters?: KeyboardAdvancedFilters;
  detailSpecs?: KeyboardDetailSpecs;
  rawSpecs?: KeyboardRawSpecs;
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
