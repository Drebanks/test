import classes from "./trans.module.css";

const Trans = ({ tran, date, narration, tranRef, type, amount }) => {
  return (
    <tr className={classes.tran}>
      <td>{tran}</td>
      <td>{date}</td>
      <td>{narration}</td>
      <td>{tranRef}</td>
      <td>{type}</td>
      <td>{amount}</td>
    </tr>

  );
};

export default Trans;
