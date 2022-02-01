// Task 1

function getSumOfN (n) {
    let res = 0;

    for (let i = 0; i <= n; i++) {
        res = res+i;
    }
    return res;
}

// Task 2

const student = {
    name: 'Evgen',
    lastName: 'Khokhlov',
    isMale: true,
    phone: '380593434335'
}

const university = {
    faculty: 'Law',
    department: 'Criminal law'
}

const studentFullInfo = {...student, ...university};
console.log(studentFullInfo);

function getSex({isMale}){
    if(!isMale){
        return 'he'
    } else {
        return 'she'
    }
}

function getInfo ({name, lastName, isMale, phone, faculty, department}) {
    let sex = getSex(isMale);    
    console.log(`This is ${lastName} ${name}, ${sex} studies at ${faculty} faculty on the ${department} department.
Mobile phone is +${phone}.`)
}

getInfo(studentFullInfo);

// Task 3

function getArrayOfRandomValues(min, max, capacity) {
    const array = [];
    for (let i = 0; i <= capacity; i++) {
        array.push(Math.round(min + Math.random() * (max - min + 1)));
    }
    return array;
}

const randomArray = getArrayOfRandomValues(0, 100, 25);
console.log(randomArray);

function getEvenIndexValuesOfArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if(i % 2 === 0) {
            newArray.push(array[i])
        }
    }
    return newArray;
}

const evenIndexArray = getEvenIndexValuesOfArray(randomArray);
console.log(evenIndexArray);

function getEvenValues(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            newArray.push(array[i])
        }
    }
    return newArray;
}

const evenArray = getEvenValues(randomArray);
console.log(evenArray);

function getIndexOfZeroValue (array) {
    for (let i = 0; i < array.length; i++) {
        if(!array[i]) {
            return i;
        }
    }
}

function getCountOfZeroValue (array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if(!array[i]) {
            return count++;
        }
    }
}

// Task 4

class Book {
    constructor(author, title, publishYear, publisher) {
        this.author = author;
        this.title = title;
        this.publishYear = publishYear;
        this.publisher = publisher;
    }
}

class ElBook extends Book {
    constructor(author, title, publishYear, publisher, file, elNum) {
        super(author, title, publishYear, publisher);
        this.file = file;
        this.elNum = elNum;
    }
}