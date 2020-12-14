import React, {useState,useEffect} from 'react'


export default function AddTodo({onCreate, onFocusAddTodo}){
    const [value, setValue]=useState('');
    const [dateTime, setDateTime]=useState(new Date().toLocaleString());

    useEffect(()=>{
        setInterval(()=>setDateTime(new Date().toLocaleString()),1200)
    });

    const submitHandler=(event)=> {
        event.preventDefault();

        if (value.trim()){
            onCreate(value);
            setValue('')
        }
    };

    return(
        <form className='d-flex justify-content-center align-items-center' onSubmit={submitHandler} style={{Width:'80%'}}>
            <div className='d-flex justify-content-center align-items-center flex-shrink-1' style={{width: '80%'}}>
                <input type="text"
                       value={value}
                       onKeyPress={(event => onFocusAddTodo(event, value))}
                       onChange={event => setValue(event.target.value)}
                       style={{width: '90%', height:'35px'}}/>
                <button className='btn btn-success' type='submit'>ok</button>
            </div>
            <div style={{border:' 1px solid black', height: '100%', width:'16%', minWidth:'145px'}} className='d-flex align-items-center justify-content-center'>
                <p style={{margin:'0', height:'35px', lineHeight:'35px'}}>{dateTime}</p>
            </div>
        </form>
    )
}
// {new Date().toLocaleString().slice(0,-3)}