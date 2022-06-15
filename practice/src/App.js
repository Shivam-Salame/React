import logo from './logo.svg';
import './App.css';
import Form from './Component/Form';
import ParentMountingLifecycle from './Component/parentMountingLifecycle';
import ParentComponent_PureFunction from './Component/parentComponent_PureFunction';
import RefsDemo from './Component/RefsDemo';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Form/>
      <ParentMountingLifecycle /> */}
      {/* <ParentComponent_PureFunction/> */}
      <RefsDemo/>
    </div>

  );
}

export default App;
