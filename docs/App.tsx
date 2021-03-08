import React from "react";
import styled from "styled-components"
import { animated } from "react-spring"
import { Router } from "@reach/router"
import * as Pages from "./pages"
import { shadow } from "../src"
import { Page } from "./utils"

function App (_: any) {
  return (
      <Main border={50} depth={10}>
        <Left border={50} depth={-10}>
          <Page>
          {`- Getting Started
              - [Installation](/getting-started/installation)
              - [Basic Usage](/getting-started/basic-usage)
              - [Common API](/getting-started/common-api)
              - [Documents](/getting-started/documents)
              - [Examples](/getting-started/examples)
            - Layout
              - [Box](/components/layout/box)
              - [Grid](/components/layout/grid)
              - [Hidden](/components/layout/hidden)
            - Input
              - [Button](/components/inputs/button)
              - [CheckBox](/components/inputs/checkbox)
              - [Radio](/components/inputs/radio)
              - [Select](/components/inputs/select)
              - [Slider](/components/inputs/slider)
              - [Switch](/components/inputs/switch)
              - [Fields](/components/inputs/fields)
              - [List](/components/inputs/list)
        `}</Page>
        </Left>
        <Right border={50} depth={-10}>
          <Router>
            <Pages.Installation path="/getting-started">
              <Pages.BasicUsage path="basic-usage"/>
              <Pages.CommonAPI path="common-api"/>
              <Pages.Documents path="documents"/>
              <Pages.Examples path="examples"/>
            </Pages.Installation>
            <Pages.Layout path="/components/layout">
              <Pages.Box path="box"/>
              <Pages.Grid path="grid"/>
              <Pages.Hidden path="hidden"/>
              <Pages.Checkbox path="checkbox"/>
            </Pages.Layout>
            <Pages.Inputs path="/components/inputs">
              <Pages.Button path="button"/>
              <Pages.Radio path="radio"/>
              <Pages.Select path="select"/>
              <Pages.Slider path="slider"/>
              <Pages.Switch path="switch"/>
              <Pages.Fields path="fields"/>
              <Pages.List path="list"/>
            </Pages.Inputs>
          </Router>
        </Right>
      </Main>
  )
}

const Main = shadow(styled(animated.main)`
    display: flex;
    padding: 50px 0px;
    @media (max-width: 899px) {
        flex-direction: column;
    }
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
`)

const Left = shadow(styled(animated.ul)`
    display: flex;
    margin: 0px auto;
    flex-direction : column;
    padding: 20px;
    width: 300px;
    height: auto;
    li, a {
        color: black;
        display: flex;
    }
`);

export const Right = shadow(styled(animated.div)`
    width: 60vw;
    margin: 0px auto;
    padding: 20px;
    @media (max-width: 899px) {
        width: 100vw;
    }
`);

export default App;
