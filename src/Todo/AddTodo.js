import React, {useState} from 'react'


export default function AddTodo({onCreate, onFocusAddTodo}){
    const [value, setValue]=useState('');

    function submitHandler(event) {
        event.preventDefault();

        if (value.trim()){
            onCreate(value);
            setValue('')
        }
    }
    return(
        <form className='d-flex justify-content-center align-items-center' onSubmit={submitHandler}>
            <div className='d-flex justify-content-center align-items-center' style={{width: '80%'}}>
                <input type="text"
                       value={value}
                       onKeyPress={(event => onFocusAddTodo(event, value))}
                       onChange={event => setValue(event.target.value)}
                       style={{width: '90%', height:'35px'}}/>
                <button className='btn btn-success' type='submit'>ok</button>
            </div>
            <div style={{border:' 1px solid black', height: '100%', width:'15%'}} className='d-flex align-items-center justify-content-center'>
                <p style={{margin:'0', height:'35px', lineHeight:'35px'}}>{new Date().toLocaleString().slice(0,-3)}</p>
            </div>
        </form>
    )
}