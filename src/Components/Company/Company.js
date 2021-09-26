import React, { useEffect, useState } from 'react';
import Account from '../Account/Account';
import Employee from '../Employee/Employee';

const Company = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch('./employees.JSON')
            .then(res => res.json())
            .then(data => setEmployees(data));
    }, [])

    const[salary, setSalary] = useState([]);
    const handleAccountButton = employee => {
        const newSalary = [...salary, employee];
        setSalary(newSalary);
    }
    return (
        <div className="col-lg-12 d-flex">
            <div className="col-lg-9 border-dark border-end bg-secondary">
                <div className="col-lg-3">
                    {
                        employees.map(employee => <Employee
                            key={employee.id}
                            employee={employee}
                            handleAccountButton={handleAccountButton}></Employee>)
                    }
                </div>
            </div>
            <div className="col-lg-3 ps-2 text-dark account" style={{backgroundColor: "darkgray"}}>
                <Account salary={salary}></Account>
            </div>
        </div >
    );
};
export default Company;