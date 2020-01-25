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

/* const numOfX = input => {
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
console.log(balanced('x')); */

/*// [2018-08-20] Challenge #366 [Easy] Word funnel 1
// Given two strings of letters, determine whether the second can be made from the first by removing one letter. The remaining letters must stay in the same order.
// https://www.reddit.com/r/dailyprogrammer/comments/98ufvz/20180820_challenge_366_easy_word_funnel_1/

const funnel = (firstWord, secondWord) => {
    let compare = '';
    for (let i = 0; i < firstWord.length; i++) {
        let firstHalf = firstWord.substring(0, i-1);
        let secondHalf = firstWord.substring(i);
        compare = firstHalf+secondHalf;
        if (compare == secondWord) {
            return true;
        }
    }
    return false;
    
};

console.log(funnel('smerf', 'merf'));
console.log(funnel("leave", "eave"));
console.log(funnel("reset", "rest"));
console.log(funnel("dragoon", "dragon"));
console.log(funnel("eave", "leave"));
console.log(funnel("sleet", "lets"));
console.log(funnel("skiff", "ski")); */

/*//[2019-11-11] Challenge #381 [Easy] Yahtzee Upper Section Scoring
//Your task is to find the maximum possible score for this roll in the upper section of the Yahtzee score card.
//https://www.reddit.com/r/dailyprogrammer/comments/dv0231/20191111_challenge_381_easy_yahtzee_upper_section/

const yahtzeeScore = (arr) => {
    let oneCount = 0;
    let twoCount = 0;
    let threeCount = 0;
    let fourCount = 0;
    let fiveCount = 0;
    let sixCount = 0;

    arr.forEach(element => {if (element === 1) {
        oneCount++;
    } else if (element === 2) {
        twoCount++;
    } else if (element === 3) {
        threeCount++;
    } else if (element === 4) {
        fourCount++;
    } else if (element === 5) {
        fiveCount++;
    } else {
        sixCount++;
    };})
    
    let oneScore = oneCount * 1;
    let twoScore = twoCount * 2;
    let threeScore = threeCount * 3;
    let fourScore = fourCount * 4;
    let fiveScore = fiveCount * 5;
    let sixScore = sixCount * 6;

    return Math.max(oneScore, twoScore, threeScore, fourScore, fiveScore, sixScore);
};

console.log(yahtzeeScore([2, 3, 5, 5, 6]))*/

//[2018-06-11] Challenge #363 [Easy] I before E except after C
//Write a function that tells you whether or not a given word follows the "I before E except after C" rule.
//https://www.reddit.com/r/dailyprogrammer/comments/8q96da/20180611_challenge_363_easy_i_before_e_except/

const ruleCheck = str => {
    let ieIndex = str.indexOf('ie');
    let eiIndex = str.indexOf('ei');
    
    if (!str.includes('ie') && !str.includes('ei')) {
        return true;
    } else if (str.includes('ie')) {
        if (str[ieIndex - 1] === 'c') {
            return false;
        } else {
            return true;
        }
    } else if (str.includes('ei')) {
        if (str[eiIndex - 1] === 'c') {
            return true;
        } else {
            return false;
        }
    } 
};

console.log(ruleCheck('a')); //true
console.log(ruleCheck('zombie')); //true
console.log(ruleCheck('transceiver')); //false
console.log(ruleCheck('veil')); //false
console.log(ruleCheck('icier')); //true