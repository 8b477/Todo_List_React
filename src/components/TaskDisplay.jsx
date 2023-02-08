import React, { useEffect, useState } from "react";
import FAKEDATA from "./models/mockeFakeData";

const TaskDisplay = () => {

    const [fakeData, setFakeData] = useState([]);

    useEffect(() => {
        setFakeData(FAKEDATA);
    }, []);
    //Sate
    const [inputEntryTitle, setInputEntryTitle] = useState("");
    const [inputEntryContent, setInputEntryContent] = useState("");

    //Comportement => formulaire
    //(1) Je récupère la valeur de mon input, je track le changement de celui-ci et le place dans mon tableau vide.
    const handlerChangeTitle = (e) => {
        const dataInputTitle = e.target.value;
        setInputEntryTitle(dataInputTitle);
    }
    const handlerChangeContent = (e) => {
        const dataInputContent = e.target.value;
        setInputEntryContent(dataInputContent);
    }
    //(2) A l'envoie du formulaire
    const handlerSubmit = (e) => {
        const copyData = [...fakeData];
        const id = new Date().getTime();
        const name = inputEntryTitle;
        const content = inputEntryContent;

        e.preventDefault();
        copyData.push({ id: id, name: name, content: content });
        setFakeData(copyData);
    }
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
                            {item.content}
                            <button id={item.id.toString()} type="button" onClick={() => handlerClick(item.id)}>X</button>
                        </li>
                    )
                })}
            </ol>

            <form action="submit" onSubmit={handlerSubmit}>

                <input onChange={handlerChangeTitle} value={inputEntryTitle} type="text" placeholder='Entrez un titre' />
                <br />
                <input onChange={handlerChangeContent} value={inputEntryContent} type="text" placeholder='Entrez un contenu' />
                <br />
                <button type='submit'>Ok</button>

            </form>
        </>
    );
}
export default TaskDisplay;