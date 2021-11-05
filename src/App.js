import './App.css';
import { useEffect, useMemo, useState } from "react";
import Quizz from "./components/Quizz";
import Timer from "./components/Timer";



function App() {

  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("€ 0");

  const data = [
    {
      id: 1,
      question: "Rolex est une compagnie spécialisée dans quel type de produits?",
      answers: [
        {
          text: "Téléphones",
          correct: false,
        },
        {
          text: "Montres",
          correct: true,
        },
        {
          text: "Comestibles",
          correct: false,
        },
        {
          text: "Cosmetiques",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Quand Facebook a t-il été crée?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2000",
          correct: false,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2002",
          correct: false,
        },
      ]
    },
    {
      id: 2,
      question: "Quel acteur incarne Harry Potter dans les fimls?",
      answers: [
        {
          text: "2Daniel Radcliff",
          correct: true,
        },
        {
          text: "Denzel washinton",
          correct: false,
        },
        {
          text: "Johnny Depp",
          correct: false,
        },
        {
          text: "Léonardo di caprio",
          correct: false,
        },
      ]
    }
  ]

  const moneyPyramid = useMemo(() => [
    { id: 1, amount: "€ 100"},
    { id: 2, amount: "€ 200"},
    { id: 3, amount: "€ 300"},
    { id: 4, amount: "€ 500"},
    { id: 5, amount: "€ 1000"},
    { id: 6, amount: "€ 2000"},
    { id: 7, amount: "€ 4000"},
    { id: 8, amount: "€ 8000"},
    { id: 9, amount: "€ 16000"},
    { id: 10, amount: "€ 32000"},
    { id: 11, amount: "€ 64000"},
    { id: 12, amount: "€ 125000"},
    { id: 13, amount: "€ 250000"},
    { id: 14, amount: "€ 500000"},
    { id: 15, amount: "€ 1000000"}
  ].reverse(),
  []);

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber])

  return (
    <div className="app">
      <div className="main">
        {stop ? <h1 className="endText">Vous avez remporté : {earned}</h1> : (
        <>
          <div className="top">
            <div className="timer">
              <Timer setStop={setStop} questionNumber={questionNumber}/>
            </div>
          </div>
          <div className="bottom"> 
            <Quizz 
              data={data} 
              setStop={setStop} 
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
            /> 
          </div>
        </>
        )}
      </div>
      <div className="pyramid"> 
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
          <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
          ))}
        </ul> 
      </div>
    </div>
  );
}

export default App;

