import UseCallback from "./components/UseCallback"
import UseContext from "./components/UseContext"
import UseEffect from "./components/UseEffect"
import UseId from "./components/UseId"
import UseLayoutEffect from "./components/UseLayoutEffect"
import UseMemo from "./components/UseMemo"
import UserReducer from "./components/UseReducer"
import UseRef from "./components/UseRef"
import UseState from "./components/UseState"
import UseTransition from "./components/UseTransition"



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
      {/* <UseCallback /> */}
      {/* <UseLayoutEffect /> */}
      {/* <UseTransition /> */}
      <UseId />
    </div>
  )
}

export default App