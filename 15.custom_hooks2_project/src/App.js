import React, { useCallback, useEffect, useState } from 'react';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useFetchApi from './hooks/fetch-hooks';

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTask = useCallback((taskObj) => {
    const loadedTasks = [];
    for (const taskKey in taskObj) {
      loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
    }

    setTasks(loadedTasks);
  }, []);

  const { isLoading, error, sendRequest } = useFetchApi(transformTask);
  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };
  useEffect(() => {
    sendRequest({
      url: 'https://todolist-e23b4-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
    });
  }, [sendRequest]);

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
