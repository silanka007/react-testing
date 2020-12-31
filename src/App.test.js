import {configure, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { testStore } from "../utils/testStore";
import App from "./App";
import {findByAttr} from "../utils/findByAttr";

configure({
  adapter: new Adapter()
})
const setUp = (initialState) => {
  const store = testStore(initialState)
  const wrapper = shallow(<App store={store} />).childAt(0).dive();
  return wrapper
}

describe("App component", () => {
  let component;
  beforeEach(() => {
    const initialState = {
      posts: [{
      id: 1,
      title: "text title 1",
      body: "text body"
    }, {
      id: 2,
      title: "text title 1",
      body: "text body"
    }]}
    component = setUp(initialState);
  })
  it("should render without errors", () => {
    const appComponent = findByAttr(component, "appComponent")
    expect(appComponent.length).toBe(1)
  })
})