import React from 'react';
import './SearchBox.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
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

        fetch('https://assignment98.herokuapp.com/getSolution', {
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
                    setCount(0);
                }
                else {
                    setOutput('Wrong Input Try again!!!')
                    setSimplify('');
                    setFactor('');
                    setSolve('');
                    setExpand('');
                    setCount(1);
                }
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
            {count === 0 && <div>
                <p>Simplify : {simplify}</p>
                <p>Expand: {expand}</p>
                <p>Factor : {factor}</p>
                <p>Solve : {solve}</p>
            </div>}
            <p>{output}</p>
            <hr/>
            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item><u>Examples(try to solve this equation)</u></ListGroup.Item>
                    <ListGroup.Item>2*x**2+3*x+1</ListGroup.Item>
                    <ListGroup.Item>(x+y-z)**3</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
}

export default SearchBox;

