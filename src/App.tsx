import React, { Suspense } from 'react';
import './App.css';
import TodoList from './TodoList/TodoList';
import ErrorBoundary from './utils/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<>Loading ...</>}>
          <TodoList/>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
