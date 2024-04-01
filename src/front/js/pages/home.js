import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [testApi, setTestApi]= useState([]);
	const [cityR, setCityR]=useState(['Chicago', 'Miami', 'Boston', "Houston", 'Hollywood', 'Mobile','Orlando']);
	const [stateR, setStateR]=useState(['Texas', 'Florida', 'Georgia', 'New York', 'Indiana','California', 'Utah']);



	useEffect(() => {
		let r=Math.floor(Math.random()*6);
		console.log('test that '+r)
	}, []);
	
function fetch_listing(){

 let test_url='https://airbnb13.p.rapidapi.com/search-location?location=Miami&checkin=2024-04-02&checkout=2024-04-30&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
		fetch(test_url,
		{
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'b7d8c24116msh18d47855c91a4c6p129b19jsn25ca23c193e6',
				'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
			}
		
		
	})
			.then(res => {
				if (!res.ok) throw Error(res.statusText);
				return res.json();
			})
			.then(response => {
			
				let test= [... response.results];
				console.log(test);
				console.log('above is what we got');
  
				let test2=[];
				

				test.forEach((el)=>{
					let each_house={};

					let r=Math.floor(Math.random()*6);
					let u=Math.floor(Math.random()*12)+1;
					let b=Math.floor(Math.random()*4)+1;
					let be=Math.floor(Math.random()*5)+1;
				
                    each_house.user_id=u;
					each_house.name=el.name;
					each_house.baths=b;
					each_house.bed=be;
					each_house.city= cityR[r];
					each_house.state= stateR[r];
					each_house.address=el.address;
					each_house.images= el.images[0]+'   '+ el.images[1]+'  '+el.images[2];

					test2.push(each_house);
				
				})
				console.log(test2)
				// console.log('Test starts here')
				// console.log(test2)
				// console.log('Test ends here')
				
						
			})
	
			.catch(error => console.log(error));
	
}

function load_property(load_pro){
	let test=[load_pro[0]];

	fetch('https://super-doodle-pj9rp965rvw2r75g-3001.app.github.dev/property/new/load',
		{
			method: 'POST',
			body: JSON.stringify(test),
          
            headers: {
                'Content-Type': 'application/json'
			}
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText);
				return res.json();
			})
			.then(response => {
				console.log(response)
					
					})
	
			.catch(error => console.log(error));

}



	return (

<div className="container">
	<h1>test</h1>
	<button type="button" className="btn btn-secondary" onClick={()=>fetch_listing()}>Fetch api</button>

</div>


	);
};
