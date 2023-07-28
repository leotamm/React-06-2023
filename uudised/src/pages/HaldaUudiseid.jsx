import { useState } from "react";
import { Link } from "react-router-dom";

function HaldaUudiseid() {

    const [uudised, uuendaUudised] = useState(JSON.parse(localStorage.getItem('uudised') || '[]'));

    const kustuta = (index) => {
        uudised.splice(index,1);
        uuendaUudised(uudised.slice());
        localStorage.setItem('uudised', JSON.stringify(uudised));
    }

    return (
        <div className='hele-tekst'>
            {uudised.map((uudis, index) =>
                <div key={index}>
                    {uudis}
                    <Link to={'/muuda/' + index} ><button>Muuda</button></Link>
                    <button onClick={() => kustuta(index)}>X</button>
                </div>
            )}
        </div>
    );
}

export default HaldaUudiseid;