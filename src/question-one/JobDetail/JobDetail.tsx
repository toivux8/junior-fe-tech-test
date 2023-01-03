import React from "react";
import { Job } from "../../common/types";

import './JobDetail.css';

export const JobDetail: React.FC<{job: Job}> = ({job}) => {
    
    const dateTime: Intl.DateTimeFormatOptions = { month: "long", day: 'numeric', year: 'numeric', hour: '2-digit', minute: "2-digit" };

    return(
        <div className="job-info">
            <p><span className="info">Job's name: </span>{job.name}</p>
            <p><span className="info">Start date: </span>{new Date(job.start).toLocaleDateString("en-US", dateTime)}</p>
            <p><span className="info">End date: </span>{new Date(job.end).toLocaleDateString("en-US", dateTime)}</p>
            <p><span className="info">Contact ID: </span>{job.contactId}</p>
        </div>
    )
}
