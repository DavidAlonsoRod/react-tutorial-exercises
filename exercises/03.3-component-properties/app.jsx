import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = (props) => {
	// 1) Replace the hard-coded image, description, link, etc. With their property variable
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};
BootstrapCard.propTypes = {
	title: PropType.string,
	imageUrl: PropType.string,
	description: PropType.description,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
	// 2) Add here the new properties into the proptypes object
};

// 3) Use ReactDOM to add the component into then DOM element #myDiv

ReactDOM.render(
	<BootstrapCard
		title={"Bob Dydfdf"}
		imageUrl={"https://dpalbum.es/wp-content/uploads/2018/11/ainara.jpg"}
		description={"loremipcifdfjvjdfjsfjj"}
		buttonLabel={"Go to wikipedia"}
		buttonUrl={"http://dpalbum.es"}
	/>,
	document.querySelector("#myDiv")
);
