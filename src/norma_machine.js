class NormaMachine {
    constructor() {
        this.registers = []
        this.reservedRegisters = 4
    }

    input(X) {
        this.registers[0] = X
    }

    output() {
        return this.registers[1]
    }

    add(k) {
        if(k == 'input') return this.registers[0]++

        k += this.reservedRegisters
        if(typeof this.registers[k] == "undefined") this.registers[k] = 0

        this.registers[k]++
    }

    sub(k) {
        if(k == 'input') return this.registers[0]--

        k += this.reservedRegisters
        if(typeof this.registers[k] == "undefined") this.registers[k] = 0

        this.registers[k]--
    }

    test(k) {
        if(k == 'input') return this.registers[0] == 0

        k += this.reservedRegisters
        if(typeof this.registers[k] == "undefined") this.registers[k] = 0

        return this.registers[k] == 0
    }
}

const populateRegisterPositive = (norma, a, k) => {
    norma.input(a)
    while(!norma.test('input')) {
        norma.add(k)
        norma.sub('input')
    }
}

const populateRegisterNegative = (norma, a, k) => {
    norma.input(a)
    while(!norma.test('input')) {
        norma.sub(k)
        norma.add('input')
    }
}
