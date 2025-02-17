import React from "react";
import styles from "./Diy.module.css";

class Diy extends React.Component {
  constructor(props) {
    super(props);
    // 初始化状态
    this.state = {
      name: "",
      age: 57,
      fruits: ["苹果", "香蕉", "葡萄"],
      isLoggedIn: false,
    };
  }

  // 编辑登录点击事件
  handleClick = () => {
    this.setState(() => ({
      isLoggedIn: true,
      name: "张三",
    }));
  };

  //增加年龄
  handleAddAge = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };

  //编辑退出点击事件
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      name: "",
    });
  };

  handleDelete = (index) => {
    // 删除数组中的元素
    const updatedFruits = [...this.state.fruits];
    updatedFruits.splice(index, 1);
    this.setState({ fruits: updatedFruits });
  };

  render() {
    const { name, age, isLoggedIn } = this.state;
    return (
      <div className={styles.container}>
        {/* 条件判断 */}
        {isLoggedIn ? (
          <div>
            <p className={styles.welcome}>欢迎回来！{name}</p>
            <button className={styles.button} onClick={this.handleLogout}>
              退出登录
            </button>
            <p>今年你{age}岁了</p>
            <button className={styles.button} onClick={this.handleAddAge}>
              过年了
            </button>
            {/* 60岁的时候提示过六十大寿 */}
            {age === 60 && <p>过六十大寿</p>}
          </div>
        ) : (
          <button className={styles.button} onClick={this.handleClick}>
            点击登录
          </button>
        )}
        {/* 当登录时，显示列表 */}
        {isLoggedIn && (
          <ul className={styles.fruitList}>
            {this.state.fruits.map((fruit, index) => (
              <li key={index} className={styles.fruitItem}>
                {fruit}
                <button
                  className={styles.button}
                  onClick={() => this.handleDelete(index)}
                >
                  删除
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Diy;
