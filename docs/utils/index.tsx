import React from 'react'
import Md from 'react-markdown'
import {renderers} from "./renderers"

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
    return (
        <pre style={{width: '100%'}}>
            <Md renderers={renderers}>{dedent(children)}</Md>
        </pre>
    )
}

export function dedent(
    strings: string | string[],
    ...values: string[]
) {
    const raw = typeof strings === "string" ? [strings] : strings
    let result = "";
    for (let i = 0; i < raw.length; i++) {
        result += raw[i]
            .replace(/\\\n[ \t]*/g, "")
            .replace(/\\`/g, "`");
        if (i < values.length)
            result += values[i];
    }

    const lines = result.split("\n");
    let mindent: number | null = null;
    lines.forEach(l => {
        let m = l.match(/^(\s+)\S+/);
        if (m) {
            let indent = m[1].length;
            if (!mindent)
                mindent = indent;
            else
                mindent = Math.min(mindent, indent);
        }
    })

    if (mindent !== null) {
        result = lines.map(l => l[0] === " " ? l.slice(mindent!) : l).join("\n");
    }

    return result.trim().replace(/\\n/g, "\n");
}
