// moddleware.ts
import { i18nRouter } from "next-i18n-router";
import { NextRequest } from "next/server";
import i18nConfig from "./src/app/i18n/i18nConfig";

export function middleware(request: NextRequest) {
    console.log("middleware", request, i18nConfig);

    return i18nRouter(request, i18nConfig);
}

// applies this middleware only to files in the app directory
export const config = {
    matcher: "/((?!api|static|.*..*|_next).*)",
};
