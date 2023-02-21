import React, { useEffect } from "react";
import { Link } from "react-router-dom";


function Form() {
  
    const configFile = {
      authenticationType : "external",
      webApiUrl: 'https://app1.aot-technologies.com/api',
      formioUrl:'https://app1.aot-technologies.com/formio/form'
    }
  useEffect(()=>{
    document.querySelector('formsflow-wc').setAttribute('configFile',JSON.stringify(configFile));
  },[])
  return (
    <>
    <Link to="/"><button className="btn btn-primary ml-2 mt-2">Home</button></Link>
     <div className="mt-3 d-flex align-items-center justify-content-around">
        
        <img src="https://i.pinimg.com/736x/03/2d/b5/032db574a23b523b79481d8d222a41ca.jpg" style={{width:"600px"}} className="img-fluid" alt="..." />
        
        <div style={{width:"600px"}} >
        <formsflow-wc
        configFile
        formName = "jan2023-formembedinternal"
        token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzYW1wbGUiLCJlbWFpbCI6InNhbXBsZUBlbWFpbC5jb20iLCJ0ZW5hbnRLZXkiOiJqYW4yMDIzIn0.e52qHXEjBH4ezkZZrAKV7sBToOfp7Wj-HOV0ol4V2P4"
        message ="Thank you for your Response"
        ></formsflow-wc>  
        </div>
      </div>
    </>
   
  );
}

export default Form;
