import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

// Child Component
const Person = ({img, name, job, children}) => {
	//const {img, name, job} = props
	const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`

	return (
		<article className="person">
			<img src={url} target="noopener noreferrer" alt="Current Person" />
			<h4>{name}</h4>
			<h3>{job}</h3>
			{children}
		</article>
	)
}

// Parent Component
const PersonList = () => {
	return (
		<section className="person-list">
			<Person img="34" name="John Doe" job="Sr. Developer" />
			<Person img="22" name="Bob Doe" job="Designer">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
					laudantium.
				</p>
			</Person>
			<Person img="56" name="David Smith" job="Manager" />
		</section>
	)
}

ReactDOM.render(<PersonList />, document.getElementById("root"))
