// Object Functions

const calculator = {
    value: 0,
    add(n){
        this.value += n;
        return this;
    },
    sub(n){
        this.value -= n;
        return this;
    }
}
console.log(calculator.add(10).sub(5));