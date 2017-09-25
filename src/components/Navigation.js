import React, {Component} from 'react';
import logo  from '../icons/logo.png';

const Menu = () =>(
 <div className="Menu">
	<div>
  	  <a>
        <img id="logo" src={logo} alt="CompanyLogo" />
      </a>
	</div>
	<div className="LeftMenu">
		<ul>
			<li><a href="">ABOUT</a></li>
			<li><a href="#commPage">COMMUNITY</a></li>
			<li><a href="#map">LOCATION</a></li>
			<li><a href="#menu">OUR MENU</a></li>
			<li><a href="#chef">RECIPIES</a></li>
		</ul>
	</div>
	<div className="RightMenu">
		<ul>
			<li><a href="#contact">CONTACT</a></li>
			<li><a href="">LOGIN</a></li>
		</ul>
		
	</div>
 </div>
	)

const RequestInfo=()=>(
 <div className="RequestInfo">
 	<a href="">REQUEST INFO</a>
 </div>
	)

class Navigation extends Component {
    render() {
        return (
         <div>
         	<Menu />
         	<RequestInfo />
         </div>
    	);
    }
}

export default Navigation;
