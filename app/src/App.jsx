// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import DocsLayout from './components/ProcessLayout'

function MainApp() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>SC Map Generator</h1>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ 
        padding: '20px', 
        borderBottom: '1px solid #ddd',
        background: '#fff'
      }}>
        <Link to="/" style={{ marginRight: '20px', textDecoration: 'none' }}>
          App
        </Link>
        <Link to="/process" style={{ textDecoration: 'none' }}>
          Process
        </Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/process" element={<DocsLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App