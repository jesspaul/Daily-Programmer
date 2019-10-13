/* // [2019-02-11] Challenge #375 [Easy] Print a new number by adding one to each of its digit
// https://www.reddit.com/r/dailyprogrammer/comments/aphavc/20190211_challenge_375_easy_print_a_new_number_by/

const addOne = input => {
    let stringNum = input.toString();
    let splitNum = stringNum.split("");
    for (let i = 0; i < splitNum.length; i++) {
        splitNum[i] ++;
    }
    let newNum = splitNum.join("");
    return Number(newNum);
};

console.log(addOne(456));
console.log(typeof addOne(3456)); */

// [2019-01-14] Challenge #372 [Easy] Perfectly balanced
// Given a string containing only the characters x and y, find whether there are the same number of xs and ys.
// https://www.reddit.com/r/dailyprogrammer/comments/afxxca/20190114_challenge_372_easy_perfectly_balanced/

const numOfX = input => {
    let splitInput = input.split('');
    let xCounter = 0;
    splitInput.forEach(function(element) {
        if (element === 'x') {
            xCounter++;
        }
    })
    return xCounter;
}

const numOfY = input => {
    let splitInput = input.split('');
    let yCounter = 0;
    splitInput.forEach(function(element) {
        if (element === 'y') {
            yCounter++;
        }
    })
    return yCounter;
}


const balanced = input => {
    if (input.length %2 !== 0) {
        return false;
    } else if (numOfX(input) === numOfY(input)) {
        return true;
    } else {
        return false;
    }
    };

console.log(balanced('xxxyyy'));
console.log(balanced('yyyxxx'));
console.log(balanced('xxxyyyy'));
console.log(balanced('yyxyxxyxxyyyyxxxyxyx'));
console.log(balanced('xyxxxxyyyxyxxyxxyy'));
console.log(balanced(''));
console.log(balanced('x'));