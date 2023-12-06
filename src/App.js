import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import ReactConfetti from "react-confetti";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which Indian Movie own Oscar in 2023?",
      answers: [
        {
          text: "KGF 2",
          correct: false,
        },
        {
          text: "Kantara",
          correct: false,
        },
        {
          text: "Pushpa, The Rise",
          correct: false,
        },
        {
          text: "RRR",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question:
        "In which group of places the Kumbha Mela is held every twelve years?",
      answers: [
        {
          text: "Ujjain. Purl; Prayag. Haridwar",
          correct: false,
        },
        {
          text: "Prayag. Haridwar, Ujjain,. Nasik",
          correct: true,
        },
        {
          text: "Rameshwaram. Purl, Badrinath. Dwarika",
          correct: false,
        },
        {
          text: "Chittakoot, Ujjain, Prayag,'Haridwar",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Bahubali festival is related to",
      answers: [
        {
          text: "Islam",
          correct: false,
        },
        {
          text: "Hinduism",
          correct: false,
        },
        {
          text: "Buddhism",
          correct: false,
        },
        {
          text: "Jainism",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "Which day is observed as the World Standards  Day?",
      answers: [
        {
          text: "June 26",
          correct: false,
        },
        {
          text: "Dec 2",
          correct: false,
        },
        {
          text: "Oct 14",
          correct: true,
        },
        {
          text: "Nov 15",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question:
        "Which of the following Muslim festivals is based on the 'Holy Quran' ?",
      answers: [
        {
          text: "Id -ul-Zuha",
          correct: true,
        },
        {
          text: "Id -ul-Fitr",
          correct: false,
        },
        {
          text: "Bakri-id",
          correct: false,
        },
        {
          text: "Moharram",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "The first month of the Indian national calendar is",
      answers: [
        {
          text: "Magha",
          correct: false,
        },
        {
          text: "Chaitra",
          correct: true,
        },
        {
          text: "Ashadha",
          correct: false,
        },
        {
          text: "Vaishakha",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Kalarippayat isthe martial art  of the State of",
      answers: [
        {
          text: "Madhya Pradesh",
          correct: false,
        },
        {
          text: "Mizoram",
          correct: false,
        },
        {
          text: "Kerala",
          correct: true,
        },
        {
          text: "Nagaland",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question:
        "Which of the following years was celebrated as the World Communication Year?",
      answers: [
        {
          text: "1981",
          correct: false,
        },
        {
          text: "Kantara",
          correct: false,
        },
        {
          text: "1987",
          correct: false,
        },
        {
          text: "1983",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "Which Indian Movie own Oscar in 2023?",
      answers: [
        {
          text: "KGF 2",
          correct: false,
        },
        {
          text: "Kantara",
          correct: false,
        },
        {
          text: "Pushpa, The Rise",
          correct: false,
        },
        {
          text: "RRR",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "'Good Friday' is observed to commemorate the event of",
      answers: [
        {
          text: "birth of Jesus Christ",
          correct: false,
        },
        {
          text: "birth of' St. Peter",
          correct: false,
        },
        {
          text: "crucification 'of Jesus Christ",
          correct: true,
        },
        {
          text: "rebirth of Jesus Christ",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Pongal is a popular festival of which state?",
      answers: [
        {
          text: "Karnataka",
          correct: false,
        },
        {
          text: "Kerala",
          correct: false,
        },
        {
          text: "Tamil Nadu",
          correct: true,
        },
        {
          text: "Andhra Pradesh",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question:
        "Which of the following was the theme of the World Red Cross and Red Crescent Day?",
      answers: [
        {
          text: "'Dignity for all - focus on women'",
          correct: false,
        },
        {
          text: "'Dignity for all - focus on Children'",
          correct: true,
        },
        {
          text: "'Focus on health for all'",
          correct: false,
        },
        {
          text: "'Nourishment for all-focus on children'",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1,000" },
        { id: 6, amount: "$ 2,000" },
        { id: 7, amount: "$ 4,000" },
        { id: 8, amount: "$ 8,000" },
        { id: 9, amount: "$ 16,000" },
        { id: 10, amount: "$ 32,000" },
        { id: 11, amount: "$ 64,000" },
        { id: 12, amount: "$ 125,000" },
        { id: 13, amount: "$ 250,000" },
        { id: 14, amount: "$ 500,000" },
        { id: 15, amount: "$ 1,000,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <>
                <ReactConfetti width="1500px" height="1000px" />
                <RestartAltIcon
                  className="restart"
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                  onClick={() => {
                    window.location.reload();
                  }}
                />
                <h1 className="endText">
                  {username.charAt(0).toUpperCase() + username.slice(1)} !!!,
                  You earned: {earned}
                </h1>
              </>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2 style={{ margin: "10px" }}>
                Player: {username.charAt(0).toUpperCase() + username.slice(1)}
              </h2>
              <ul className="moneyList">
                {moneyPyramid.map((m) => (
                  <li
                    className={
                      questionNumber === m.id
                        ? "moneyListItem active"
                        : "moneyListItem"
                    }
                  >
                    <span className="moneyListItemNumber">{m.id}</span>
                    <span className="moneyListItemAmount">{m.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
