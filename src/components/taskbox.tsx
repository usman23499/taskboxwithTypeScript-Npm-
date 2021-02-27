import './style.css'
import React from 'react'
const Taskbox:any=({value  ,onChangeradion,style,checkradio,checkfav,onChangefav} : any)=>(
    
    <div className="maindiv" style={style} >
        {/* <div className="div2">
        <input type="checkbox" className="div2checkbox" id="vehicle1"  />
        <label for="vehicle1">
        {value}
        </label>
        </div> */}

        <div className="checkbox-container">
        <label className="checkbox-label">
            <input type="checkbox" onChange={onChangeradion}  checked={checkradio} />
            <span className="checkbox-custom rectangular"></span>
            <label> 
        {value}
        </label>
        </label>
       
        </div>

        <div>
        <input className="star" type="checkbox" onChange={onChangefav} checked={checkfav} />
        </div>
       
    </div>

)

export default Taskbox;