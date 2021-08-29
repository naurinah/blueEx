import React,{useState,useEffect} from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios';

const MultipleInput = () => {
    const [userRegistration, setUserRegistration] = useState({
        username : "",
        email : "",
        password : "",
        number : ""
    });
    const [record , setRecord] = useState([]);
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value);
        setUserRegistration({...userRegistration,[name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord ={...userRegistration ,id : new Date().getTime().toString() }
        console.log(record);
        setRecord([...record, newRecord])
        console.log(record);
        setUserRegistration({username:"", email:"", password:"", number:""});
       
    }
    useEffect(() => {
        // alert ('hi')
        async function getData(){
            // console.log(userRegistration.username)
            // console.log(userRegistration.password)
            const res = await axios.get(`http://benefitx.blue-ex.com/api/customerportal/login.php?request={"username":"${username}","password":"${password}"}`
            );
            console.log(res.data.message);
        }
        getData()
    })

    return (
        <>
          <form action="" onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="username">username</label>
                  <input type="text" autoComplete="off" 
                   value={userRegistration.username}
                   onChange={handleInput} 
                  name="username" id="username"/>
              </div>
              <div>
                  <label htmlFor="email">email</label>
                  <input type="text" autoComplete="off" 
                   value={userRegistration.email}
                   onChange={handleInput} 
                  name="email" id="email"/>
              </div>
              <div>
                  <label htmlFor="password">password</label>
                  <input type="password" autoComplete="off" 
                   value={userRegistration.password}
                   onChange={handleInput} 
                  name="password" id="password"/>
              </div>
              <div>
                  <label htmlFor="number">number</label>
                  <input type="number" autoComplete="off" 
                   value={userRegistration.number}
                   onChange={handleInput} 
                  name="number" id="number"/>
              </div>
              <Button variant="text" color="default" type="submit">
                Registration
              </Button>
          </form>
          <div>
              {
                  record.map((curElem) => {
                      const { id, username, email, password, number } = curElem;
                      return (
                          <div key={id}>
                              <p>{curElem.username}</p>
                              <p>{curElem.email}</p>
                              <p>{curElem.password}</p>
                              <p>{curElem.number}</p>
                          </div>

                      )
                  })
                  
              }
          </div>
        </>
    )
}

export default MultipleInput
