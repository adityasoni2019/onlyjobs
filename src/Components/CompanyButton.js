import React from 'react'

const CompanyButton = (props) => {
  return (
    <div className='border border-gray-900 w-fit p-4 m-2 rounded-full'>
        {props.children}
    </div>
  )
}

export default CompanyButton
