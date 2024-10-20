// 실습
// name과 message를 넣어서 랜더링하기
// name : 이름, message : 환영합니다.
// 5분

const Jsx03 = () => {
  const name = "다소산";
  const message = "환영합니다 😋";

  return (
    <>
      저의 이름은 {name} <br />
      <p style={{color : "red", fontSize : "24px"}}>{message}</p>
    </>
  )
}

export default Jsx03;