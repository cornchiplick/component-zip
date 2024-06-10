import styled from "styled-components";

const StyledButton = styled.button`
  margin: 0;
  padding: 0.5rem 1rem;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  display: inline-block;
  width: 200px;
  height: 30px;
  background-color: red;

  border: none;
  border-radius: 4px;

  cursor: pointer;
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;