import React from "react";
import { PagesProps } from "./types";
import { Page, Code } from "../utils";

export function Layout ({children}: PagesProps) {
    return children
}

export function Box (_: PagesProps) {
    return (
        <Page>
            {`# Box`}
            <Code/>
        </Page>
    )
}

export function Grid (_: PagesProps) {
    return (
        <Page>
            {`# Grid`}
        </Page>
    )
}

export function Hidden (_: PagesProps) {
    return (
        <Page>
            {`# Hidden`}
        </Page>
    )
}
