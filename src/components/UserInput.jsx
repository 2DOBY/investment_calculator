export default function UserInput({ data, MoveToApp }) {
  function handleChange(title, number) {
    console.log(title, number);
    MoveToApp(title, number);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Первоначальные инвестиции</label>
          <input
            onChange={(event) => {
              handleChange("initialInvestment", +event.target.value);
            }}
            defaultValue={data.initialInvestment}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Годовые инвестиции</label>
          <input
            onChange={(event) => {
              handleChange("annualInvestment", +event.target.value);
            }}
            defaultValue={data.annualInvestment}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Процентная ставка</label>
          <input
            onChange={(event) => {
              handleChange("expectedReturn", +event.target.value);
            }}
            defaultValue={data.expectedReturn}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Период</label>
          <input
            onChange={(event) => {
              handleChange("duration", +event.target.value);
            }}
            defaultValue={data.duration}
          ></input>
        </p>
      </div>
    </section>
  );
}
