import { ReactElement } from 'react';
import { Navbar } from './components';

function App(): ReactElement {
  return (
    <>
      <Navbar />
      <main>
        <div className="app-container">
          <h1>Hello World!</h1>
        </div>
      </main>
    </>
  )
}

export default App;