import React, {useState,useEffect} from 'react'


export default function NavBlockDate(){
    const [dateTime, setDateTime]=useState(new Date().toLocaleString());

    useEffect(()=>{
        setInterval(()=>setDateTime(new Date().toLocaleString()),1000)
    });


    return(
            <div style={{border:' 1px solid black', height: '100%', width:'16%', minWidth:'145px'}} className={`d-flex align-items-center justify-content-center`}>
                <p style={{margin:'0', height:'35px', lineHeight:'35px'}}>{dateTime}</p>
            </div>
    )
}
// {new Date().toLocaleString().slice(0,-3)}