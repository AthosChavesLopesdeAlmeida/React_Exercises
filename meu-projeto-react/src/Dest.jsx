export default function Dest({ id, name, info, image, price, deleteItem }) {
  return (
    <div className="destination_container">
      <section className="image_container">
        <img src={image} alt={name} />
        <span className="price">${price}</span>
      </section>

      <section className="content_container">
        <h3>{name}</h3>
        <p>{info}</p>
        <button onClick={() => deleteItem(id)} className="btn">Not interested</button>
      </section>
    </div>
  )
}