import React from 'react';

const Employee = (props) => {
    const { name, image, email, age, designation, salary } = props.employee;
    return (
        <div className="card shadow-lg m-4 rounded-3" style={{ width: "18rem" }}>
            <img className="card-img-top rounded-circle m-auto mt-3" style={{ width: "200px", height: "200px" }} src={image} alt="" />
            <div className="card-body text-center">
                <h4 className="card-title fw-bold">{name}</h4>
                <p className="">Designation: {designation}</p>
                <p className="">Email: {email}</p>
                <h6 className=" ">Age: {age}</h6>
                <h5 className="">Salary: ${salary}</h5>
                <button onClick={() => props.handleAccountButton(props.employee)} className="btn btn-dark text-white-50 mt-2"><i className="fas fa-credit-card"></i> Add to Account</button>
            </div>
        </div>
    );
};
export default Employee;