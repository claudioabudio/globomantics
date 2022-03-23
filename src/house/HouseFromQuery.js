import { useParams } from "react-router-dom";
import House from "./"
import { useContext } from "react";
import HousesContext from "../contexts/housesContext";

const HouseFromQuery = () => {
    const allHouses = useContext(HousesContext);
    const {id} = useParams();
    const house = allHouses.find((h) => h.id === parseInt(id));
    
    if (!house) return <div>House not found !</div>
    return (  
        <House house={house}/>
    );
}
 
export default HouseFromQuery;