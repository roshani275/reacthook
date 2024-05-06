import React from 'react'

export const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div> <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>   
       <button onClick={onDecrement}>Decrement</button></div>
  )
}
export default Counter;

