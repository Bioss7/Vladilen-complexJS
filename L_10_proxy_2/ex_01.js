// Wrapper
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj) ? obj[prop] : defaultValue
    });
}

const position = withDefaultValue(
    {
        x: 24,
        y: 42
    },
    0
);

console.log(position);
console.log(position.x); // 24
console.log(position.y); // 42
console.log(position.z); // 0

