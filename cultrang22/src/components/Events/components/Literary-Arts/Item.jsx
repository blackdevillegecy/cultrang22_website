import styled from "styled-components";
import { Link } from "react-router-dom";


// export default styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 200px;
//   width: 80%;
//   background-color: #00008B;
//   color: #fff;
//   margin: 0 15px;
//   font-size: 4em;
// `;

export default function Item(props) {
  return (
    <div>
      <div><img src={props.link} alt="" style={{height: '300px', marginBottom: '5vh'}}/></div>
      <div style={{color: "white", textAlign: 'center', fontSize: '18px', display: 'flex', gap: '10', justifyContent: 'space-between', marginBottom:'5vh'}}>
        <div><Link to={props.registration} style={{border: '1px solid white', padding: '1vh 1vw'}}>Registration</Link></div>
        <div><Link to={props.rulebook} style={{border: '1px solid white', padding: '1vh 1vw'}}>Rulebook</Link></div>
      </div>
    </div>
  );
}