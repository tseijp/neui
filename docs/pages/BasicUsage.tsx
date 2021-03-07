import React from "react"
import { PagesProps } from "./types";
import { Page, Code } from "../components"
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
