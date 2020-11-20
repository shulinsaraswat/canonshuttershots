import react, { Component} from 'react';
import about from '../images/about.jpg';


export default class About extends Component{
    
    render(){
        return(
            // About BEGIN
            <div id="about" data-aos="fade-up" style={{backgroundColor:'#f1f1f1', paddingBottom:'17px'}}><br/>
                <h2 style={{textAlign:'center'}}>ABOUT ME</h2>
                <hr style={{width:'8%', color:'#00a2c8', backgroundColor:'#00a2c8'}}></hr><br/>
                <div className="container conatinerSmall">
                    <div className="card mb-3" data-aos="fade-up" >
                        <div className="row">
                            <div className="col-md-3">
                                <img src={about} className="card-img" alt="profile" />
                            </div>
                            <div className="col-md-9">
                                <div className="card-body">
                                    <p className="card-text" style={{lineHeight:'2.0', textAlign:'left'}}>
                                        Hi! I'm Shulin Saraswat, a <i>photography enthusiast</i> , who capture the good times, develop from the negative and if things don't make out <b>TAKE ANOTHER SHOT !</b>.
                                        Moreover I am a developer and analyst from Bangalore, India working with <b style={{color:'#21AA47'}}>Standard Chartered Global Business Service</b> and <i>titled as Developer - Technology &amp; Innovation. </i> 
                                        I pursued my <i>Bachelor's of Technology in Electronics and Communication with specialisation in Internet of Things and Sensors</i> at Vellore Institute of Technology, Vellore
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}