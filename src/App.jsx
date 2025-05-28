import { useActionState } from "react";

//validations using useActionState
function App(){
    const handleData=(oldData,newData)=>{
        const name=newData.get('name')
        const pass=newData.get('password') 
        console.log(name,pass)    
        let regex=/^[A-Z]+$/i

        if(!name || !regex.test(name)){
            return{error:"Must enter valid Name",name,pass}
        }
        else if(!pass || pass.length>8){
            return{error:"Must fill Password less than 8 characters",name,pass}
        }
        else{
            return{msg:"Login Successfull",name,pass}
        }
    }
    const [data,action,pending]=useActionState(handleData)
    console.log(data)

    return(
        <div style={{margin:"7px"}}>
            <h2>Validations using useActionState</h2>
            {
                data?.msg && <span  style={{color:'green'}}>{data.msg}</span>
            }
            {
                data?.error && <span style={{color:'red'}}>{data.error}</span>
            }
            <form action={action}>
                <input type="text" defaultValue={data?.name} name="name" placeholder="name" /><br /><br />
                <input type="text" defaultValue={data?.pass} name="password" placeholder="password" /><br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}

// // making custom hooks

// import useToggle from "./useToggle";
// function App() {
//     const [value, toogleValue] = useToggle(true)
//     const [data, toggleData] = useToggle(true)
//     console.log("Value==", value)
//     return (
//         <>
//             <button onClick={toogleValue}>Toggle</button>
//             <button onClick={() => { toogleValue(false) }}>Hide</button>
//             <button onClick={() => { toogleValue(true) }}>Show</button>
//             {
//                 value ? <h2>Making Custom Hooks </h2> : null
//             }


//             <hr />
//             <button onClick={toggleData}>Toggle</button>
//             <button onClick={()=>toggleData(false)}>Hide</button>
//             <button onClick={()=>{toggleData(true)}}>Show</button>
//             {
//                 data ? <h2>Hook 2</h2> : null
//             }
//         </>
//     )
// }

//Context API
// import { useState } from "react";
// import College from "./College"
// import { subjectContext } from "./ContextData";
// function App() {
//     const [change,setChange]=useState('Sub1')
//     return (
//         <div style={{ backgroundColor: "#bc4b51", padding: "3px", margin: "8px" }}>
//             <subjectContext.Provider value={change}>
//                 <select value={change} name="" id="" onChange={(event)=>setChange(event.target.value)}>
//                     <option value="">Select</option>
//                     <option value="Sub1">Sub1</option>
//                     <option value="Sub2">Sub2</option>
//                     <option value="Sub3">Sub3</option>
//                     <option value="Sub4">Sub4</option>
//                 </select>
//                 <button onClick={()=>setChange(' ')}>Click Me</button>
//                 <h2>Context API</h2><h6>Sending data</h6>
//                 <College />
//             </subjectContext.Provider>
//         </div>
//     )
// }

// import { useActionState } from "react";

// //useActionState
// function App(){
//   const formFunction=async (prevData,formData)=>{
//     let name=formData.get('name')
//     let pass=formData.get('password')

//      await new Promise(res=>setTimeout(res,2000))
//     //console.log("FormFunction called",name,pass)
//     if(name && pass){
//       return({msg:'Submitted',name,pass})
//     }
//     else{
//       return({error:'Error',name,pass})
//     }
//   }
//   const [data,action,pending]=useActionState(formFunction,undefined)
//   console.log(data);
//   return(
//     <>
//       <h2>useFormAction Hook</h2><br />
//       <form action={action}>
//         <input defaultValue={data?.name} type="text" placeholder="Name" name="name"/><br /><br />
//         <input defaultValue={data?.pass} type="password" placeholder="Password" name="password" /><br /><br />
//         <button disabled={pending}>Submit</button><br />
//       </form>
//         {data?.error && <span style={{color:'red'}}>{data?.error}</span>}
//         {data?.msg && <span style={{color:'green'}}>{data?.msg}</span>}
//         <h2>name: {data?.name}</h2>
//         <h2>password: {data?.pass}</h2>
//     </>
//   )
// }

// import { useState } from "react";

// //updating objects in state
// function App(){
//   const [data,setData]=useState({
//   });
//   const changeData=(userData)=>{
//     data.address.city=userData
//     console.log(userData);
//     setData({...data,address:{...data.address,city:userData}})

//   }

//   return(
//     <>
//       <h2>updating objects in state</h2>
//       <h3>Name:{data.name}</h3>
//       <h3>City:{data.address.city}</h3>
//       <h3>State:{data.address.state}</h3>
//       <input type="text" placeholder="Enter here" onChange={(e)=>changeData(e.target.value)} />
//     </>
//   )
// }

// //updating array in state

// import { useState } from "react";

// function App(){
//   const [name,setName]=useState(['a','b','c']);
//   const handleChange=(userName)=>{
//     name[name.length-1]=userName;
//     console.log(name)
//     setName([...name])
//   }

//   const [dataDetails,setDataDetails]=useState([
//     {name:'abc',age:'20'},
//     {name:'pqr',age:'29'},
//     {name:'xyz',age:'24'}
//   ])
//   const handleAge=(userAge)=>{
//     dataDetails[dataDetails.length-1].age=userAge;
//     console.log(dataDetails)
//     setDataDetails([...dataDetails])
//   }

//   return(
//     <>

//       <h2>changing object using state</h2>
//       {
//           name.map((item,index)=>(
//           <h3 key={index}>{item}</h3>
//         ))
//       }
//       <input type="text" placeholder="name" onChange={(e)=>handleChange(e.target.value)} /><hr />

//       <h2>changing array of objects</h2>
//       {
//         dataDetails.map((item,index)=>(
//           <h4 key={index}>{item.name},{item.age}</h4>
//         ))
//       }
//       <input type="text" placeholder="age" onChange={(e)=>handleAge(e.target.value)}/>
//     </>
//   )
// }


// //derived state
// import { useState } from "react";
// function App(){
//   const [users,setUsers]=useState([])
//   const [user,setUser]=useState('')
//   const handleUsers=()=>{
//     setUsers([...users,user])
//   }

//   const total=users.length
//   const last=users[users.length-1]
//   const unique=[... new Set(users)].length
//   return(
//     <><br />
//     <h2>Total Users: {total}</h2>
//     <h2>Last User: {last}</h2>
//     <h2>Unique Total User: {unique}</h2>
//       <input onChange={(event)=>setUser(event.target.value)} type="text" placeholder="add new user" />
//       <button onClick={handleUsers}>Add</button>
//       {
//         users.map((item,index)=>(
//           <h4 key={index}>{item}</h4>
//         ))
//       }
//     </>
//   )
// }

// //useTransition Hooks
// import { useTransition } from "react";
// function App(){
//   const [pending,startTransition]=useTransition();
//   const buttonHandler=()=>{
//     startTransition(async()=>{
//       await new Promise(res=>setTimeout(res,2000));
//     }) 
//   }
//   return(
//     <>
//       <h1>useTransition Hooks</h1>
//       <button disabled={pending} onClick={buttonHandler}>Click Me</button>
//       {pending? <img style={{width:'250px'}} src="https://i.pinimg.com/originals/d7/34/49/d73449313ecedb997822efecd1ee3eac.gif" alt="" /> :null }
//     </>
//   )
// }

// //useFormStatus Hook
// import { useFormStatus } from "react-dom";
// function App() {

//   const hookFunction = async () => {
//     await new Promise(res => setTimeout(res, 5000))
//     console.log("Called ")
//   }

//   const FormFunction = () => {
//     const {pending}=useFormStatus()
//     console.log(pending);
//    return(
//      <>
//       <input type="text" placeholder="username" /><br /><br />
//       <input type="text" placeholder="password" /><br /><br />
//       <button disabled={pending}>{pending ? 'Submitting' : 'Submit'}</button>
//     </>
//    )
//   }

//   return (
//     <div>
//       <h1>useFormStatus Hook</h1>
//       <form action={hookFunction}>
//       <FormFunction />
//       </form>
//     </div>
//   )
// }


// //forward Reference
// import { useRef } from "react";
// import UserInput from "./UserInput";

// function App(){
//   const inputRef=useRef(null);

//   const clickFunction=()=>{
//     console.log("Called")
//     inputRef.current.value='Changed';
//     inputRef.current.style.color="blue"
//     inputRef.current.focus();
//   }

//   return(
//     <div>
//       <h1>Forward Ref</h1>
//       <UserInput ref={inputRef} />
//       <button onClick={clickFunction}>Click Me!</button>
//     </div>
//   )
// }



// //passing functions to components as props
// import User from "./User";
// function App(){

//   const nameFunction=(name)=>{
//     alert(name)
//   }

//   return(
//     <>
//       <h1>Call parent from child</h1>
//       <User displayName={nameFunction} name="a"/><br />
//       <User displayName={nameFunction} name="b" /><br />
//       <User displayName={nameFunction} name="c" /><br />
//       <User displayName={nameFunction} name="d" />
//     </>
//   )
// }



//uncontrolled components
// import { useRef } from "react";
// function App(){

//   const ref1=useRef(null)
//   const ref2=useRef(null)

//  const submitHandler=(event)=>{
//     event.preventDefault();
//     const user=document.querySelector("#user").value;
//     const pass=document.querySelector("#password").value;
//     console.log("SubmitHandler function ",user,pass)
//   }

//   const handleRef=(event)=>{
//     event.preventDefault();
//     const user=ref1.current.value;
//     const pass=ref2.current.value;
//     console.log("Ref function ",user,pass)
//   }

//   return(
//     <><br />
//     <h1>Uncontrolled Components</h1><br />
//     <form action=""  onSubmit={submitHandler}>
//       <input type="text" id="user" placeholder="Username" /><br /><br />
//       <input type="password" id="password" placeholder="password" /><br /><br />
//       <button>Submit</button>
//     </form><hr />

//     <h1>Uncontrolled Components with ref</h1><br />
//     <form action=""  onSubmit={handleRef}>
//       <input ref={ref1} type="text" placeholder="Username" /><br /><br />
//       <input ref={ref2} type="password" placeholder="password" /><br /><br />
//       <button>Submit</button>
//     </form>
//     </>
//   )
// }



//UseRef
// import { useRef } from "react";
// function App(){
//   const inputRef=useRef(null);
//   const inputRef2=useRef(null);
//   const inputRef3=useRef(null);
//   const checkfun=()=>{
//     console.log(inputRef);
//     inputRef.current.focus(); 
//     inputRef.current.style.backgroundColor='pink'
//     inputRef.current.value='Default'
//   }

//   const toggleHandle=()=>{
//    inputRef2.current.style.display = inputRef2.current.style.display!=='none' ? 'none' : 'inline'
//   }

//   const changeColor=()=>{
//     inputRef3.current.style.color="red";
//   }
//   return(
//     <>
//       <h2>useRef</h2>
//       <br />
//       <input ref={inputRef} type="text" placeholder="Username"/><br />
//       <button onClick={checkfun}>Click Me!</button><br />
//       <button onClick={toggleHandle}>Toggle</button><br />
//       <h2 ref={inputRef2}>Toggle me</h2><br />
//       <button onClick={changeColor}>Change H1 color</button><br />
//       <h1 ref={inputRef3}>Change my color</h1>
//     </>
//   )
// }



//Day 2
// import { useState } from "react";
// import { Button } from "bootstrap";

// function App() {
//   const [theme,setTheme]=useState({
//     width: '200px',
//     border: "1px solid #cccccc3b",
//     boxShadow: "1px 2px 3px 0px",
//     padding: "5px",
//     margin: "5px",
//   })

//   const [oldGrid,newGrid]=useState(true);

//   const updateTheme=(bgColor,txtColor)=>{
//     setTheme({...theme,backgroundColor:bgColor,color:txtColor})
//   }

//   return (
//     <>
//       <button onClick={()=>updateTheme('white','black')}>Default</button>
//       <button onClick={()=>updateTheme('black','white')}>Dark</button>
//       <button onClick={()=>newGrid(!oldGrid)}>Change Display</button>

//       <h1 style={{ color: 'red' }}>Styling with CSS</h1>
//       <div style={{ display:oldGrid ? 'flex' : 'block', flexWrap: 'wrap' }}>
//         <div style={theme}>
//           <img style={{ width: '200px' }} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAogMBEQACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIEBQYHA//EADYQAAICAQEFBAkDAwUAAAAAAAABAgMEEQUSITFBBgdhcRQiMlGBkaGxwRNSYiPR4UJDorLC/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAUCBv/EACoRAQACAgEDAgUFAQEAAAAAAAABAgMRBBIhMQVREyIyQWFCcYHB0bEj/9oADAMBAAIRAxEAPwDKHxr6kAAAAmAAAAAmSggkggEhAIkJgJskIlBARbJCbAWoF4pegAALUAAAABEoIJAQRITARITATZIQCJQiyQmwItkgAvlD0AEAAACACQgKmVtLDxXu3ZEFLrFcWvgjRi4ubL3rVRk5GLHOrWUZdo8FeyrpeUP8mmPTM8+dM8+oYfycO0ODLn+rHzhqJ9Mzx7Jjn4ZX8bLx8pa499dnvSfFeaMmTDkx/XGmnHlpkj5ZerfUrWE2SESggItkhagRbJEWyQtQhkjO9kwAAAQASPO62umuVls4whHi5Semh6rS156axuXm1orHVadQ1zanaCVkJU4KlWnwdr5teC6Ha43pvRPVl7/j/XK5HP6o6cfb8sA1rxbbb5v3nV+2nNCAAHCUoTU4ScZLlJPRoi0RaNSmJmJ3HaWxbH2y7ZrHzGt98IWvq/czj8zgRWOvF4+8f46vF5nVPRk/iWcOU6JEiLJCbAi2SI6k6CbJQjqBk9TM9gAAQASgglqHaPPlk5bohL+jS9NE+cur/B9D6fx4x4+ufM/8cPnZ/iX6Y8QxK5HQYgAAAAAAbNsXaX6tUash+uvVUn18GcDmcbovM18O7xM3xMcTPlljE1EwItkiLZITehKEGwFqSMqZXsAIAJQQSjZLcrlL3Js9VjdohEzqNueuTlJyfFt6tn10RqNQ+Ymd9yb05kodA7Ndga78CV+2nbXbdDSuqEtHUv3Px8DJk5ExOqtOPBuN2YTb/YraeynK2iHpmKv9ypetFeMefy4FtM9beeyu+G1fy1lNaFyowAC1gS4yj4amLmV7RLocC3e1WfwM7e0pufHlGT6+DORlxfqq6sSyD0KHpFslBNkiDZIRKCAyxkWEAEhAAQ87lrTYlzcX9j3TtaJRb6Zc+S0Wj5n1z5htvdzsaO0tryy7471GHpLdfJzfs/LTX5GfkX6a6hdgpu25dXMLcANf2/2R2ZtreslD0fKfH9alJNv+S5P7+JdTNaqq+KtnMNv9n87YOQoZcFKqb/p3Q9mf9n4P6m2mSLx2Y745p5Yo9vCzge3PyMnM+mG/gR88/sunPdRkcHN10qufHkpP7Mz5Mf6oeolfbKUoPiAj0hFsCOpOhmDGsBKCCSCASEBom0KfR86+rpGb08uaPquPk+Jirb8Pm81OjJav5dN7r6I19nLLVzuyZyb8ko/gzcmd3008ePlbeULwAAVto4OPtLCtw8ytWU2x0kuq8V7meq2ms7h5tWLRqXENs7Ns2TtTIwLXvOmWil+6PNP5NHSraLV6oc+1em2pGDH1ZSfV6GLmW+aKulwK6rNvdaMbeAL+Hl6pV2vj0l/coyY/vD1ErupSItnoRbAjqSM0Y1hAIAJQTARI13tTiPerzIrh7E/wzsemZvOKf4/tyvUcXeMsN37sLFLsy4LnXk2Rfhyf5NHJj/0U8f6G2lC8AAABzXvWw1DPwMuK43Vyrl47rWn/AGZs41u0xLJyK/NEtYph+nVGPVIw5b9d5l1sOP4eOKpnhYAAC7iZXKu1+UmU3p94SttlaUWwEShmjEtAQRITARIQHnkVQyKJ02rWE1o0e6XnHaL1+zzekXrNZZLu2qswo7SwbOOlsbYS6STWmv8AxR2r5q5q1vVyKYrYrTWW6la0AAABzzvIyq8jaOJiRkn6LGU7F/KWmi+S+p66+mkx7vWPF13i0+IaoUNoAAAAAt4+Rw3LH5MqvT7wlZb0KwtSUM2YVoJCARITATZIRKF/Yed6Dmpzf9Kz1Z+HuZdhv0WVZqdVW7c+KOiwgAAqbVz6dmYF2Xe/VrXCP7n0S8yJTEbnTkGTkWZWRbkXPWy2TnLzZXvbbEajUPMJAAAAAABZx79EoWPybK7VHvoysZ4xLSYCJCYCbJCJQQEWB0DZ6awMZS5/pR1+R1afTDnW+qVg9PIA1HvJhN7MxJrXcV+kl04xej+n1PN12DW3Pzw0gAAAAAAAACatsS032RqBtRy1pEhAJskIBakoRb6smI34THda2Jjw2jtnGw9d6Nk/X0/alq/ojXx+JfJeN+HjkdWLDbJ7f26DdV+hY61FRivZS93Q23r0205dLdUbQPL2APLJ2XRtiieFkw3q7Ivj+19GvFMsx0i9tS82yfDjqcizNnXYmTbRLjOqcoSXLimV2wzE9nZ+BNqxeneJVZQnF8YtfArmswqtS1fMIkPAAAAAAAADbDlrSbATZIiBXvyHBuMOfvZuwcWLx1X8NGPB1RuyvK6yXOb+Bsrx8cfZojFSPsg23zbLYrEeIeoiIbP3cVqfaRya9jHm156xX5Zbi+pzfV7a42vef9dMycaF8dJcGuUl0LsmOLx3fNUyTTwxORTOie7P4P3mC9JpOpbqXi8bhGquVk1GC1ZFazadQm1orG5ZfFxlRDTnJ82b8WOKQw5Mk3lyrt1jLG7T5e7ytUbfmkn9UyrJGrS+o9Mv1cWv47MCVt6Mq4S5xXyImsS82pWfMKmRSq/WivVf0M96dM7hhz4ej5o8PArZwAAAABtZy1pNkhBDzunuVt9eSLsOP4l4h7x16rRDHcztfs6IAANr7ubIVbavnZJRjHFk3J9EpR1LcXlyvWImcFYj3/10jByq83FqyaJOVVsVKLa5o0RMTG4fOZMdsd5pbzDx2pXvVRklq0/uZ+TXdYmFnHtq0w9sTHVMP5v2mWYscUj8vGTJ1z+HltbaFOy8N5eQ2qoyipaLXTV6alk2isblOHDbNfop5c+7yNyW1cTIralG3GTUk+DWr0+5nzeX0Ho+/g2rP2lqRU6wAU4qcHF8mRMbjSLVi0aY2ScZNPoY5jUuTMamYIIAAAAbU2cxaRKCAp5ktZKPu4s6PCp2m7Xxq9psrm5pAAB6V22VRsjXNxVkNyen+qOqen0QRatba39nVOwGR6R2Zxk3rKmUqn4aPh9GjVin5XyvqlOnlWn31LYmtSxzzA1XvIuVfZ6NeujuvhH5ay/8lWb6XU9Irvkb9on/ABzW7Ktvxceix+rjqUa/ek3rp8zPMvpK461ta0fq8vAh7AABSzIbtm9+5cTNljvtg5VdX37vArZgAAAG0nNWEBFkihbLesk+jZ2sNemkQ6OOvTWIQLHsAAAB0Duuyk6s7Db4qcbV8Vo/si/DPmHA9ax/NW/8N7L3DDA0HvQyE1s/G8Z2NfJL8lGafDveiU+u/wCzQih3QAAAHjlx3qW1zT1K8td1UcmvVRRMznAAAANoOasRbJELpbtcn4aItw067xD3jjd4hQOzDogAAAADYewmZ6J2jpTlpDIhKl/Hivqke8U6s5/qmL4nGmfbu6yuRrfKB8gOT9vcz0rtJfBPWGPGNS89NX9Xp8DLln5n1fpePo40T79/6a6VugAAAAUlvJr3iY3GkTG40xjW62n0Ziny5MxqdAIAABszOasDJFfKfqLzNnDj55aOPHzbVTpNgAAAAAnTbPHuruqek65qcX4p6kx5RasWiaz4l3aD1imbXwvg3wTA4Xm2zvzL7rHrOdkpSfi2Yp8vuMdYrSKw8SHsAAAAdGBQylpfLQy5I1ZzuRGskvI8KAAAf//Z" alt="" />
//           <div style={{ padding: '5px' }}>
//             <h3>Rajvi Khatri</h3>
//           </div>
//         </div>

//         <div style={theme}>
//           <img style={{ width: '200px' }} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAogMBEQACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIEBQYHA//EADYQAAICAQEFBAkDAwUAAAAAAAABAgMEEQUSITFBBgdhcRQiMlGBkaGxwRNSYiPR4UJDorLC/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAUCBv/EACoRAQACAgEDAgUFAQEAAAAAAAABAgMRBBIhMQVREyIyQWFCcYHB0bEj/9oADAMBAAIRAxEAPwDKHxr6kAAAAmAAAAAmSggkggEhAIkJgJskIlBARbJCbAWoF4pegAALUAAAABEoIJAQRITARITATZIQCJQiyQmwItkgAvlD0AEAAACACQgKmVtLDxXu3ZEFLrFcWvgjRi4ubL3rVRk5GLHOrWUZdo8FeyrpeUP8mmPTM8+dM8+oYfycO0ODLn+rHzhqJ9Mzx7Jjn4ZX8bLx8pa499dnvSfFeaMmTDkx/XGmnHlpkj5ZerfUrWE2SESggItkhagRbJEWyQtQhkjO9kwAAAQASPO62umuVls4whHi5Semh6rS156axuXm1orHVadQ1zanaCVkJU4KlWnwdr5teC6Ha43pvRPVl7/j/XK5HP6o6cfb8sA1rxbbb5v3nV+2nNCAAHCUoTU4ScZLlJPRoi0RaNSmJmJ3HaWxbH2y7ZrHzGt98IWvq/czj8zgRWOvF4+8f46vF5nVPRk/iWcOU6JEiLJCbAi2SI6k6CbJQjqBk9TM9gAAQASgglqHaPPlk5bohL+jS9NE+cur/B9D6fx4x4+ufM/8cPnZ/iX6Y8QxK5HQYgAAAAAAbNsXaX6tUash+uvVUn18GcDmcbovM18O7xM3xMcTPlljE1EwItkiLZITehKEGwFqSMqZXsAIAJQQSjZLcrlL3Js9VjdohEzqNueuTlJyfFt6tn10RqNQ+Ymd9yb05kodA7Ndga78CV+2nbXbdDSuqEtHUv3Px8DJk5ExOqtOPBuN2YTb/YraeynK2iHpmKv9ypetFeMefy4FtM9beeyu+G1fy1lNaFyowAC1gS4yj4amLmV7RLocC3e1WfwM7e0pufHlGT6+DORlxfqq6sSyD0KHpFslBNkiDZIRKCAyxkWEAEhAAQ87lrTYlzcX9j3TtaJRb6Zc+S0Wj5n1z5htvdzsaO0tryy7471GHpLdfJzfs/LTX5GfkX6a6hdgpu25dXMLcANf2/2R2ZtreslD0fKfH9alJNv+S5P7+JdTNaqq+KtnMNv9n87YOQoZcFKqb/p3Q9mf9n4P6m2mSLx2Y745p5Yo9vCzge3PyMnM+mG/gR88/sunPdRkcHN10qufHkpP7Mz5Mf6oeolfbKUoPiAj0hFsCOpOhmDGsBKCCSCASEBom0KfR86+rpGb08uaPquPk+Jirb8Pm81OjJav5dN7r6I19nLLVzuyZyb8ko/gzcmd3008ePlbeULwAAVto4OPtLCtw8ytWU2x0kuq8V7meq2ms7h5tWLRqXENs7Ns2TtTIwLXvOmWil+6PNP5NHSraLV6oc+1em2pGDH1ZSfV6GLmW+aKulwK6rNvdaMbeAL+Hl6pV2vj0l/coyY/vD1ErupSItnoRbAjqSM0Y1hAIAJQTARI13tTiPerzIrh7E/wzsemZvOKf4/tyvUcXeMsN37sLFLsy4LnXk2Rfhyf5NHJj/0U8f6G2lC8AAABzXvWw1DPwMuK43Vyrl47rWn/AGZs41u0xLJyK/NEtYph+nVGPVIw5b9d5l1sOP4eOKpnhYAAC7iZXKu1+UmU3p94SttlaUWwEShmjEtAQRITARIQHnkVQyKJ02rWE1o0e6XnHaL1+zzekXrNZZLu2qswo7SwbOOlsbYS6STWmv8AxR2r5q5q1vVyKYrYrTWW6la0AAABzzvIyq8jaOJiRkn6LGU7F/KWmi+S+p66+mkx7vWPF13i0+IaoUNoAAAAAt4+Rw3LH5MqvT7wlZb0KwtSUM2YVoJCARITATZIRKF/Yed6Dmpzf9Kz1Z+HuZdhv0WVZqdVW7c+KOiwgAAqbVz6dmYF2Xe/VrXCP7n0S8yJTEbnTkGTkWZWRbkXPWy2TnLzZXvbbEajUPMJAAAAAABZx79EoWPybK7VHvoysZ4xLSYCJCYCbJCJQQEWB0DZ6awMZS5/pR1+R1afTDnW+qVg9PIA1HvJhN7MxJrXcV+kl04xej+n1PN12DW3Pzw0gAAAAAAAACatsS032RqBtRy1pEhAJskIBakoRb6smI34THda2Jjw2jtnGw9d6Nk/X0/alq/ojXx+JfJeN+HjkdWLDbJ7f26DdV+hY61FRivZS93Q23r0205dLdUbQPL2APLJ2XRtiieFkw3q7Ivj+19GvFMsx0i9tS82yfDjqcizNnXYmTbRLjOqcoSXLimV2wzE9nZ+BNqxeneJVZQnF8YtfArmswqtS1fMIkPAAAAAAAADbDlrSbATZIiBXvyHBuMOfvZuwcWLx1X8NGPB1RuyvK6yXOb+Bsrx8cfZojFSPsg23zbLYrEeIeoiIbP3cVqfaRya9jHm156xX5Zbi+pzfV7a42vef9dMycaF8dJcGuUl0LsmOLx3fNUyTTwxORTOie7P4P3mC9JpOpbqXi8bhGquVk1GC1ZFazadQm1orG5ZfFxlRDTnJ82b8WOKQw5Mk3lyrt1jLG7T5e7ytUbfmkn9UyrJGrS+o9Mv1cWv47MCVt6Mq4S5xXyImsS82pWfMKmRSq/WivVf0M96dM7hhz4ej5o8PArZwAAAABtZy1pNkhBDzunuVt9eSLsOP4l4h7x16rRDHcztfs6IAANr7ubIVbavnZJRjHFk3J9EpR1LcXlyvWImcFYj3/10jByq83FqyaJOVVsVKLa5o0RMTG4fOZMdsd5pbzDx2pXvVRklq0/uZ+TXdYmFnHtq0w9sTHVMP5v2mWYscUj8vGTJ1z+HltbaFOy8N5eQ2qoyipaLXTV6alk2isblOHDbNfop5c+7yNyW1cTIralG3GTUk+DWr0+5nzeX0Ho+/g2rP2lqRU6wAU4qcHF8mRMbjSLVi0aY2ScZNPoY5jUuTMamYIIAAAAbU2cxaRKCAp5ktZKPu4s6PCp2m7Xxq9psrm5pAAB6V22VRsjXNxVkNyen+qOqen0QRatba39nVOwGR6R2Zxk3rKmUqn4aPh9GjVin5XyvqlOnlWn31LYmtSxzzA1XvIuVfZ6NeujuvhH5ay/8lWb6XU9Irvkb9on/ABzW7Ktvxceix+rjqUa/ek3rp8zPMvpK461ta0fq8vAh7AABSzIbtm9+5cTNljvtg5VdX37vArZgAAAG0nNWEBFkihbLesk+jZ2sNemkQ6OOvTWIQLHsAAAB0Duuyk6s7Db4qcbV8Vo/si/DPmHA9ax/NW/8N7L3DDA0HvQyE1s/G8Z2NfJL8lGafDveiU+u/wCzQih3QAAAHjlx3qW1zT1K8td1UcmvVRRMznAAAANoOasRbJELpbtcn4aItw067xD3jjd4hQOzDogAAAADYewmZ6J2jpTlpDIhKl/Hivqke8U6s5/qmL4nGmfbu6yuRrfKB8gOT9vcz0rtJfBPWGPGNS89NX9Xp8DLln5n1fpePo40T79/6a6VugAAAAUlvJr3iY3GkTG40xjW62n0Ziny5MxqdAIAABszOasDJFfKfqLzNnDj55aOPHzbVTpNgAAAAAnTbPHuruqek65qcX4p6kx5RasWiaz4l3aD1imbXwvg3wTA4Xm2zvzL7rHrOdkpSfi2Yp8vuMdYrSKw8SHsAAAAdGBQylpfLQy5I1ZzuRGskvI8KAAAf//Z" alt="" />
//           <div style={{ padding: '5px' }}>
//             <h3>Rajvi Khatri</h3>
//           </div>
//         </div>

//         <div style={theme}>
//           <img style={{ width: '200px' }} src="data:image/jpeg;base64,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" alt="" />
//           <div style={{ padding: '5px' }}>
//             <h3>Rajvi Khatri</h3>
//           </div>
//         </div>

//         <div style={theme}>
//           <img style={{ width: '200px' }} src="data:image/jpeg;base64,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" alt="" />
//           <div style={{ padding: '5px' }}>
//             <h3>Rajvi Khatri</h3>
//           </div>
//         </div>

//         <div style={theme}>
//           <img style={{ width: '200px' }} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAogMBEQACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIEBQYHA//EADYQAAICAQEFBAkDAwUAAAAAAAABAgMEEQUSITFBBgdhcRQiMlGBkaGxwRNSYiPR4UJDorLC/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAUCBv/EACoRAQACAgEDAgUFAQEAAAAAAAABAgMRBBIhMQVREyIyQWFCcYHB0bEj/9oADAMBAAIRAxEAPwDKHxr6kAAAAmAAAAAmSggkggEhAIkJgJskIlBARbJCbAWoF4pegAALUAAAABEoIJAQRITARITATZIQCJQiyQmwItkgAvlD0AEAAACACQgKmVtLDxXu3ZEFLrFcWvgjRi4ubL3rVRk5GLHOrWUZdo8FeyrpeUP8mmPTM8+dM8+oYfycO0ODLn+rHzhqJ9Mzx7Jjn4ZX8bLx8pa499dnvSfFeaMmTDkx/XGmnHlpkj5ZerfUrWE2SESggItkhagRbJEWyQtQhkjO9kwAAAQASPO62umuVls4whHi5Semh6rS156axuXm1orHVadQ1zanaCVkJU4KlWnwdr5teC6Ha43pvRPVl7/j/XK5HP6o6cfb8sA1rxbbb5v3nV+2nNCAAHCUoTU4ScZLlJPRoi0RaNSmJmJ3HaWxbH2y7ZrHzGt98IWvq/czj8zgRWOvF4+8f46vF5nVPRk/iWcOU6JEiLJCbAi2SI6k6CbJQjqBk9TM9gAAQASgglqHaPPlk5bohL+jS9NE+cur/B9D6fx4x4+ufM/8cPnZ/iX6Y8QxK5HQYgAAAAAAbNsXaX6tUash+uvVUn18GcDmcbovM18O7xM3xMcTPlljE1EwItkiLZITehKEGwFqSMqZXsAIAJQQSjZLcrlL3Js9VjdohEzqNueuTlJyfFt6tn10RqNQ+Ymd9yb05kodA7Ndga78CV+2nbXbdDSuqEtHUv3Px8DJk5ExOqtOPBuN2YTb/YraeynK2iHpmKv9ypetFeMefy4FtM9beeyu+G1fy1lNaFyowAC1gS4yj4amLmV7RLocC3e1WfwM7e0pufHlGT6+DORlxfqq6sSyD0KHpFslBNkiDZIRKCAyxkWEAEhAAQ87lrTYlzcX9j3TtaJRb6Zc+S0Wj5n1z5htvdzsaO0tryy7471GHpLdfJzfs/LTX5GfkX6a6hdgpu25dXMLcANf2/2R2ZtreslD0fKfH9alJNv+S5P7+JdTNaqq+KtnMNv9n87YOQoZcFKqb/p3Q9mf9n4P6m2mSLx2Y745p5Yo9vCzge3PyMnM+mG/gR88/sunPdRkcHN10qufHkpP7Mz5Mf6oeolfbKUoPiAj0hFsCOpOhmDGsBKCCSCASEBom0KfR86+rpGb08uaPquPk+Jirb8Pm81OjJav5dN7r6I19nLLVzuyZyb8ko/gzcmd3008ePlbeULwAAVto4OPtLCtw8ytWU2x0kuq8V7meq2ms7h5tWLRqXENs7Ns2TtTIwLXvOmWil+6PNP5NHSraLV6oc+1em2pGDH1ZSfV6GLmW+aKulwK6rNvdaMbeAL+Hl6pV2vj0l/coyY/vD1ErupSItnoRbAjqSM0Y1hAIAJQTARI13tTiPerzIrh7E/wzsemZvOKf4/tyvUcXeMsN37sLFLsy4LnXk2Rfhyf5NHJj/0U8f6G2lC8AAABzXvWw1DPwMuK43Vyrl47rWn/AGZs41u0xLJyK/NEtYph+nVGPVIw5b9d5l1sOP4eOKpnhYAAC7iZXKu1+UmU3p94SttlaUWwEShmjEtAQRITARIQHnkVQyKJ02rWE1o0e6XnHaL1+zzekXrNZZLu2qswo7SwbOOlsbYS6STWmv8AxR2r5q5q1vVyKYrYrTWW6la0AAABzzvIyq8jaOJiRkn6LGU7F/KWmi+S+p66+mkx7vWPF13i0+IaoUNoAAAAAt4+Rw3LH5MqvT7wlZb0KwtSUM2YVoJCARITATZIRKF/Yed6Dmpzf9Kz1Z+HuZdhv0WVZqdVW7c+KOiwgAAqbVz6dmYF2Xe/VrXCP7n0S8yJTEbnTkGTkWZWRbkXPWy2TnLzZXvbbEajUPMJAAAAAABZx79EoWPybK7VHvoysZ4xLSYCJCYCbJCJQQEWB0DZ6awMZS5/pR1+R1afTDnW+qVg9PIA1HvJhN7MxJrXcV+kl04xej+n1PN12DW3Pzw0gAAAAAAAACatsS032RqBtRy1pEhAJskIBakoRb6smI34THda2Jjw2jtnGw9d6Nk/X0/alq/ojXx+JfJeN+HjkdWLDbJ7f26DdV+hY61FRivZS93Q23r0205dLdUbQPL2APLJ2XRtiieFkw3q7Ivj+19GvFMsx0i9tS82yfDjqcizNnXYmTbRLjOqcoSXLimV2wzE9nZ+BNqxeneJVZQnF8YtfArmswqtS1fMIkPAAAAAAAADbDlrSbATZIiBXvyHBuMOfvZuwcWLx1X8NGPB1RuyvK6yXOb+Bsrx8cfZojFSPsg23zbLYrEeIeoiIbP3cVqfaRya9jHm156xX5Zbi+pzfV7a42vef9dMycaF8dJcGuUl0LsmOLx3fNUyTTwxORTOie7P4P3mC9JpOpbqXi8bhGquVk1GC1ZFazadQm1orG5ZfFxlRDTnJ82b8WOKQw5Mk3lyrt1jLG7T5e7ytUbfmkn9UyrJGrS+o9Mv1cWv47MCVt6Mq4S5xXyImsS82pWfMKmRSq/WivVf0M96dM7hhz4ej5o8PArZwAAAABtZy1pNkhBDzunuVt9eSLsOP4l4h7x16rRDHcztfs6IAANr7ubIVbavnZJRjHFk3J9EpR1LcXlyvWImcFYj3/10jByq83FqyaJOVVsVKLa5o0RMTG4fOZMdsd5pbzDx2pXvVRklq0/uZ+TXdYmFnHtq0w9sTHVMP5v2mWYscUj8vGTJ1z+HltbaFOy8N5eQ2qoyipaLXTV6alk2isblOHDbNfop5c+7yNyW1cTIralG3GTUk+DWr0+5nzeX0Ho+/g2rP2lqRU6wAU4qcHF8mRMbjSLVi0aY2ScZNPoY5jUuTMamYIIAAAAbU2cxaRKCAp5ktZKPu4s6PCp2m7Xxq9psrm5pAAB6V22VRsjXNxVkNyen+qOqen0QRatba39nVOwGR6R2Zxk3rKmUqn4aPh9GjVin5XyvqlOnlWn31LYmtSxzzA1XvIuVfZ6NeujuvhH5ay/8lWb6XU9Irvkb9on/ABzW7Ktvxceix+rjqUa/ek3rp8zPMvpK461ta0fq8vAh7AABSzIbtm9+5cTNljvtg5VdX37vArZgAAAG0nNWEBFkihbLesk+jZ2sNemkQ6OOvTWIQLHsAAAB0Duuyk6s7Db4qcbV8Vo/si/DPmHA9ax/NW/8N7L3DDA0HvQyE1s/G8Z2NfJL8lGafDveiU+u/wCzQih3QAAAHjlx3qW1zT1K8td1UcmvVRRMznAAAANoOasRbJELpbtcn4aItw067xD3jjd4hQOzDogAAAADYewmZ6J2jpTlpDIhKl/Hivqke8U6s5/qmL4nGmfbu6yuRrfKB8gOT9vcz0rtJfBPWGPGNS89NX9Xp8DLln5n1fpePo40T79/6a6VugAAAAUlvJr3iY3GkTG40xjW62n0Ziny5MxqdAIAABszOasDJFfKfqLzNnDj55aOPHzbVTpNgAAAAAnTbPHuruqek65qcX4p6kx5RasWiaz4l3aD1imbXwvg3wTA4Xm2zvzL7rHrOdkpSfi2Yp8vuMdYrSKw8SHsAAAAdGBQylpfLQy5I1ZzuRGskvI8KAAAf//Z" alt="" />
//           <div style={{ padding: '5px' }}>
//             <h3>Rajvi Khatri</h3>
//           </div>
//         </div>

//         <div style={theme}>
//           <img style={{ width: '200px' }} src="data:image/jpeg;base64,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" alt="" />
//           <div style={{ padding: '5px' }}>
//             <h3>Rajvi Khatri</h3>
//           </div>
//         </div>

//       </div>
//     </>
//   )
// }





// import { useState } from "react";
// import Counter from "./Counter";
// function App(){

//   const [count,setCount]=useState(0)
//   const [data,setData]=useState(0)
//   const [display,setDisplay]=useState(true)

//   return(
//     <div>
//       <h2>handling props side effects with useState</h2>
//       {
//         display ? <Counter count={count} data={data}/> : null
//       }
//       <button onClick={()=>setCount(count+1)}>Counter</button>
//       <button onClick={()=>setData(data+1)}>Data</button>
//       <button onClick={()=>setDisplay(!display)}>Toggle</button>
//     </div>
//   )
// }



// import { useState,useEffect } from "react";
// import Counter from "./Counter";

// function App() {

//   const [count, setCount] = useState(0);
//   const [data,setData]=useState(0);

//   useEffect(() => {
//     //callOnce();
//     counterFunction();
//   },[data])

//   function callOnce() {
//     console.log("Function callOnce")
//   }

//   function counterFunction(){
//     console.log("callOnce ", count);
//   }

//   return (
//     <div>
//       <h2>useEffect Hooks</h2>
//       <button onClick={() => setCount(count + 1)}>Counter {count}</button>
//       <button onClick={()=>setData(data)}>Data {data}</button>
//     </div>
//   )
// }

export default App;