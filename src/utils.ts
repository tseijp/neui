export function luminanced(r=0, g=0, b=0, lum=0) {
    return "#" + [r, g, b]
        .map(c => Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16))
        .map(c => ('00' + c).substr(c.length))
        .join("")
}

export function rgb2hex(r=0, g=0, b=0) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export function stringhex2rgb (hex="#000"): number[] {
    hex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_,r,g,b) =>  r+r+g+g+b+b);
    return /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
        .exec(hex)?.slice(1).map(v => parseInt(v, 16)) || [0, 0, 0]
}

export function numberhex2rgb(hex=0x000): number[] {
    return [(hex >> 16) & 0xFF, (hex >> 8) & 0xFF, hex & 0xFF]
}
