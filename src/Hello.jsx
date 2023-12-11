import React from "react";

const MyComponent = ({ url, onClick }) => {
    return (
        <div>
            <p>{`the url is: ${url}`}</p>
            <button onClick={onClick}>Click</button>
        </div>
    )
}

const MyComponentWithState = () => {
    const [value, setValue] = React.useState(0);
    return (
        <div>
            <p>{value}</p>
            <button onClick={() => setValue(value + 1)}>Click</button>
        </div>
    )
}

const myDefault = (i) => {
    return i < 50
}

const myNamed = () => {
    return(5);
}

export default myDefault;
export {
    myNamed,
    MyComponent,
    MyComponentWithState,
};