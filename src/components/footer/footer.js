import React, { Component } from 'react';
import './footer.scss';
import redux from 'redux';






class Footer extends Component {
    render() {
        return (<footer class="page-footer">
					<div class="container">
						<div class="row">
							<div class="col l6 s12">
								<h5 class="white-text">CALIPSO</h5>
								<p class="grey-text text-lighten-4">
									Le CALIPSO vous souhaite une bonne dégustation dans notre établissement.
								</p>
							</div>
							<div class="col l4 offset-l2 s12">
								<ul>
									<li>
										<a class="grey-text text-lighten-3" href="#!">
											<i class="fab fa-facebook-square" />
										</a>
									</li>
									<li>
										<a class="grey-text text-lighten-3" href="#!">
											<i class="fab fa-twitter-square" />
										</a>
									</li>
									<li>
										<a class="grey-text text-lighten-3" href="#!">
											<i class="fab fa-instagram" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="footer-copyright">
						<div class="container">© 2018 By Y2M</div>
					</div>
				</footer>
        );
    }
}

export default Footer;