// ReactDOM.render(<h1>Hello, I am learning!</h1>, document.getElementById("root"));
// ReactDOM.render(<ul><li>first</li><li>second</li></ul>, document.getElementById("root"));

const MainContent = () => {

    return (
        <>
            <h1>First Learning!</h1>
            <ul>
                <li>first</li>
                <li>second</li>
                <li>third</li>
            </ul>
        </>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>, document.getElementById("root"));


// challenge using vanilla JS to create and append an h1 to the div#root (without using innerHTML)
// const h1 = document.createElement("h1");
// h1.textContent = "Imperative way to program - something to append!";
// h1.className = "header"
// document.getElementById("root").append(h1);
// console.log(h1);

// const element = <h1 className="header">This is JSX</h1>
// console.log(element);

// JSX
// must return a single (parent) element. Cannot have mutlitple sibling elements
// const page = (
//     <div>
//         <h1 className="header">This is JSX!</h1>
//         <p>This is a paragraph</p>
//     </div>
// )
// console.log(page);


// challenge
ReactDOM.render(page, document.getElementById("root"));
