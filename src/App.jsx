import './App.css';
import ChatEntry from './components/ChatEntry';

const App = () => {
    const testMessageData = {
    'id': 1,
    'sender':'Vladimir',
    'body':'why are you arguing with me',
    'timeStamp':'2018-05-29T22:49:06+00:00',
    'liked': false
    }

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry
          id={testMessageData.id}
          sender={testMessageData.sender}
          body={testMessageData.body}
          timeStamp={testMessageData.timeStamp}
          liked={testMessageData.liked}
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
