import { pageTitleSuffix } from '../config';

export function getPageTitle(...prefix: (string | undefined)[]): string {
	return [...prefix, pageTitleSuffix].filter(Boolean).join(' | ');
}
