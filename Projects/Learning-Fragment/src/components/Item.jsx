import styles from "./Item.module.css";
const Item = ({ Fooditem, changeColor, handleClick }) => {
  // You can Do also destructuring of the Properties
  // let { foodItem } = props;
  return (
    <>
      <li className={`list-group-item ${changeColor && "active"}`}>
        <span className={`${styles["kk-bold"]}`}>{Fooditem}</span>
        <button
          className={`${styles.button} btn btn-outline-warning`}
          onClick={handleClick}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
