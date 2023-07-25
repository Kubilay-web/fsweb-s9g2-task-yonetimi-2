import React from "react";
import { formatDistanceToNow, differenceInDays } from 'date-fns';


const Task = ({ taskObj, onComplete }) => {

  const deadlineData = new Date(taskObj.deadline);
  const daysToDeadline = differenceInDays(deadlineData, new Date());
  const formattedDistanceToNow = formatDistanceToNow(deadlineData, { addSuffix: true });

  let backgroundColor;
  if (daysToDeadline <= 3) {
    backgroundColor = '#ffd9d4';
  } else {
    backgroundColor = 'transparent';
  }

  return (
    <div className="p-6 bg-white rounded-md shadow-md mt-4">
      <h3 className="text-xl text-yellow-600">{taskObj.title}</h3>
      <div className="text-xs pt-1">
        Son Teslim: <span className="px-2 py-1 rounded bg-pink-200" style={{ backgroundColor }}>{formattedDistanceToNow}</span>
      </div>
      <p className="pt-2 text-sm text-gray-700">{taskObj.description}</p>
      <div className="flex mt-3">
        {taskObj.people.map((p) => (
          <span className="inline-block px-3 py-1 text-sm border border-gray-300 rounded-full mr-1 mb-2" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && (
        <button
          onClick={() => onComplete(taskObj.id)}
          className="block mt-4 px-3 py-2 bg-yellow-300 shadow-sm rounded"
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
