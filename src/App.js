import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

const initialTeam = [
{name: "John", email: "John@cool.com", role: "developer"},
{name: "Cindy", email: "Cindy@cool.com", role: "Baker"},
]

function App() {
  const [team, setTeam] = useState(initialTeam);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    role: '',
  })

  const onInputChange = event => {

    const inputThatChanged = event.target.name

    const newValueForInput = event.target.value
    setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput,
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const newMember  = {
        name: formValues.fname,
        email: formValues.email,
        role: formValues.role,
      }
      setTeam([...team, newMember])
  }

  return (
    <div className="App">
      <header className="App-header">
      <Form 
      onInputChange={onInputChange}
      formValues={formValues}
      onSubmit={onSubmit}
      />
      <h2>LIST OF TEAM</h2>
      {
      team.map(tm => <div key={tm.name}>{tm.name}, {tm.email}, {tm.role}</div>)
      }
      </header>
    </div>
  );
}

export default App;
