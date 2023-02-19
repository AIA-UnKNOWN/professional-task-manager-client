import React from 'react';

import useDefaultTasksList from './DefaultTasksList.hook';
import { PendingTasksListInterface, TaskInterface } from '@constants/interfaces';
import Task from '@layouts/MainContent/components/Tasks/components/Task';
import { Timeline } from './components';

const DefaultTasksList: React.FC<PendingTasksListInterface> = props => {
  const {
    // states
    tasksList,
    // functions
    getDateToday,
    copyTasksReport,
  } = useDefaultTasksList(props);

  return (
    <div className="mt-5">
      {tasksList.map((taskList, i) => (
        <React.Fragment key={i}>
          <Timeline
            date={taskList.date === getDateToday() ? 'Today' : taskList.date}
            onCopy={() => copyTasksReport(taskList)}
          />
          {taskList.tasks.map(task => (
            <Task
              key={task.id}
              data={task}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default DefaultTasksList;