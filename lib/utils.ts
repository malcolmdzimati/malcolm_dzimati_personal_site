import { clsx } from "clsx";
import { ClassValue } from "clsx";

/**
 * Utility to combine class names conditionally
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(...inputs);
}