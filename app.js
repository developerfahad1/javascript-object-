console.log('hello world');

// [];

// console.log([]);


// const array = ['apple' , 'mango' , 'bannana']
// console.log(array[2]);

// collection of key and property is called object;

const obj = {
    firstName: 'Muhammad fahad',
    age: '20',
    email: 'fahadgraphic.pk@email.com',
    isloggedin: 'false'
}

// console.log(obj);
// obj.firstName = 'abdul jabbar';
// console.log(obj);
// obj.age = '23';
// console.log(obj);
// delete obj.firstName
// console.log(obj)

const greet = function(){
    console.log('hello world');
    return 'return hello world'
}

greet()
console.log(greet());


// const object = {
//     firstName: 'muhammad abdullah',
//     age: '20',
//     email: 'fahadgraphics.pk@email.com',
//     isloggedin: 'true'
//     greetobject : function (){
//         console.log('hello world');
//     },
//     hobbies: ['cricket' , 'cooking' , 'eating' , 'swimming']
// }

// console.log(object.email);


const username = document.querySelector('#name');
const email = document.querySelector('#email');
const city = document.querySelector('#city');
const age = document.querySelector('#age');

function getvalue(){
    const obj= {
        username: username.value,
        email: email.value,
        city: city.value,
        age: age.value

    }
    console.log(obj);
}
