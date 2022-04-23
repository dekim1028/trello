import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 400px;
  padding: 10px 2% 2%;
  box-shadow: 3px 3px 15px ${({ theme }) => theme.color.gray};
`;

export const Header = styled.div`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  color: ${({ theme }) => theme.color.secondary};
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.size.xl};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const Content = styled.div``;

export const InputWrapper = styled.div`
  width: 100%;
  margin: 5% 0;

  .title {
    margin-bottom: 5px;
    color: ${({ theme }) => theme.color.darkgray};
    font-size: ${({ theme }) => theme.fonts.size.base};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }
`;

export const Input = styled.div<{ isFocus: boolean }>`
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 5px;
  overflow: hidden;
  transition: 0.2s;

  ${({ isFocus }) =>
    isFocus &&
    css`
      border: 1px solid ${({ theme }) => theme.color.gray2};
    `};

  input {
    width: 100%;
    border: none;
    outline: none;
    padding: 10px;
    font-size: ${({ theme }) => theme.fonts.size.base};
  }
`;

export const ColorList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Color = styled.div<{ color: string; selected: boolean }>`
  width: 60px;
  height: 40px;
  position: relative;
  background-color: ${({ color }) => color};
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.color.darkgray};
        opacity: 0.3;
      }

      &::after {
        content: "✔";
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
    `};

  &:hover {
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.color.darkgray};
      opacity: 0.3;
    }
  }
`;
