import { ITran } from "@/app/i18n/type";
import { useTranslation } from "react-i18next";

export function useClientTranslation() {
    const { t, i18n } = useTranslation();
    return { t, i18n } as { t: ITran; i18n: any };
}