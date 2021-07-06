import React, { Component } from 'react';

export class EmployeeData extends Component {
    static displayName = EmployeeData.name;

  constructor(props) {
    super(props);
    this.state = { employees: [], loading: true };
  }

  componentDidMount() {
    this.populateEmployeeData();
  }

  static renderEmpTable(employees) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Emp No</th>
            <th>Emp Name (C)</th>
            <th>Salary234</th>
            <th>Dept No</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp =>
            <tr key={emp.empNo}>
              <td>{emp.empNo}</td>
              <td>{emp.empName}</td>
              <td>{emp.sal}</td>
              <td>{emp.deptNo}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : EmployeeData.renderEmpTable(this.state.employees);

    return (
      <div>
        <h1 id="tabelLabel" >Employee Data 224</h1>
        <p>This component demonstrates fetching Emp data from the server.</p>
        {contents}
      </div>
    );
  }

    async populateEmployeeData() {
      //API Call
        const response = await fetch('Employees');
        //Response Json
        const data = await response.json();
        //employees 
      this.setState({ employees: data, loading: false });
  }
}
