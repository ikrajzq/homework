const user = {
  firstName:'Evgeniy',
  lastName: 'Bulochkin',
  age: 32,
  isAdmin:true,
  conclusion(name){
    return `Hello ${name}`
  }
}
console.log(user.conclusion(user.firstName))


const users = [
  {
    name:'Olga',
    age:43,
    isAdmin:false
  },

  {
    name:'Oleg',
    age:56,
    isAdmin:true
  },
  
  {
    name:'Artem',
    age:23,
    isAdmin:false
  }
]

let regularUsers = 0

for (i=0; i<users.length;i++){
  if (users[i].isAdmin ===false){
    regularUsers++
  }else{
    regularUsers=regularUsers
  }
}
console.log(regularUsers)
