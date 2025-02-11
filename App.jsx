import React, {useState} from 'react'
import { NameContextProvider as ContextProvider } from './Context/NameContext';
import NameForm from './Components/NameForm';
import NameDisplay from './Components/NameDisplay';

function App() {
  let [name, setName] = useState("");

  return (
    <ContextProvider value={{ name, setName }}>
      <NameForm />
      <NameDisplay />
    </ContextProvider>
  );
}
export default App
