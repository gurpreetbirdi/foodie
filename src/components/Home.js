import React, {Component} from 'react';
import Navigation from './Navigation';
import '../css/navigation.css';
import '../css/home.css';
import stamp  from '../icons/stamp.png';

class Home extends Component{

	render(){
		return(
		 <div className = "home">
		 	<Navigation />
		 	<img id="stamp" src={stamp} alt="CompanyStamp" />
			<div className="Tag">
				<p id="home1">THE BEST FOODIE</p>
				<p id="home2">EXPERIENCE</p>
				<p id="home3">NOW IN LONDON</p>
			</div>
		 </div>
			);
	}
}

export default Home;
