export type BlogPostResponseData = {
	posts: BlogPostData[];
	pages: number;
};

export type BlogPostData = {
	author: string;
	body: string;
	creationTime: Date;
	id: string;
	summary: string;
	title: string;
};
