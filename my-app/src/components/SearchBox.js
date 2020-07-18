import React from 'react';
import './SearchBox.css';
function SearchBox() {
    const [count, setCount] = React.useState(0);
    const [eq, setEq] = React.useState('');
    const [output, setOutput] = React.useState('');
    const [simplify, setSimplify] = React.useState('');
    const [factor, setFactor] = React.useState('');
    const [solve, setSolve] = React.useState('');
    const [expand, setExpand] = React.useState('');
    const update = () => {
        const data = {
            expr: eq
        };

        fetch('http://127.0.0.1:5000/getSolution', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.msg === "success") {
                    setSimplify(data.simplify);
                    setFactor(data.factor);
                    setSolve(data.solve);
                    setExpand(data.expand);
                }
                else
                    setOutput('Wrong Input Try again!!!')
            })
            .catch((error) => {
                console.error('Error:', error);
            })

        setCount(count + 1);
    }
    return (
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="solve your polynomial equation here!!" value={eq} onChange={event => setEq(event.target.value)} required />
                <button type="submit" className="searchButton" onClick={update}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
            <p>{count}</p>
            <p>Simplify : {simplify}</p>
            <p>Expand: {expand}</p>
            <p>Factor : {factor}</p>
            <p>Solve : {solve}</p>
            <p>{output}</p>
        </div>
    );
}

export default SearchBox;

