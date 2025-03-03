import React from "react";
// import ThemeToggle from "./components/useState/ThemeToggle";
// import TextInput from "./components/useState/TextInput";
// import TodoList from "./components/TodoList";
// import FetchData from "./components/useEffect/FetchData";
// import Clock from "./components/Clock";
// import PageTitle from "./components/useEffect/PageTitle";
// import Weather from "./components/Weather";
// import Counter from "./components/useReducer/Counter";
// import Form from "./components/useReducer/Form";
// import ThemeProvider from "./components/ThemeProvider";
// import ThemeButton from "./components/ThemeButton";
// import UserPage from "./components/useContext/UserPage";
// import { LoginProvider } from "./components/UseContextTest/LoginContext";
// import LoginForm from "./components/LoginForm";
// import LogoutButton from "./components/LogoutButton";
// import UserStatus from "./components/UserStatus";
// import ExpensiveCalculationParent from "./components/useMemo/ExpensiveCalculationParent";
// import ListFilterParent from "./components/useMemo/ListFilterParent";
// import Parent from "./components/useCallback/Parent";
// import ExpensiveComponentParent from "./components/useCallback/ExpensiveComponentParent";
// import FocusInput from "./components/useRef/FocusInput";
// import PreviousValue from "./components/useRef/PreviousValue";
// import Parent1 from "./components/uselmperativeHandle/Parent1";
// import Parent2 from "./components/uselmperativeHandle/Parent2";
// import ComponentSize from "./components/useLayoutEffect/ComponentSize";
// import AnimateBox from "./components/useLayoutEffect/AnimateBox";
// import DebugValue from "./components/useDebugValue/DebugValue";
// import DebugApi from "./components/useDebugValue/DebugApi";
// import Data from "./components/CustomHook/Data";
import Search from "./components/CustomHook/Search";

const App = () => {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <div>
      {/* <ThemeToggle /> */}
      {/* <TextInput /> */}
      {/* <TodoList /> */}
      {/* <FetchData /> */}
      {/* <Clock /> */}
      {/* <PageTitle /> */}
      {/* <Weather /> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <ThemeProvider>
        <ThemeButton />
      </ThemeProvider> */}
      {/* <UserPage /> */}
      {/* <LoginProvider>
        <LoginForm />
        <LogoutButton />
        <UserStatus />
      </LoginProvider> */}
      {/* <ExpensiveCalculationParent /> */}
      {/* <ListFilterParent /> */}
      {/* <Parent /> */}
      {/* <ExpensiveComponentParent /> */}
      {/* <FocusInput /> */}
      {/* <PreviousValue /> */}
      {/* <Parent1 /> */}
      {/* <Parent2 /> */}
      {/* <ComponentSize /> */}
      {/* <AnimateBox /> */}
      {/* <DebugValue /> */}
      {/* <DebugApi /> */}
      {/* <Data /> */}
      <h1>Search Example</h1>
      <Search onSearch={handleSearch} />
    </div>
  );
};

export default App;
