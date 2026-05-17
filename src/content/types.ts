export type Step = "layout" | "switch" | "result";
export type KeyboardLayout = "full" | "tkl" | "75%" | "65%" | "compact";
export type SwitchType = "linear" | "tactile" | "clicky" | "magnetic" | "optical" | "capacitive" | "unknown";
export type SoundLevel = "quiet" | "normal" | "loud" | "unknown";
export type ProductStatus = "draft" | "review" | "published";

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

export interface BaseContent {
  id: string;
  slug?: string;
  brand?: string;
  name: string;
  imageUrl?: string;
  imageAltKo?: string;
  imageSourceType?: string;
  status: ProductStatus;
  updatedAt: string;
  
  // Common Content Fields
  aiSummaryKo?: string;
  editorSummaryKo?: string;
  aiStrengthsKo?: string[];
  editorStrengthsKo?: string[];
  aiWeaknessesKo?: string[];
  editorWeaknessesKo?: string[];
  aiCautionsKo?: string[];
  editorCautionsKo?: string[];
  aiCommunityNoteKo?: string;
  editorCommunityNoteKo?: string;
  aiBuyingCheckKo?: string[];
  editorBuyingCheckKo?: string[];
  
  // Switch specific fields (optional in base)
  aiBeginnerSummaryKo?: string;
  editorBeginnerSummaryKo?: string;
  aiCautionKo?: string;
  editorCautionKo?: string;
  aiNamingWarningKo?: string;
  editorNamingWarningKo?: string;
  
  recommendationTags?: string[];
  specTags?: string[];
}

export interface MouseContent extends BaseContent {
  category: "mouse";
  shapeType: "symmetrical" | "ergonomic";
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
  features: string[];
}

export interface KeyboardContent extends BaseContent {
  category: "keyboard";
  layout: KeyboardLayout;
  switchType: SwitchType[];
  isHotSwap: boolean;
  material: "plastic" | "aluminum" | "polycarbonate";
  priceRange: string;
  features: string[];
  /**
   * Beginner-facing product filters are intentionally split by visibility.
   * Keep the default UI to basicFilters only; advancedFilters are optional,
   * and detailSpecs/rawSpecs are for product detail pages or editor reference.
   */
  basicFilters?: KeyboardBasicFilters;
  advancedFilters?: KeyboardAdvancedFilters;
  detailSpecs?: KeyboardDetailSpecs;
  rawSpecs?: KeyboardRawSpecs;
}

export interface SwitchContent extends BaseContent {
  category: "switch";
  switchType: SwitchType;
  soundLevel: SoundLevel;
  actuationForceG: number | null;
  bottomOutForceG: number | null;
  travelMm: number | null;
  bestFor: ("gaming" | "office" | "typing" | "silent" | "beginner" | "custom")[];
  
  // Specific Switch Fields
  aiBeginnerSummaryKo?: string;
  editorBeginnerSummaryKo?: string;
  aiCautionKo?: string;
  editorCautionKo?: string;
  aiNamingWarningKo?: string;
  editorNamingWarningKo?: string;
}

export interface GuideContent extends BaseContent {
  category: "guide";
  readingTimeMin: number;
}
