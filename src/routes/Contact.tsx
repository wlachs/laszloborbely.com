import { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';

import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { ContentRow } from '../components/ContentRow';
import { Frame } from '../components/Frame';
import { pageTitleSuffix } from '../config';

export function Contact(): ReactElement {
	const name = 'Contact';
	const pageTitle = [name, pageTitleSuffix].join(' | ');

	return (
		<Frame>
			<Container>
				{/* Page title */}
				<Helmet>
					<title>{pageTitle}</title>
				</Helmet>
				{/* Page content */}
				<Content>
					<ContentRow>
						<h1>Contact</h1>
						<h2>László Borbély</h2>
						<p>Full-Stack Software Engineer @ mgm technology partners</p>
						<p>
							Mainly working with Spring and React, but always eager to learn new things! <br />
							Feel free to <a href='mailto:hello@laszloborbely.com'>send me an e-mail</a> if you have any questions, comments,
							or suggestions.
						</p>
						<p>
							You can also find me on{' '}
							<a href='https://github.com/wlachs' target='_blank' rel='noreferrer'>
								GitHub
							</a>{' '}
							or{' '}
							<a href='https://www.linkedin.com/in/lászló-borbély-678a34138/' target='_blank' rel='noreferrer'>
								LinkedIn
							</a>
							.
						</p>
					</ContentRow>
				</Content>
			</Container>
		</Frame>
	);
}
