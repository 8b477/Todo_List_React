import { useState, useEffect } from "react";

function App() {
  //State
  const [defaultList, setDefaultList] = useState([
    { id: Number = 1, name: String = "Premier", content: String = "Mon premier contenu !  " },
    { id: Number = 2, name: String = "Second", content: String = "Mon second contenu !  " },
    { id: Number = 3, name: String = "Troisio", content: String = "Mon troisième contenu !  " },
  ]);



  //Comportement




  //Render

  return (
    <>
      <h2>Welcome to my Week Manager !</h2>
      <ol>
        {defaultList.map(({ name, content }) => {
          return (
            <li>{name}

              <ul>
                <li>{content}
                  <button type="button">X</button>
                </li>
              </ul>
            </li>
          )
        })}
      </ol>
    </>
  );
}

export default App;

/*
== Je vais avoir besoin d'afficher une liste depuis un tableau de données.
**Rafraichir cette liste quand elle est mise à jour.

== Je vais devoir créer un formulaire.
** Créer un bouton pour supprimer.

== Je vais devoir récupérer les données entrée via le formulaire.
** Afficher les données stockées dans la listes de tâches déjà existante.
*/