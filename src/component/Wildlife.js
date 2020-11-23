import React, {useState,useEffect}  from 'react';
import Sidebar from './Sidebar';
import '../css/wildlife.css';
import Scroll from './BackTopButton';
import NavbarSmall from './NavbarSmall';
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
import wl10 from '../images/wildlife/wl10.jpeg';

export default function Wildlife(){
    const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }
  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }
    return(
        <div> 
        <Sidebar/>
        <NavbarSmall/>
        <Scroll showBelow={250} />
        <div className="jumbotron jumbotron-fluid" 
            style={{
                height:'230px', 
                //marginTop:'45px', 
                background:' linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.1) 100%),url("https://remingtonsolar.com/wp-content/uploads/banner-background.jpg") right no-repeat', 
                marginBottom: '0', 
                color: 'white', 
                backgroundSize:' cover'}}> 
                <div className="container1" > 
                    <h2 className="display-4 banner-wl">
                    Wildlife </h2> 
                    <hr className="line-wl"></hr><br/>
                </div> 
            </div><br/>
            <div className="background-wl">
            <div className="container"><br/>
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col mb-4">
                    <div className="card box-wl">
                    <img src={wl1} className="card-img-top" alt="Royal Bengal Tiger" />
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl">
                    <img src={wl2} className="card-img-top" alt="Royal Bengal Tiger1"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl">
                    <img src={wl3} className="card-img-top" alt="Royal bengal tiger1"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl wl6">
                    <img src={wl6} className="card-img-top" alt="Bonnet Macaque"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl">
                    <img src={wl7} className="card-img-top" alt="Bonnet Macaque"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl wl8">
                    <img src={wl8} className="card-img-top" alt="Bonnet Macaque"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl wl4">
                    <img src={wl4} className="card-img-top" alt="Asiatic Lion"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl">
                    <img src={wildlife} className="card-img-top" alt="Asiatic Lion"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl wl5">
                    <img src={wl5} className="card-img-top" alt="Asiatic Lion"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl wl9">
                    <img src={wl9} className="card-img-top" alt="Puppies"/>
                    </div>
                </div>
                <div className="col mb-4"></div>
                <div className="col mb-4">
                <div className="card box-wl wl10">
                    <img src={wl10} className="card-img-top" alt="Royal Bengal Tiger"/>
                    </div>
                </div>
            </div>
            </div>
            </div><hr style={{width:'75%'}}></hr>
            <div id="footer" className="navbar" style={{ paddingBottom:'17px', backgroundColor:'#f1f1f1'}}><br/>
                <i className="fa fa-copyright footerCR" aria-hidden="true" style={{marginLeft:'57px',position:'absolute'}}> 2020<strong> Shulin Saraswat</strong>. All Rights Reserved</i>
                <p className="footerMade" style={{position:'relative', textAlign:'right',marginRight:'25px'}}>Made with lots of <span><i className="fa fa-heart"></i></span></p>
            </div>
        </div>
    );
} 