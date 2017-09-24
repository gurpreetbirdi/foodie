import React, {Component} from 'react';
import Navigation from './Navigation';
import '../css/navigation.css';
import stamp  from '../icons/stamp.png';

class Home extends Component{
	render(){
		return(
		 <div className = "Home">
		 	<Navigation />
		 	<img id="stamp" src={stamp} alt="CompanyStamp" />
			<div className="Tag">
				<p>THE BEST FOODIE</p>
				<p>EXPERIENCE</p>
				<p>NOW IN LONDON</p> 
			</div>
		 </div>
			);
	}
}

export default Home;