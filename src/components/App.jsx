// import viteLogo from '/vite.svg'
import "../styles/App.scss";
import "../fonts/KgTenThousandReasons-R1ll.ttf";
import { useState } from "react";

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState("");
  const [word, setWord] = useState("pepino");
  const [userLetters, setUserLetters] = useState([]);


  const handleClick = () => {
    setNumberOfErrors(numberOfErrors + 1);
  };

  const handleLetter = (ev) => {
    ev.preventDefault();
    const letterPress = ev.key;
    const regex = /^[a-z]+$/; 
    
    if (regex.test(letterPress)) {
      setLastLetter(letterPress);
      
    } else if (
      letterPress === "Backspace" ||
      letterPress === " " ||
      letterPress === "Enter"
    ) {
      setLastLetter("");
    }
    setUserLetters([...userLetters, letterPress]);
      console.log(userLetters);
  };


  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  
  const renderSolutionLetters = () => {
    const wordLetters = word.split("");
    return wordLetters.map((eachLetter, index) => {
      return <li key={index} className="letter"></li>;
    });
  };

  // function dividirCadena(cadenaADividir, separador) {
  //   var arrayDeCadenas = cadenaADividir.split(separador);
  //   document.write('<p>La cadena original es: "' + cadenaADividir + '"');
  //   document.write('<br>El separador es: "' + separador + '"');
  //   document.write(
  //     "<br>El array tiene " + arrayDeCadenas.length + " elementos: ",
  //   );

  //   for (var i = 0; i < arrayDeCadenas.length; i++) {
  //     document.write(arrayDeCadenas[i] + " / ");
  //   }
  // }

  // var cadenaVerso = "Oh brave new world that has such people in it.";
  // var cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

  // var espacio = " ";
  // var coma = ",";

  // dividirCadena(cadenaVerso, espacio);
  // dividirCadena(cadenaVerso);
  // dividirCadena(cadenaMeses, coma);

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              {renderSolutionLetters()}
              {/* <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li> */}
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
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
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
        <button className="btn" onClick={handleClick}>
          Incrementar
        </button>
      </main>
    </div>
  );
}

export default App;
