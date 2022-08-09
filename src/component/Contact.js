import React, {Component} from 'react';
import '../css/contact.css';

export default class Contact extends Component{
    render(){
        return(
            <div id="contact" style={{paddingBottom:'17px', backgroundColor:'#f1f1f1',}} data-aos="fade-up"><br/>
                <h2 style={{textAlign:'center'}}>CONTACT ME</h2>
                <hr style={{width:'8%', color:'#00a2c8', backgroundColor:'#00a2c8'}}></hr><br/>
                <div className="container icons">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="https://www.instagram.com/canon_shuttershots/" target="_blank"><i className="fa fa-2x fa-instagram"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://shulinsaraswat.github.io/ss/" target="_blank"><i className="fa fa-2x fa-desktop"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.linkedin.com/in/shulinsaraswat/" target="_blank"><i className="fa fa-2x fa-linkedin-square"></i></a>
                        </li>          
                        <li className="list-inline-item">
                            <a href="mailto: shulin.saraswat5@gmail.com" target="_blank"><i className="fa fa-2x fa-envelope"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.quora.com/profile/Shulin-Saraswat-2" target="_blank"><i className="fa fa-2x fa-quora"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}