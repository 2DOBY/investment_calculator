import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 0,
    expectedReturn: 20,
    duration: 10,
  });
  function getFromUserInput(title, number) {
    console.log(title, number);
    setUserInput((prevState) => {
      return {
        ...prevState,
        [title]: number,
      };
    });
  }
  return (
    <div>
      <Header></Header>
      <UserInput data={userInput} MoveToApp={getFromUserInput}></UserInput>
      <Result data={userInput}></Result>
    </div>
  );
}
export default App;
// userInput = {
//   intialInvestment: 10000,
//   annualInvestment: 1200,
//   expectedReturn: 6,
//   duration: 10,
// };
