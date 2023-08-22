import React from 'react'

function Life() {
  return (
    <div className='page'>
      <h1>Conways game of life</h1>
      <form>
        <div>
          <div>Grid width
            <select>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="70">70</option>
              <option value="80">80</option>
            </select>
          </div>
          <div>Grid height
            <select>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
          </div>
          <div>Speed
            <select>
              <option value="120">Slow</option>
              <option value="60">Normal</option>
              <option value="30">Fast</option>
            </select>
          </div>
          <div>Initial life probability
            <select>
              <option value="10">10%</option>
              <option value="20">20%</option>
              <option value="30">30%</option>
              <option value="40">40%</option>
              <option value="50">50%</option>
              <option value="60">60%</option>
              <option value="70">70%</option>
              <option value="80">80%</option>
              <option value="90">90%</option>
              <option value="100">100%</option>
            </select>
          </div>
        </div>
        <div>
          <button>Pause</button>
        </div>
        <div>
          <button>Apply</button>
        </div>
      </form>
      <span>Currently alive</span>
      <div>
        <div>
          <span>9,1%</span>
        </div>
      </div>
      <div>
        <table>Game board</table>
      </div>
    </div>
  )
}

export default Life