import React from 'react'
import { useState } from 'react'
import Card from './assets/Card'
const App = () => {
  const [user, setuser] = useState("")
  const [url, seturl] = useState("")
  const [role, setrole] = useState("")
  const [desc, setdesc] = useState("")
  


 const [data, setdata] = useState(() => {
  return JSON.parse(localStorage.getItem("allUser")) || [];
});
    

    
   
    
 const submitHandle = (dets) => {
  dets.preventDefault();

  const newData = [...data, { user, url, role, desc }];

  setdata(newData);
  localStorage.setItem("allUser", JSON.stringify(newData));

  setdesc("");
  setrole("");
  setuser("");
  seturl("");
};
  const deleteHandler = (index) => {
  const copyData = [...data];
  copyData.splice(index, 1);

  setdata(copyData);
  localStorage.setItem("allUser", JSON.stringify(copyData));
};
  return (
    <div  className='w-full min-h-screen bg-[#333] p-20 '>
     <form  onSubmit={(dets)=>{submitHandle(dets)}} className='w-full h-2/5 items-center justify-center flex flex-wrap gap-4'>
     <input required type="text" value={user} onChange={(e)=>{setuser(e.target.value)}} placeholder='Enter Your Name' className='w-1/3 border-2 px-20 py-5 text-[#fff] border-[#fff]'/>
     <input required type="text" value={url} onChange={(e)=>{seturl(e.target.value)}} placeholder='Enter Your Profile URL' className='w-1/3 border-2 px-20 py-5 text-[#fff] border-[#fff]'/>
     <input required type="text" value={role} onChange={(e)=>{setrole(e.target.value)}} placeholder='Enter Your Role' className='w-1/3 border-2 px-20 py-5 text-[#fff] border-[#fff]'/>
     <input required type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} placeholder='Enter Your Description' className='w-1/3 border-2 px-20 py-5 text-[#fff] border-[#fff]'/>
     <button  className=' w-1/3 lg:bg-blue-800   rounded-4xl border-2  py-5 text-[#fff] border-[#fff] bg-green-700 active:scale-95'>Submit</button>
     </form>


     <div className="cards px-10 py-10 mt-10 flex gap-12 flex-wrap">
      {data.map((elem,idx)=>{
        return <Card elem={elem} index={idx} deleteHandler={deleteHandler}/>
     })}
  
     </div>
    </div>
  )
}

export default App



