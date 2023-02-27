import { useDispatch, useSelector } from 'react-redux';
import { countActions } from '../store/toolkitstore';
const Count = () => {
    const count = useSelector(state => state.count)
    console.log(count);
    const dispatch = useDispatch();

    const addCount = () => { dispatch(countActions.add())}
    const subtractCount = () => { dispatch(countActions.subtract())}
    const resetCount = () => { dispatch(countActions.reset())}

  return (
    <div>
        <h2>{count && <h1>{count}</h1>}</h2>
        <button onClick={addCount}>Add</button> 
        <button onClick={subtractCount}>subtract</button> 
        <button onClick={resetCount}>reset</button> 
    </div>
  )
}

export default Count