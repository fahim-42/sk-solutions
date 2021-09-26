import React from 'react';

const Account = (props) => {
    // console.log(props);
    const {salary} = props;
    let selectedName;
    
    let total = 0;
    for(const money of salary) {
        total = total + money.salary;
    }
    return (
        <div>
            <h3 className="my-3 text-center fst-italic fw-bold">Accounts Info</h3>
            <h6 className="my-3 text-center">Employee Selected: {salary.length}</h6>
            <h4 className="my-3 text-center">Total Income: ${total.toFixed(2)}</h4>
            <h6 className="my-3">All Selected names: {selectedName}</h6>
            {
                props.salary.map(people => selectedName = people.name)
            }
        </div>
    );
};

export default Account;