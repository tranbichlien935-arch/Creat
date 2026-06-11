import { useState, useEffect } from "react";

export function useAppLang() {
    const [lang, setLang] = useState<"vi" | "en">(
        (localStorage.getItem("app_lang") as "vi" | "en") || "vi"
    );

    useEffect(() => {
        const handleLangChange = (e: any) => setLang(e.detail);
        window.addEventListener("app_lang_change", handleLangChange);
        return () => window.removeEventListener("app_lang_change", handleLangChange);
    }, []);

    const changeLang = (newLang: "vi" | "en") => {
        localStorage.setItem("app_lang", newLang);
        window.dispatchEvent(new CustomEvent("app_lang_change", { detail: newLang }));
    };

    return { lang, changeLang };
}
