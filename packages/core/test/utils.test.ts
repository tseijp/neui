// import { HookResult, renderHook, act } from '@testing-library/react-hooks';
// import { render, RenderResult } from '@testing-library/react'
import {
    rgb2hex,
    hex2rgb,
} from '@tsei/neui/src'

describe('utils', () => {
    test('rgb2hex', () => {
        expect(rgb2hex()).toBe("#000000")
        expect(rgb2hex(255, 255, 255)).toBe("#ffffff")
    })
    test('hex2rgb', () => {
        expect(hex2rgb(0x000000)).toStrictEqual([0, 0, 0])
        expect(hex2rgb(0xffffff)).toStrictEqual([255, 255, 255])
        expect(hex2rgb()).toStrictEqual([0, 0, 0])
        expect(hex2rgb("#fff")).toStrictEqual([255, 255, 255])
        expect(hex2rgb("#000000")).toStrictEqual([0, 0, 0])
        expect(hex2rgb("#ffffff")).toStrictEqual([255, 255, 255])
    });
});
