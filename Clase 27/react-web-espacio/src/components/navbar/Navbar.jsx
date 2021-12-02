import React from "react";
import './navbar.css';
import ButtonNav from "./ButtonNav";
/* import LogoNav from "./LogoNav"; */

export default function NavBar (){

 /*    let dataLogo = {classList:"logo", src:"https://cdn.worldvectorlogo.com/logos/akka-1.svg"}; */
    let opcionesNav = [
        {key: "Home", styleNumber:"number", number:"00", title:"Home", route:"/Home"},
        {key: "Destination", styleNumber:"number", number:"01", title:"Destination", route:"/Destination"},
        {key: "Crew", styleNumber:"number", number:"02", title:"Crew", route:"/Crew"},
        {key: "Technology", styleNumber:"number", number:"03", title:"Technology", route:"/Technology"}
    ];

    const cbButtonNav = (element) => {
        return <ButtonNav key={element.key}  data = {element}/>
    }

    return(

        <nav className="navbar">

            
    
            <ButtonNav/>

               {/*    { opcionesNav.map(cbButtonNav)} */}

              

        </nav>

    );
};