import {useState} from 'react'

export default function Authenticate({token}){

    const[error,setError]= useState(null);
    const [successMessage,setSuccessMessage]= useState(null);


    async function handleClick(){
        try{
            //authenticate the user
            const response= await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",
            {
                method: 'GET',
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
            }
        });
            
        const responseData = await response.json();
        console.log(responseData);
        setSuccessMessage(`Hello,${responseData.data.username}! and ${responseData.message}`);
        
        }
        catch(error){
           setError(error.message);
        }

    }




    return(
        <>
        <div className='authenticate'>
         <h2> Authenticate!</h2>
         {/* {successMessage} ? <p>{successMessage}</p> : <></> -Alterantive*/}
         {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>} 
         <button onClick={handleClick}>Authenticate Token!</button>
         
         </div>
        </>
       
    )
}