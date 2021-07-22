import FormInput from "../components/FormInput";
import { useState } from "react";

export default function AgeMain() {
  const [inputAge, setInputAge] = useState(null);

  function handleSubmitAge(inputValue) {
    const ageUrl = `https://api.agify.io/?name=${inputValue}`;

    fetch(ageUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInputAge(data.age);
        if (data.age === null) {
          alert("Age not found. Try another name.");
        }
      });
  }

  console.log(inputAge);
  return (
    <>
      <FormInput onSubmit={handleSubmitAge} />
      <h2>Your age is: {inputAge} </h2>
    </>
  );
}
