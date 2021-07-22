export default function FormInput({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.nameInput.value;
    onSubmit(inputValue);
  }
  return (
    <form onSubmit={handleSubmit} className="App-Form">
      <input type="text" id="nameInput" name="nameInput" />
      <button className="App-Form__Submit" type="submit">
        Submit
      </button>
    </form>
  );
}
