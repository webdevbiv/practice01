//! Task 1
const refs = {
    buttonRef: document.querySelector('button'),
    textRef: document.querySelector('div')
}
console.log(refs.buttonRef);
console.log(refs.textRef);

refs.buttonRef.addEventListener('click', hideElement6)

function hideElement() {
    refs.textRef.classList.toggle('hidden')
}
function hideElement2() {
    refs.textRef.remove()
}
function hideElement3() {
    refs.textRef.style.display = 'none'
}
function hideElement4() {
    refs.textRef.innerHTML = ""
}
function hideElement5() {
    refs.textRef.innerText = ""
}
function hideElement6() {
    refs.textRef.hidden = "true"
}

//! Task 2
const tableRef = document.querySelector('table')
console.log(tableRef);
const tdRef = document.querySelectorAll('td')
// tdRef[0].style.backgroundColor = 'red'
console.log(tdRef.length);

//? Solution 1
// for (let i = 0; i < tdRef.length; i += 6) {
//     function getRandomHexColor() {
//         return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//     }
//     let randomColor = getRandomHexColor()
//     tdRef[i].setAttribute('style', `background-color: ${randomColor};`)
// }

//? Solution 2
console.log(tableRef.rows);

for (let i = 0; i < tableRef.rows.length; i += 1) {
    const row = tableRef.rows[i]
    row.cells[i].style.backgroundColor = getRandomHexColor()
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    // tdRef[i].setAttribute('style', `background-color: ${getRandomHexColor()};`)
}

//! Task 3
const refs3 = {
    inputRef3: document.querySelector('#text3'),
    buttonRef3: document.querySelector('#btn3')
}
console.log(refs3.inputRef3);
console.log(refs3.buttonRef3);
refs3.buttonRef3.addEventListener('click', inputText32)

//? Solution 1
function inputText3(event) {
    console.log(event.target.innerText);
    console.log(refs3.inputRef3.value);
    event.preventDefault()
    if (refs3.inputRef3.value !== '') {
        event.target.innerText = `Вы ввели '${refs3.inputRef3.value}'`
        alert(`Вы ввели '${refs3.inputRef3.value}'`)
    } else {
        event.target.innerText = `Вы ничего не ввели в поле`
        alert(`Вы ничего не ввели в поле`)
    }
}

//? Solution 2
function inputText32() {
    if (!refs3.inputRef3.value) {
        alert(`Вы ничего не ввели в поле`)
        return
    }
    alert(`Вы ввели '${refs3.inputRef3.value}'`)
}

//! Task 4

console.dir(document.body.childNodes);
console.log(document.body);
console.log(document.activeElement)
console.log(document.links);
console.log(document.images);
console.log(typeof HTMLAllCollection);
console.log(DOMTokenList);
console.log(NamedNodeMap);
console.log(document.body.childNodes);
console.log(document.doctype);
console.log(document.documentURI);
console.log(document.forms);

const divRef4 = document.querySelector('div')
console.log(divRef4);

const itemRef4 = document.getElementsByTagName('ul')
console.log(itemRef4);

const body4 = document.body
const itemBodyRef4 = body4.getElementsByTagName('ul')
console.log(itemBodyRef4);
const childListRef4 = itemBodyRef4[0].childNodes[3]
console.log(childListRef4);

//! Pseudo-arrays
const array41 = Array.from(itemBodyRef4)
console.log(array41);
const array42 = [...itemBodyRef4]
console.log(array42);


console.log(itemBodyRef4, typeof itemBodyRef4, itemBodyRef4.length);

//? Solution 1
const array43 = []
for (let i = 0; i < itemBodyRef4.length; i++) {
    array43.push(itemBodyRef4[i])
}
console.log(array43);

//? Solution 2
let array44 = Array.prototype.slice.call(itemBodyRef4)
console.log(array44);

//? Solution 3
let array45 = itemBodyRef4
array45.__proto__ = Array.prototype;
console.log(array45, typeof array45);
console.log(Array.isArray(array45));
console.log(array45);

//! Task 5

const listRef5 = document.querySelector('.list5')
console.log(listRef5);
const button5 = document.querySelector('#prompt5')
console.log(button5);
button5.addEventListener('click', userInput5)

function userInput5() {
    let userInput = true
    console.log(userInput);
    while (userInput !== null || userInput !== '') {
        console.log(userInput);
        userInput = prompt('введите текст')
        if (userInput === '' || userInput === null) {
            return
        }
        else {
            let newItem = document.createElement('li')
            newItem.innerText = userInput
            listRef5.appendChild(newItem)
            console.log('step2');
        }
    }
}

//! Task 6
const refs6 = {
    table: document.querySelector('#age-table'),
    label: document.querySelectorAll('label')
}
console.log(refs6.table);
console.log(refs6.label);
const tdText = refs6.table.children[0].children[0].children[0]
console.log(tdText);
const formNameSearch = document.querySelector('[name="search-person"]')
console.log(formNameSearch);

const labelsRef = document.getElementsByTagName('label')
console.log(labelsRef);

const inputsRef = document.querySelectorAll('[type="radio"]')
console.log(inputsRef);

inputsRef.forEach(item =>
    console.log(item.name, item.value, item.innerText)
)

for (let i = 0; i < labelsRef.length; i++) {
    const child = labelsRef[i].children[0]
    console.log(labelsRef[i].innerText, child.name, child.value);
}
console.log(formNameSearch);

const formData = new FormData(formNameSearch)
for (var pair of formData.entries()) {
    console.log(pair[0] + ', ' + pair[1]);
}
console.log(Object.entries(formData));


// formData.forEach((name, key) => {
//     obj[name] = value;
//     console.log(name);
//     console.log(value);
// })
// console.log(obj);


