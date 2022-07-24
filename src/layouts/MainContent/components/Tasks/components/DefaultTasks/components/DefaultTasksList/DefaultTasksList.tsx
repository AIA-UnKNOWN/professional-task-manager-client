import React from 'react';

import Task, { TaskInterface } from '@layouts/MainContent/components/Tasks/components/Task';

const PendingTasksList: React.FC<{
  tasks: Array<TaskInterface>;
}> = ({
  tasks,
}) => {
  let taskCreatedDates: Array<{ date: string, taskId: number }> = [];
  
  return (
    <div className="mt-5">
      {tasks.map((task: TaskInterface) => {
        const MONTH_NAMES = [
          'January', 'February', 'March', 'April',
          'May', 'June', 'July', 'August',
          'September', 'October', 'November', 'December'
        ];

        const year = new Date(task.createdAt).getFullYear();
        const month = new Date(task.createdAt).getMonth();
        const date = new Date(task.createdAt).getDate();
        let createdDate = `${MONTH_NAMES[month]} ${date}, ${year}`;
        
        const taskCreatedDate = {
          date: createdDate,
          taskId: task.id,
        };

        const taskCreatedDatesWithoutTaskIds = taskCreatedDates.map(tcd => tcd.date);
        if (!taskCreatedDatesWithoutTaskIds.includes(taskCreatedDate.date)) {
          taskCreatedDates.push(taskCreatedDate);
        }

        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const currentDate = new Date().getDate();
        const dateToday = `${MONTH_NAMES[currentMonth]} ${currentDate}, ${currentYear}`;

        return (
          <>
            {taskCreatedDates.map(tcd => tcd.taskId).includes(task.id) && (
              <div
                className="relative border-b border-light-black
                mt-8 mb-5"
              >
                <span
                  className="absolute top-[50%] translate-y-[-50%]
                  left-[20px] bg-light-gray px-2 text-[14px]
                  text-light-black"
                >
                  {taskCreatedDate.date === dateToday ? 'Today' : taskCreatedDate.date}
                </span>
              </div>
            )}
            <Task
              key={task.id}
              data={task}
            />
          </>
        )}
      )}
    </div>
  );
}

export default PendingTasksList;