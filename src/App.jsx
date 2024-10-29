// src/App.jsx
import './App.css';
// Later on, we'll import button components here

const App = () => {
  return (
    <div className="App">
      {
        // Add all example components:
        <Button1 buttonText="Example 1" />
        <Button2 buttonText="Example 2" />
        <Button3 buttonText="Example 3" />
        <Button4 buttonText="Example 4" />
        <Button5 buttonText="Example 5" />
        <Button6 buttonText="Example 6" />
      }
    </div>
  );
};

export default App;

