function App() {
  const ratingOptions = [1, 2, 3, 4, 5]
  return (
    <div className="layout">
      <div className="step-1">
        <h3>Please rate your experience</h3>
        <div className="rating">
          {ratingOptions.map((r, i) => (
            <button>{r}</button>
          ))}
        </div>
      </div>
      {/* <div className="step-2">
        <h3>Thank you for your feedback!</h3>
      </div> */}
    </div>
  )
}

export default App
