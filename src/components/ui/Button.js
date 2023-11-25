import styled from "styled-components";

const Button = styled.button`
padding: 0.8rem 2rem;
border: none;
margin: 0.4rem;
border-radius: 10px;
color: white;
font-weight: bold;
letter-spacing: 2px;
cursor: pointer;

background: ${function(props) {
if(props.variant === "primary"){
    return "linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%);"
}

else if(props.variant === "secondary"){
    return "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(26,26,64,1) 35%, rgba(25,35,73,1) 38%, rgba(24,43,82,1) 41%, rgba(23,49,88,1) 43%, rgba(4,55,229,1) 60%);"
}

else {
    return "#6c6c6c838"
}
}};

`



export default Button;