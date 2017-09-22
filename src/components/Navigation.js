import React, {Component} from 'react';
import logo  from '../icons/logo.png';

const Menu = () =>(
 <div>
	<div>
		<a>
          <img id="logo" src={logo} alt="CompanyLogo" />
        </a>
	</div>
	<div className="LeftMenu">
		<a href="">ABOUT</a><span>		</span>
		<a href="">COMMUNITY</a><span>		</span>
		<a href="">LOCATION</a><span>		</span>
		<a href="">OUR MENU</a><span>		</span>
		<a href="">RECIPIES</a><span>		</span>
	</div>
	<div className="RightMenu">
		<a href="">CONTACT</a><span>		</span>	
		<a href="">LOGIN</a><span>		</span>
	</div>
 </div>
	)

class Navigation extends Component {
    render() {
        return (
         <div>
         	<Menu />
         </div>
    	);
    }
}

export default Navigation;