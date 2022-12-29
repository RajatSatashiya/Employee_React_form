export default function Tableitem(props) {
  return (
    <>
      <tr>
        <td>{props.name}</td>
        <td>{props.age}</td>
        <td>{props.address}</td>
        <td>{props.department}</td>
        <td>{props.salary}</td>
        <td>{props.marital ? "yes" : "no"}</td>
        <td>
          <img src={props.photo} className="tablepic" />
        </td>
      </tr>
    </>
  );
}
