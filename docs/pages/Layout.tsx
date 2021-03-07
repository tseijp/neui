import React from "react";
import { PagesProps } from "./types";
import { Page } from '../components'

export function Box (_: PagesProps) {
    return (
        <Page>
            {`# Box`}
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
