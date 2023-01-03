import React, { useState } from "react"
import { IDataService } from '../common/types'

import { SectionGroup } from "../components/section/SectionGroup"
import { SectionPanel } from "../components/section/SectionPanel"
import { DataService } from "../service/DataService"
import { JobDetail } from "./JobDetail/JobDetail"

import "./QuestionOne.css"

export const QuestionOne: React.FC<{ service: IDataService }> = () => {
  const [isSearchValid, setIsSearchValid] = useState(false);
  const [jobs, setJobs] = useState<any[]>([]);

  //Hanlde search and result displayed
  const handleWordTyped = async (e: React.FormEvent<HTMLInputElement>) => {
    const wordTyped: string = e.currentTarget.value;

    //Check user input search 
    if(wordTyped.length >= 2) {
      setIsSearchValid(true);

      const jobListResult = await DataService.getJobsWithSearchTerm(wordTyped)
      setJobs(jobListResult);
    }
    else {
      setIsSearchValid(false);
      setJobs([]);
    }
  }

  return (
    <SectionGroup>
      <SectionPanel>
        <form>
          <div className="search-form">
            <label className="search-label" htmlFor="searchInput">Search</label>
            <input type="text" className="search-input" id="searchInput" onChange={handleWordTyped} placeholder='Search ...'/>
          </div>
          {!isSearchValid ? <p className="error">Please enter at least 3 characters.</p> : null}
        </form>

        <div className="job-list">
          <h3>Information of jobs: </h3>
          {jobs.length > 0 && jobs.map((job, i) => (<JobDetail job={job} key={i} />))}

          {(isSearchValid && jobs.length === 0) && <p className="error"> There are not any jobs with that name, please search again!</p>}
        </div>
      </SectionPanel>
    </SectionGroup>
  )
}
