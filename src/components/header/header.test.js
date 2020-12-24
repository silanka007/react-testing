import Header from "./index";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import { findByAttr } from "../../../utils/findByAttr";

configure({
  adapter: new Adapter()
})

const setUp = (props={}) => {
  return shallow(<Header {...props} />)
}

describe("Header component", () => {

  let component;
  beforeEach(() => {
    component = setUp()
  })

  it("should render without errors", () => {
    const header = findByAttr(component, "header")
    expect(header.length).toBe(1)
  })

  it("should render a logo", () => {
    const logo = findByAttr(component, "logo")
    expect(logo.length).toBe(1)
  })

})

