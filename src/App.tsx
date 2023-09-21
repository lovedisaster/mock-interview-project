import { Suspense } from 'react';
import './App.css';
import { Posts } from './posts/Posts';

function App() {
  return (
    <div className="app">
      <h1>Articles</h1>
        <Suspense fallback={<>Loading...</>}>
          <Posts/>
        </Suspense>
    </div>
  );
}

export default App;
