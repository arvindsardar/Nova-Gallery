import React, { useState } from 'react';
import Projects from './data.json';
import './styles.css';

const Nav = () => {

	const tags1 = Projects.map(item => item.tag);
	const tags2 = tags1.flat();
	const tags3 = [...new Set(tags2)];
	console.clear();
	console.log(tags3);

	return (
		<React.Fragment>
			<div className="nav">
				{tags3.map(tag => (
					<span key={tag}>{tag}</span>
				))}
			</div>
		</React.Fragment>
	)}

export default Nav