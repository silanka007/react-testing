import Title from "./index";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { findByAttr } from "../../../utils/findByAttr";

configure({
	adapter: new Adapter(),
});

const setUp = (props = {}) => {
	return shallow(<Title {...props} />);
};

describe("Title component", () => {
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
  });
});
