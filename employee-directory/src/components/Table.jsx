import React, { useState } from "react";
import data from "../data.json";

function Table() {
	const [employees, setEmployees] = useState(data);

	function searchTable(event) {
		console.log(event.target.value);
		let searchValue = event.target.value;
		let filterData = employees.filter(
			(el) =>
				el.name.first.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
		);
		setEmployees(filterData);
	}
	function sortFirstname() {
		let sortTable = employees.sort(function (a, b) {
			var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
			var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}

			// names must be equal
			return 0;
		});
	}
	/*     items.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      }); */
	return (
		<div className="table">
			<input
				type="search"
				placeholder="Search By Firstname"
				onChange={(event) => searchTable(event)}
			/>
			<table>
				<thead>
					<tr>
						<th>Image</th>
						<th>
							Name <button onClick={sortFirstname()}>Sort by First Name</button>
						</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>
					{employees.map((employee) => {
						console.log(employee);
						return (
							<tr>
								<td>
									<img src={employee.picture.thumbnail} />
								</td>
								<td>
									{employee.name.first} {employee.name.last}
								</td>
								<td>{employee.email}</td>
								<td>{employee.phone}</td>
								<td>{employee.dob.age}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
export default Table;
