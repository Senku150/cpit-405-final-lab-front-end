import { useState } from "react";
const Delete = ({setEdited})=>{
      const [input2, setInput2] = useState("");


      const handleSubmit =()=>{
        const ID=input2
        
 const fc = async ()=>{
    const raw = JSON.stringify({
        "id":ID
      });

    const requestOptions = {
        method: "DELETE",
        body: raw,
        headers: {"Content-Type": "application/json",},
        redirect: "follow"
      };
      console.log(requestOptions)
    await fetch(`http://localhost:8000/index.php`,requestOptions);
    setEdited("deleted"+ID)
}
    fc()
      }
    return(
        <div>
        <input
        className="boxForDelete"
        placeholder="Enter Your BookMark ID"
        onChange={(e) => setInput2(e.target.value)} 
      />
      <button className="boxForDelete" onClick={handleSubmit}>Delete</button>
      </div>
      )
}

export default Delete