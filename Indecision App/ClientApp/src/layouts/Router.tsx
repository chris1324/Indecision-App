import React from 'react';
// eslint-disable-next-line sort-imports
import * as Route from 'utils/route';
import { Route as AppRoute, BrowserRouter as AppRouter, Switch } from 'react-router-dom';
import Layout from 'layouts/Layout';
import NotFound from 'scenes/NotFound';

const Router: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const { layoutHelpers } = (window as any);

	return (
		<AppRouter basename={process.env.REACT_APP_BASENAME}>
			<Switch>
				{Route.pageRoutes.map(route => (
					<AppRoute
						key={route.path}
						exact
						path={route.path}
						render={props => {
							// On small screens collapse sidenav
							if (layoutHelpers && layoutHelpers.isSmallScreen()) {
								layoutHelpers.setCollapsed(true, false);
							}

							const { history, location, match, staticContext } = props;

							return (
								<Layout history={history} location={location} match={match} staticContext={staticContext}>
									<route.component />
								</Layout>
							);
						}}
					/>
				))}
				<AppRoute component={NotFound} path="*" />
			</Switch>
		</AppRouter>
	);
};

export default Router;
