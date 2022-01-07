import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const App = () =>{

    if(!localStorage.getItem('username')) return (<LoginForm/>)
    return (
        <ChatEngine

            height="100vh"
            projectID="075271a9-4ef7-455c-8dfe-765e6af39bf5"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed { ...chatAppProps}/>}
        />
    );
}

export default App;