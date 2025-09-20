// src/components/DocsLayout.jsx
import { useState } from 'react'
import ResearchNotes from '../docs/research-notes.mdx'
import GridMap from '../docs/grid-map.mdx'

function DocsLayout() {
  const [expandedSections, setExpandedSections] = useState({
    'overview': true,
    'map': false
  })

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const TreeItem = ({ id, label, children, hasContent = false }) => {
    const isExpanded = expandedSections[id]
    
    return (
      <li style={{ marginBottom: '4px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {children && (
            <button
              onClick={() => toggleSection(id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '2px 4px 2px 0',
                color: '#999',
                fontSize: '12px'
              }}
            >
              {isExpanded ? '▼' : '▶'}
            </button>
          )}
          {hasContent ? (
            <button
              onClick={() => scrollToSection(id)}
              style={{
                background: 'none',
                border: 'none',
                color: '#666',
                cursor: 'pointer',
                fontSize: '14px',
                textAlign: 'left',
                padding: '4px 0',
                marginLeft: children ? '0' : '16px'
              }}
            >
              {label}
            </button>
          ) : (
            <span style={{ 
              fontSize: '14px', 
              color: '#333',
              fontWeight: '500',
              padding: '4px 0'
            }}>
              {label}
            </span>
          )}
        </div>
        {children && isExpanded && (
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: '4px 0 8px 20px',
            borderLeft: '1px solid #eee',
            paddingLeft: '12px'
          }}>
            {children}
          </ul>
        )}
      </li>
    )
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <nav style={{
        width: '220px',
        background: '#fafafa',
        padding: '20px',
        position: 'sticky',
        top: 0,
        height: 'fit-content',
        borderRight: '1px solid #eee'
      }}>
        <h3 style={{ marginTop: 0, fontSize: '16px', fontWeight: '500' }}>
          Contents
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <TreeItem 
            id="overview" 
            label="Overview"
            children={[
              <TreeItem 
                key="research-notes"
                id="research-notes" 
                label="Research Notes" 
                hasContent={true}
              />
            ]}
          />
          <TreeItem 
            id="map" 
            label="Map"
            children={[
              <TreeItem 
                key="grid-map"
                id="grid-map" 
                label="Grid Map" 
                hasContent={true}
              />
            ]}
          />
        </ul>
      </nav>
      
      <main style={{
        flex: 1,
        padding: '40px',
        maxWidth: '800px'
      }}>
        <section id="research-notes" style={{ marginBottom: '80px' }}>
          <ResearchNotes />
        </section>
        <section id="grid-map">
          <GridMap />
        </section>
      </main>
    </div>
  )
}

export default DocsLayout