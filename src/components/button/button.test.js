import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Button from "./index";
import { checkProps } from "../../../utils/checkProps";
import { findByAttr } from "../../../utils/findByAttr";

configure({
	adapter: new Adapter(),
});

describe("button component", () => {
	describe("checking props", () => {
		it("should render without errors", () => {
			const expectedProps = {
				buttonText: "example text",
				emitEvent: () => {},
			};
			const propsErr = checkProps(Button, expectedProps);
			expect(propsErr).toBeUndefined();
		});
  });
  
  describe("render", () => {
    let component;
    beforeEach((props={}) => {
      component = shallow(<Button {...props} />)
    })
    it("should render", () => {
      const button = findByAttr(component, "buttonComponent")
      console.log(button.debug())
      expect(button.length).toBe(1)
    })
  })
});
