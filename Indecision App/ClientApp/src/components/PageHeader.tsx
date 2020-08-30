import React from 'react';

const PageHeader: React.FC = ({ children }) => (
	<h4 className="d-flex justify-content-between align-items-center w-100 font-weight-bold py-3 mb-4">
		{children}
	</h4>
);

export default PageHeader;