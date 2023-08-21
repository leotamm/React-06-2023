import React from 'react'

function List() {
  return (
    <div>
      <h1>Nimekiri</h1>
      <table>
        <thead>
          <tr>
            <th>
              <button>Eesnimi</button>
            </th>
            <th>
              <button>Perekonnanimi</button>
            </th>
            <th>
              <button>Sugu</button>
            </th>
            <th>
              <button>Sünnikuupäev</button>
            </th>
            <th>
              <button>Telefon</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Peeter</th>
            <th>Peterson</th>
            <th>Mees</th>
            <th>23.03.1933</th>
            <th>+372 54004941</th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default List