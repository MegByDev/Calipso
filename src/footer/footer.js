import React, { Component } from 'react';
import './footer.scss';






class Footer extends Component {
    render() {
        return (<footer class="page-footer">
					<div class="container">
						<div class="row">
							<div class="col l6 s12">
								<h5 class="white-text">Footer Content</h5>
								<p class="grey-text text-lighten-4">
									You can use rows and columns here to organize your footer content.
								</p>
							</div>
							<div class="col l4 offset-l2 s12">
								<h5 class="white-text">Links</h5>
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
						<div class="container">© 2018 By Y 2 M</div>
					</div>
				</footer>
        );
    }
}

export default Footer;