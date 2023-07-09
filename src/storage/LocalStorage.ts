import { CONSTANTS } from "../constants/constants";
import { LoginResponseType } from "../types/auth.type";

export function set(key: string, value: string) {
  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      console.warn("Error reading from local storage");
    }
  }
}

export function get(key: string) {
  const isBrowser = typeof window !== "undefined";
  if (!isBrowser) {
    return null;
  }

  try {
    const item = window.localStorage.getItem(key);
    return item;
  } catch {
    return null;
  }
}

export const LocalStorage = {
  storeAppLang: (lang: string) => {
    set(CONSTANTS.STORAGE_KEY.APPLICATION_LANGUAGE, lang);
  },

  getAppLang: () => {
    const appLang = get(CONSTANTS.STORAGE_KEY.APPLICATION_LANGUAGE);
    return {
      appLang: appLang,
    };
  },

  storeLoginData: (data: LoginResponseType) => {
    set(CONSTANTS.STORAGE_KEY.CURRENT_USER, JSON.stringify(data.user));
    set(CONSTANTS.STORAGE_KEY.ACCESS_TOKEN, data.accessToken);
    set(CONSTANTS.STORAGE_KEY.USER_ROLE, data.role);
  },
};
