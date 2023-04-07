import {useEffect, useState} from "react";
import {getData} from "../services/axios.spaceX.service";
import ShipInfo from "../shipInfo/ShipInfo";

export default function SpaceX() {
    const [ships, setShips] = useState([]);
    useEffect(() => {
        getData().then(({data})=> setShips(data))
    },[])
    return (
        <div>
            {
                ships.map((data,index) =>  <ShipInfo key={index} data={data}/>)
            }


        </div>
    );
}