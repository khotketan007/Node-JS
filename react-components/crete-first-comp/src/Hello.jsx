function Hello(){
  let myName = "Ketan"
  let pinCode = 123324
  let fullName = () => {
    return "Ketan Khot"
  }
  return <p>
    My city Pin-Code : {pinCode} -- Hello World! I am {fullName()}
  </p>
}

export default Hello;