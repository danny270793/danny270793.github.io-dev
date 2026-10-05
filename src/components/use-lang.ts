import { useEffect, useState } from "preact/hooks";
import { translations, type Language } from "../i18n/translations";

export function useLang(): Language {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null;
    const nav = navigator.language.split("-")[0] as Language;
    setLang(
      stored && stored in translations
        ? stored
        : nav in translations
          ? nav
          : "en",
    );

    const handler = (e: Event) => setLang((e as CustomEvent<Language>).detail);
    window.addEventListener("i18n:change", handler);
    return () => window.removeEventListener("i18n:change", handler);
  }, []);

  return lang;
}
