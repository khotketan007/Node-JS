function Random(){
  let randomNumber = Math.random() * 100

  return <h2 style={{'backgroundColor':'#1abc22', 'textAlign':'center'}}>
    Random Number : {Math.round(randomNumber)}
  </h2>
}

export default Random;