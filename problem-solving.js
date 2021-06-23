// what is an algorithm?
// a process or set of steps to accomplish a certain task

// how do you improve?
// 1. devise a plan for solving problems
// 2. master common problem-solving patterns

// problem solving

// 1. understand the problem

// Questions to ask yourself:

// (i) Can I restate the problem in my own words?
// (ii) What are the inputs that go into the problem?
// (iii) What are the outputs that should come from 
// the solution to the problem?
// (iv) can the outputs be determined from the inputs? In other
// words, do I have enough information to solve the problem? 
// (You may not be able to answer this question until
// you set about solving the problem. )
// (v) How should I label the important pieces of data that
// are part of the problem?

// 2. explore concrete examples

// 3. break it down

// 4. solve/simplify

// (i) Find the core difficulty
// (ii) Temporarily ignore that difficulty
// (iii) Write a sumplified solution
// (iv) Then incorporate that difficulty back in

// 5. look back and refactor 

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        // runs through one array
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // creates correctIndex, which is to get the index of the 
        // exponiented number
        if (correctIndex === -1) {
            return false;
        }
        // if index doesn't exist, return false
        console.log(arr2);
        arr2.splice(correctIndex, 1)
        // now take it out so we can continue without it changing data
        // 
    }
    return true;
}

console.log(same([1, 2, 7, 2], [9, 1, 4, 4]))

// // ___________________________________________________
// // ___________________________________________________
// _____________________________________________________________________
//     ******* FREQUENCY COUNTERS *******
// ______________________________________________________________________
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // make objects
    // make k/v pairs with them
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    // add to the value of the k/v pair if that k already exists
    // assign it one if it doesn't

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        // in returns true or false to tell you if k exists in object
        // measure against first 'array'/object

        //is the k** in the 2nd array? if not return false and stop
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        // is the k**'s v in one array/obj not equal to the k's value in other array/obj
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]))

function validAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of string1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of string2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

console.log(validAnagram('qwereerty', 'qweeerty'))

// _____________________________________________________________________
//                 ******* MULTIPLE POINTERS *******
// ______________________________________________________________________

function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}


console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))

function sumZero2(arr) {
    let left = 0;
    let right = arr.length - 1; // 8
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

// starts with 2 outer digits added together, left outer and right outer
// if they're 0, return them
// if they're greater than 0, take 1 from right, I.E. move to 2nd inner place
// keep doing that until they're equal...i.e. left and right are the same number
// add one to left so that you move to 2nd inner right digit


console.log(sumZero2([-4, -3, -2, -1, 0, 1, 2, 5]))

// GET ALL OF THE UNIQUE VALUES THAT ONLY APPEAR ONCE


function countUniqueValuesTwo(arr) {
    let i = 0;
    let j = 1;
    if (arr.length === 0) {
        return 0
    }
    if (arr.length === 1) {
        return 1
    }
    while (j !== arr.length - 1) {
        if (arr[j] === arr[i]) {
            j++
        } else if (arr[j] !== arr[i] && j - 1 === i) {
            i++
            j++;

        } else if (arr[i] !== arr[j] && arr[i] === arr[j - 1]) {
            arr[i] = arr[j]
            j++
        }
    }
    arr[i] = arr[j]
    return arr.splice(0, i + 1)
}

console.log(countUniqueValuesTwo([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))

// COUNT THE QUANTITY OF DIFFERENT INTEGERS 


function countUniqueValues(arr) {
    let i = 0;
    let j = 1;
    let count = 0;
    if (arr.length === 0) {
        return 0
    }
    if (arr.length === 1) {
        return 1
    }
    while (j !== arr.length + 1) {
        if (arr[j] !== arr[i]) {
            count++
            j++
            i++
        } else {
            i++
            j++
        }
    }
    return count
}

console.log(countUniqueValues([]))


// 2 is not equal to 1 and 1 is 