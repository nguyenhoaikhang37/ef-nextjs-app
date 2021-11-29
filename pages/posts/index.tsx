import { GetStaticProps, GetStaticPropsContext } from 'next'
import * as React from 'react'
import Link from 'next/link'

export interface PostListPageProps {
	posts: any[]
}

export default function PostListPage({ posts }: PostListPageProps) {
	return (
		<div>
			<h2>Post List</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link href={`/posts/${post.id}`}>
							<a>{post.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
	const data = await response.json()

	return {
		props: {
			posts: data.data.map((item: any) => ({
				id: item.id,
				title: item.title,
			})),
		},
	}
}
