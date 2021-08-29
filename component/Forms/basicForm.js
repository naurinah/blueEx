import { Button } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import axios from 'axios';

const BasicForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { username : username , password : password };
        setAllEntry([... allEntry , newEntry]);
        // console.log(allEntry);
    }
   
    useEffect(() => {
      
        async function getData(){
            const res = await axios.get(`https://benefitx.blue-ex.com/api/customerportal/login.php?request={"username":"${username}","password":"${password}"}`
            );
            let message = res.data.message ;
            let status = res.data.status;
            if ( status == 0 ) {
                console.log( message  + " please try again!");
                return;
             
            }else{
                console.log( message + " welcome to benefit" );

            }
         
        }
        getData();
    })
    return (
        <>
            <form action="" onSubmit={submitForm} id="login_id">
                <div className="form-group">
                  <label htmlFor="username">username</label>
                  <input type="text"
                      className="form-control"
                      name="username"
                      id="username"
                      aria-describedby="helpId" 
                      placeholder="username"
                     autocomplete="off"
                      value={username}
                      onChange={(e)=>setUsername(e.target.value)}
                       />
                </div>
                <div className="form-group">
                  <label htmlFor="password">password</label>
                  <input type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      aria-describedby="helpId" 
                      placeholder="password"
                     autocomplete="off"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                       />
                </div>
               
               
                <Button variant="contained" color="secondary" type="submit">
                  Login
                </Button>
                
            </form>
            <div>
                {
                   allEntry.map((curElem) => {
                       return(
                           <div>
                               <p>{curElem.username}</p>
                               <p>{curElem.password}</p>
                               </div>
                       )
                   }) 
                }
            </div>
        </>
    )
}

export default BasicForm;
