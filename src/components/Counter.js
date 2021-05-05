import React, {useState} from 'react'

export default function StatedBasedComponent({parm,fcn,idx}) {
     
    const [count,setCount] = useState(0)

    function incrementCounter(name,value) {
        // eslint-disable-next-line
        let params='{"name":' + '"' + name + '"' + "," + '"value":' + value + "}"

        // console.log("stupid params=",params)
    
        fetch('http://localhost:8080/updateCounter', {      
            method: "POST",
            body: params,
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then((response) => {console.log('It came back')})
        
        setCount(value)
    }
    
    function setCounterValue(userParams){
        setCount(userParams.value)
    }
    
    function deleteCounter(name){     
        fetch(`http://localhost:8080/deleteCounter/${name}`, {      
            method: "delete",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then((response) => {console.log('deleted a counter')})
        fcn(idx)
    }

    function retrieveCounterValue(name,value){
        fetch(`http://localhost:8080/getCounter?name=${name}`, {      
            method: "GET",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then((response)      => response.json()
        ).then((userParameters) => {setCounterValue(userParameters)})    
    }
    
    retrieveCounterValue(parm.name,parm.value)

    return ( 
        <>     
            <td>{count}</td>          
            <td><button onClick={() => incrementCounter(parm.name,count+1) }>Increment</button></td>
            <td><button onClick={() => incrementCounter(parm.name,count-1) }>Decrement</button></td>
            <td><button onClick={() => deleteCounter(parm.name) }>Delete</button></td>
        </>
    ) 
}