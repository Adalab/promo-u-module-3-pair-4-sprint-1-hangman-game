import "../styles/layout/_letters.scss";


function SolutionLetters(prop) {

    const renderSolutionLetters = () => {
        const wordLetters = prop.word.split("");
        return wordLetters.map((eachLetter, index) => {
          return (
            <li key={index} className="letter">
              {prop.userLetters.includes(eachLetter) ? eachLetter : ""}
            </li>
          );
        });
      };
  return (
    <div className="solution">
      <h2 className="title">Solución:</h2>
      <ul className="letters">{renderSolutionLetters()}</ul>
    </div>
  );
}
export default SolutionLetters;
