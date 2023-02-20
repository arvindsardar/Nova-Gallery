import React, { useState } from 'react';
import Projects from '../GalleryData.json';
import './styles.css';

const Nav = () => {
	return (
		<>
			<div className="nav">
				{
					Projects && Projects.map((project) => {
						const tags = project.tag;
						const unique = [...new Set(tags.map((item) => item.tag))];
						return(
							<div key = {project.id}>
								{project.tag}
								<br />
								{unique}
							</div>
						);
					})
				}
			</div>
		</>
	)}

export default Nav