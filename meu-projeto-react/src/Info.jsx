export default function Review({person}) {
  const { id, image, name, title, quote } = person

  return (
    <article key={id} className="review_container">
      <img src={image} alt={name} className="person_img"/>
      <h4 className="name">{name}</h4>
      <p className="title">{title}</p>
      <p className="quote">{quote}</p>
    </article>
  )
}