import React from 'react'

const ErrorBound = (emp_name) => {
    if(emp_name.Employee==='arun'){
        throw new Error ('wrong machi')
    }
  return (
    <div>
        TYSS employee name:{emp_name.Employee}
    </div>
  )
}

export default ErrorBound