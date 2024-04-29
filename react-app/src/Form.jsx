import { useState } from "react"

function Form() {
    const [form ,setForm ] = useState({
      email : "",
      password : "",
      role : "user",
      gender : "male",
      rules : false,
    });

    const changeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value ;

      if(name === "rules"){
        setForm( (form) => ({...form , rules: !form.rules }));
      } else {
        setForm ( (form) => ({...form , [name] : value }));
      }
    }

    const loginHandler = () => {
      console.log(form);
    };
    
  return (
    <div>
      <input 
      type="Email" 
      placeholder="Email" 
      value={form.email} 
      onChange={changeHandler}
       />

      <input 
      type="password" 
      placeholder="Password"
      value={form.password}
      onChange={changeHandler} 
      />
      
      <select value={form.role} name="role" onChange={changeHandler}>
       <option value="user">User</option>
       <option value="writer">Writer</option>
       <option value="admin">Admin</option>
      </select>

       <hr />
       
      <label htmlFor="male">Male</label>
      <input 
      type="radio"
      name="gender"
      id="male"
      value="male"
      onChange={changeHandler}
      checked= {form.gender === "male"}
       />

      <label htmlFor="female">Female</label>
      <input
      type="radio"
      name="gender"
      id="female"
      value="female"
      onChange={changeHandler}
      checked ={form.gender === "female"}
      />

      <label htmlFor="other">Other</label>
      <input
      type="radio"
      name="gender"
      id="other"
      value="other"
      onChange={changeHandler}
      checked ={form.gender === "other"} 
      />
        
      <input type="checkbox" checked={form.rules} name="rules" onChange={changeHandler} />
      <button onClick={loginHandler}>Login</button>
    </div>
  )
}

export default Form