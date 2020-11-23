import React, {useState,useEffect}  from 'react'; 
import Sidebar from './Sidebar';
import '../css/place.css';
import NavbarSmall from './NavbarSmall';
import Scroll from './BackTopButton';
import place from '../images/place.jpeg';
import pl1 from '../images/place/pl1.jpeg';
import pl2 from '../images/place/pl2.jpeg';
import pl3 from '../images/place/pl3.jpeg';
import pl4 from '../images/place/pl4.jpeg';
import pl5 from '../images/place/pl5.jpeg';
import pl6 from '../images/place/pl6.jpeg';

export default function Place(){
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
                    <h2 className="display-4 banner-pl">
                    Place </h2> 
                    <hr className="line-pl"></hr><br/>
                </div> 
            </div><br/>
            <div className="background-pl">
            <div className="container"><br/>
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col mb-4">
                    <div className="card box-pl">
                    <img src={pl1} className="card-img-top" alt="Hampi"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pl">
                    <img src={pl2} className="card-img-top" alt="Hampi INR50"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pl">
                    <img src={place} className="card-img-top" alt="Hampi"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pl pl3">
                    <img src={pl3} className="card-img-top" alt="Pondicherry"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pl">
                    <img src={pl5} className="card-img-top" alt="Hampi"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pl pl4">
                    <img src={pl4} className="card-img-top" alt="Pondicherry"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pl pl6">
                    <img src={pl6} className="card-img-top" alt="Mirissa"/>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <hr style={{width:'75%'}}></hr>
            <div id="footer" className="navbar" style={{ paddingBottom:'17px', backgroundColor:'#f1f1f1'}}><br/>
                <i className="fa fa-copyright footerCR" aria-hidden="true" style={{marginLeft:'57px',position:'absolute'}}> 2020<strong> Shulin Saraswat</strong>. All Rights Reserved</i>
                <p className="footerMade" style={{position:'relative', textAlign:'right',marginRight:'25px'}}>Made with lots of <span><i className="fa fa-heart"></i></span></p>
            </div>
        </div>
    );
}