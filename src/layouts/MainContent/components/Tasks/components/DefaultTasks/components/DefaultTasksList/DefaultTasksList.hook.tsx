import { useState, useEffect } from "react";

const useDefaultTasksList = props => {
  const { tasks } = props;
  const MONTH_NAMES = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  const [tasksList, setTasksList] = useState([])

  useEffect(() => {
    let tasksList = organizeTasksList();
    tasksList = tasksList.map(taskList => {
      return {
        ...taskList,
        tasks: sortTasks(
          tasks.filter(task => {
            const formattedTaskCreatedDate = formatDate(task.createdAt);
            return taskList.date === formattedTaskCreatedDate;
          }),
          'desc'
        ),
      }
    });
    setTasksList(
      tasksList.sort((taskList1, taskList2) => {
        return new Date(taskList2.date).getTime() - new Date(taskList1.date).getTime()
      })
    );
  }, [tasks]);

  const organizeTasksList = () => {
    let tasksList = [];
    for (const task of tasks) {
      // formats the created date of a task into human readable format
      const formattedTaskCreatedDate = formatDate(task.createdAt);
      // gets all the task created dates to be used in checking for duplicate dates
      // which will be used in grouping tasks by created date
      const tasksListDates = tasksList.map(taskList => taskList.date);
      // checks if the formatted task created date is not in the filtered dates
      // so that we can add that date
      if (!tasksListDates.includes(formattedTaskCreatedDate)) {
        tasksList = [...tasksList, {
          date: formattedTaskCreatedDate,
          tasks: [],
        }];
      }
    }
    return tasksList;
  }

  const sortTasks = (tasksArray, order = 'asc') => {
    const descSort = (task1, task2) => new Date(task2.createdAt).getTime() - new Date(task1.createdAt).getTime();
    const ascSort = (task1, task2) => new Date(task1.createdAt).getTime() - new Date(task2.createdAt).getTime();
    return order.toLowerCase() === 'desc'
      ? tasksArray?.sort(descSort)
      : tasksArray?.sort(ascSort);
  }

  const formatDate = (date: Date) : string => {
    const monthIndex = new Date(date).getMonth();
    const dateNumber = new Date(date).getDate();
    const year = new Date(date).getFullYear();
    return `${MONTH_NAMES[monthIndex]} ${dateNumber}, ${year}`;
  }

  const getDateToday = () : string => {
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
    const currentYear = new Date().getFullYear();
    return `${MONTH_NAMES[currentMonth]} ${currentDate}, ${currentYear}`;
  }

  return {
    // states
    tasksList,
    // functions
    getDateToday,
  }
}

export default useDefaultTasksList;