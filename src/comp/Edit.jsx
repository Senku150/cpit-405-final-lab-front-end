import { useState } from "react";
const Edit = ({setEdited})=>{
      const [input5, setInput5] = useState(""); //After finishing this I notice that I didn't need to rename all inputs
      const [input6, setInput6] = useState(""); //Sadly it's too late 😭

      const handleSubmit =()=>{
        const ID = input5
        const URL=input6
        
 const fc = async ()=>{
    const raw = JSON.stringify({
            "id":ID,
            "link":URL
      });

    const requestOptions = {
        method: "PUT",
        body: raw,
        headers: {"Content-Type": "application/json",},
        redirect: "follow"
      };
      console.log(requestOptions)
    await fetch(`http://localhost:8000/index.php`,requestOptions);
    setEdited("edited_exisiting "+URL)
}
    fc()
      }
    return(
        <div>
        <input
        className="boxForEdit"
        placeholder="Enter Your BookMark ID"
        onChange={(e) => setInput5(e.target.value)} 
      />
      <input
        className="boxForEdit"
        placeholder="Enter Your New BookMark URL"
        onChange={(e) => setInput6(e.target.value)} 
      />
      <button className="boxForEdit" onClick={handleSubmit}>Edit</button>
      </div>
      )
}

export default Edit