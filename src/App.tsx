import "./App.css"

function formatHour(hour:number): string {
  const suffix = hour < 12 ? "am" : "pm";
  const displayHour = hour % 12 == 0 ? 12 : hour % 12;
  return `${displayHour}${suffix}`;
}

function App() {
  const hours : number[] = [];
  for (let h = 8; h <= 22; h++){
    hours.push(h);
  }

  return (
    <div>
      <h1>Today</h1>
      {hours.map((hour) => (
        <div key={hour} className="hour-row">
          {formatHour(hour)}
        </div>
      ))}
    </div>
  );
}

export default App;