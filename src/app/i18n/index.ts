import { getOptions } from "./i18nConfig";
import { InitOptions, createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { ITran } from "./type";
export default async function initTranslations(
    locale: string,
    namespaces?: string[],
) {
    const i18nInstance = createInstance();
    console.log(locale);

    await i18nInstance
        .use(initReactI18next)
        .use(
            resourcesToBackend((language: string, namespace: string) => {
                return import(`./locales/${language}/${namespace}.json`)
            },
            ),
        )
        .init(getOptions(locale, namespaces));

    return i18nInstance as { t: ITran; options: InitOptions }; // 默认没有代码补全，我们自己手动提供类型
}
