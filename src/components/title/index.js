import "./title.style.scss"
import PropTypes from "prop-types"

const Title = ({heading, desc, tempArr}) => {
  if(!heading) return null;
  return (
    <div data-test="title">
      <h1 data-test="heading">{heading}</h1>
      <p data-test="desc">{desc}</p>
    </div>
  )
}

Title.propTypes = {
  heading: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(PropTypes.shape({
    age: PropTypes.number,
    name: PropTypes.string,
    stack: PropTypes.string,
    isProficient: PropTypes.bool
  }))
}

export default Title;