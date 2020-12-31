import { connect } from "react-redux";
import Button from "./components/button";
import Header from "./components/header";
import ListItem from "./components/listItem";
import Title from "./components/title";
import { getPosts } from "./reducers/post/postReducer";

const tempArr = [
	{
		age: 28,
		name: "Paul Silanka",
		stack: "full-stack",
		isProficient: true,
	},
];

function App({ posts, getPosts }) {
	const loadPosts = () => {
		getPosts && getPosts();
	};

	const configButton = {
		buttonText: posts.length > 0 ? "Post loaded" : "Load Posts",
		emitEvent: loadPosts,
	};

	return (
		<div className="App">
			<Header />
			<section style={{ padding: "2rem" }}>
				<Title
					heading="Posts"
					desc="Click the button to retrieve posts..."
					tempArr={tempArr}
				/>
				<Button {...configButton} />
				<div>
					{posts &&
						posts.length > 0 &&
						posts.map((post, index) => {
							const configPost = {
								title: post.title,
								desc: post.body,
							};
							return <ListItem key={post.id} {...configPost} />;
						})}
				</div>
			</section>
		</div>
	);
}

const mapStateToProps = (state) => ({
	posts: state.posts,
});

export default connect(mapStateToProps, { getPosts })(App);
