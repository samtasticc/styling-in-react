// src/App.jsx
import './App.css';
// Later on, we'll import button components here
import Button1 from './components/example-1-normal-css/Button';
import Button2 from './components/example-2-inline-css/Button';
import Button3 from './components/example-3-css-in-js/Button';
import Button4 from './components/example-4-styled-components/Button';
const App = () => {
  return (
    <div className="App">
        <Button1 buttonText="Example 1" />
        <Button2 buttonText="Example 2" />
        <Button3 buttonText="Example 3" />
        <Button4 buttonText="Example 4" />
        {/* // <Button5 buttonText="Example 5" />
        // <Button6 buttonText="Example 6" />  */}
    </div>
  );
};

export default App;

