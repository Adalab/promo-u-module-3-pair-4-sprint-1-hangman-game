// import viteLogo from '/vite.svg'
import "../styles/App.scss";
import "../fonts/KgTenThousandReasons-R1ll.ttf";
import { useEffect, useState } from "react";
import Header from "./Header";
import Dummy from "./Dummy";
import SolutionLetters from "./SolutionLetters";
import ErrorLetters from "./ErrorLetters ";

function App() {
  const [lastLetter, setLastLetter] = useState("");
  const [word, setWord] = useState("");
  const [userLetters, setUserLetters] = useState([]);

  const failedLetters = userLetters.filter((letter) => !word.includes(letter));
  console.log(failedLetters);
  const numberOfErrors = failedLetters.length;

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    fetch("https://dev.adalab.es/api/random/word") // El 5 es el id de la Princesa Leia
      .then((response) => response.json())
      .then((Data) => {
        // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
        setWord(Data.word);
      });
  }, []);

  const handleLetter = (ev) => {
    ev.preventDefault();
    const letterPress = ev.target.value;
    const regex = /^[a-z]+$/;
    if (regex.test(letterPress) || letterPress === "") {
      setLastLetter(letterPress);
      if (letterPress !== "") {
        setUserLetters([...userLetters, letterPress]);
      }
    } else if (
      letterPress === "Backspace" ||
      letterPress === " " ||
      letterPress === "Enter"
    ) {
      setLastLetter("");
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  

 

  

  return (
    <div className="page">
      <Header/>
      <main className="main">
        <section>
          <SolutionLetters word={word} userLetters={userLetters}/>
          <ErrorLetters word={word} userLetters={userLetters}/>
          <form onSubmit={handleSubmit} className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={handleLetter}
            />
          </form>
        </section>
        <Dummy numberOfErrors= {numberOfErrors}/>
      </main>
    </div>
  );
}

export default App;
