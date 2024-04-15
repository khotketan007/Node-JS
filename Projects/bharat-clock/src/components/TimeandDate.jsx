function TimeandDate() {
  let date = new Date().toDateString();
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  return (
    <>
      <h4>
        Current Data and Time : {date} and Time : {hours} : {minutes} :{seconds}
      </h4>
    </>
  );
}
export default TimeandDate;
