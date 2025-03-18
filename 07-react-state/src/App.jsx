
import CounterUseState from './state/useState/CounterUseState.jsx';
import Profile from './state/useState/Profile.jsx';
import TodoList from './state/useState/TodoList.jsx';
import UserProvider from './state/useContext/UserProvider';
import UserProfile from './state/useContext/UserProfile';
import UpdateUser from './state/useContext/UpdateUser';
import CounterZustand from './state/Zustand/CounterZustand';

const App = () => {
  return (
    <div>
      <CounterUseState />
      <Profile />
      <TodoList />

      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
      <CounterZustand />
    </div>
  )
}

export default App
