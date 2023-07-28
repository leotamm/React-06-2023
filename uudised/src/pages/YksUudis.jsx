import { useParams } from "react-router-dom";

function YksUudis() {

    const {index} = useParams();
    const uudised = JSON.parse(localStorage.getItem('uudised') || '[]');
    const leitudUudis = uudised[index];

    return (
        <div className="hele-tekst">
            {leitudUudis}
        </div>
    );
}

export default YksUudis;