import { ReactElement, type ReactNode } from 'react';

interface ContentProps {
	children?: ReactElement | ReactNode | string;
}

export function Content({ children }: ContentProps): ReactElement {
	return <div className='flex w-full flex-grow flex-col items-center'>{children}</div>;
}
