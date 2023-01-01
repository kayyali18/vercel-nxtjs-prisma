// pages/create.tsx

import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Router from 'next/router';

const Draft: React.FC = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const submitData = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		// TODO
		// You will implement this next ...
	};

	return (
		<Layout>
			<div className="page">
				<form onSubmit={submitData}>
					<h1>New Draft</h1>
					<input
						autoFocus
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Title"
						type="text"
						value={title}
					/>
					<textarea
						cols={50}
						onChange={(e) => setContent(e.target.value)}
						placeholder="Content"
						rows={8}
						value={content}
					/>
					<div className="flex">
						<input
							disabled={!content || !title}
							type="submit"
							value="Create"
						/>
						<a
							className="back"
							href="#"
							onClick={() => Router.push('/')}
						>
							Cancel
						</a>
					</div>
				</form>
			</div>
			<style jsx>{`
				.page {
					background: var(--geist-background);
					padding: 3rem;
					display: flex;
					justify-content: center;
					align-items: center;
					box-sizing: border-box;
				}

				.page * {
					box-sizing: border-box;
				}

				input[type='text'],
				textarea {
					width: 100%;
					padding: 0.5rem;
					margin: 0.5rem 0;
					border-radius: 0.25rem;
					border: 0.125rem solid rgba(0, 0, 0, 0.2);
				}

				input[type='submit'] {
					background: #ececec;
					border: 0;
					padding: 1rem 2rem;
					border-radius: 0.25rem;
					margin-right: 1rem;
					width: 16%;
					min-width: 115px;
				}

				.back {
					border-radius: 0.25rem;
					background: #f9ca5d;
					border: 0;
					padding: 1rem 2rem;
					color: black;
					text-decoration: none;
					width: 16%;
					min-width: 115px;
				}
				.back:hover,
				input[type='submit']:hover {
					cursor: pointer;
					font-weight: bold;
					transition: all 3s ease;
					text-align: center;
				}
				input[type='submit']:hover:not([disabled]) {
					background: #6ae565;
				}
				.back:hover {
					background: #ef5473;
				}

				.flex {
					display: flex;
					justify-content: left;
				}
			`}</style>
		</Layout>
	);
};

export default Draft;
