import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; 
import Sidebar from './Sidebar';
import '../css/place.css';
import place from '../images/place.jpeg';
import pl1 from '../images/place/pl1.jpeg';
import pl2 from '../images/place/pl2.jpeg';
import pl3 from '../images/place/pl3.jpeg';
import pl4 from '../images/place/pl4.jpeg';
import pl5 from '../images/place/pl5.jpeg';
import pl6 from '../images/place/pl6.jpeg';

export default function Place(){
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
                    Place </h2> 
                    <hr style={{textAlign:'left', marginLeft:'12%',width:'7%', color:'#00a2c8', backgroundColor:'#00a2c8'}}></hr><br/>
                </div> 
            </div><br/>
            <div className="container">
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col mb-4">
                    <div className="card box-pl">
                    <img src={pl1} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pl">
                    <img src={pl2} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pl">
                    <img src={place} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pl pl3">
                    <img src={pl3} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pl">
                    <img src={pl5} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pl pl4">
                    <img src={pl4} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pl pl6">
                    <img src={pl6} className="card-img-top" alt="..."/>
                    </div>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    );
}