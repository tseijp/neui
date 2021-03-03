import React from 'react';

import {
    WrapLayout,
    HeaderLayout,
    FooterLayout,
    SideLayout,
    MainLayout,
    AsideLayout,
} from '../src'

const randomStyle = () => {
    const rgb = [...Array(3)].map(() => ~~(Math.random()*255))
    return {style: {background: `rgba(${ rgb.join(',') })`}}
}

function App() {
    return (
        <WrapLayout>
            <HeaderLayout {...randomStyle()}>
                header
            </HeaderLayout>
            <SideLayout {...randomStyle()}>
                <AsideLayout {...randomStyle()}>
                    aside
                </AsideLayout>
                <MainLayout {...randomStyle()}>
                    main
                </MainLayout>
            </SideLayout>
            <FooterLayout {...randomStyle()}>
                footer
            </FooterLayout>
        </WrapLayout>
    )
}

export default App;
