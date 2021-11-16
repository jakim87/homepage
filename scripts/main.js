// //variables
// const bDay = '1987-05-09'
// const myname = 'Paweł'
// const surname = 'Jakimiuk'

// console.log('To jest alert. Co by tu zrobic??')
// console.log(myname)

// console.log(`Nazywam sie ${myname} ${surname}. Ucze sie HTMLa.`)
// var iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//   alert('Yay, I love chocolate ice cream!');
// } else {
//   alert('Awwww, but chocolate is my favorite...');
// }
var myButton = document.querySelector('button');
var myDiv = document.querySelector('div');

function setUserName() {
    var myName = prompt('Enter your name');
    localStorage.setItem('name',myName);
    myDiv.textContent = myName
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myDiv.textContent = storedName;
}

myButton.onclick = function() {
    setUserName();
}