import React from 'react'
import { Link } from 'react-router-dom'
import CompanyButton from './CompanyButton'
import { COMPANY__DATA as company_data} from '../Utils/Constants'

const Body = () => {
    return (
        <div className='flex flex-wrap'>
            {/* <Link to = "/name"> <CompanyButton name = "Upstox"/> </Link> */}
            {
                company_data.map((company) => (
                    <CompanyButton company_name={company}>
                        <Link to={company} >{company}</Link>
                    </CompanyButton>
                ))
            }

        </div>
    )
}

export default Body
