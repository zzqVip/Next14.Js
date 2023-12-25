'use client';
import React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useClientTranslation } from '@/Hook/Hook';
const theme = createTheme({
    palette: {
        mode: "dark"
    },
});
const Btn = () => {
    const { t, i18n } = useClientTranslation();

    return <>
        <ThemeProvider theme={theme}>
            {t("about")}
            <Link href={"/copyfund/fundlist"}>首页</Link>
        </ThemeProvider>
    </>
}
export default Btn