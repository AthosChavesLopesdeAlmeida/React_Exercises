export default function List ({items, removeItem, editItem}) {
  return (
    <div className="grocery_list">
      {items.map((item) => {
      const {id, title} = item
      return (
        <section className="grocery_item" key={id}>
            <input 
            type="checkbox" 
            name="check" id="check" 
            onClick={() => editItem(id)} 
            className="check_input"/>
          
            <p className="title">{title}</p>
    
          
          <button className="delete_btn" 
          onClick={() => removeItem(id)}
          type="button">
            Delete
          </button>
        </section>
      )
      })}
    </div>   
  )
}