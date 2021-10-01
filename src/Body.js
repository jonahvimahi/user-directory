import React, { Component } from "react";
import data from "./data";
import Footer from './Footer'

export default class Body extends Component {
	constructor() {
		super();
		this.state = {
			index: 0,
		};
	}

	changePagePrevious = () => {
		let newIndex = this.state.index;
		if (newIndex === data.length - data.length) {
			newIndex = 24;
		} else {
			newIndex--;
		}
		this.setState({ index: newIndex });
	};

	changePageNext = () => {
		let newIndex = this.state.index;
		if (newIndex === data.length - 1) {
			newIndex = 0;
		} else {
			newIndex++;
		}
		this.setState({ index: newIndex });
	};

    deleteBtn = () => {
        data.splice(this.state.index, 1)
    }
	render() {
		const { index } = this.props;
		return (
			<>
				<div id="section">
					<div>
                        <h1 className='fraction'>{data[this.state.index].id}{"/"}{data.length}</h1>
						<h1>
							{data[this.state.index].name.first}{" "}
							{data[this.state.index].name.last}
						</h1>
						<h3>
							From: {data[this.state.index].city},{" "}
							{data[this.state.index].country}
						</h3>
						<h3>Job Title: {{ index }.title}</h3>
						<h3>Employer: {data[this.state.index].employer}</h3>
					</div>
					<div>
						<h3>Favorite Movies:</h3>
						<ol>
							<li>{data[this.state.index].favoriteMovies[0]}</li>
							<li>{data[this.state.index].favoriteMovies[1]}</li>
							<li>{data[this.state.index].favoriteMovies[2]}</li>
						</ol>
					</div>
				</div>
                <Footer
                    pageNextFn={this.changePageNext}
                    pagePreviousFn={this.changePagePrevious}
                    deleteBtnFn={this.deleteBtn}/>
                    
			
			</>
		);
	}
}
