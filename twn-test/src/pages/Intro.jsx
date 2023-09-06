import React from 'react'
import { useNavigate } from 'react-router-dom'
import fontDataPath from '../assets/fonts.zip'
import graphicDataPath from '../assets/graphics.zip'

function downloadZipFile(file) {
  let zipFilePath = '';

  if (file === 'fontData') {
    zipFilePath = '../assets/fonts.zip'
  } else if (file === 'graphicData') {
    zipFilePath = '../assets/graphics.zip'
  }// Replace with the correct path to your zip file

  const xhr = new XMLHttpRequest();
  xhr.open('GET', zipFilePath, true);
  xhr.responseType = 'blob';

  xhr.onload = function () {
    if (xhr.status === 200) {
      const blob = xhr.response;

      // Create a hidden anchor element for downloading
      const a = document.createElement('a');
      a.style.display = 'none';

      // Create a Blob URL for the fetched zip content
      const url = URL.createObjectURL(blob);

      // Set the anchor's href and download attributes
      a.href = url;
      a.download = 'fonts.zip'; // You can change the downloaded file name here

      // Add the anchor element to the document
      document.body.appendChild(a);

      // Trigger a click event on the anchor element to initiate the download
      a.click();

      // Remove the anchor element from the document
      document.body.removeChild(a);

      // Revoke the Blob URL to free up resources
      URL.revokeObjectURL(url);
    } else {
      console.error('Failed to fetch the zip file');
    }
  };

  xhr.send();
}

// // Call the function to trigger the download
// downloadZipFile();


function Intro() {

  const nav = useNavigate();

  return (
    <div className='page'>
      <h2>Funktsionaalsed nõuded</h2>
      <p>Artikli vaade on lihtne: tee päring ja kuva saadud vastus.</p>
      <p>Tabeli vaate puhul soovime näha, kuidas sa Array-dega ringi käia oskad:<br />
        Tabelis tuleb saadud vastus tabeli ridadel välja kuvada, sh tabelile 3-sammuline sorteerimine peale panna (Asc, Desc, Default).<br />
        Tabelile tuleb ka lehejaotus külge panna. Funktsionaalsus peaks olema 1:1 proovitöö lehel oleva lehejaotusega.</p>
      <h2>Mittefunktsionaalsed nõuded</h2>
      <p>* Proovitöö lahendamiseks peab kasutama Vue, React või Angular raamistiku.<br />
        * Proovitöö puhul soovitame vältida väliseid mooduleid (paginator, table sorter, jne).<br />
        * Kujundus ei pea olema sama, mis proovitööl, aga selle järgi tegemine annab lisapunkte.</p>
      <h2>API</h2>
      <div className='button-pair'>
        <p>
          <button onClick={() => nav('/article')}>Artikkel</button>
          <button onClick={() => nav('/list')}>Nimekiri</button>
        </p>
      </div>
      <h2>Materjalid</h2>
      <div className='button-pair'>
        <p>
          <button onClick={() => downloadZipFile(fontDataPath)}>Font</button>
          <button onClick={() => downloadZipFile(graphicDataPath)}>Graafika</button>
        </p>
      </div>
    </div>
  )
}

export default Intro