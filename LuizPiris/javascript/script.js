let userData = {
    name: "Luiz",
    gender: "Masculino",
    email: "luiz@gmail.com",
    scoresMath: {
        n1: 8,
        n2: 7
    },
}

function isAproved(n1, n2, medium) {
    const calc = (n1 + n2) / 2;

    if (calc >= medium) {
        return true;
    }

    return false;
}

function greeting(user) {
    const scoreMedium = 7;

    if (user.gender === "Feminino") {
        console.log("Olá, aluna!");
    }

    if (user.gender === "Masculino") {
        console.log("Olá, aluno!");
    }

    if (isAproved(user.scoresMath.n1, user.scoresMath.n2, scoreMedium)) {
        console.log("Parabéns, você foi aprovada(o)!");
    }

    if (!isAproved(user.scoresMath.n1, user.scoresMath.n2, scoreMedium)) {
        console.log("Infelizmente, você não foi aprovada(o).");
    }
}

greeting(userData);