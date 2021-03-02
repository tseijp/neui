// import {useAtom} from 'jotai'
// import {shadowAtom} from '../atoms'

export function useShadow (props: {

}): string

export function useShadow (props: any={}) {
    // const [shadow, set] = useAtom(shadowAtom)
    return "box-shadow: inset 5px 5px 20px #c8c9cc, inset -5px -5px 20px #ffffff"
}
