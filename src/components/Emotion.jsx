/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    margin: 8px;
    padding: 8px;
  `;
  return (
    <div css={containerStyle}>
      <p>- Emotin-</p>
      <SButton>Fight</SButton>
    </div>
  );
};

const SButton = styled.button`
  padding: 8px;
`;
