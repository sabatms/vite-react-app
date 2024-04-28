function CourseCard(props) {
  return (
    <li>
    <h4>{props.data.name}</h4>
    <p>{props.data.description}</p>
  </li>
  )
}

export default CourseCard