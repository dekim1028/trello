import React, { ChangeEvent, useLayoutEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "@components/Button";
import * as STC from "./MainPage.style";

const MainPage = () => {
  const navigate = useNavigate();

  const color = [
    "rgb(0,121,191)",
    "rgb(210,144,52)",
    "rgb(81,152,57)",
    "rgb(176,70,50)",
    "rgb(137,96,158)",
  ];
  const [hasData, setHasData] = useState<boolean | null>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [data, setData] = useState<{ background: string; title: string }>({
    background: color[0],
    title: "",
  });

  const onSelectColor = (target: string) => {
    setData({ ...data, background: target });
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      title: e.target.value,
    });
  };

  const onCreate = () => {
    if (data.title !== "") {
      localStorage.setItem("board", JSON.stringify(data));
      navigate("/board");
    }
  };

  useLayoutEffect(() => {
    const board = localStorage.getItem("board");

    if (board) {
      setHasData(true);
    } else {
      setHasData(false);
    }
  }, []);

  if (hasData === true) {
    return <Navigate replace to="/board" />;
  } else if (hasData === false) {
    return (
      <STC.Container>
        <STC.Wrapper>
          <STC.Header>Create board</STC.Header>
          <STC.Content>
            <STC.InputWrapper>
              <p className="title">Background</p>
              <STC.ColorList>
                {color.map((item) => (
                  <STC.Color
                    key={`color_${item}`}
                    color={item}
                    selected={data.background === item}
                    onClick={() => onSelectColor(item)}
                  />
                ))}
              </STC.ColorList>
            </STC.InputWrapper>
            <STC.InputWrapper>
              <p className="title">Board Title</p>
              <STC.Input isFocus={isFocus}>
                <input
                  type="text"
                  value={data.title}
                  onChange={onChangeTitle}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                />
              </STC.Input>
            </STC.InputWrapper>
            <Button
              value="Create"
              type="primary"
              size="base"
              disabled={data.title === ""}
              onClick={onCreate}
            />
          </STC.Content>
        </STC.Wrapper>
      </STC.Container>
    );
  } else {
    return null;
  }
};

export default MainPage;
