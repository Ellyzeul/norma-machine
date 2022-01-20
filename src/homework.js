const multiplication = (a, b) => {
    const norma = new NormaMachine()

    a > 0 ? populateRegisterPositive(norma, a, 0) : populateRegisterNegative(norma, a, 0)
    a > 0 ? populateRegisterPositive(norma, a, 1) : populateRegisterNegative(norma, a, 1)
    b > 0 ? populateRegisterPositive(norma, b, 2) : populateRegisterNegative(norma, b, 2)
    b > 0 ? populateRegisterPositive(norma, b, 3) : populateRegisterNegative(norma, b, 3)

    return "implementando"
}

const lessThan = (a, b) => {
    const norma = new NormaMachine()

    a > 0 ? populateRegisterPositive(norma, a, 0) : populateRegisterNegative(norma, a, 0)
    a > 0 ? populateRegisterPositive(norma, a, 1) : populateRegisterNegative(norma, a, 1)
    b > 0 ? populateRegisterPositive(norma, b, 2) : populateRegisterNegative(norma, b, 2)
    b > 0 ? populateRegisterPositive(norma, b, 3) : populateRegisterNegative(norma, b, 3)

    while(true) {
        if(norma.test(0)) {                                     // a(input) <= 0 && a(actual) ==0
            while(true) {
                if(norma.test(2)) return false                          // b(input) < 0 && b(actual) == 0
                if(norma.test(3)) return norma.test(4) ? false : true   // b(input) > 0 && b(actual) == 0
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