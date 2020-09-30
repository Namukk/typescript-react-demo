import React from "react";
import styled from "styled-components";

const Container = styled.span<{ isBlue: boolean }>`
  color: ${(props) => (props.isBlue ? "blue" : "black")};
`;
// props.theme.blueColor를 blue 대신에 입력해도 됨.

interface IProps {
  count: number;
}

const Number: React.FunctionComponent<IProps> = ({ count }) => (
  <Container isBlue={count > 10}>{count}</Container>
);

export default Number;