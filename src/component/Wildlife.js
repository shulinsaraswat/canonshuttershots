import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; 
import Sidebar from './Sidebar';
import '../css/wildlife.css';
import wl1 from '../images/wildlife/wl1.jpeg';
import wl2 from '../images/wildlife/wl2.jpeg';
import wl3 from '../images/wildlife/wl3.jpeg';
import wl4 from '../images/wildlife/wl4.jpeg';
import wl5 from '../images/wildlife/wl5.jpeg';
import wildlife from '../images/wildlife.jpg';
import wl6 from '../images/wildlife/wl6.jpeg';
import wl7 from '../images/wildlife/wl7.jpeg';
import wl8 from '../images/wildlife/wl8.jpeg';
import wl9 from '../images/wildlife/wl9.jpeg';

export default function Wildlife(){
    return(
        <div>
        <Navbar/>
        <Sidebar/>
        <div className="jumbotron jumbotron-fluid" 
            style={{
                height:'230px', 
                //marginTop:'45px', 
                background:' linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.1) 100%),url("https://remingtonsolar.com/wp-content/uploads/banner-background.jpg") right no-repeat', 
                marginBottom: '0', 
                color: 'white', 
                backgroundSize:' cover'}}> 
                <div className="container1" > 
                    <h2 className="display-4" style={{textAlign:'left',marginLeft:'155px'}}>
                    Wildlife </h2> 
                    <hr style={{textAlign:'left', marginLeft:'13%',width:'9%', color:'#00a2c8', backgroundColor:'#00a2c8'}}></hr><br/>
                </div> 
            </div><br/>

            <div className="container">
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col mb-4">
                    <div className="card box-wl">
                    <img src={wl1} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl">
                    <img src={wl2} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl">
                    <img src={wl3} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl wl6">
                    <img src={wl6} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl">
                    <img src={wl7} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl wl8">
                    <img src={wl8} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl wl4">
                    <img src={wl4} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl">
                    <img src={wildlife} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl wl5">
                    <img src={wl5} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl wl9">
                    <img src={wl9} className="card-img-top" alt="..."/>
                    </div>
                </div>
            </div>
            </div>
        <Footer/>
        </div>
    );
} 