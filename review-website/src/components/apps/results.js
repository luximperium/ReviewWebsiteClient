import React from 'react';
import "../../App.css";

const Results = (props) => {
    console.log(props)
    return (
        <div>
                    {props.results.map(results => {
                        return(
                        <div key={results.results}>
                            <h1>Results:</h1>
                            <h2>{results.title}</h2>
                        </div>
                    )}
                    )
                }
        </div>
    )
}

export default Results;