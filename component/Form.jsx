import React  from "react";

export default function Form(){
    const [formdata,setFormdata]=React.useState(
        {
            firstName:"",
            lastName:"",
            email:"",
            comment:"",
            isFriendly:true,
            employment:"",
            favColor:""
        }
    )

    console.log(formdata)

    function onHandle(e){
        const {name,value,type,checked}=e.target
        setFormdata(prevFormdata=>(
            {
                ...prevFormdata,
                [name]:type==="checkbox"?checked:value
    
            }
        ))
    }

    function handleSubmit(e) {  
        e.preventDefault()     
        console.log("The submitted data is ", formdata)
    }
    return(
    <>

<form onSubmit={handleSubmit}>


    <input type="text" placeholder="Enter FName" name="firstName" onChange={onHandle} value={formdata.firstName}/>
    <input type="text" placeholder="Enter Lname " name="lastName" onChange={onHandle} value={formdata.lastName}/>
    <input type="text" placeholder="Enter Email" name="email" onChange={onHandle} value={formdata.email}/>
    <textarea name="comment" value={formdata.comment} onChange={onHandle} cols="30" rows="10" />
    {/* Check Box */}
    <input type="checkbox"
          id="isFriendly" 
          checked={formdata.isFriendly} 
          onChange={onHandle} 
          name="isFriendly"/>
    <label htmlFor="isFriendly">Are u friendly ? </label>
    <br />
    <br />

    {/* Radio button  */}

    <fieldset>
        <legend>Current employees status</legend>

    <input
                type="radio"
                id="unemployed"
                name="employment"
                value="unemployed"
                checked={formdata.employment === "unemployed"}
                onChange={onHandle}
            />
            <label htmlFor="unemployed">Unemployed</label>

            <input
                type="radio"
                id="part-time"
                name="employment"
                value="Part-time"
                checked={formdata.employment === "Part-time"}
                onChange={onHandle}
            />
            <label htmlFor="part-time">Part-time</label>

            <input
                type="radio"
                id="full-time"
                name="employment"
                value="Full-time"
                checked={formdata.employment === "Full-time"}
                onChange={onHandle}
            />
            <label htmlFor="full-time">Full-time</label>
    </fieldset>
    <br />

    <label htmlFor="favColor">What is your favorite color?</label>
    <br />
    <select name="favColor" id="favColor" value={formdata.favColor} onChange={onHandle}>
        <option value="">__Choose__</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
    </select>

    <button>Submit</button>


</form>


 
        </>)
}