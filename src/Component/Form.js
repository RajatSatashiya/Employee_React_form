export default function Form() {
  const formHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={formHandler}>
        <label htmlFor="name">Name</label> <br />
        <input type="text" name="name" />
          <br />
        <label htmlFor="gender">Gender:</label>
        <select name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <label htmlFor="role">Choose a role:</label>
        <select name="role">
          <option value="frontend">Frontend Role</option>
          <option value="backend">Backend Role</option>
        </select>{" "}
        <br />
        <div>Marital Status</div>
        <input type="checkbox" name="married" value="married" />
        <label htmlFor="married">Married</label>
        <br />
        <input type="checkbox" name="single" value="single" />
        <label htmlFor="single">Single</label>
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
