// [2019-02-11] Challenge #375 [Easy] Print a new number by adding one to each of its digit
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
console.log(typeof addOne(3456));