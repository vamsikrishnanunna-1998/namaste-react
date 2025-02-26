import React from "react";
import ReactDOM from "react-dom/client";


// React.createElement => Object => HTMLElement(render)
const title = <span>title</span>;
const Title = () => (<h1 id="heading" className="heading">
    Nameste React using Title
</h1>);

const number = 10000;
// React Functional Component
const HeadingComponent = () => {
    return <div id="container">
        <Title />
        <h2>{number}</h2>
        {number * 2}
        {title}
        <h1>Namste React using Function Components</h1>
        </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />)