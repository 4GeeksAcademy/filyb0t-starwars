import React, {useContext} from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const {store} = useContext(Context)
	return(
	<div className="text-center mt-5">
		{store.people.map((item)=> {
return(
	<p key={item.uid}> {item.name} </p>
)

		})}
	</div>
);
	}