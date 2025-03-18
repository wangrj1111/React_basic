// 使用对象作为状态
import { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({ name: 'John', age: 25 });

  const updateAge = () => {
    setUser((prevState) => ({ ...prevState, age: prevState.age + 1 }));
  };

  return (
    <div>
      <p>姓名: {user.name}</p>
      <p>年龄: {user.age}</p>
      <button onClick={updateAge}>增加年龄</button>
    </div>
  );
};

export default Profile;