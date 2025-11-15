'use client';

import { useState } from 'react';

export default function BuildingDesign() {
  const [view, setView] = useState('2d');
  const scale = 15; // pixels per foot

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#333',
          marginBottom: '10px',
          fontSize: '32px'
        }}>भवन डिज़ाइन - Ground Floor</h1>

        <div style={{
          textAlign: 'center',
          marginBottom: '30px',
          padding: '20px',
          background: '#f8f9fa',
          borderRadius: '10px'
        }}>
          <h3 style={{ color: '#555', marginBottom: '10px' }}>विशेषताएं (Specifications)</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', textAlign: 'left' }}>
            <div><strong>Hall:</strong> 24' × 12'</div>
            <div><strong>Rooms:</strong> 4 rooms (12' × 11' each)</div>
            <div><strong>Height:</strong> 11.6 feet</div>
            <div><strong>Features:</strong> Staircase in hall corner</div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button
            onClick={() => setView('2d')}
            style={{
              padding: '10px 30px',
              margin: '0 10px',
              fontSize: '16px',
              borderRadius: '25px',
              border: 'none',
              background: view === '2d' ? '#667eea' : '#ddd',
              color: view === '2d' ? 'white' : '#333',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            2D Floor Plan
          </button>
          <button
            onClick={() => setView('3d')}
            style={{
              padding: '10px 30px',
              margin: '0 10px',
              fontSize: '16px',
              borderRadius: '25px',
              border: 'none',
              background: view === '3d' ? '#667eea' : '#ddd',
              color: view === '3d' ? 'white' : '#333',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            3D View
          </button>
        </div>

        {view === '2d' ? (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            background: '#f0f0f0',
            borderRadius: '10px'
          }}>
            <svg width="800" height="600" viewBox="0 0 800 600">
              {/* Outer boundary */}
              <rect x="50" y="50" width={48 * scale} height={34 * scale}
                fill="none" stroke="#333" strokeWidth="4"/>

              {/* Top Left Room 1 */}
              <rect x="50" y="50" width={12 * scale} height={11 * scale}
                fill="#e3f2fd" stroke="#1976d2" strokeWidth="2"/>
              <text x={50 + (12 * scale) / 2} y={50 + (11 * scale) / 2}
                textAnchor="middle" dominantBaseline="middle"
                fontSize="16" fontWeight="bold" fill="#1976d2">
                Room 1
              </text>
              <text x={50 + (12 * scale) / 2} y={50 + (11 * scale) / 2 + 20}
                textAnchor="middle" dominantBaseline="middle"
                fontSize="14" fill="#1976d2">
                12' × 11'
              </text>

              {/* Top Left Room 2 */}
              <rect x="50" y={50 + 11 * scale} width={12 * scale} height={11 * scale}
                fill="#fff3e0" stroke="#f57c00" strokeWidth="2"/>
              <text x={50 + (12 * scale) / 2} y={50 + 11 * scale + (11 * scale) / 2}
                textAnchor="middle" dominantBaseline="middle"
                fontSize="16" fontWeight="bold" fill="#f57c00">
                Room 2
              </text>
              <text x={50 + (12 * scale) / 2} y={50 + 11 * scale + (11 * scale) / 2 + 20}
                textAnchor="middle" dominantBaseline="middle"
                fontSize="14" fill="#f57c00">
                12' × 11'
              </text>

              {/* Hall (Center) */}
              <rect x={50 + 12 * scale} y={50 + 5 * scale} width={24 * scale} height={12 * scale}
                fill="#f3e5f5" stroke="#7b1fa2" strokeWidth="3"/>
              <text x={50 + 12 * scale + (24 * scale) / 2} y={50 + 5 * scale + (12 * scale) / 2 - 10}
                textAnchor="middle" dominantBaseline="middle"
                fontSize="20" fontWeight="bold" fill="#7b1fa2">
                HALL
              </text>
              <text x={50 + 12 * scale + (24 * scale) / 2} y={50 + 5 * scale + (12 * scale) / 2 + 15}
                textAnchor="middle" dominantBaseline="middle"
                fontSize="16" fill="#7b1fa2">
                24' × 12'
              </text>

              {/* Staircase in hall corner */}
              <g>
                <rect x={50 + 13 * scale} y={50 + 6 * scale} width={4 * scale} height={3 * scale}
                  fill="#ffeb3b" stroke="#f57f17" strokeWidth="2"/>
                <line x1={50 + 13 * scale} y1={50 + 6 * scale + 10}
                      x2={50 + 17 * scale} y2={50 + 6 * scale + 10}
                      stroke="#f57f17" strokeWidth="1"/>
                <line x1={50 + 13 * scale} y1={50 + 6 * scale + 20}
                      x2={50 + 17 * scale} y2={50 + 6 * scale + 20}
                      stroke="#f57f17" strokeWidth="1"/>
                <line x1={50 + 13 * scale} y1={50 + 6 * scale + 30}
                      x2={50 + 17 * scale} y2={50 + 6 * scale + 30}
                      stroke="#f57f17" strokeWidth="1"/>
                <text x={50 + 15 * scale} y={50 + 7.5 * scale + 5}
                  textAnchor="middle" dominantBaseline="middle"
                  fontSize="12" fontWeight="bold" fill="#f57f17">
                  Stairs
                </text>
              </g>

              {/* Top Right Room 3 */}
              <rect x={50 + 36 * scale} y="50" width={12 * scale} height={11 * scale}
                fill="#e8f5e9" stroke="#388e3c" strokeWidth="2"/>
              <text x={50 + 36 * scale + (12 * scale) / 2} y={50 + (11 * scale) / 2}
                textAnchor="middle" dominantBaseline="middle"
                fontSize="16" fontWeight="bold" fill="#388e3c">
                Room 3
              </text>
              <text x={50 + 36 * scale + (12 * scale) / 2} y={50 + (11 * scale) / 2 + 20}
                textAnchor="middle" dominantBaseline="middle"
                fontSize="14" fill="#388e3c">
                12' × 11'
              </text>

              {/* Top Right Room 4 */}
              <rect x={50 + 36 * scale} y={50 + 11 * scale} width={12 * scale} height={11 * scale}
                fill="#fce4ec" stroke="#c2185b" strokeWidth="2"/>
              <text x={50 + 36 * scale + (12 * scale) / 2} y={50 + 11 * scale + (11 * scale) / 2}
                textAnchor="middle" dominantBaseline="middle"
                fontSize="16" fontWeight="bold" fill="#c2185b">
                Room 4
              </text>
              <text x={50 + 36 * scale + (12 * scale) / 2} y={50 + 11 * scale + (11 * scale) / 2 + 20}
                textAnchor="middle" dominantBaseline="middle"
                fontSize="14" fill="#c2185b">
                12' × 11'
              </text>

              {/* Doors */}
              <rect x={50 + 12 * scale - 10} y={50 + 10 * scale} width="10" height="30" fill="#8d6e63"/>
              <rect x={50 + 12 * scale - 10} y={50 + 16 * scale} width="10" height="30" fill="#8d6e63"/>
              <rect x={50 + 36 * scale} y={50 + 10 * scale} width="10" height="30" fill="#8d6e63"/>
              <rect x={50 + 36 * scale} y={50 + 16 * scale} width="10" height="30" fill="#8d6e63"/>

              {/* Dimensions */}
              <text x={50 + 24 * scale} y="30" textAnchor="middle" fontSize="14" fill="#333" fontWeight="bold">
                48 feet (total width)
              </text>
              <text x="30" y={50 + 17 * scale} textAnchor="middle" fontSize="14" fill="#333" fontWeight="bold" transform={`rotate(-90, 30, ${50 + 17 * scale})`}>
                34 feet
              </text>
            </svg>
          </div>
        ) : (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            background: '#f0f0f0',
            borderRadius: '10px',
            perspective: '1000px'
          }}>
            <svg width="800" height="600" viewBox="0 0 800 600">
              <defs>
                <linearGradient id="wallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#bdbdbd', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#757575', stopOpacity: 1}} />
                </linearGradient>
                <linearGradient id="roofGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: '#d32f2f', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#c62828', stopOpacity: 1}} />
                </linearGradient>
              </defs>

              {/* Ground */}
              <rect x="0" y="450" width="800" height="150" fill="#8bc34a"/>

              {/* Building front wall */}
              <polygon points="150,450 650,450 600,250 200,250" fill="url(#wallGrad)" stroke="#424242" strokeWidth="2"/>

              {/* Building left side */}
              <polygon points="150,450 200,250 200,200 150,350" fill="#9e9e9e" stroke="#424242" strokeWidth="2"/>

              {/* Building right side */}
              <polygon points="650,450 600,250 600,200 650,350" fill="#757575" stroke="#424242" strokeWidth="2"/>

              {/* Roof */}
              <polygon points="200,200 600,200 620,180 180,180" fill="url(#roofGrad)" stroke="#b71c1c" strokeWidth="2"/>

              {/* Front door */}
              <rect x="380" y="350" width="60" height="100" fill="#6d4c41" stroke="#3e2723" strokeWidth="2"/>
              <circle cx="410" cy="400" r="3" fill="#ffd54f"/>

              {/* Windows - Room 1 */}
              <rect x="230" y="290" width="60" height="50" fill="#64b5f6" stroke="#1976d2" strokeWidth="2"/>
              <line x1="260" y1="290" x2="260" y2="340" stroke="#1976d2" strokeWidth="2"/>
              <line x1="230" y1="315" x2="290" y2="315" stroke="#1976d2" strokeWidth="2"/>

              {/* Windows - Room 2 */}
              <rect x="310" y="290" width="60" height="50" fill="#64b5f6" stroke="#1976d2" strokeWidth="2"/>
              <line x1="340" y1="290" x2="340" y2="340" stroke="#1976d2" strokeWidth="2"/>
              <line x1="310" y1="315" x2="370" y2="315" stroke="#1976d2" strokeWidth="2"/>

              {/* Windows - Room 3 */}
              <rect x="450" y="290" width="60" height="50" fill="#64b5f6" stroke="#1976d2" strokeWidth="2"/>
              <line x1="480" y1="290" x2="480" y2="340" stroke="#1976d2" strokeWidth="2"/>
              <line x1="450" y1="315" x2="510" y2="315" stroke="#1976d2" strokeWidth="2"/>

              {/* Windows - Room 4 */}
              <rect x="530" y="290" width="60" height="50" fill="#64b5f6" stroke="#1976d2" strokeWidth="2"/>
              <line x1="560" y1="290" x2="560" y2="340" stroke="#1976d2" strokeWidth="2"/>
              <line x1="530" y1="315" x2="590" y2="315" stroke="#1976d2" strokeWidth="2"/>

              {/* Height indicator */}
              <line x1="670" y1="450" x2="670" y2="250" stroke="#ff5722" strokeWidth="3" strokeDasharray="5,5"/>
              <text x="690" y="350" fontSize="16" fill="#ff5722" fontWeight="bold">
                11.6'
              </text>

              {/* Labels */}
              <text x="400" y="520" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#333">
                3D Front View - Ground Floor (Height: 11.6 feet)
              </text>
            </svg>
          </div>
        )}

        <div style={{
          marginTop: '30px',
          padding: '20px',
          background: '#e8eaf6',
          borderRadius: '10px'
        }}>
          <h3 style={{ color: '#3f51b5', marginBottom: '15px' }}>Layout Summary (लेआउट सारांश)</h3>
          <ul style={{ lineHeight: '1.8', color: '#333' }}>
            <li><strong>Ground Floor Total:</strong> 48' × 34' (approx)</li>
            <li><strong>Central Hall:</strong> 24' × 12' (मुख्य हॉल)</li>
            <li><strong>Left Side Rooms:</strong> Room 1 & 2 (12' × 11' each)</li>
            <li><strong>Right Side Rooms:</strong> Room 3 & 4 (12' × 11' each)</li>
            <li><strong>Staircase:</strong> Located in hall corner (हॉल के कोने में सीढ़ी)</li>
            <li><strong>Floor Height:</strong> 11.6 feet (फर्श की ऊंचाई)</li>
            <li><strong>Total Area:</strong> Approx. 1,632 sq ft</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
