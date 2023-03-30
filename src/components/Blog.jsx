import React, { useState, useEffect } from 'react';
import { blogData } from '../constants';
import { SectionWrapper } from '../hoc';

const ReadBtn = ({
	toggleFullContent,
	showFullContent,
}) => {
	const isToggleFullContent = !!toggleFullContent
		? () => toggleFullContent()
		: null;
	const isShowFullContent = !!showFullContent
		? showFullContent
		: '';

	return (
		<button
			className='mt-4 pt-[10px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded read-button'
			onClick={isToggleFullContent}
		>
			{isShowFullContent ? 'Read Less...' : 'Read More...'}
		</button>
	);
};

function Blog() {
	const [selectedPost, setSelectedPost] = useState(null);
	const [showFullContent, setShowFullContent] =
		useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	useEffect(() => {
		// sets a random post
		// const randomPostIndex = Math.floor(
		// 	Math.random() * blogData.length
		// );
		// setSelectedPost(blogData[randomPostIndex]);

		// sets this specific post
		console.log('🚀 ~ blogData:', blogData);
		setSelectedPost(blogData[6]);
	}, []);

	const handleDropdownSelect = (event) => {
		const title = event.target.textContent;
		const post = blogData.find(
			(post) => post.title === title
		);
		setSelectedPost(post);
		setShowFullContent(false);
		setDropdownOpen(false);
	};

	const toggleFullContent = () => {
		setShowFullContent(!showFullContent);
	};

	return (
		<div className='blog flex flex-col items-center w-full'>
			<div className='w-full mb-10 rounded-md select-none'>
				{selectedPost && (
					<>
						<label
							className='block m-0 p-6 bg-gray-200 text-blue-500 font-small-caps cursor-pointer items-center text-center text-xl font-bold leading-tight rounded-tl-lg rounded-tr-lg'
							onClick={() => setDropdownOpen(!dropdownOpen)}
						>
							<span>{selectedPost.title}</span>
							<span className='float-right mr-2 text-2xl'>
								{dropdownOpen ? '-' : '+'}
							</span>
						</label>
					</>
				)}
				<ul
					className={`blog-select-list ${
						dropdownOpen
							? 'blog-select-list-open'
							: 'blog-select-list-close'
					} rounded-bl-lg rounded-br-lg`}
				>
					{blogData.map((post) => (
						<li
							className={`${
								post === selectedPost ? 'activePost' : ''
							} text-black bg-white items-center text-center cursor-pointer text-xl py-2 hover:bg-blue-700 hover:text-white`}
							key={post.id}
							onClick={(event) => {
								handleDropdownSelect(event);
							}}
						>
							<div className=''>{post.title}</div>
						</li>
					))}
				</ul>
			</div>
			<div className='blog-content mb-10 items-center text-center w-full mb-10 select-none'>
				{selectedPost && (
					<div className=''>
						<h2 className='text-3xl font-bold text-blue-500 leading-tight'>
							{selectedPost.title}
						</h2>
						<h3 className='text-white-600 text-lg pt-2'>
							By {selectedPost.author} on{' '}
							{selectedPost.date}
						</h3>
						<img
							className='my-10 max-w-60 my-20 shadow-md shadow-gray-50 rounded-md relative z-10 transform hover:transform-none transition-transform'
							src={selectedPost.image}
							alt={selectedPost.title}
						/>
						<p className='pt-[8px] mx-20 m-0-auto m-w-800 whitespace-pre-line text-left'>
							{showFullContent
								? selectedPost.content
								: selectedPost.content
										.split('\n')
										.slice(0, 3)
										.join('\n')}
						</p>
						<ReadBtn
							showFullContent={showFullContent}
							toggleFullContent={toggleFullContent}
						/>
					</div>
				)}
			</div>
		</div>
	);
}

export default SectionWrapper(Blog, 'blog');
