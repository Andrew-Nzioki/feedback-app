import React from 'react';
import { useState } from 'react';
function AboutPage() {
  const [mew, setMew] = useState(10);
  const text = () => setMew(mew * 2);
  return (
    <>
      <p>{mew}</p>
      <button onClick={text}>Click me</button>
    </>
  );
}

export default AboutPage;
