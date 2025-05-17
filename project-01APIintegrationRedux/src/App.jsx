import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import "./App.css";
import UserList from "./components/UserList";
import { fetchUsers } from "./store/useSlice";
import { store } from "./store/store";

function InitApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <UserList />;
}
function App() {
  return (
    <Provider store={store}>
      <InitApp />
    </Provider>
  );
}

export default App;
