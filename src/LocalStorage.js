import { useState } from "react"

export default function LocalStorage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleUsernameChange = (event) =>{
        setUsername(event.target.value)
    }
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault()

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        setUsername('')
        setPassword('')

    }

    
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">UserName:</label>
                <input type="text" id="username" value={username} onChange={handleUsernameChange}></input>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" value={password} onChange={handlePasswordChange}></input>
            </div>
            <button type="submit">submit</button>
        </form>
    )
}