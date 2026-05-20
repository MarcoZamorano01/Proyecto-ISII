import { MINIMUM_COMPATIBILITY_SCORE }
  from "./constants";

export function isCompatible(score) {
  return score >= MINIMUM_COMPATIBILITY_SCORE;
}