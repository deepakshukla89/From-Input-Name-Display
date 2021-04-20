import React, { useState} from 'react';

const App = ()=>{
    const [name, setName] = useState();
    const [fullName, setFullName] = useState();

    const inputEvent = (event)=>{
        setName(event.target.value)
    };
    const onSubmit = ()=>{
        setFullName(name)
    };
    

    return(


        <>
            <div className="addToCart">
                <h1 className="heading_style">Hello {fullName}</h1>
                <input className="EtrName" type="text" placeholder="Enter Your Name" onChange={inputEvent} value={name}/>
                <button className="button " onClick={onSubmit}>Click me</button>

            </div>

        </>
    );
};

export default App;