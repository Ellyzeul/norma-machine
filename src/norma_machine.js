class NormaMachine {
    constructor() {
        this.registers = Array(2).fill(0)
        this.reservedRegisters = 2
    }

    input(X) {
        this.registers[0] = X
    }

    output() {
        return this.registers[1]
    }

    add(k) {
        if(k == 'input') return this.registers[0]++
        if(k == 'output') return this.registers[1]++

        k += this.reservedRegisters
        if(typeof this.registers[k] == "undefined") this.registers[k] = 0

        this.registers[k]++
    }

    sub(k) {
        if(k == 'input') return this.registers[0]--
        if(k == 'output') return this.registers[1]--

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

const populateRegister = (norma, a, k) => {
    norma.input(a)

    a < 0
        ? populateRegister.negative(norma, k)
        : populateRegister.positive(norma, k)
}

populateRegister.positive = (norma, k) => {
    while(!norma.test('input')) {
        norma.add(k)
        norma.sub('input')
    }
}

populateRegister.negative = (norma, k) => {
    while(!norma.test('input')) {
        norma.sub(k)
        norma.add('input')
    }
}
