import React from "react";
import { PagesProps } from "./types";
import { Page, Code } from '../components'
export * from "./Inputs"
export * from "./Layout"

export function Install (_: PagesProps) {
    return (
        <Page>
            {`# Installation`}
            <Code>{`npm install @tsei/neui`}</Code>
            {`# Quick started

            - git clone https://github.com/tseijp/neui
            - cd neui
            - npm install
            - npm start
            - open browser and visit [localhost:3000](localhost:3000)
            - ~Now you can go to [our demo](https://tsei.jp/neui), and try its usage.~`}
        </Page>
    )
}

export function Usage (_: PagesProps) {
    return (
        <Page>
            {`# Usage`}
        </Page>
    )
}
export function Examples (_: PagesProps) {
    return (
        <Page>
            {`# Example`}
        </Page>
    )
}
export function Learn (_: PagesProps) {
    return (
        <Page>
            {`# Learn`}
        </Page>
    )
}
