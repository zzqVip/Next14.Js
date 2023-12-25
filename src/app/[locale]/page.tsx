import Btn from '@/Components/client/Button'
import initTranslations from "../i18n";
import TranslationsProvider from "@/Components/client/TranslationsProvider/TranslationsProvider";
export default async function Home(
  {
    params: { locale },
  }: {
    params: { locale: string };
  }
) {
  console.log(locale);
  const { t, options } = await initTranslations(locale);
  console.log(t("about"), options.ns);
  return (
    <TranslationsProvider namespaces={options.ns as string[]} locale={locale}>
      <div>
        {t('about')}
        <Btn />
      </div>
    </TranslationsProvider>
  )
}
