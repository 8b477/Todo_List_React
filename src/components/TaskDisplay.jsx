import React, { useEffect, useState } from "react";
import FAKEDATA from "./models/mockeFakeData";
import Formulaire from "./Formulaire";
import { LOCALDATE } from "../Utils/DateFormat.ts";

const TaskDisplay = () => {

    //State
    const [fakeData, setFakeData] = useState([]);

    useEffect(() => {
        setFakeData(FAKEDATA);
    }, []);

    //Comportement => liste, supprime un élément.
    const handlerClick = (id) => {
        const copyData = [...fakeData];
        const filterData = copyData.filter((data) => data.id !== id);
        setFakeData(filterData);
    }
    //Render
    return (
        <>
            <ol>
                {fakeData.map((item) => {
                    return (
                        <li key={item.id.toString()}>
                            <h4>{item.name}</h4>
                            <ul>                                             {/* Infos à cacher avec bouton pour voire les détails*/}
                                <li>                                         {/* Infos à cacher avec bouton pour voire les détails*/}
                                    <span>Date de création :  </span>        {/* Infos à cacher avec bouton pour voire les détails*/}
                                    <span>{item.date}</span>                 {/* Infos à cacher avec bouton pour voire les détails*/}
                                </li>                                        {/* Infos à cacher avec bouton pour voire les détails*/}
                                <li>                                         {/* Infos à cacher avec bouton pour voire les détails*/}
                                    <span>Heure : </span>
                                    <span>{item.heure}</span>                {/* Infos à cacher avec bouton pour voire les détails*/}
                                </li>                                        {/* Infos à cacher avec bouton pour voire les détails*/}
                            </ul>
                            <p>{item.content}
                                <br />
                                <span>Date de fin :  </span>
                                {(item.dateDeFin < LOCALDATE)
                                    ? <span>la date de fin n'est pas valide ={">"}  </span>
                                    : <span>{item.dateDeFin}  </span>}
                                <button id={item.id.toString()} type="button" onClick={() => handlerClick(item.id)}>X</button>
                            </p>
                        </li>
                    )
                })}
            </ol>
            <Formulaire onDataAdd={(newData) => setFakeData([...fakeData, newData])} />
        </>
    );
}
export default TaskDisplay;