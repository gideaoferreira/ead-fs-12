let userData = {
    name: "Karen",
    gender: "Feminino",
    email: "karen@gmail.com",
    scoresMath: {
        n1: 10,
        n2: 10
    },
}

function isAproved(n1, n2, medium) {
    const calc = (n1 + n2) / 2

    if (calc >= medium) {
        return true
    }

    return false
}

function greeting(user) {
    const scoreMedium = 10

    if (user.gender === "Feminino") {
        console.log("Olá, aluna!")
    }

    if (user.gender === "Masculino") {
        console.log("Olá, aluno!")
    }

    if (isAproved(user.scoresMath.n1, user.scoresMath.n2, scoreMedium)) {
        console.log("Parabéns você foi aprovado(a)!")
    }

    if (!isAproved(user.scoresMath.n1, user.scoresMath.n2, scoreMedium)) {
        console.log("Infelizmente você não foi aprovado(a)!")
    }
}

greeting(userData)
