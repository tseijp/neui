import React from 'react'
import Md from 'react-markdown'
import dedent from './utils'

export function Page ({children}: any) {
    return React.Children.map(children, (child: any) =>
        typeof child ==="string"
            ? <Text>{child}</Text>
            : child
    )
}

export function Code ({language='javascript', children=""}) {
    return (
        <pre style={{width: '100%'}}>
            <code className={`language-${language}`}>{dedent(children)}</code>
        </pre>
    )
}

export function Text ({children=""}) {
    const renderers = React.useMemo(() => ({}), [])

    return (
        <pre style={{width: '100%'}}>
            <Md renderers={renderers}>{dedent(children)}</Md>
        </pre>
    )
}
