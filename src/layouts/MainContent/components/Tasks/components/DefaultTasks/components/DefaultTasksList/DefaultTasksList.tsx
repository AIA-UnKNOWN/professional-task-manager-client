import React from 'react';

import useDefaultTasksList from './DefaultTasksList.hook';
import { PendingTasksListInterface, TaskInterface } from '@constants/interfaces';
import Task from '@layouts/MainContent/components/Tasks/components/Task';
import { Timeline } from './components';

const DefaultTasksList: React.FC<PendingTasksListInterface> = ({
  tasks,
}) => {
  const {
    // variables
    taskCreatedDates,
    // functions
    groupTasksByCreatedDate,
    getDateToday,
  } = useDefaultTasksList();

  return (
    <div className="mt-5">
      {tasks.map((task: TaskInterface) => {
        const taskCreatedDate = groupTasksByCreatedDate(task);

        return (
          <React.Fragment key={task.id}>
            {taskCreatedDates.map(tcd => tcd.taskId).includes(task.id) && (
              <Timeline
                date={taskCreatedDate.date === getDateToday()
                  ? 'Today'
                  : taskCreatedDate.date
                }
              />
            )}
            <Task
              key={task.id}
              data={task}
            />
          </React.Fragment>
        )
      })}
    </div>
  );
}

export default DefaultTasksList;