import styled, { css } from "styled-components";

export const Container = styled.div<{
  type: "primary" | "secondary";
  size: "sm" | "base" | "lg";
  disabled?: boolean;
}>`
  width: 100%;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.gray};
  transition: 0.1s ease-in;
  cursor: default;

  ${({ disabled }) =>
    !disabled
      ? css`
          &:hover {
            background-color: ${({ theme }) => theme.color.gray2};
          }
          cursor: pointer;
        `
      : css`
          color: ${({ theme }) => theme.color.gray3};
        `};
`;
