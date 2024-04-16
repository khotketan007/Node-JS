import styles from "./Item.module.css";
const Item = ({ Fooditem }) => {
  // You can Do also destructuring of the Properties
  // let { foodItem } = props;
  return (
    <>
      <li className="list-group-item">
        <span className={`${styles["kk-bold"]}`}>{Fooditem}</span>
      </li>
    </>
  );
};

export default Item;
