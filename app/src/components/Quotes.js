import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../store/actions/index'


const Quotes = (props) => {

  useEffect(()=>{
    props.fetchData()
  }, [])
return (
  <div className="container">
    <h1>Inspiration</h1>
    <div className="quoteContainer">
      {props.isLoading ? <h3>Loading good vibes...</h3> : null}
      {props.error ? <p>{props.error}</p> : null}
      {props.quotes.map((quote, index) => {
        return<div className="mapContainer">
          <h2 key= {index}>"{quote.text}"</h2>
          <p>{quote.author}</p>
        </div>
      })}
      </div>
  </div>
)
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    quotes: state.quote,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchData })(Quotes)