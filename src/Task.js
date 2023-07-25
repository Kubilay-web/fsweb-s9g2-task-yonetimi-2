import React from "react";
import { formatDistanceToNow,differenceInDays} from 'date-fns';


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
    <div className="task" >
      <h3>{taskObj.title}</h3>
      <div className="deadline">son teslim:<span style={{backgroundColor}}>{formattedDistanceToNow}</span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
