import React from "react";

class RainbowBridge extends React.Component {
  constructor(props) {
    super(props);
    // 彩虹数组
    this.colorList = [
      { id: 1, color: "red" },
      { id: 2, color: "orange" },
      { id: 3, color: "yellow" },
      { id: 4, color: "green" },
      { id: 5, color: "blue" },
      { id: 6, color: "indigo" },
      { id: 7, color: "violet" },
    ];

    // 初始化状态
    this.state = {
      clickNum: 0,
      textColor: "",
    };
  }

  // 设置点击事件
  btnClick = () => {
    // 当点击时，修改 textColor 数据，7次一循环
    const newColor =
      this.colorList[this.state.clickNum % this.colorList.length].color;
    this.setState({
      textColor: newColor,
      clickNum: this.state.clickNum + 1,
    });
  };

  render() {
    const { clickNum, textColor } = this.state;

    return (
      <div>
        <h2 style={{ color: textColor }}>你已经点击了{clickNum}次</h2>
        <button onClick={this.btnClick}>点击我变成彩虹🌈</button>
        {clickNum >= 7 ? (
          <div>你触发隐藏成就：成为彩虹大师！</div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default RainbowBridge;
