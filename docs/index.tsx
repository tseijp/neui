import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./utils/reportWebVitals";
import { useAtom } from "jotai";
import { Router, Link } from "@reach/router"
import { createGlobalStyle } from "styled-components"
import {Code} from "./utils"
import {
    themeAtom,
    Flex,
    Box,
    Button,
} from "../src"

const GlobalStyle = createGlobalStyle<any>`
    html,
    body,
    #root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: auto;
    }

    body {
        position: fixed;
        overflow: hidden;
        overscroll-behavior-y: none;
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
        color: black;
        background: ${({background="#fff"}) => background};
    }
`

function Home (_: any) {
    const [depth, setDepth] = React.useState(30)
    return (
        <Flex dir="column">
          <Flex dir="row" justify="center" items="center" height="50vh">
            <Box depth={depth} padding="50px" border={50}
                onMouseUp={() => setDepth(p => -p)}
                onMouseDown={() => setDepth(p => -p)}
                onMouseEnter={() => setDepth(p => p / 2)}
                onMouseLeave={() => setDepth(p => p * 2)}>
                <h1>Neumorphic UI</h1>
            </Box>
          </Flex>
        <Box border={50}>
            <Box border={50} depth={-10} padding="25px" grow="1" dir="column" justify="center" margin="50px">
                <h3>Installation</h3>
                <p>Install NE-UI's source files via npm.</p>
                <Code>{`npm install @tsei/neui`}</Code>
                <Button>Read Installation Documents</Button>
            </Box>
            <Box border={50} depth={-10} padding="25px" grow="1" dir="column" margin="50px">
                <h3>Basic Usage</h3>
                <Code>{`
                    import React from "react"
                    import ReactDOM from "react-dom"
                    import {Button} from "@tsei/neui"

                    function App() {
                      return <Button>Hello World</Button>;
                    }

                    ReactDOM.render(<App/>, document.getElementById('root')`}</Code>
            </Box>
        </Box>
        </Flex>
    )
}

function Container ({children}: any) {
    const [theme] = useAtom(themeAtom)
    return (
      <Flex dir="column" width="auto">
        <GlobalStyle background={theme.color}/>
        <Box border={50} depth={10} height="50px" margin="0 0 50px 0">
          <Button><Link to="/">NEUI</Link></Button>
          <Button><Link to="/getting-started/installation">Getting Started</Link></Button>
        </Box>
        {children}
        <Box border={50} depth={10} height="100px" margin="50px 0 0 0" grow={1}>
        </Box>
      </Flex>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Router>
        <Home path="/"/>
        <App  default/>
      </Router>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
