import styled from "styled-components";

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
      <div style={{color: "white", textAlign: 'center', fontSize: '21px'}}>{props.text}</div>
    </div>
  );
}