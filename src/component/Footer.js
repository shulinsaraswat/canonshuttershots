import React, {Component} from 'react';
import '../css/footer.css';

export default class Footer extends Component{
    render(){
        return(
            <div id="footer" className="navbar" style={{ paddingBottom:'17px'}}><br/>
                <i className="fa fa-copyright footerCR" aria-hidden="true" style={{marginLeft:'25px',position:'absolute'}}> 2020<strong> Shulin Saraswat</strong>. All Rights Reserved</i>
                <p className="footerMade" style={{position:'relative', textAlign:'right',marginRight:'25px'}}>Made with lots of <span><i className="fa fa-heart"></i></span></p>
            </div>
        );
    }
}