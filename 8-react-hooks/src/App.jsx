import UseCallback from "./components/UseCallback"
import UseContext from "./components/UseContext"
import UseEffect from "./components/UseEffect"
import UseMemo from "./components/UseMemo"
import UserReducer from "./components/UseReducer"
import UseRef from "./components/UseRef"
import UseState from "./components/UseState"



function App() {
  return (
    <div className="container">
      <div className="display-1">React hooks</div>
      <hr />
      {/* <UseState /> */}
      {/* <UserReducer /> */}
      {/* <UseEffect /> */}
      {/* <UseContext /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      <UseCallback />
    </div>
  )
}

export default App