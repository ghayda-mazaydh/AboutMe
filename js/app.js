'use strict';

var name = prompt('what is your name?');
alert('hello '+ name + '  , let\'s get started');
console.log('welcome', name);

var Q1 = prompt('am i from Tafila');

Q1 = Q1.toLowerCase();
switch (Q1) {
    case 'yes':
    case 'y':
        alert('correct');
        break;
    default:
        alert('not right!');

}

var Q2 = prompt('do i love running??');

Q2 = Q2.toLowerCase();
if (Q2 == 'yes') {
    alert('correct');

} else if (Q2 == 'y') {
    alert('correct');

} else {
    alert('not right!');
}

var Q3 = prompt('do i love pets??');

Q3 = Q3.toLowerCase();
if (Q3 == 'no') {
    alert('correct');

} else if (Q3 == 'n') {
    alert('correct');

} else {
    alert('not right');

}
var Q4 = prompt('am i afraid of the dark');

Q4 = Q4.toLowerCase();
switch (Q4) {
    case 'no':
    case 'n':
        alert('correct');
        break;
    default:
        alert('not right!');

}
var Q5 = prompt('am i 25??');

Q5 = Q5.toLowerCase();
switch (Q5) {
    case 'yes':
    case 'y':
        alert('correct');
        break;
    default:
        alert('not right!');
}



