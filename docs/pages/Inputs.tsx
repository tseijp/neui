import React from "react";
import { PagesProps } from "./types";
import { Page, Code } from "../components";
import { Box } from "../../src"
import * as Inputs from "../../src/Inputs";

export function Button (_: PagesProps) {
    return (
        <Page>
            {`# Button
            Buttons communicate actions that users can take.`}
            <Box height="50px">
                <Inputs.Button>Default</Inputs.Button>
                <Inputs.Button color="primary">
                    Primary
                </Inputs.Button>
                <Inputs.Button color="secondary">
                    Secondary
                </Inputs.Button>
                <Inputs.Button disabled>
                    Disabled
                </Inputs.Button>
                <Inputs.Button color="primary" href="#contained-buttons">
                    Link
                </Inputs.Button>
            </Box>
            {`# Buttons with icons and label`}
            <Box height="50px">
                <Inputs.IconButton aria-label="delete"/>
                <Inputs.IconButton aria-label="delete" disabled color="primary"/>
                <Inputs.IconButton color="secondary" aria-label="add an alarm"/>
                <Inputs.IconButton color="primary" aria-label="add to shopping cart"/>
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
            <Inputs.Slider />
            <Code>{`<Input />`}</Code>
            {`## Discrete sliders`}
            <Inputs.Slider />
            <Code>{`<Input />`}</Code>
            {`## Restricted values`}
            <Inputs.Slider />
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
