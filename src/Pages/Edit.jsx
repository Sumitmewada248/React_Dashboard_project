import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
const Edit=()=>{
const [mydata, setMydata]=useState({});
const {id} =useParams();
const loadData=()=>{
    let api=`http://localhost:3000/Bikes/${id}`;
    axios.get(api).then((res)=>{
        setMydata(res.data);
        console.log(res.data);
    })
}
useEffect(()=>{
    loadData();
}, []);

const handleInput=(e)=>
{ 
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values, [name]:value}))
      console.log(mydata);
}


const handleSubmit=()=>{
    let api=`http://localhost:3000/Bikes/${id}`;
    axios.put(api, mydata).then((res)=>{
        message.success("Data succesflly updated!!!");
    })
}

   

    return(
        <>

        <div id="insert">
        Enter Bike Maker <input type="text" name="make" value={mydata.make} onChange={handleInput} placeholder="Enter Bike Maker"/> <br />
        Enter Bike Name <input type="text" name="model" value={mydata.model} onChange={handleInput} placeholder="Enter Bike Name" /> <br />
        Enter Manufacture year <input type="text"  name="year" value={mydata.year} onChange={handleInput} placeholder="Enter Bike Manufacturing Year"/> <br />
        Enter Manufacture year <input type="text"  name="price" value={mydata.price} onChange={handleInput} placeholder="Enter Bike Price"/> <br />
        <button onClick={handleSubmit}>Update</button>
        </div>
        </>
    )
}

export default Edit;