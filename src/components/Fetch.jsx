import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Fetch = () => {
    const quote = useSelector(state => state.fetchData.data);
    const dispatch = useDispatch();

    
    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
        const data = await response.json();
        console.log(quote);
        dispatch({ type: 'FETCH', data })
    }

    return (
    <div>
        {quote && quote.map(item => (
            <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
            </div>
        ))}
        <button onClick={getData}>get data</button>
    </div>
    )
}

export default Fetch