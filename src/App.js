import "./App.css";
// import Icon from "./components/Icon";
// import Toast from "./components/ToastNotification";
// import Modal from "./components/Modal";
// import Tooltip from "./components/Tooltip";
// import AppCount from "./components/CountUp";
// import IdleTimerContainer from "./components/IdleTimerContainer";
// import Credit from "./components/CreditCards";
// import Date from "./components/DatePicker";
// import Video from "./components/VideoPlayer";
// import LineChart from "./components/LineChart";
// import BarChart from "./components/BarChart";
// import Doughnut from "./components/DoughnutChart";
// import Spinners from "./components/Spinners";
// import Message from "./components-two/Message";
// import Welcome from "./components-two/Welcome";
// import Counter from "./components-two/Counter";
// import Destructure from "./components-two/Destructure";
// import ClickHandler from "./components-two/ClickHandler";
// import EventBind from "./components-two/EventBind";
// import ParentComponent from "./components-two/ParentComponent";
// import ConditionalRendering from "./components-two/ConditionalRendering";
// import NameList from "./components-two/NameList";
// import StyleSheet from "./components-two/StyleSheet";
// import Form from "./components-two/Form";
// import FormControl from "./components-two/FormControl";
// import LifeCycleA from "./components-two/LifeCycleA";
// import RefsDemo from "./components-two/RefsDemo";
// import FocusInput from "./components-two/FocusInput";
// import FRParentInput from "./components-two/FRParentInput";
// import Hero from "./components-two/Hero";
// import ErrorBoundary from "./components-two/ErrorBoundary";
// import ClickedCounter from "./components/ClickedCounter";
// import HoverCounter from "./components-two/HoverCounter";
// import HoverCounterTwo from "./components-two/HoverCounterTwo";
// import ClickedCounterTwo from "./components-two/ClickedCounterTwo";
// import User from "./components-two/User";
// import CounterTwo from "./components-two/CounterTwo";
// import { UserProvider } from "./components-two/UserContext";
// import ComponentC from "./components-two/ComponentC";
import PostList from "./components-two/PostList";
import PostForm from "./components-two/PostForm";
import pic from "../src/image/mypic.jpg";
import Counter from "./Hooks/Counter";
import CounterTwo from "./Hooks/CounterTwo";
import UseStateObject from "./Hooks/UseStateObject";
import UseStaeArray from "./Hooks/UseStaeArray";
import UseEffectCounter from "./Hooks/UseEffectCounter";
import UseEffectsMouse from "./Hooks/UseEffectsMouse";
import HookInterval from "./Hooks/HookInterval";
import DataFetching from "./Hooks/DataFetching";
import ReducerHook from "./Hooks/ReducerHook";
import DataFetchingLoading from "./Hooks/DataFetchingLoading";
import DataFetchReducer from "./Hooks/DataFetchReducer";
import HookMemo from "./Hooks/HookMemo";
import FocusInput from "./Hooks/FocusInput";
import HookTimer from "./Hooks/HookTimer";
import HookCounter from "./Hooks/HookCounter";
import CustomeHookForm from "./Hooks/CustomeHookForm";
import CstmHookCmp from "./Hooks/CstmHookCmp";

function App() {
  return (
    <div>
      <div className="App">
        {/* <UseEffectsMouse /> */}
        {/* <UseEffectCounter /> */}
        {/* <UseStaeArray /> */}
        {/* <UseStateObject /> */}
        {/* <CounterTwo /> */}
        {/* <Counter /> */}
        {/* <HookInterval /> */}
        {/* <DataFetching /> */}
        {/* <ReducerHook /> */}
        {/* <DataFetchingLoading /> */}
        {/* <DataFetchReducer /> */}
        {/* <HookMemo /> */}
        {/* <FocusInput /> */}
        {/* <HookTimer /> */}
        {/* <HookCounter /> */}
        {/* <CustomeHookForm /> */}
        <CstmHookCmp />
      </div>
      {/* <Icon /> */}
      {/* <Toast /> */}
      {/* <Modal /> */}
      {/* <Tooltip /> */}
      {/* <AppCount /> */}
      {/* <IdleTimerContainer /> */}
      {/* <Credit /> */}
      {/* <Date /> */}
      {/* <Video /> */}
      {/* { <div className="App">
        <div className="chart">
        <LineChart />
        </div>
      </div> }
      <div className="App">
        <div className="chart">
        <BarChart />
        </div>
      </div>
      <div className="App">
        <div className="chart">
        <Doughnut />
        </div>
      </div> */}
      {/* <Spinners /> */}

      {/*****************************************Two Components ****************************************************/}

      <div className="App">
        {/* <button className="btn btn-danger">Normal Button</button> */}
        {/* <img src={pic} alt="mypic" width="300px" /> from src Folder */}
        {/* <img src={process.env.PUBLIC_URL + "/image/mypic.jpg" } alt="mypic" width="400px" />  from public folder */}
        {/* <PostForm />  */}
        {/* <PostList /> */}
        {/* <UserProvider value="Shubham">
          <ComponentC />
        </UserProvider> */}
        {/* <CounterTwo>
          {(count, incrementCount) => (
            <ClickedCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterTwo>
        <CounterTwo>
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterTwo> */}
        {/* <ClickedCounterTwo />
        <HoverCounterTwo />
        <User render = {(isLoggedIn) => isLoggedIn ? "Shubham" : "Guest"} /> */}
        {/* <ClickedCounter  name="Shubham" />
        <HoverCounter /> */}
        {/* <ErrorBoundary>
        <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName="Joker" />
        </ErrorBoundary> */}
        {/* <FRParentInput /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <LifeCycleA /> */}
        {/* <FormControl /> */}
        {/* <Form /> */}
        {/* <StyleSheet primary={true} /> */}
        {/* <NameList /> */}
        {/* <ConditionalRendering /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <ClickHandler /> */}
        {/* <Destructure name="Shubham" heroname="Batman" /> */}
        {/* <Counter sample={101} /> */}
        {/* <Message version={18} /> */}
        {/* <Welcome name="Shubham" heroname="Batman">
        This is Children
      </Welcome>
      <Welcome name="Saurabh" heroname="Spiderman" />
      <Welcome name="Harsh" heroname="AntMan" /> */}
      </div>
    </div>
  );
}

export default App;
