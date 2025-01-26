import Message from './message'
import ListGroup from './components/ListGroup.jsx'
import ResetTimer from './components/ResetTimer.jsx'

function App() {
  return (
    <div className="App" style={{ 
      background: 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)',
      minHeight: '100vh'
    }}>
      <div className="container py-4">
        {/* <Message />
        <ListGroup /> */}
      </div>
      <ResetTimer />
    </div>
  );
}

export default App;