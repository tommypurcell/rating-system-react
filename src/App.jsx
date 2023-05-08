import { useState } from 'react'
import Rating from './components/Rating'
import Thankyou from './components/Thankyou'
function App() {
  const [click, setClick] = useState(false)

  const ratingOptions = [1, 2, 3, 4, 5]

  function clicked(e) {
    e.preventDefault()
    setClick(true)
  }
  return (
    <div className="layout">
      {click == false ? (
        <Rating ratingOptions={ratingOptions} clicked={clicked} />
      ) : (
        <Thankyou />
      )}
    </div>
  )
}

export default App
