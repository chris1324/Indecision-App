import React from 'react';
// eslint-disable-next-line sort-imports
import * as RouteUtils from 'utils/routeUtils';
import { Link } from 'react-router-dom';
import PageNames from 'constant/pageNames';

interface IProps {
	page: PageNames,
	className?: string
}

const PageLink: React.FC<IProps> = ({ page, children, className }) => {
	const path = RouteUtils.getPagePath(page);

	return (
		<Link className={className} to={path}>
			{children}
		</Link>
	);
};

export default PageLink;