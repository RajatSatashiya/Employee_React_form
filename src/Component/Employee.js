import { useRef, useState, useEffect } from "react";
import Table from "./Table";

export default function Employee() {
  const [url, setUrl] = useState(null);
  const previewRef = useRef();
  const [showtable, setShowtable] = useState(false);
  const [formdata, setFormdata] = useState([]);

  // refs for form elements
  const nameInputRef = useRef(null);
  const ageInputRef = useRef(null);
  const addressInputRef = useRef(null);
  const departmentInputRef = useRef(null);
  const salaryInputRef = useRef(null);
  const photoInputRef = useRef(null);
  const marriedInputRef = useRef(null);
  const singleInputRef = useRef(null);

  const formHandle = (e) => {
    e.preventDefault();

    const image = previewRef.current.files[0];
    const theurl = URL.createObjectURL(image);
    setUrl(theurl);

    const data = {
      name: nameInputRef.current.value,
      age: ageInputRef.current.value,
      address: addressInputRef.current.value,
      department: departmentInputRef.current.value,
      salary: Number(salaryInputRef.current.value),
      marital: marriedInputRef.current.checked,
      photo: theurl
    };

    setFormdata([...formdata, data]);
    setShowtable(true);

    e.target.reset();
  };

  const sortHandle = () => {
    //.sort will sort the array inplace, so we need to make a copy
    //to get sorted array without changing formdata
    // thus [...formdata] is used
    console.log(...formdata);
    var tempvalues = [...formdata].sort((a, b) => {
      return a.salary - b.salary;
    });
    setFormdata(tempvalues);
  };

  useEffect(() => {
    return () => {
      url && URL.revokeObjectURL(url);
    };
  }, []);

  return (
    <>
      <form onSubmit={formHandle}>
        {/* name */}
        <label htmlFor="name">Name</label> <br />
        <input type="text" name="name" ref={nameInputRef} /> <br />
        {/* age */}
        <label htmlFor="age">Age</label> <br />
        <input type="number" name="age" ref={ageInputRef} /> <br />
        {/* address */}
        <label htmlFor="address" />
        Address
        <br />
        <textarea
          name="address"
          rows="5"
          cols="20"
          ref={addressInputRef}
        />{" "}
        <br />
        {/* department */}
        <label htmlFor="department"> Department: </label> <br />
        <select name="department" ref={departmentInputRef}>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="hr">HR</option>
          <option value="operations">Operations</option>
        </select>
        <br />
        {/* salary */}
        <label htmlFor="salary">Salary</label> <br />
        <input type="number" name="salary" ref={salaryInputRef} /> <br />
        {/* marital status */}
        <input
          type="checkbox"
          name="married"
          value="married"
          ref={marriedInputRef}
        />
        <label htmlFor="married">Married</label>
        <br />
        <input
          type="checkbox"
          name="single"
          value="single"
          ref={singleInputRef}
        />
        <label htmlFor="single">Single</label>
        <br />
        {/* profile photo */}
        <label htmlFor="profilepic" ref={photoInputRef}>
          Profile Pic
        </label>
        <br />
        <input type="file" name="profilepic" ref={previewRef} /> <br />
        {/* submit */}
        <button type="submit">Submit</button>
      </form>

      {url && <img src={url} className="image" alt="upload preview" />}
      {showtable && <Table data={formdata} sortHandle={sortHandle} />}
    </>
  );
}
