import Link from "next/link";
import React from "react";
const SwitchLangBtn = ({ locale }: any) => {
    console.log(locale, "SwitchLangBtn");

    return <>
        <Link href={locale === 'zh' ? "/en" : "/zh"}>切换语言</Link>
    </>
}
export default SwitchLangBtn