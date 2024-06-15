// TypewriterComponent.jsx
import React, { Suspense, lazy } from 'react';

const Typewriter = lazy(() => import('react-simple-typewriter').then(module => ({ default: module.Typewriter })));

const TypewriterComponent= ({ words }) => {
  return (
    <h2 className="subheadline">
      <span className="typewriter">
        <Suspense fallback={<div>Loading...</div>}>
          <Typewriter
            words={words}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </Suspense>
      </span>
    </h2>
  );
}

export default TypewriterComponent;
