import { useRef } from "react";
import { useParams } from "react-router-dom";

function MuudaUudis() {

    const { index } = useParams();
    const uudised = JSON.parse(localStorage.getItem('uudised') || '[]');
    const leitudUudis = uudised[index];
    const uudisRef = useRef();

    const muuda = () => {
        uudised[index] = uudisRef.current.value;
        localStorage.setItem('uudised', JSON.stringify(uudised));
    }

    return (
        <div className="hele-tekst">
            <label></label><br />
            <input ref={uudisRef} defaultValue={leitudUudis} type="text" /><br />
            <button onClick={() => muuda()}>Muuda</button>
        </div>
    );
}

export default MuudaUudis;