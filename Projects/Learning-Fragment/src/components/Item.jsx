const Item = ({ Fooditem }) => {
  // You can Do also destructuring of the Properties
  // let { foodItem } = props;
  return (
    <>
      <li className="list-group-item ">{Fooditem}</li>
    </>
  );
};

export default Item;
