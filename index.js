// index.js



 // <== <p id="paragraph">What is your name?</p>

let links = document.getElementsByClassName('link');

console.log(links); // <== HTMLCollection [a#google-link.link, google-link: a#google-link.link]
// 0: a#google-link.link
// length: 1
// google-link: a#google-link.link
// __proto__: HTMLCollection

let divs = document.getElementsByTagName('div');

console.log(divs);

// index.js

// index.js
let paragraph = document.getElementById('paragraph');
// paragraph.removeAttribute('id')
// paragraph.setAttribute('class', 'paragraph');

// paragraph.removeAttribute('class')

console.log("PARAGRAPH:", paragraph); // <== paragraph

let link = document.getElementById("google-link")

link.setAttribute('href', 'https://www.google.com')

link.setAttribute('target', '_blank')

console.log("LINK:", link)

// index.js
// ...

let h2Tag = document.createElement('h2');


h2Tag.innerHTML = 'Elephant';

let parent = document.getElementById('body')

// parent.firstElementChild = h2Tag

console.log(parent)

parent.prepend(h2Tag)

// h2Tag.insertAdjacentElement("beforebegin", paragraph)

// parent.appendChild(h2Tag);

console.log(h2Tag); // <== <h2></h2>

// index.js
// ...
// let text = document.createTextNode('This text is created dynamically  ');

// parent.appendChild(text);

// let newElement = document.createElement('p')

// parent.appendChild(newElement)

// newElement.innerText = 'Hi there! I am using JavaScript'

let h1Tag = document.createElement('h1');
h1Tag.innerHTML = 'Heading 1 - comes before Heading 2';
parent.insertBefore(h1Tag, h2Tag);

let inputElement = document.createElement('input')

let button = document.getElementById('add-item-button')

parent.insertBefore(inputElement, button)

parent.removeChild(paragraph);

parent.removeChild(h2Tag)


let contentDiv = document.getElementById('content');
console.log(contentDiv)



let some = document.getElementById('some')

let thisChild  = document.getElementsByClassName('super-list')[0]


// let newParagraph = document.createElement('p')
// parent.appendChild(newParagraph)

// newParagraph.innerText = 'hello world'

// let newNode = document.createTextNode("hello world")
// newParagraph.appendChild(newNode)

// // some.removeChild(thisChild)

// let exampleDiv = document.createElement('div')

// parent.appendChild(exampleDiv)

// exampleDiv.innerHTML = `

// <p>Hello world!</p>
// <p>Hello world again!</p>

// // `

// let button = document.getElementById('add-item-button');

let counter = 1
let list = document.getElementById('items-list')
 
button.onclick = function() {
    let newListItem = document.createElement('li')
    newListItem.innerText = `Item number ${counter}`
    newListItem.onclick = ((event) => {
        console.log(event.currentTarget.innerText)
    })
    list.appendChild(newListItem)
    counter++
    console.log('adding an element to the list');
};

// let input = document.getElementById('name');
// console.log("VALUE:", input.value); //=> ""


let sendButton = document.getElementById('send-btn');
// move the input inside the function (this step is optional):
sendButton.onclick = function() {
    let input = document.getElementById('name'); // or leave it as it is, outside
    console.log("VALUE:", input.value)
};

// let liTags = document.getElementsByTagName('li');
 
// for (let i = 0; i < liTags.length; i++) {
//   liTags[i].onclick = function(e) {
//     console.log(e.currentTarget.innerHTML);
//   };
// }



let theseTags = document.querySelectorAll('li')

let tagsArray = [...theseTags]

tagsArray.forEach((tag) => {
    tag.onclick = ((event) => {
        let parent = event.currentTarget.parentNode
        parent.removeChild(event.currentTarget)
        console.log(event.currentTarget.innerText)
    })
})


