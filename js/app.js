'use strict';
var yourscore = 0;
var name = prompt('what is your name?');
alert('hello ' + name + '  , let\'s get started');
console.log('welcome', name);

var Q = [
    ['am i from Tafila',
        'it is great to be from there',
        'unfortunalety'
    ], ['do i love running??',
        'i do every morning',
        'ooh, it is very important'
    ], ['am i commited to time??',
        'great',
        'you have to ..'
    ], ['am i patient ?',
        'actually i am ',
        'no, i am'
    ], ['do i love food??',
        'everyone loves food',
        'unfortunalety']
]

for (var i = 0; i < 5; i++) {
    var currentQ = Q[i];
    var currentP = currentQ[0];
    var userResponse = prompt(currentP);
    userResponse = userResponse.toLowerCase();
    var positiveReply = currentQ[1];
    var negativeReply = currentQ[2];


    switch (userResponse) {
        case 'yes':
        case 'y':
            yourscore++
            alert(positiveReply);
            break;
        case 'no':
        case 'n':
            alert(negativeReply);
            break;
        default:
            alert('not right');
    }

}

////////////////////////////////// QUESTION NUMBER 6 /////////////////////////////////////
for (var j = 0; j < 4; j++) {
    var age = prompt('guess how old i am?? enter a number with two digits');

    if (age == 25) {
        alert('that is true');
        yourscore++
        var j = 4;
    }
    else if (age > 28) {
        alert('too high');

    } else if (age < 22) {
        alert('too small');

    }
}
alert('my age is 25');

///////////////////////////////////// QUESTION NUMBER 7 /////////////////////////////////

var colors = ['white', 'burgandy', 'olive green'];

for (var k = 0; k < 6; k++) {
    var color = prompt('can you mention one of my favourite colors');
    color = color.toLowerCase();

    if (color == colors[0] || color == colors[1] || color == colors[2]) {
        alert('this is right');
        k=6;
        yourscore++

    }
    else { alert('try again'); }
}
alert('my favourite colors are: white, burgandy and olive green');


///////////////////////////////////// ANSWERS COUNTR /////////////////////////////////

alert('your score are   ' + yourscore);











 


