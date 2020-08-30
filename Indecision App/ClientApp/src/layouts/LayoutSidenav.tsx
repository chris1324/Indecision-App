import React from 'react';
// eslint-disable-next-line sort-imports
import * as RouteUtils from 'utils/routeUtils';
import * as SidenavMenu from './sidenavMenu';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import Sidenav from 'vendor/libs/sidenav';
import SidenavComponent from 'vendor/libs/sidenav/SidenavComponent';
import layoutHelpers from './helpers';

class LayoutSidenav extends React.Component<RouteComponentProps> {
	toggleSidenav = (e: React.MouseEvent<HTMLElement>): void => {
		e.preventDefault();
		layoutHelpers.toggleCollapsed();
	}

	isMenuActive = (items: SidenavMenu.MenuItem[]): boolean => {
		const { location } = this.props;

		return items.some(x => {
			const groupMenuItem = x as SidenavMenu.IGroupMenuItem;
			const pageMenuItem = x as SidenavMenu.IPageMenuItem;

			return groupMenuItem.items
				? this.isMenuActive(groupMenuItem.items)
				: RouteUtils.getPagePath(pageMenuItem.page) === location.pathname;
		});
	}

	createSidenavLinks = (items: SidenavMenu.MenuItem[], parentIndex: number): React.ReactNode => items.map((item, index) => {
		const key = `${parentIndex}-${index}`;

		const groupMenuItem = item as SidenavMenu.IGroupMenuItem;
		const pageMenuItem = item as SidenavMenu.IPageMenuItem;

		if (groupMenuItem.items) {
			return (
				<Sidenav.Menu
					key={key}
					active={this.isMenuActive(groupMenuItem.items)}
					icon={groupMenuItem.icon}
					linkText={groupMenuItem.label}
					open={this.isMenuActive(groupMenuItem.items)}
				>
					{this.createSidenavLinks(groupMenuItem.items, index)}
				</Sidenav.Menu>
			);
		}

		const route = RouteUtils.getPageRoute(pageMenuItem.page);

		return (
			<Sidenav.RouterLink
				key={key}
				exact
				icon={item.icon}
				to={route.path}
			>
				{route.text}
			</Sidenav.RouterLink>
		);
	});

	render(): React.ReactNode {
		return (
			<SidenavComponent className="bg-sidenav-theme layout-sidenav" orientation="vertical">

				{/* Brand demo (see src/demo.css) */}
				<div className="app-brand demo pt-3 pb-3">
					<span className="app-brand-logo demo bg-primary">
						<svg viewBox="0 0 148 80" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
							<defs>
								<linearGradient gradientUnits="userSpaceOnUse" id="a" x1="46.49" x2="62.46" y1="53.39" y2="48.2">
									<stop offset="0" stopOpacity=".25" />
									<stop offset=".3" stopOpacity=".1" />
									<stop offset=".9" stopOpacity="0" />
								</linearGradient>
								<linearGradient id="e" x1="76.9" x2="92.64" xlinkHref="#a" y1="26.38" y2="31.49" />
								<linearGradient id="d" x1="107.12" x2="122.74" xlinkHref="#a" y1="53.41" y2="48.33" />
							</defs>
							<path d="M121.36,0,104.42,45.08,88.71,3.28A5.09,5.09,0,0,0,83.93,0H64.27A5.09,5.09,0,0,0,59.5,3.28L43.79,45.08,26.85,0H.1L29.43,76.74A5.09,5.09,0,0,0,34.19,80H53.39a5.09,5.09,0,0,0,4.77-3.26L74.1,35l16,41.74A5.09,5.09,0,0,0,94.82,80h18.95a5.09,5.09,0,0,0,4.76-3.24L148.1,0Z" style={{ fill: '#fff' }} transform="translate(-.1)" />
							<path d="M52.19,22.73l-8.4,22.35L56.51,78.94a5,5,0,0,0,1.64-2.19l7.34-19.2Z" fill="url(#a)" transform="translate(-.1)" />
							<path d="M95.73,22l-7-18.69a5,5,0,0,0-1.64-2.21L74.1,35l8.33,21.79Z" fill="url(#e)" transform="translate(-.1)" />
							<path d="M112.73,23l-8.31,22.12,12.66,33.7a5,5,0,0,0,1.45-2l7.3-18.93Z" fill="url(#d)" transform="translate(-.1)" />
						</svg>
					</span>
					<Link className="app-brand-text demo sidenav-text font-weight-normal ml-2" to="/">Appwork</Link>
					<a className="layout-sidenav-toggle sidenav-link text-large ml-auto" href="#toggle" onClick={this.toggleSidenav}>
						<i className="ion ion-md-menu align-middle" />
					</a>
				</div>
				<Sidenav.Divider className="mt-0" />

				<div className="sidenav-inner py-1">
					{
						this.createSidenavLinks(SidenavMenu.items, 0)
					}
				</div>
			</SidenavComponent>
		);
	}
}

export default LayoutSidenav;
