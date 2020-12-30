import "./title.style.scss"

const Title = ({heading, desc}) => {
  if(!heading) return null;
  return (
    <div data-test="title">
      <h1 data-test="heading">{heading}</h1>
      <p data-test="desc">{desc}</p>
    </div>
  )
}

export default Title;