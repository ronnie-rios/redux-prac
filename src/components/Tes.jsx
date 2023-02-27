import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Tes = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count); //needs a callback

    const addStuff = () => {
        dispatch({ type: 'INCREMENT' })
    }

    const subtractStuff = () => {
        dispatch({ type: 'DECREMENT' })
    }

    return (
    <div>
        <h1>{count}</h1>
        <button onClick={addStuff}>add</button>
        <button onClick={subtractStuff}>minus</button>
    </div>
    )
}

export default Tes