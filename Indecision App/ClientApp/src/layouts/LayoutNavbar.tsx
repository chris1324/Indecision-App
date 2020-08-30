import React from 'react';
// eslint-disable-next-line sort-imports
import { Navbar, Nav } from 'react-bootstrap';
import PageLink from 'components/PageLink';
import PageNames from 'constant/pageNames';

const LayoutNavbar: React.FC = () => (
	<Navbar bg="navbar-theme" className="layout-navbar align-items-lg-center container-p-x" expand="lg">
		<Nav className="align-items-lg-center">
			<PageLink
				page={PageNames.MasterMenu}
			>
				<i className="ion ion-md-apps navbar-icon align-middle nav-link" />
			</PageLink>
		</Nav>
	</Navbar>
);

export default LayoutNavbar;
