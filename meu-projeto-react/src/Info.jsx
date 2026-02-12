export default function InfoPage({info}) {
  const { id, company, dates, title, duties} = info

  return (
    <article key={id}>
      <header className="job_info_header">
        <h1>{title}</h1>
        <span className="company">{company}</span>
        <span className="dates">{dates}</span>
      </header>
      <main className="job_info_main">
        {duties.map((duty, index) => {
          return (
            <div className="job_duty" key={index}>
              <p>{duty}</p>
            </div>
          )
        })}
      </main>
    </article>
  )
}