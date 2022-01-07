import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const [error,setError] = useState('');

    const handleSubmit = async (event) =>
    {
            event.preventDefault();
            const authObj = {'Project-ID':"075271a9-4ef7-455c-8dfe-765e6af39bf5",'User-Name':username,'User-Secret':password}

            try{
                await axios.get('https://api.chatengine.io/chats',{headers:authObj});
                localStorage.setItem('username',username);
                localStorage.setItem('password',password);
                window.location.reload();
            }
            catch(error){
                setError("ooops!! wrong credential");

            }
        

             
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>

                    <input
                        type = "text"
                        value = {username}
                        className="input"
                        placeholder = "Type Username"
                        required
                        onChange={
                            (e)=>setUsername(e.target.value)
                        }
                    /><input
                        type = "password"
                        value = {password}
                        className="input"
                        placeholder = "Type Password"
                        required
                        onChange={
                            (e)=>setPassword(e.target.value)
                        }
                    />
                    <div align="center">
                    <button type="submit" className="button" style={{height:"70px",width:"140px"}}>
                    <span>
                        Start
                    </span>

                    </button>
                    <h2 className="error" style={{color:"white"}}>{error}</h2>
                    </div>
                
                </form>
            </div>
        </div>

    )


}

export default LoginForm;