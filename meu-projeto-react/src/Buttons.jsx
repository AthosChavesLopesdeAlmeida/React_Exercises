export default function Button({jobs, action}) {
  return (
    <section className="buttons_section">
      {jobs.map((job) => {
        return (
          <button onClick={() => action(job.id)} key={job.id}>
            {job.company}
          </button>
        )
      })}
    </section>
  )
}