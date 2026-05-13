export type Step = "layout" | "switch" | "result";
export type KeyboardLayout = "full" | "tkl" | "75%" | "65%" | "compact";
export type SwitchType = "linear" | "tactile" | "clicky" | "magnetic" | "optical" | "capacitive" | "unknown";
export type SoundLevel = "quiet" | "normal" | "loud" | "unknown";
export type ProductStatus = "draft" | "review" | "published";

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
