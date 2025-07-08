import { useState } from 'react'
import './App.css'

export const COLORS = [
  { value: '#ffffff', name: 'White'},
  { value: '#c0c0c0', name: 'Silver' },
  { value: '#d4af37', name: 'Gold' },
  { value: '#8b4513', name: 'Brown' },
  { value: '#000000', name: 'Black' },
  { value: '#ffffff', name: 'White' },
  { value: '#ff0000', name: 'Red' },
  { value: '#00ff00', name: 'Green' },
  { value: '#0000ff', name: 'Blue' },
  { value: '#ffff00', name: 'Yellow' },
  { value: '#ff00ff', name: 'Magenta' },
  { value: '#00ffff', name: 'Cyan' },
  { value: '#800080', name: 'Purple' },
  { value: '#ffa500', name: 'Orange' },
  { value: '#808080', name: 'Gray' },
  { value: '#ffc0cb', name: 'Pink' },
  { value: '#a52a2a', name: 'Maroon' },
  { value: '#008080', name: 'Teal' },
  { value: '#000080', name: 'Navy' },
  { value: '#808000', name: 'Olive' },
  { value: '#d2691e', name: 'Chocolate' },
]

export const SPLIT_OPTIONS = [
  'All 1 color',
  '50% / 50%',
  '75% / 25%',
]

const App = () => {
  const [split, setSplit] = useState('All 1 color')
  const [selectedBladeColor, setSelectedBladeColor] = useState(0)
  const [selectedTipColor, setSelectedTipColor] = useState(0)
  const [selectedTopHalfColor, setSelectedTopHalfColor] = useState(0)
  const [selectedBottomHalfColor, setSelectedBottomHalfColor] = useState(0)
  const [selectedTopSeventyFiveColor, setSelectedTopSeventyFiveColor] = useState(0)
  const [selectedBottomTwentyFiveColor, setSelectedBottomTwentyFiveColor] = useState(0)

  return (
    <>
      <h2>Sword Creator</h2>
      <div className="card">
        <div className="color-controls">
          <div className="container">
            <label> Tip Color: </label>
            <select 
              value={selectedTipColor} 
              onChange={(e) => setSelectedTipColor(Number(e.target.value))}
            >
              {COLORS.map((color, index) => (
                <option key={index} value={index}>
                  {color.name}
                </option>
              ))}
            </select>
          </div>

          <div className="container">
            <label> Color split: </label>
            <select 
              value={split} 
              onChange={(e) => setSplit(e.target.value)}
            >
              {SPLIT_OPTIONS.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          { split === 'All 1 color' && (
            <div className="container">
              <label> Blade Color:  </label>
              <select 
                value={selectedBladeColor}
                onChange={(e) => setSelectedBladeColor(Number(e.target.value))}
              >
                {COLORS.map((color, index) => (
                  <option key={index} value={index}>
                    {color.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          
          { split === '50% / 50%' && (
            <>
              <div className="container">
                <label> Top Half Color: </label>
                <select 
                  value={selectedTopHalfColor} 
                  onChange={(e) => setSelectedTopHalfColor(Number(e.target.value))}
                >
                  {COLORS.map((color, index) => (
                    <option key={index} value={index}>
                      {color.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <label>
                Bottom Half Color:
                <select 
                  value={selectedBottomHalfColor} 
                  onChange={(e) => setSelectedBottomHalfColor(Number(e.target.value))}
                >
                  {COLORS.map((color, index) => (
                    <option key={index} value={index}>
                      {color.name}
                    </option>
                  ))}
                </select>
              </label>
            </>
          )}

          { split === '75% / 25%' && (
            <>
              <label>
                Top 75% Color:
                <select 
                  value={selectedTopSeventyFiveColor} 
                  onChange={(e) => setSelectedTopSeventyFiveColor(Number(e.target.value))}
                >
                  {COLORS.map((color, index) => (
                    <option key={index} value={index}>
                      {color.name}
                    </option>
                  ))}
                </select>
              </label>
              
              <label>
                Bottom 25% Color:
                <select 
                  value={selectedBottomTwentyFiveColor} 
                  onChange={(e) => setSelectedBottomTwentyFiveColor(Number(e.target.value))}
                >
                  {COLORS.map((color, index) => (
                    <option key={index} value={index}>
                      {color.name}
                    </option>
                  ))}
                </select>
              </label>
            </>
          )}

        </div>

        <div className="grid-background">
          <div className="sword">
            <div 
              className="blade" 
              style={{ backgroundColor: COLORS[selectedBladeColor].value }}
            >
              <div className="tip" style={{ backgroundColor: COLORS[selectedTipColor].value }}></div>
              { split === '50% / 50%' && (
                <>
                <div className="top-half" style={{ backgroundColor: COLORS[selectedTopHalfColor].value }}></div>
                <div className="bottom-half" style={{ backgroundColor: COLORS[selectedBottomHalfColor].value }}></div>
                </>
              )}
              { split === '75% / 25%' && (
                <>
                <div className="top-seventy-five" style={{ backgroundColor: COLORS[selectedTopSeventyFiveColor].value }}></div>
                <div className="bottom-twenty-five" style={{ backgroundColor: COLORS[selectedBottomTwentyFiveColor].value }}></div>
                </>
              )}
            </div>
            <div className="handle"></div>
            <div 
              className="pommel"
            ></div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
