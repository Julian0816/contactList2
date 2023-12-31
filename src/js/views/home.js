import React, {useContext, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ContactCard } from "../component/contactCard";
import {Context} from '../store/appContext'
import { Modal } from "../component/Modal";


export const Home = () => {
	const {store, actions}=useContext(Context)

const {contacts}=store


return (
	<div className="d-flex flex-column justify-center mt-5 ">
				<div class="d-flex align-items-center justify-content-center m-2">

		<h1>Contact List</h1>
		</div>
		<div className="list-group contact-list">
		{contacts.map((contact, index)=>
		 <div key={index} className="d-flex justify-content-center align-items-center">
		
		<ContactCard 
		name={contact.name}
		address={contact.address}
		phone={contact.phone}
		email={contact.email}
		img={"https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg"}
		onDelete={()=>actions.delContact(index)}
		index={index}
		/>
		<Modal index={index}></Modal>
		</div>
		)}
</div>
		
	
	</div>
)
		}