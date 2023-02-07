import TaskDisplay from './components/TaskDisplay.jsx';
import Title from './components/Title.tsx';

function App() {
  return (
    <>
      <Title />
      <TaskDisplay />
    </>
  )
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