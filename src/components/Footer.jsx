import React from 'react';
import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from 'react-icons/fa';

const icons = [
	{ icon: <FaDiscord /> },
	{ icon: <FaTwitter /> },
	{ icon: <FaGithub /> },
	{ icon: <FaTwitch /> },
];

const Footer = () => {
	return (
		<footer className="w-screen bg-violet-300 py-4 text-black">
			<div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
				<p className="text-center text-sm md:text-left">
					©Nova 2024. All rights reserved
				</p>
				<div className="flex justify-center gap-4 md:justify-start">
					{icons.map((icon,index) => (
						<a
							key={index}
							className=" text-black transition-colors duration-500 ease-in-out text-2xl hover:text-white"
						>
							{icon.icon}
						</a>
					))}
                </div>
                <a className='text-center text-sm hover:underline md:text-right'>Privacy Policy</a>
			</div>
		</footer>
	);
};

export default Footer;
