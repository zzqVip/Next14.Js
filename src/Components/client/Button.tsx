'use client';
import React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';
const theme = createTheme({
    palette: {
        mode: "dark"
    },
});
const Btn = () => {
    return <>
        <ThemeProvider theme={theme}>
            <Link href={"/copyfund/fundlist"}>首页</Link>
        </ThemeProvider>

    </>
}
export default Btn