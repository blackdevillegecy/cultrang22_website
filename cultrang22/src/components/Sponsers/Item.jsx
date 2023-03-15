import styled from "styled-components";
import './sponsers.css'

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
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', height: "300px", marginTop: props.mtop}}>
      <div style={{width: '100%'}}>
      <div style={{display: 'grid', justifyContent: 'center', alignContent: 'center'}}><img src={props.link} alt="" style={{height: props.height, backgroundColor: props.backcolor, padding: '6px', width: 'auto', marginBottom: '5vh'}}/></div>
      <div style={{color: "white", textAlign: 'center', fontSize: '19px', marginTop: props.mtop2}}>{props.text}</div>
      </div>
    </div>
  );
}