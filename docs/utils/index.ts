export default function dedent(
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
        const m = mindent
        result = lines.map(l => l[0] === " " ? l.slice(m) : l).join("\n");
    }

    return result.trim().replace(/\\n/g, "\n");
}
