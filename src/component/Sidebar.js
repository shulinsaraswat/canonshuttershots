import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/sidebar.css';
import PetsIcon from '@material-ui/icons/Pets';
import EcoIcon from '@material-ui/icons/Eco';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PlaceIcon from '@material-ui/icons/Place';
import HomeIcon from '@material-ui/icons/Home';

export default class Sidebar extends Component{

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    } 
    componentWillUnmount(){
        window.removeEventListener("Scroll", this.handleScroll);
    }
    handleScroll=()=>{
        if(window.scrollY>120){
            document.querySelector(".sidebar").className="sidebar activeSide";
        } else{
            document.querySelector(".sidebar").className="sidebar hideSide";
        }
    }

    handleMouseEnter(e){
        let element = document.getElementById('mySidebar')
        ReactDOM.findDOMNode(element).style.width="200px";
        ReactDOM.findDOMNode(element).style.opacity="0.9";
    }
    handleMouseLeave(e){
        let element = document.getElementById('mySidebar')
        ReactDOM.findDOMNode(element).style.width="70px";
        ReactDOM.findDOMNode(element).style.opacity="1.0";
    }
    render(){
        return(
            <div id="mySidebar" className="sidebar" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <a href="/canonshuttershots/portfolio/nature"><span><i className="material-icons "><EcoIcon/></i></span><span className="icon-text"> &emsp;Nature</span></a><br/>
                <a href="/canonshuttershots/portfolio/people"><span><i className="material-icons "><PeopleAltIcon/></i></span><span className="icon-text"> &emsp;People</span></a><br/>
                <a href="/canonshuttershots/portfolio/place"><span><i className="material-icons "><PlaceIcon/></i></span><span className="icon-text"> &emsp;Place</span></a><br/>
                <a href="/canonshuttershots/portfolio/wildlife"><span><i className="material-icons "><PetsIcon/></i></span><span className="icon-text"> &emsp;Wildlife</span></a><br/>
                <a href="/canonshuttershots/"><span><i className="material-icons "><HomeIcon/></i></span><span className="icon-text"> &emsp;Home</span></a><br/>
            </div>
        );
    }
}