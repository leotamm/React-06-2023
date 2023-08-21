import React, { useEffect, useState } from 'react'


function ParcelMachines() {

  const [omnivaParcelMacines, setOmnivaParcelMacines] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch('https://www.omniva.ee/locations.json')
      // , fetch('https://www.smartpost.ee/places.json')
    ])
      .then(([resOmniva, resSmartpost]) =>
        Promise.all([resOmniva.json()
          // ,resSmartpost.json()
        ])
      )
      .then(([omnivaData
        // , smartpostData
      ]) => {
        setOmnivaParcelMacines(omnivaData);
        // setSmartpostParcelMacines(smartpostData);
      });
  }, []);

  return (
    <select>{omnivaParcelMacines.filter(opm => opm.A0_NAME === 'EE').map((opm, index) => <option key={index}>{opm.NAME}</option>)}</select>
  )
}

export default ParcelMachines