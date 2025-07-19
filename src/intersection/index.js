function intersection(a, b) {
    const interMap = new Map();
    const newSet = new Set();

    for (const item of a) {
        interMap.set(item, true);
    }   
    for (const item of b) {
        if (interMap.has(item)) {
            newSet.add(item);
        }
    }
    return Array.from(newSet);
}

module.exports = intersection;
