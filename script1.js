class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    direBonjour(){
        console.log('Bonjour')
    }
}


let user1 = new User('Anthony', 18)
let user2 = new User('Etienne', 22)

user1.direBonjour()
user2.direBonjour()
