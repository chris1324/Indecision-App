import React from 'react';

class LayoutFooter extends React.Component {
	prevent = (e: React.MouseEvent<HTMLElement>): void => {
		e.preventDefault();
	}

	render(): React.ReactNode {
		return (
			<nav className="layout-footer footer bg-footer-theme">
				<div className="container-fluid d-flex flex-wrap justify-content-between text-center container-p-x pb-3">
					<div className="pt-3">
						<span className="footer-text font-weight-bolder">Appwork</span>
					</div>
					<div>
						<a className="footer-link pt-3" href="#d" onClick={this.prevent}>About Us</a>
						<a className="footer-link pt-3 ml-4" href="#d" onClick={this.prevent}>Help</a>
						<a className="footer-link pt-3 ml-4" href="#d" onClick={this.prevent}>Contact</a>
						<a className="footer-link pt-3 ml-4" href="#d" onClick={this.prevent}>Terms &amp; Conditions</a>
					</div>
				</div>
			</nav>
		);
	}
}

export default LayoutFooter;
