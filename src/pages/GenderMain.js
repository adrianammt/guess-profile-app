import FormInput from "../components/FormInput";
import { useState } from "react";
export default function GenderMain() {
  const [gender, setGender] = useState(null);

  function handleSubmitGender(inputValue) {
    const url = `https://api.genderize.io/?name=${inputValue}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGender(data.gender);
        if (data.gender === null) {
          alert("Gender not found. Try another name.");
        }
      });
  }

  console.log(gender);

  return (
    <>
      <FormInput onSubmit={handleSubmitGender} />
      <h2>Your gender is: {gender}</h2>
    </>
  );
}
