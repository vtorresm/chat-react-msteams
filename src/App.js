import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
  return (
    <ChatEngine
    height='100vh'
    projectID='8073797b-fe52-4306-b788-d13f6d59c7a4'
    userName='vtorremo'
    userSecret='vtorremo'
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App;