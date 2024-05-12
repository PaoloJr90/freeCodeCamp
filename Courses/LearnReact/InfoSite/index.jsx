import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(<h1>Hello, I am learning!</h1>, document.getElementById("root"));
// ReactDOM.render(<ul><li>first</li><li>second</li></ul>, document.getElementById("root"));

// const MainContent = () => {
//     return (
//         <>
//             <h1>First Learning!</h1>
//             <ul>
//                 <li>first</li>
//                 <li>second</li>
//                 <li>third</li>
//             </ul>
//         </>
//     )
// }

// ReactDOM.render(
//     <div>
//         <MainContent />
//     </div>, document.getElementById("root"));

/* CHALLENGE
using vanilla JS to create and append an h1 to the div#root (without using innerHTML)
const h1 = document.createElement("h1");
h1.textContent = "Imperative way to program - something to append!";
h1.className = "header"
document.getElementById("root").append(h1);
console.log(h1);
*/

// const element = <h1 className="header">This is JSX</h1>
// console.log(element);

/* JSX
must return a single (parent) element. Cannot have mutlitple sibling elements
const page = (
    <div>
        <h1 className="header">This is JSX!</h1>
        <p>This is a paragraph</p>
    </div>
)
console.log(page);
*/


/* CHALLENGE
create a navbar in JSX
use semantic `nav` element as the parent wrapper
use h1 element with the brand name of website
insert unordered list for the other nav elements; inside the `ul`, have three `li`s for "Pricing", "About", and "Contact"
 */

// const Page = () => {
//     return (
//         <nav>
//             <h1>VR46</h1>
//             <ul>
//                 <li>Pricing</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>
//     )
// }

// can use a component in the render (as below) or a variable as in the previous example
// ReactDOM.render(<Page />, document.getElementById("root"));


/* CHALLENGE
find out what happens if we try to append JSX to our div#root using .append() instead of ReactDOM.
1. create a page with 4 elements and save to a variable
2. select the div with the ID of 'root' and use `.append()` to append the JSX.
3. guess what will show in the browser
4. explain what will show in the brower
*/

// const page = (
//     <nav>
//         <h1>Title of Page</h1>
//         <h3>SubTitle of Page</h3>
//         <ol>
//             <li>First</li>
//             <li>Second</li>
//             <li>Third</li>
//         </ol>
//     </nav>
// )

// document.getElementById('root').append(page)
// returns [object Object]
// document.getElementById('root').append(JSON.stringify(page));
// returns object string
// JSX returns plain JS objects - not yet recognized by browser as shown below
// will need to use ReactDOM.render to turn them into real DOM elements

// ReactDOM.render(page, document.getElementById('root'));

/* CHALLENGE
build and render the HTML for the section project
*/

const page = (
    <div>
        <img src='./React-icon.svg' width="40px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>first release in 2013</li>
            <li>originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Maintained by facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)
console.log(page);

ReactDOM.render(page, document.getElementById('root'));