import React from "react";
import { Formik } from "formik";
function StudentForm () {
    return (
        <div className="mybox">
            <h1>StudentForm</h1>
        
        <Formik
           initialValues={{firstName:'',lastName:'',age:''}}
           OnSubmit={(sobj)=>{
            console.log(sobj)
        }}
  > 

      {
        (fobj)=>{
            return(
                <form onSubmit={fobj.handleSubmit}>
                    <input type="text" name="firstName" onChange={fobj.handleChange}></input>
                    <br/>
                    <input type="text" name="age" onChange={fobj.handleChange}></input>
                    <br/>
                    <input type="text" name="lastName" onChange={fobj.handleChange}></input>
                    <br/>
                    <button>show</button>
                    

                </form>

            )
        }
      }
  </Formik>
        </div>

    )

}
export default StudentForm;