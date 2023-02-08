import { useState } from "react";
import { LOCALDATE, LOCALTIME } from "../Utils/DateFormat.ts";

const Formulaire = ({ onDataAdd }) => {
    //state
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
        // const copyData = [...fakeData];
        // const id = new Date().getTime();
        // const name = inputEntryTitle;
        // const content = inputEntryContent;
        // copyData.push({ id: id, name: name, content: content });
        // setFakeData(copyData);

        e.preventDefault();
        onDataAdd({ id: new Date().getTime(), name: inputEntryTitle, content: inputEntryContent, date: LOCALDATE, heure: LOCALTIME });
        setInputEntryTitle("");
        setInputEntryContent("");
    }

    //render
    return (<form action="submit" onSubmit={handlerSubmit}>

        <input onChange={handlerChangeTitle} value={inputEntryTitle} type="text" placeholder='Entrez un titre' />
        <br />
        <input onChange={handlerChangeContent} value={inputEntryContent} type="text" placeholder='Entrez un contenu' />
        <br />
        <button type='submit'>Ok</button>

    </form>)
}
export default Formulaire; 