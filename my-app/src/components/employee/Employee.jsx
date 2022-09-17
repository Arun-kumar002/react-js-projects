import React from 'react'

const Employee = (props) => {
  return (
    <main id='emp_container'>
        <table  >
            <tr>
              <th>emp_id</th>
              <th>emp_name</th>
              <th>emp_salary</th>
              <th>emp_designation</th>
              <th>emp_gender</th>
              <th>emp_education</th>
              <th>emp_experience</th>
              <th>emp_skill</th>
              <th>emp_city</th>
              <th>emp_img</th>
            </tr>
            <tbody>
                {
              props.data.map(x=>{
             return(
                <tr>
                    <td>{x.emp_id}</td>
                    <td>{x.emp_name}</td>
                    <td>{x.emp_salary}</td>
                    <td>{x.emp_designation}</td>
                    <td>{x.emp_gender}</td>
                    <td>{x.emp_education}</td>
                    <td>
                        <p>previous exp:{x.emp_experience.previoue_exp}</p>
                        <p>previoue comp:{x.emp_experience.company.previous_comp}</p>
                        <p>new comp:{x.emp_experience.company.new_com}</p>
                        
                        </td>
                    <td>{
                        x.emp_skill.map(x=>{
                            return <p>{x}</p>
                        })
                        }
                     </td>
                    <td>{x.emp_city}</td>
                    <td><img src={x.emp_img} alt="" /></td>
                </tr>
             )

              })
                    
                }
            </tbody>
        </table>
    </main>
  )
}

export default Employee