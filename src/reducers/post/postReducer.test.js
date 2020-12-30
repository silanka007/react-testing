import postReducer, { types } from "./postReducer";

describe("test for post reducer", () => {
	it("should return an empty array if no type is passed", () => {
		const newState = postReducer(undefined, {});
		expect(newState).toEqual([]);
	});
	it("should return a new state if an action type is passed", () => {
		const posts = [
			{ id: 1, title: "hello1" },
			{ id: 2, title: "hello2" },
			{ id: 3, title: "hello3" },
		];
		const newState = postReducer(undefined, { type: types.GET_POST, payload:posts});
		expect(newState).toEqual(posts);
	});
});
