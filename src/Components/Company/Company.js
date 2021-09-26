import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';

const Company = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch('./employees.JSON')
            .then(res => res.json())
            .then(data => setEmployees(data));
    }, [])
    return (
        <div className="col-lg-12 d-flex">
            <div className="col-lg-9 border-dark border-end bg-success">
                <h3>Total Employee: {employees.length}</h3>
                <div className="">
                    {
                        employees.map(employee => <Employee
                            key={employee.id}
                            employee={employee}></Employee>)
                    }
                </div>
            </div>
            <div className="col-lg-3 bg-secondary ps-2 text-white">
                <h4>Employee Selected: </h4>
                <h5>Total Income: $</h5>
            </div>
        </div >
    );
};
export default Company;