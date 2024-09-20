import { ReactElement, type ReactNode } from 'react';

interface ContainerProps {
	readonly children?: ReactElement | ReactNode | string;
}

export function Container({ children }: ContainerProps): ReactElement {
	return <div className='m-auto flex flex-col items-center'>{children}</div>;
}
