import React from "react";
import { PagesProps } from "./types";
import { Page, Code } from "../utils";
import { Box } from "../../src"
import * as I from "../../src/Inputs";

export function Inputs ({children}: PagesProps) {
    return children
}

export function Button (_: PagesProps) {
    return (
        <Page>
            {`# Button
            Buttons communicate actions that users can take.`}
            <Box height="50px">
                <I.Button>Default</I.Button>
                <I.Button color="primary">
                    Primary
                </I.Button>
                <I.Button color="secondary">
                    Secondary
                </I.Button>
                <I.Button disabled>
                    Disabled
                </I.Button>
                <I.Button color="primary">
                    Link
                </I.Button>
            </Box>
            {`# Buttons with icons and label`}
            <Box height="50px">
                <I.IconButton aria-label="delete"/>
                <I.IconButton aria-label="delete" disabled color="primary"/>
                <I.IconButton color="secondary" aria-label="add an alarm"/>
                <I.IconButton color="primary" aria-label="add to shopping cart"/>
            </Box>
        </Page>
    )
}

export function Checkbox (_: PagesProps) {
    return (
        <Page>
            {`# Checkbox`}
        </Page>
    )
}

export function Radio (_: PagesProps) {
    return (
        <Page>
            {`# Radio`}
        </Page>
    )
}

export function Select (_: PagesProps) {
    return (
        <Page>
            {`# Select`}
        </Page>
    )
}

export function Slider (_: PagesProps) {
    return (
        <Page>
            {`# Slider
            Sliders allow users to make selections from a range of values.

            props | type | default
            :---- |:---- |:-------
            min | number | 0
            max | number | 1
            value | number | 0.5
            disabled | boolean | false
            vertical | boolean | false

            ## Continuous sliders`}
            <I.Slider />
            <Code>{`<Input />`}</Code>
            {`## Discrete sliders`}
            <I.Slider />
            <Code>{`<Input />`}</Code>
            {`## Restricted values`}
            <I.Slider />
            <Code>{`<Input />`}</Code>
            {`## Vertical sliders`}
        </Page>
    )
}

export function Switch (_: PagesProps) {
    return (
        <Page>
            {`# Switch`}
        </Page>
    )
}

export function Fields (_: PagesProps) {
    return (
        <Page>
            {`# Fields`}
        </Page>
    )
}

export function List (_: PagesProps) {
    return (
        <Page>
            {`# List`}
        </Page>
    )
}
