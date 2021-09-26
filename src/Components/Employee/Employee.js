import React from 'react';

const Employee = (props) => {
    const { name, image, email, age, designation, salary } = props.employee;
    return (
        <div className="col-lg-4 card bg-info m-2" style={{ width: "18rem" }}>
            <img className="card-img-top rounded-circle m-auto my-3" style={{ width: "200px", height: "200px"}} src={image} alt="" />
            <div className="card-body text-center">
                <h4 className="card-title m-2 fw-bold">{name}</h4>
                <p className="m-2">Designation: {designation}</p>
                <p className="m-2">Email: {email}</p>
                <h6 className=" m-2">Age: {age}</h6>
                <h5 className="m-2">Salary: ${salary}</h5>
                <a href="/home" className="btn btn-primary my-3">Add to Account</a>
            </div>
        </div>
    );
};
export default Employee;