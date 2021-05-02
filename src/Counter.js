import React, {useState} from 'react'

export default function StatedBasedComponent() {
    const [count,setCount] = useState(0)

    function incrementCounter(name,value) {
        let params='{"name":' + '"' + name + '"' + "," + '"value":' + value + "}"

        console.log("stupid params=",params)
    
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
    
    function retrieveCounterValue(name){
        
        fetch('http://localhost:8080/getCounter?name=default', {      
            method: "GET",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then((response)       => response.json())
        .then((userParameters) => {setCounterValue(userParameters)})
    }
    
    retrieveCounterValue('default')

    return <div><p>You clicked {count} times</p> <button onClick={() => incrementCounter('default',count+1) }>Click Me</button></div>
}

