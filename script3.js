function previousConway(t) {
    let r = "";
    if (t.length % 2 === 1) return r; // impossible
    let idx = 0;
    while (idx < t.length) {
        for (let i = 0; i < t.charAt(idx); i++) {
            r += t.charAt(idx + 1);
        }
        idx += 2;
    }
    return r;
}

function conway(t) {
    if (t === "") return "0";
    let r = "";
    let idx = 0;
    while (idx < t.length) {
        for (let i = 1; t.charAt(idx + i) === t.charAt(idx); i++) {
        }
        r += i + t.charAt(idx);
        idx += i;
    }
    return r;
}
