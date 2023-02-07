import { useState } from "react";

function App() {
  //State
  const [defaultList, setDefaultList] = useState([
    { id: 1, name: "Premier", content: "Mon premier contenu !  " },
    { id: 2, name: "Second", content: "Mon second contenu !  " },
    { id: 3, name: "Troisio", content: "Mon troisième contenu !  " },
  ]);

  //Comportement

  const handleClick = (id) => {
    const copyData = [...defaultList];
    const filterData = copyData.filter((data) => data.id !== id);
    //console.log(e.target.id)
    setDefaultList(filterData);
  }


  //Render
  return (
    <>
      <h2>Welcome to my Week Manager !</h2>
      <ol>
        <ul>
          {defaultList.map((item) => {
            return (
              <li key={item.id}>
                <h4>{item.name}</h4>
                {item.content}
                <button id={item.id} type="button" onClick={() => handleClick(item.id)}>X</button>
              </li>
            )
          })}
        </ul>
      </ol>
    </>
  );
}



export default App;

/*
== Je vais avoir besoin d'afficher une liste depuis un tableau de données. /FAIT/
** Créer un bouton pour supprimer. //FAIT

== Je vais devoir créer un formulaire.

== Je vais devoir récupérer les données entrée via le formulaire et donc les stockée.

** Afficher les données stockées dans la listes de tâches déjà existante.
** Rafraichir cette liste quand elle est mise à jour. re-render avec le useEffect().

**** Définir un maximum de component indépendant ****
*/