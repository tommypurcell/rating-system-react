export default function Rating({ ratingOptions, clicked }) {
  return (
    <>
      <div className="step-1">
        <h3>Please rate your experience</h3>
        <div className="rating">
          {ratingOptions.map((r, i) => (
            <button onClick={(e) => clicked(e)}>{r}</button>
          ))}
        </div>
      </div>
    </>
  )
}
