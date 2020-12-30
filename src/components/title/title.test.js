import Title from "./index";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { findByAttr } from "../../../utils/findByAttr";
import { checkProps } from "../../../utils/checkProps";

configure({
	adapter: new Adapter(),
});

const setUp = (props = {}) => {
	return shallow(<Title {...props} />);
};

describe("Title component", () => {

	describe("checking proptypes", () => {
		it("should not throw a warning for correct props", () => {
			const expectedProps = {
				heading: "test heading",
				desc: "test desc",
				tempArr: [{
					age: 26,
					name: "test name",
					stack: "test stack",
					isProficient: true
				}]
			}
			const expectedErr = checkProps(Title, expectedProps)
			expect(expectedErr).toBeUndefined()
		})
	})

	describe("with props", () => {
		let component;
		beforeEach(() => {
			component = setUp({ heading: "test heading", desc: "test desc" });
		});

		it("should render without error", () => {
			const titleComponent = findByAttr(component, "title");
			expect(titleComponent.length).toBe(1);
		});

		it("should render a h1 heading", () => {
			const heading = findByAttr(component, "heading");
			expect(heading.length).toBe(1);
		});

		it("should render a desc paragraph", () => {
			const desc = findByAttr(component, "desc");
			expect(desc.length).toBe(1);
		});
	});

	describe("without props", () => {

    let component;
    beforeEach(() => {
      component = setUp()
    })

    it("should not render", () => {
      const titleComponent = findByAttr(component, "title");
      expect(titleComponent.length).toBe(0)
    })

    it("should not render heading", () => {
      const heading = findByAttr(component, "heading")
      expect(heading.length).toBe(0)
    })

    it("should not render a desc paragraph", () => {
			const desc = findByAttr(component, "desc");
			expect(desc.length).toBe(0);
		});
  });
});
