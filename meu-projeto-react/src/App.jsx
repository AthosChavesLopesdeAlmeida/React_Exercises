import { useState } from 'react'
import jobs from './data'
import Button from './Buttons'
import InfoPage from './Info'
import './index.css'

function App() {
  const [currentJob, setCurrentJob] = useState(jobs[0])

  const handleJobChange = (jobId) => {
    let newJob = jobs.find(job => job.id === jobId)
    setCurrentJob(newJob)
  }

  return (
    <div>
      <Button jobs={jobs} action={handleJobChange}/>
      <InfoPage info={currentJob}/>
    </div>
  )
}

export default App