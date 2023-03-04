import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { COMPANY__JOB__LISTING__API__LINK } from '../Utils/Constants';

const CompanyJobs = () => {

    const params = useParams();
    const { company_name } = params;

    const [companyData, setCompanyData] = useState([]);
    // we want this to be called once when the page loads. 
    useEffect(() => {

        // make the api call 
        getJobsList();

    }
        , []);

    async function getJobsList() {
        const data = await fetch(COMPANY__JOB__LISTING__API__LINK);
        const json = await data.json();
        setCompanyData(json.jobs);
    };


    return (
        <div>
            {company_name}
            {
                companyData.map((job_listing) => (

                    <div>
                        <span>{job_listing.title}</span>
                    </div>

                ))
            }
        </div>
    )
}

export default CompanyJobs
