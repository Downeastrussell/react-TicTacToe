import EmployeeList from "../employees/employee"  // Import employee component
import React, { Component } from 'react';
import Location from "../location/location"

class Kennel extends Component {
    render() {
        return (
            <div>
                <Location />
                <EmployeeList/>
            </div>
        );
    }
}

export default Kennel;