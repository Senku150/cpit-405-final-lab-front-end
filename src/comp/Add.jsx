import { useState } from "react";
const Add = ({setEdited})=>{
      const [input3, setInput3] = useState("");
      const [input4, setInput4] = useState("");

      const handleSubmit =()=>{
        const Name=input3
        const URL=input4
        
 const fc = async ()=>{
    const raw = JSON.stringify({
            "title":Name,
            "link":URL
      });

    const requestOptions = {
        method: "POST",
        body: raw,
        headers: {"Content-Type": "application/json",},
        redirect: "follow"
      };
      console.log(requestOptions)
    await fetch(`http://localhost:8000/index.php`,requestOptions);
    setEdited("added_NEW_BOOKMARK"+Name)
}
    fc()
      }
    return(
        <div>
        <input
        className="boxForAdd"
        placeholder="Enter Your BookMark Name"
        onChange={(e) => setInput3(e.target.value)} 
      />
      <input
        className="boxForAdd"
        placeholder="Enter Your BookMark URL"
        onChange={(e) => setInput4(e.target.value)} 
      />
      <button className="boxForAdd" onClick={handleSubmit}>Add</button>
      </div>
      )
}

export default Add