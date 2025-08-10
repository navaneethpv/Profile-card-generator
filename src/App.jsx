import { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Forms";

function App() {
  const [Profile,SetProfile] = useState({
    name : 'John Doe',
    role : 'WordPress Developer',
    title : 'Founder & Editor',
  });
  
  const UpdateData = (newData) =>{
    SetProfile(newData);
  }


  return (
    <div className="flex justify-center bg-gray-200 w-screen h-screen items-center gap-13">
      <Form Profile={Profile} UpdateData={UpdateData} />
      <Cards Profile = {Profile}/>
    </div>
  );
}

export default App;
