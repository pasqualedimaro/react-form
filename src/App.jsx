import { useState } from 'react'
import mangaList from './data/Article'

function App() {
  
  const [mangaArray, setMangaArray] = useState(mangaList);
  const [newManga, setNewMange] = useState("");

  const addManga = event => {
    event.preventDefault();
    const newMangaList = [...mangaArray, newManga];
    setMangaArray(newMangaList);
  }

  return (
    <>
      <div>
        <h1>Manga Preferiti</h1>
      </div>
      <form onSubmit={addManga}>
        <ul>
          {mangaArray.map((manga, index)=>
          <li key={index}>
            {manga}
          </li>
          )}
        </ul>
        <hr />
        <input type="text" 
        //placeholder="aggiungi"
        onChange={event =>
          setNewManga(event.target.value)}
          />
      </form>
    </>
  )
}

export default App
