import React from 'react';
// eslint-disable-next-line sort-imports
import * as MasterMenu from './masterMenu';
import * as RouteUtils from 'utils/routeUtils';
import PageHeader from 'components/PageHeader';
import PageLink from 'components/PageLink';

const LayoutMasterMenu: React.FC = () => (
	<>
		<PageHeader>
			Master Data
		</PageHeader>

		<div className="card">
			<div className="row no-gutters row-bordered">
				{
					MasterMenu.items.map(group => (
						<div
							key={group.label}
							className="col-md-6 p-5"
						>
							<h5 className="mb-4">{group.label}</h5>

							{
								group.items.map(item => (
									<PageLink
										key={item}
										className="d-block mb-3"
										page={item}
									>
										{RouteUtils.getPageText(item)}
									</PageLink>
								))
							}
						</div>
					))
				}
			</div>
		</div>
	</>
);

export default LayoutMasterMenu;