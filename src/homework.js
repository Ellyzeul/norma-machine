const additionWithoutPreserving = (a, b) => {
    const norma = new NormaMachine()

    populateRegister(norma, a, 0)
    populateRegister(norma, b, 1)

    if(lessThan(a, 0)) while(!norma.test(0)) {
        norma.sub('output')
        norma.add(0)
    }
    else while(!norma.test(0)) {
        norma.add('output')
        norma.sub(0)
    }
    
    if(lessThan(b, 0)) while(!norma.test(1)) {
        norma.sub('output')
        norma.add(1)
    }
    else while(!norma.test(1)) {
        norma.add('output')
        norma.sub(1)
    }

    return norma.output()
}

const multiplication = (a, b) => {
    const norma = new NormaMachine()

    populateRegister(norma, a, 0)
    populateRegister(norma, a, 1)
    populateRegister(norma, b, 2)
    populateRegister(norma, b, 3)

    return "implementando"
}

const lessThan = (a, b) => {
    const norma = new NormaMachine()

    populateRegister(norma, a, 0)
    populateRegister(norma, a, 1)
    populateRegister(norma, b, 2)
    populateRegister(norma, b, 3)
    populateRegister(norma, b, 5)

    while(true) {
        if(norma.test(0)) {                                     // a(input) <= 0 && a(actual) ==0
            while(true) {
                if(norma.test(2)) return false                          // b(input) < 0 && b(actual) == 0
                if(norma.test(3)) return norma.test(4) && norma.test(5) ? false : true   // b(input) > 0 && b(actual) == 0
                if(norma.test(4)) norma.add(4)

                norma.add(2)
                norma.sub(3)
            }
        }
        if(norma.test(1)) {                                     // a(input) > 0 && a(actual) == 0
            while(true) {
                if(norma.test(2)) return false                          // b(input) < 0 && b(actual) == 0
                if(norma.test(3)) return norma.test(4) ? false : true   // b(input) > 0 && b(actual) == 0
                if(norma.test(4)) norma.add(4)

                norma.add(2)
                norma.sub(3)
            }
        }
        if(norma.test(2)) {                                     // b(input) <= 0 && b(actual) == 0
            while(true) {
                if(norma.test(0)) return norma.test(4) ? false : true   // a(input) < 0 && a(actual) == 0
                if(norma.test(1)) return false                          // a(input) > 0 && a(actual) == 0
                if(norma.test(4)) norma.add(4)

                norma.add(0)
                norma.sub(1)
            }
        }
        if(norma.test(3)) {                                     // b(input) > 0 && b(actual) == 0
            while(true) {
                if(norma.test(0)) return norma.test(4) ? false : true   // a(input) < 0 && a(actual) == 0
                if(norma.test(1)) return false                          // a(input) > 0 && a(actual) == 0
                if(norma.test(4)) norma.add(4)

                norma.add(0)
                norma.sub(1)
            }
        }

        norma.add(0)
        norma.sub(1)
        norma.add(2)
        norma.sub(3)
    }
}