export default function Button ({categories, filterCategories}) {
  return (
    <div className="btn_container">
      {categories.map((category, index) => {
        return (
        <button 
        type="button" 
        onClick={() => (filterCategories(category))} 
        key={index}>
          {category}
        </button>
        )
      })}
    </div>
  )
}