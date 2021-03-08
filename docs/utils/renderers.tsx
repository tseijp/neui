import React from "react"
import {Link} from "@reach/router"
const el = React.createElement

export const renderers: {
    [key: string]: React.ElementType<any>
} = {
    break: 'br',
    paragraph: 'p',
    emphasis: 'em',
    strong: 'strong',
    thematicBreak: 'hr',
    blockquote: 'blockquote',
    delete: 'del',
    link: ({href, ...p}) => <Link {...p} to={href}/>,
    image: 'img',
    linkReference: 'a',
    imageReference: 'img',
    root: Root,
    text: TextRenderer,
    list: List,
    listItem: ListItem,
    heading: Heading,
    inlineCode: InlineCode,
    code: CodeBlock,
    html: Html,
}

function TextRenderer(props: any) {
    return props.children || ''
}

function Root (props: any) {
    const {className} = props
    return className
        ? el('div', {className}, props.children)
        : el(React.Fragment, {}, props.children)
}

function Heading (props: any) {
    return el(`h${props.level}`, getCoreProps(props), props.children)
}

function List (props: any) {
    const attrs = getCoreProps(props)
    if (props.start !== null && props.start !== 1 && props.start !== undefined)
        attrs.start = props.start.toString()

    return el(props.ordered ? 'ol' : 'ul', attrs, props.children)
}

function ListItem (props: any) {
    let checkbox = null
    const checked = props?.checked
    if (checked)
        checkbox = el('input', {type: 'checkbox', checked, readOnly: true})
    return el('li', getCoreProps(props), checkbox, props.children)
}

function CodeBlock (props: any) {
    const className = props.language && `language-${props.language}`
    const code = el('code', className ? {className: className} : null, props.value)
    return el('pre', getCoreProps(props), code)
}

function InlineCode (props: any) {
    return el('code', getCoreProps(props), props.children)
}

function Html (props: any) {
    if (props.skipHtml)
        return null
    if (!props.allowDangerousHtml)
        return props.value
}

function getCoreProps (props: any): any {
    const source = props['data-sourcepos']
    return source ? {'data-sourcepos': source} : {}
}
