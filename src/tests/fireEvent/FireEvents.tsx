import React, { useEffect, useState } from 'react';
import { fetchData } from './fetchData';

const FireEvents: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState<string>('');

  useEffect(() => {
    fetchData().then((result) => setData(result));
  }, []);

  return (
    <div>
      <button data-testid="button" onClick={() => setShow(true)}>Click me!</button>
      <p data-testid="paragraph" style={{ display: show ? 'block' : 'none' }}>{data}</p>
    </div>
  );
}

export default FireEvents;