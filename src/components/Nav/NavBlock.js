import React from 'react'
import NavBlockInputPart from "./NavBlockInputPart";
import NavBlockDate from "./NavBlockDate";


export default function NavBlock(props){
    return(
        <div className={`d-flex justify-content-around align-items-center`} >
            <NavBlockInputPart onFocusAddTodo={props.onFocusAddTodo} onCreate={props.onCreate} />
            <NavBlockDate/>
        </div>

    )
}