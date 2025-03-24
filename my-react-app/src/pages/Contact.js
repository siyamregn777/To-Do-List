// import './App.css';
import { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState({
    name: '',
    age: 0
  });

  // Function to handle changes for both input fields and select dropdown
  const handleChange = (e) => {
    const { name, value } = e.target; // Get name and value from the input element

    // Update the corresponding field using the spread operator
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value // Dynamically update the specific field (name or age)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${inputs.name}, Age: ${inputs.age}`); // Display the collected data
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form onSubmit={handleSubmit}>
        {/* Input for Name */}
        <input
          type="text"
          placeholder="Enter your name"
          value={inputs.name}
          onChange={handleChange}
          name="name" // Identifies this field as 'name'
        /> <br/>

        {/* Input for Age */}
        <input
          type="number"
          placeholder="Enter your age"
          value={inputs.age}
          onChange={handleChange}
          name="age" // Identifies this field as 'age'
        /> <br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
