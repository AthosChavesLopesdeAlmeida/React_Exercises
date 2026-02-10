import React from "react";

export default function Menu ({ items }) {
  return (
    <div>
      {items.map((menuItem) => {
        const {id, title, img, desc, price} = menuItem
        return (
          <article key={id} className="menu_item">
            <img src={img} alt={title} />
            
            <div className="item_info">
              
              <header className="item_title_and_price">
                <h3 className="item_title">{title}</h3>
                <span className="item_price">${price}</span>
              </header>
              
              <main className="desc_container">
                <p className="item_description">{desc}</p>
              </main>

            </div>
          </article>
        )
      })}
    </div>
  )
}