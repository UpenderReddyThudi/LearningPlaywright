// String index

interface StringDictionary {
    [key: string]: string;
}

const dict: StringDictionary = {
    hello: "world",
    foo: "War"
};

console.log(dict.hello , dict.foo);