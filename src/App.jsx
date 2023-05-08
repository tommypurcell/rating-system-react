import { useState } from 'react'
import Rating from './components/Rating'
import Thankyou from './components/Thankyou'
import axios from 'axios'

function App() {
  const [click, setClick] = useState(false)

  const ratingOptions = [1, 2, 3, 4, 5]

  const clicked = async (e, value) => {
    e.preventDefault()
    setClick(true)

    let ratingValue = await axios.post('http://localhost:4000/ratings', {
      ratingNumber: value,
    })

    console.log('rating value', value)
    console.log('what we receive from api', ratingValue)
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
