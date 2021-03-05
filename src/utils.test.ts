// import { HookResult, renderHook, act } from '@testing-library/react-hooks';
// import { render, RenderResult } from '@testing-library/react'
import {
    rgb2hex,
    stringhex2rgb,
    numberhex2rgb,
} from './utils'

describe('utils', () => {
    test('rgb2hex', () => {
        expect(rgb2hex()).toBe("#000000")
        expect(rgb2hex(255, 255, 255)).toBe("#ffffff")
    })
    test('numberhex2rgb', () => {
        expect(numberhex2rgb(0x000000)).toStrictEqual([0, 0, 0])
        expect(numberhex2rgb(0xffffff)).toStrictEqual([255, 255, 255])
    })
    test('stringhex2rgb', () => {
        expect(stringhex2rgb()).toStrictEqual([0, 0, 0])
        expect(stringhex2rgb("#fff")).toStrictEqual([255, 255, 255])
        expect(stringhex2rgb("#000000")).toStrictEqual([0, 0, 0])
        expect(stringhex2rgb("#ffffff")).toStrictEqual([255, 255, 255])
    });
});
