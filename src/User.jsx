import './App.css'

const User = ({employees}) => {

    return (
        <div className='table_box'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.lastname}</td>
                        <td>{employee.position}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default User