import React from "react";
import { PagesProps } from "./types";
import { Page, Code } from '../components'
export * from "./Inputs"
export * from "./Layout"

export function Installation (_: PagesProps) {
    return (
        <Page>
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

export function BasicUsage (_: PagesProps) {
    return (
        <Page>
            {`# Basic Usage
                There are 1 hooks in react-spring currently:
                - \`useShadow\` a hook to style shadow

            ### First, you fetch your imports
            `}
            <Code>{`
                import {useShadow} from "@tsei/neui"
                import {animated} from "react-spring"
                `}</Code>
            {`
            ### Next, define your spring
                \`const style = useShadow({})\`

            ### Finally, tie the animated values to your view
                \`return <animated.div style={props}>Hello World</animated.div>\`
                `}
            <Code>{`
                // @tsei/neui
                const ShadowStyle = shadow(Button)
                // React components
                const AnimatedDonut = animated(Donut)

                // React-native
                const AnimatedView = animated(View)

                // styled-components, emotion, etc.
                const AnimatedHeader = styled(animated.h1)\`\`
                `}</Code>
        </Page>
    )
}

export function CommonAPI (_: PagesProps) {
    return (
        <Page>
            {`# Common API
                useShadow({ config: { duration: 250 }, ... })

                Property | Default | Description
                :------- | :------ | :----------
                size     | 1       | size
                `}
            <></>
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
