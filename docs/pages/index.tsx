import React from "react";
import { PagesProps } from "./types";
import { Page, Code } from "../utils";

export * from "./BasicUsage"
export * from "./CommonAPI"
export * from "./Documents"
export * from "./Examples"
export * from "./Inputs"
export * from "./Layout"

export function Installation ({children}: PagesProps) {
    return (
        <Page>
            {children}
            {`# Installation`}
            <Code>npm install @tsei/neui</Code>
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
