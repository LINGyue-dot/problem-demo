import { ReactComponent as OneSvg } from "./assets/laneBuild-road.svg";
import { ReactComponent as SecondSvg } from "./assets/laneBuild-intersection.svg";
import { ReactComponent as ThirdSvg } from "./assets/laneBuild-turnaround.svg";
import { ReactComponent as TempSvg } from "./assets/singleLineSplit.svg";
import { Dropdown, Menu } from "antd";
import React from "react";
import { useState } from "react";
import { useMemo } from "react";

export interface DemoProps {}
const arr = [
  {
    value: 1,
    text: "one",
    icon: <OneSvg />,
  },
  {
    value: 2,
    text: "two",
    icon: <SecondSvg />,
  },
  {
    value: 3,
    text: "three",
    icon: <ThirdSvg />,
  },
];
const Demo: React.FC<DemoProps> = ({}) => {
  const [value, setValue] = useState(1);

  const currentItem = useMemo(
    () => arr.find((i) => i.value === value),
    [value]
  );

  const menu = (
    <Menu>
      {arr.map((item, index) => {
        return (
          <Menu.Item key={index} onClick={() => setValue(item.value)}>
            {React.cloneElement(item.icon, { className: "icon" })}
            <span className="icon-text">{item.text}</span>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <div
      style={{ margin: 50, width: 50, height: 50, border: "solid 2px #eee" }}
    >
      <Dropdown
        trigger={["contextMenu"]}
        overlay={menu}
        getPopupContainer={(triggerNode) => triggerNode}
        // @ts-ignore
        alignPoint={false}
      >
        <div className="icon"> {currentItem?.icon}</div>
      </Dropdown>
    </div>
  );
};

export default Demo;
