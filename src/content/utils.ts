/**
 * Returns the editor field if it's not empty, otherwise returns the AI field.
 */
export function getDisplayText(editor?: string, ai?: string): string {
  if (editor && editor.trim().length > 0) {
    return editor;
  }
  return ai || "";
}

/**
 * Returns the editor array if it's not empty, otherwise returns the AI array.
 */
export function getDisplayArray<T>(editor?: T[], ai?: T[]): T[] {
  if (editor && editor.length > 0) {
    return editor;
  }
  return ai || [];
}

import { BaseContent } from "./types";

/**
 * Helper to get display values for common BaseContent fields
 */
export function getContentDisplay(item: BaseContent) {
  return {
    summary: getDisplayText(item.editorSummaryKo, item.aiSummaryKo),
    strengths: getDisplayArray(item.editorStrengthsKo, item.aiStrengthsKo),
    weaknesses: getDisplayArray(item.editorWeaknessesKo, item.aiWeaknessesKo),
    cautions: getDisplayArray(item.editorCautionsKo, item.aiCautionsKo),
    communityNote: getDisplayText(item.editorCommunityNoteKo, item.aiCommunityNoteKo),
    buyingCheck: getDisplayArray(item.editorBuyingCheckKo, item.aiBuyingCheckKo),
    
    // Switch specific
    beginnerSummary: getDisplayText(item.editorBeginnerSummaryKo, item.aiBeginnerSummaryKo),
    caution: getDisplayText(item.editorCautionKo, item.aiCautionKo),
    namingWarning: getDisplayText(item.editorNamingWarningKo, item.aiNamingWarningKo),
  };
}
