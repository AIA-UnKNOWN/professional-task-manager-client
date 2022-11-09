import { useState } from "react";

const useDefaultTasksList = () => {
  const MONTH_NAMES = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  const [taskCreatedDates, setTaskCreatedDates] = useState([]);

  const groupTasksByCreatedDate = task => {
    const taskCreatedAt = new Date(task.createdAt);
    const year = taskCreatedAt.getFullYear();
    const month = taskCreatedAt.getMonth();
    const date = taskCreatedAt.getDate();

    let createdDate = `${MONTH_NAMES[month]} ${date}, ${year}`;
    const taskCreatedDate = {
      date: createdDate,
      taskId: task.id,
    };

    const taskCreatedDatesWithoutTaskIds = taskCreatedDates.map(tcd => tcd.date);
    if (!taskCreatedDatesWithoutTaskIds.includes(taskCreatedDate.date)) {
      setTaskCreatedDates([taskCreatedDate, ...taskCreatedDates]);
    }

    return taskCreatedDate;
  }

  const getDateToday = () => {
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
    const currentYear = new Date().getFullYear();
    return `${MONTH_NAMES[currentMonth]} ${currentDate}, ${currentYear}`;
  }

  return {
    // variables
    taskCreatedDates,
    // functions
    groupTasksByCreatedDate,
    getDateToday,
  }
}

export default useDefaultTasksList;