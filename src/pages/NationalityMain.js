import FormInput from "../components/FormInput";
import { useState } from "react";
export default function NationalityMain() {
  const [nationality, setNationality] = useState(null);

  function handleSubmitNationality(inputValue) {
    const url = `https://api.nationalize.io/?name=${inputValue}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const { country } = data;
        console.log(data);
        if (country.length > 0) {
          setNationality(country[0].country_id);
        } else {
          setNationality("No country found.");
        }
      });
  }

  console.log(nationality);

  return (
    <>
      <FormInput onSubmit={handleSubmitNationality} />
      <h2>Your are from: {nationality}</h2>
    </>
  );
}
