import './App.css'
import { useState } from 'react'

const Admin = ({employees, submitCreate, submitRemove }) => {
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [position, setPosition] = useState();

    return (
        <>
        <div className='create_form_box'>
        <h2>Create User Here</h2>
            <input className='input_create_form' type="text" name="name" id="name" placeholder='Name' onChange={(ev) => setName(ev.target.value)} />
            <input className='input_create_form' type="text" name="lastname" id="lastname" placeholder='Lastname' onChange={(ev) => setLastname(ev.target.value)}/>
            <input className='input_create_form' type="text" name="position" id="position" placeholder='Position' onChange={(ev) => setPosition(ev.target.value)}/>
            <button className='button_create' onClick={() => submitCreate(name, lastname, position)}>save</button>
        </div>

        <div className='table_box'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.lastname}</td>
                        <td>{employee.position}</td>
                        <td><button onClick={() => submitRemove(employee.id)}>Remove</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>

        </>
    )
}
export default Admin