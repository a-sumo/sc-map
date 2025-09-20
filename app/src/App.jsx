// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ResearchNotes from './research-notes.mdx'
import GridMap from './grid-map.mdx'

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
        background: '#f8f9fa'
      }}>
        <Link to="/" style={{ marginRight: '20px' }}>App</Link>
        <Link to="/docs">Documentation</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/docs" element={
          <div style={{ 
            maxWidth: '900px', 
            margin: '0 auto', 
            padding: '40px 20px',
            lineHeight: '1.6'
          }}>
            <ResearchNotes />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App