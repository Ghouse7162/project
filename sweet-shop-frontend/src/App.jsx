import './App.css'
import SweetsList from './components/SweetsList'  // Make sure path is correct

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Sweet Shop Management</h1>
      <SweetsList />
    </div>
  )
}


export default App
