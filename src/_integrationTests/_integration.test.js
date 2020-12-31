import { configure } from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import moxios from "moxios"
import { testStore } from "../../utils/testStore"
import { getPosts } from "../reducers/post/postReducer"

configure({
  adapter: new Adapter()
})
describe("getPosts action creator", () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  test("it should fetch posts", async() => {
    const expectedRes = [{
      title: "test title 1",
      body: "some text"
    },{
      title: "test title 2",
      body: "some text"
    },{
      title: "test title 3",
      body: "some text"
    }]
    const store = testStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: expectedRes
      })
    })
    await store.dispatch(getPosts()) 
    const newState = store.getState()
    return expect(newState.posts).toBe(expectedRes)
  })
})