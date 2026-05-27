import React, {Component} from 'react';
import logo from '../images/canonshuttershots_logo.png';
import '../css/footer.css';

export default class Footer extends Component{
    render(){
        return(
            <footer id="footer" className="site-footer">
                <div className="container footer-inner">
                    <img src={logo} alt="Canon Shuttershots logo" />
                    <p>© 2026 <strong>Shulin Saraswat</strong>. Canon Shuttershots.</p>
                    <p className="footer-note">Made for photographs that deserve room to breathe.</p>
                </div>
            </footer>
        );
    }
}
