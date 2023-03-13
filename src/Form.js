import React, { useEffect } from "react";
import { Link } from "react-router-dom";


function Form() {
  
  const configFile = {
    authenticationType : "external",
    webApiUrl: 'https://formsflowapi2.aot-technologies.com',
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
      formName = "embeddingtestform-1672722115013"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzYW1wbGUiLCJlbWFpbCI6InNhbXBsZUBlbWFpbC5jb20ifQ.AdTD5cMc2czP71H2Qfb42AXyLodTt9fPItFD7DybqJ0"
      message ="Thank you for your Response"
      ></formsflow-wc>   
        </div>
      </div>
    </>
   
  );
}

export default Form;
