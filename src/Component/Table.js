import Tableitem from "./Tableitem";
import { useState, useRef } from "react";

export default function Table(props) {
  const deptFilter = useRef();

  const displayItems = props.data.map((item, index) => (
    <Tableitem key={index} {...item} deleteItem={props.deleteItem} />
  ));

  return (
    <>
      <div>
        Filter via Department:
        <select
          name="department"
          ref={deptFilter}
          onChange={() => props.filterHandle(deptFilter.current.value)}
        >
          <option value="none">No filter</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="hr">HR</option>
          <option value="operations">Operations</option>
        </select>
        <br />
      </div>

      <div>
        Sort by Salary:
        <button onClick={() => props.sortHandle()}>Toggle</button>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Married</th>
            <th>Profile Pic</th>
          </tr>

          {displayItems}
        </tbody>
      </table>
    </>
  );
}
