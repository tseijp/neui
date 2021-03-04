import React from 'react';

import {
    Header,
    Footer,
    Wrap,
    Side,
    Main,
    Aside,
} from '../src'

const randomStyle = () => {
    const rgb = [...Array(3)].map(() => ~~(Math.random()*255))
    return {style: {background: `rgba(${ rgb.join(',') })`}}
}

function App() {
    return (
        <Wrap>
            <Header {...randomStyle()}>
                header
            </Header>
            <Side {...randomStyle()}>
                <Aside {...randomStyle()}>
                    aside
                </Aside>
                <Main {...randomStyle()}>
                    main
                </Main>
            </Side>
            <Footer {...randomStyle()}>
                footer
            </Footer>
        </Wrap>
    )
}

export default App;
