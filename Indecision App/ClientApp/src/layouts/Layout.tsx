import React from 'react';
// eslint-disable-next-line sort-imports
import LayoutFooter from './LayoutFooter';
import LayoutNavbar from './LayoutNavbar';
import LayoutSidenav from './LayoutSidenav';
import { RouteComponentProps } from 'react-router';
import layoutHelpers from './helpers';

class Layout extends React.Component<RouteComponentProps> {
	componentDidMount(): void {
		layoutHelpers.init();
		layoutHelpers.update();
		layoutHelpers.setAutoUpdate(true);
	}

	componentWillUnmount(): void {
		layoutHelpers.destroy();
	}

	closeSidenav = (e: React.MouseEvent<HTMLElement>): void => {
		e.preventDefault();
		layoutHelpers.setCollapsed(true);
	}

	render(): React.ReactNode {
		const { children, history, location, match, staticContext } = this.props;

		return (
			<div className="layout-wrapper layout-2">
				<div className="layout-inner">
					<LayoutSidenav history={history} location={location} match={match} staticContext={staticContext} />

					<div className="layout-container">
						<LayoutNavbar />

						<div className="layout-content">
							<div className="container-fluid flex-grow-1 container-p-y">
								{children}
							</div>
						</div>

						<LayoutFooter />
					</div>
				</div>
				<div className="layout-overlay" onClick={this.closeSidenav} />
			</div>
		);
	}
}

export default Layout;
