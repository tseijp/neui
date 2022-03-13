export function luminanced(r=0, g=0, b=0, lum=0) {
    return "#" + [r, g, b]
        .map(c => Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16))
        .map(c => ('00' + c).substr(c.length))
        .join("")
}

export function rgb2hex(r=0, g=0, b=0) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export function hex2rgb(hex?: string | number): number[]

export function hex2rgb (hex: any="#000"): number[] {
    if (typeof hex === "number")
        return [(hex >> 16) & 0xFF, (hex >> 8) & 0xFF, hex & 0xFF]
    hex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_="",r="",g="",b="") => r+r+g+g+b+b);
    return /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
        .exec(hex)?.slice(1).map(v => parseInt(v, 16)) || [0, 0, 0]
}

export function getContrast(hex="#000") {
    const r = parseInt(hex.substr(1, 2), 16),
          g = parseInt(hex.substr(3, 2), 16),
          b = parseInt(hex.substr(5, 2), 16),
        yiq = (r * 299 + g * 587 + b * 114) / 1000
    return yiq >= 128 ? '#001f3f' : '#F6F5F7'
}
