function Banner({title ,description,numOfstudent}) {
  return (
    <div>
     <hr />
     <h1>title</h1>
     <h1>{title}</h1>
     <h2>{description}</h2>
     <h3>{numOfstudent}</h3>
     <hr />
    </div>
  )
}

export default Banner