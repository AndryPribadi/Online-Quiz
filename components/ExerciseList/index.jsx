import React from "react";

export default function ExerciseList({ exercises, func }) {
  return (
    <>
      <h3 className="text-2xl">Pick an exercise</h3>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id} className="hover:text-blue-900">
            <button
              className="cursor-pointer"
              onClick={() => func(exercise.id)}
            >
              {exercise.title}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
