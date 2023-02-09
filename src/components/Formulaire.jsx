import { useState } from "react";
import { LOCALDATE, LOCALTIME } from "../Utils/DateFormat.ts";

const Formulaire = ({ onDataAdd }) => {
    //State
    const [inputEntryTitle, setInputEntryTitle] = useState("");
    const [inputEntryContent, setInputEntryContent] = useState("");
    const [inputEntryDate, setInputEntryDate] = useState("");

    //Comportement
    //#region Track des différentes entrée dans les input avant refacto avec la fonction handlerOnChangeInput().
    // (1) Je récupère la valeur de mon input, je track le changement de celui-ci et le place dans mon tableau vide.
    // const handlerChangeTitle = (e) => {
    //     const dataInputTitle = e.target.value;
    //     setInputEntryTitle(dataInputTitle);
    //     //console.log(`FROM Title ${dataInputTitle}`);
    // }
    // const handlerChangeContent = (e) => {
    //     const dataInputContent = e.target.value;
    //     setInputEntryContent(dataInputContent);
    //     //console.log(`FROM Content ${dataInputContent}`);
    // }
    // const handlerChangeDate = (e) => {
    //     const dataInputData = e.target.value;
    //     setInputEntryDate(dataInputData);
    //     //console.log(`FROM Date ${dataInputData}`);
    // }
    //#endregion

    const handlerOnChangeInput = (e, setTestFonction) => {
        const dataInputData = e.target.value;
        setTestFonction(dataInputData);
        //console.log(`FROM Date ${dataInputData}`);
    }

    //(2) A l'envoie du formulaire
    const handlerSubmit = (e) => {
        //#region code avant de passer via les props du component parents via la fonction onDataAdd().
        // const copyData = [...fakeData];
        // const id = new Date().getTime();
        // const name = inputEntryTitle;
        // const content = inputEntryContent;
        // copyData.push({ id: id, name: name, content: content });
        // setFakeData(copyData);
        //#endregion
        e.preventDefault();
        onDataAdd({ id: new Date().getTime(), name: inputEntryTitle, content: inputEntryContent, dateDeFin: inputEntryDate, date: LOCALDATE, heure: LOCALTIME });
        setInputEntryTitle("");
        setInputEntryContent("");
        setInputEntryDate("");
    }
    //render
    return (<form action="submit" onSubmit={handlerSubmit}>

        <input onChange={(e) => { handlerOnChangeInput(e, setInputEntryTitle) }} value={inputEntryTitle} type="text" placeholder='Entrez un titre' />
        <br />
        <input onChange={(e) => { handlerOnChangeInput(e, setInputEntryContent) }} value={inputEntryContent} type="text" placeholder='Entrez un contenu' />
        <br />
        <label>Entrez une date de fin : </label>
        <p>
            <input onChange={(e) => { handlerOnChangeInput(e, setInputEntryDate) }} value={inputEntryDate} type="date" name="inputDate" id="" />
        </p>
        <button type='submit'>Ok</button>

    </form>)
}
export default Formulaire; 