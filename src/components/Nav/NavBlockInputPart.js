import React, {useState} from 'react'


export default function NavBlockInputPart({onCreate, onFocusAddTodo}){
    const [value, setValue]=useState('');

    const submitHandler=(event)=> {
        event.preventDefault();

        if (value.trim()){
            onCreate(value);
            setValue('')
        }
    };

    return(
        <form onSubmit={submitHandler} style={{width:'78%'}}>
            <div className={`d-flex justify-content-center align-items-center flex-shrink-1`} style={{width:'100%'}}>
                <input type="text"
                       value={value}
                       onKeyPress={(event => onFocusAddTodo(event, value))}
                       onChange={event => setValue(event.target.value)}
                       style={{height:'35px', width:'100%'}}/>
                <button className={`btn btn-success`} type='submit'>ok</button>
            </div>
        </form>
    )
}
// {new Date().toLocaleString().slice(0,-3)}