import React from "react"
import { PagesProps } from "./types";
import { Page, Code } from "../components"

export function Documents (_: PagesProps) {
    return (
        <Page>
        {`# Documents
            `}
        <Code>{`
            `}</Code>
        </Page>
    )
}
