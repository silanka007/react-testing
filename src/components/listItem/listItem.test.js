import {shallow, configure} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { checkProps } from "../../../utils/checkProps";
import { findByAttr } from "../../../utils/findByAttr";
import ListItem from ".";

configure({
  adapter: new Adapter()
})

describe("listitem component", () => {
  describe("testing props", () => {
    it("should render without errors", () => {
      const expectedProps = {
        title: "test title",
        desc: "test desc"
      }
      const propsErr = checkProps(ListItem, expectedProps)
      expect(propsErr).toBeUndefined()
    })
  })
  describe("render", () => {
    let component;
    beforeEach(() => {
      const props = {
        title: "test title",
        desc: "test desc"
      }
      component = shallow(<ListItem {...props} />)
    })
    it("should render without errors", () => {
      const listItemComponent = findByAttr(component, "listItemComponent")
      expect(listItemComponent.length).toBe(1)
    })
    it("should render a title", () => {
      const listItemTitle = findByAttr(component, "listItemTitle");
      expect(listItemTitle.length).toBe(1)
    })
    it("should render a desc", () => {
      const listItemDesc = findByAttr(component, "listItemDesc")
      expect(listItemDesc.length).toBe(1)
    })
  })
})