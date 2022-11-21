import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React, { useEffect, useState } from 'react'
import Alert from './components/Alert';

function App() {

  useEffect(() => {
    document.body.style.backgroundColor = '#042743';
  }, [])

  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  // const toggleMode = () => {
  //   if (mode === 'light') {
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#042743';
  //     showAlert("Dark mode on", "success");
  //   }
  //   else {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode on", "success");
  //   }
  // }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode on", "success");
    }
    else if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode on", "success");
    }
  }

  return (
    <>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-2">
        <Form heading='Enter Text To Analyze Or Convert' mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
