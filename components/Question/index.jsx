import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Answers from "./Answers";

export default function Question({ questions, hideExercise, finishTest }) {
  const initialState = {
    currentQuestion: 0,
    answers: [],
    numberOfQuestions: questions.length,
    correctAnswers: [],
  };

  const [state, setState] = useState(initialState);
  const { currentQuestion, answers, numberOfQuestions } = state;
  const question = questions[currentQuestion];

  const submitAnswer = () => {};
  const answerQuestion = () => {};
  const moveQuestion = () => {};

  return (
    <div>
      <button className="flex items-center gap-1 bg-gray-400 p-2 rounded-sm text-white">
        <span>
          <FaArrowLeft />
          <span>Back</span>
        </span>
      </button>
      <h1 className="text-2xl mt-2 capitalize">{`${
        state.currentQuestion + 1
      }. ${question.question}`}</h1>
      <Answers
        answers={question.answers}
        answerQuestion={answerQuestion}
        state={state}
      />
      <div className="flex gap-2">
        <button>prev</button>
        <button>next</button>
      </div>
    </div>
  );
}
