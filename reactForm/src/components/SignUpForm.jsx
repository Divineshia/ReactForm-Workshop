import {useState} from "react";



export default function SignUpForm({setToken}){

 const [username,setUsername] = useState('');
 const [password, setPassword] = useState ('');
 const [error, setError] = useState(null);

 //handling submit button on clicked
 async function handleSubmit(e){
 e.preventDefault();
 //console.log('Welcome, Form submitted');
 try{
    //call the server and give it the pwd and username
    const response = await fetch ('https://fsa-jwt-practice.herokuapp.com/signup',
    { 
        method: "POST", 
        headers: { 
          "Content-Type": "application/json" 
        }, 
        body: JSON.stringify({ 
          username: username, 
          password: password
        }) 
      })
    const data = await response.json();
    console.log(data);
    
    console.log(`username:${username}, pwd:${password}`);
    setToken(data.token);
    setUsername(''); //to get clear form after submitted
    setPassword('');


 }
 catch{
    setError(error.message);
 }
 }

 //Validating the form with certain conditions
 function formValidation(e){
  const newPassword =e.target.value;
        if((newPassword.length) < 6){
            setError('Password needs to be stronger, add more characters');
           
        }

    else {
     setError('');
    }
    setPassword(newPassword);
 }
    
 return(
        <>
        <div className="signup">
        <h2> Sign Up!</h2>
        {error &&
            <p>{error}</p>}
        
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input value = {username} onChange ={(e)=>setUsername(e.target.value)} />
            <label>Password:</label>
            <input value = {password} onChange={formValidation}/>
            <button>Submit</button>
        </form>
        </div>
        </>
 )
}

 