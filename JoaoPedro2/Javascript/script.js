// function greeting(message, user){
//     console.log(message, user)
// }
//     greeting("Olá! Boa noite, " , "Karen")

let user = {
    name: "Karen",
    gender: "Feminino",
    email: "Karen@gmail.com",
}

function greeting(user){
    if(user.gender === "Feminino"){
        console.log("Olá, aluna!")
    }
     if(user.gender === "Masculino"){
        console.log("Olá, aluna!")
    }
}

greeting(user)