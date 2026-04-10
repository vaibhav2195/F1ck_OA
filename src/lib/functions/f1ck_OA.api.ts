import { invoke } from "@tauri-apps/api/core";
import { safeLocalStorage } from "../storage";
import { STORAGE_KEYS } from "@/config";

// Helper function to check if f1ck_OA API should be used
export async function shouldUsef1ck_OAAPI(): Promise<boolean> {
  try {
    // Check if f1ck_OA API is enabled in localStorage
    const f1ck_OAApiEnabled =
      safeLocalStorage.getItem(STORAGE_KEYS.f1ck_OA_API_ENABLED) === "true";
    if (!f1ck_OAApiEnabled) return false;

    // Check if license is available
    const hasLicense = await invoke<boolean>("check_license_status");
    return hasLicense;
  } catch (error) {
    console.warn("Failed to check f1ck_OA API availability:", error);
    return false;
  }
}
