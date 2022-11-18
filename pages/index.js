import Head from "next/head";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Question from "../components/Question";
import ExerciseList from "../components/ExerciseList";

export function getServerSideProps() {
  const exercises = [
    { title: "American History", id: 0 },
    { title: "Grammy Awards", id: 1 },
  ];
  return {
    props: {
      exercises,
    },
  };
}

export function getQuestions(exerciseId) {
  const questions = [
    {
      id: 0,
      exerciseId: 0,
      question:
        "what was the first fourth of july celebration to use fireworks?",
      answers: [1777, 1799, 1876, 1800, 1822],
      correctAnswer: "a",
    },
    {
      id: 2,
      exerciseId: 0,
      question: "Who is the first president of the United States of America?",
      answers: [
        "Thomas Jefferson",
        "Bill Clinton",
        "Richard Nixon",
        "George Washington",
        "Donald J Trump",
      ],
      correctAnswer: "d",
    },
    {
      id: 3,
      exerciseId: 0,
      question: "how many signatures are on the declaration of independence",
      answers: [50, 26, 13, 21, 56],
      correctAnswer: "e",
    },
    {
      id: 4,
      exerciseId: 1,
      question:
        "below were nominated for Best Male R&B Vocal Performance in 2007 Grammy Award, except ...",
      answers: [
        "John Legend",
        "Justin Timberlake",
        "Luther Vandross",
        "Lionel Richie",
        "Prince",
      ],
      correctAnswer: "b",
    },
    {
      id: 5,
      exerciseId: 0,
      question:
        "what year did the star-spangled banner become the national anthem?",
      answers: [1900, 1865, 1976, 1931, 1942],
      correctAnswer: "d",
    },
    {
      id: 6,
      exerciseId: 1,
      question: "... won the category of Best New artist in 2014 Grammy Award",
      answers: [
        "Kacey Musgraves",
        "Ed Sheeran",
        "Macklemore & Ryan Lewis",
        "James Blake",
        "Kendrick Lamar",
      ],
      correctAnswer: "c",
    },
    {
      id: 7,
      exerciseId: 0,
      question:
        "which president held the first white house 4th of july celebration?",
      answers: [
        "George Washington",
        "Thomas Jefferson",
        "James Madison",
        "Abraham Lincoln",
        "James Monroe",
      ],
      correctAnswer: "b",
    },
  ];

  return questions.filter((items) => items.exerciseId === exerciseId);
}

export default function Home({ exercises }) {
  const initialState = {
    isExerciseShown: false,
    exerciseId: null,
    questions: [],
    isExerciseDone: false,
    score: 0,
  };
  const [state, setState] = useState(initialState);
  const { isExerciseShown, questions, isExerciseDone, score } = state;

  const showExercise = (id) => {
    setState({
      ...state,
      exerciseId: id,
      questions: getQuestions(id),
      isExerciseShown: true,
    });
  };
  const hideExercise = () => {};
  const finishTest = () => {};
  return (
    <>
      <Head>
        <title>Quiz Test</title>
        <meta name="description" content="Quiz app" />
      </Head>
      <div className="w-1/2 m-auto mt-[120px] bg-gray-200 p-6 rounded-md">
        <main>
          {!isExerciseShown ? (
            <ExerciseList exercises={exercises} func={showExercise} />
          ) : isExerciseDone ? (
            <div>Score result</div>
          ) : (
            <Question questions={questions} />
          )}
        </main>
      </div>
    </>
  );
}
