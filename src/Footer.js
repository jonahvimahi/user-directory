import React, { Component } from "react";

export default class Footer extends Component {
	render() {
		const { pageNextFn, pagePreviousFn, deleteBtnFn } = this.props;
		let lArrow = "\u003C";
		let rArrow = "\u003E";
		return (
			<div id="bottom-row">
				<button onClick={pagePreviousFn} id="left-arrow">
					{lArrow}Previous
				</button>
				<div id="buttons">
					<button>Edit</button>
					<button onClick={deleteBtnFn}>Delete</button>
					<button>New</button>
				</div>
				<button onClick={pageNextFn} id="right-arrow">
					Next{rArrow}
				</button>
			</div>
		);
	}
}
