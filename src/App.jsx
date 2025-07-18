import { useState } from 'react'
import mangaList from './data/Article'

function App() {
  
  const [mangaArray, setMangaArray] = useState(mangaList);
  const [newManga, setNewManga] = useState("");

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
            <h3>{manga}</h3>
            <i className='fa-solid fa-trash' type='button' onClick={() => console.log("ho elimiato")}>
              Delete Manga
            </i>
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
