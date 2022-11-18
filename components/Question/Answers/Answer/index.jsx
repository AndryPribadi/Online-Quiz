import React from "react";

export default function Answer(props) {
  const { icon, answerQuestion, answerText, answerValue } = props;

  return (
    <li>
      <button className="p-2 flex items-center gap-2 hover:text-blue-900">
        <span>{icon}</span>
        {`${answerValue}. ${answerText}`}
      </button>
    </li>
  );
}
