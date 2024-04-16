function TimeandDate() {
  let date = new Date();
  // let now = new Date();
  // let hours = now.getHours();
  // let minutes = now.getMinutes();
  // let seconds = now.getSeconds();

  return (
    <>
      <p>
        Current Data and Time : {date.toLocaleDateString()} - {date.toLocaleTimeString()}
      </p>
    </>
  );
}
export default TimeandDate;
