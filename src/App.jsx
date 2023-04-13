import * as React from 'react';

const title = 'React2';

const welcome = {
    greeting: 'Hey',
    title: 'React',
};

function getTitle(title) {
    return title;
}

function App() {
  return (
    <div>
      <h1>{welcome.greeting} {welcome.title}!</h1>
      <h2>Hello {getTitle('World')}!</h2>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
