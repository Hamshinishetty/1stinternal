import React from "react";
import manali from './Images/manali.jpg'; 
import mysuru from './Images/mysuru.jpg'; 
import Europe from './Images/Europe.jpg'; 
import bengaluru from './Images/bengaluru.jpeg'; 
import switzerland from './Images/switzerland.jpg'; 
import tajmahal from './Images/tajmahal.jpg'; 


const Destination = () => {
    return (
        <>
        
        <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                <img src={Europe} alt="Loading.."
                    width="300px"
                    height="250px"
                    />
                    <div class="card-body">
                        <h1 class="card-title">Europe</h1>
                        <p>Europe is a continent comprising the westernmost peninsulas of Eurasia, located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere.</p>
                        <h4 class="card-text">₹5000</h4>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card">
                <img src={switzerland} alt="Loading.."
                    width="300px"
                    height="250px"
                    />
                    <div class="card-body">
                        <h1 class="card-title">Switzerland</h1>
                        <p>Switzerland, officially the Swiss Confederation, is a landlocked country located at the confluence of Western, Central and Southern Europe. </p>
                        <h4 class="card-text">₹3999</h4>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card">
                <img src={manali} alt="Loading.." 
                width="300px"
                height="250px" />;
                    <div class="card-body">
                        <h1 className="card-title">Manali</h1>
                        <p>A gift of the Himalayas to the world, Manali is a beautiful township nestled in the picturesque Beas River valley.</p>
                        <h4 className="card-text">₹5000</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="container">
        <div class="row">

            <div class="col-md-3">
                <div class="card">
                <img src={mysuru}
                    alt="Loading..."
                    width="300px"
                    height="250px"
                    />
                    <div class="card-body">
                        <h1 class="card-title">Mysore</h1>
                        <p>The city is at 770m above sea level and 140kms from Bangalore, the state capital. Mysuru has an area of 6,307 sq km and a population of 30,01,127 (2011 census). The city is also known as the City of Palaces, Mysuru has always enchanted its visitors with its quaint charm.</p>
                        <h4 class="card-text">₹2899</h4>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card">
                <img src={bengaluru}
                    alt="Loading..."
                    width="300px"
                    height="250px"
                    />
                    <div class="card-body">
                        <h1 class="card-title">Bengaluru</h1>
                        <p>Bangalore ,officially Bengaluru is the capital and largest city of the southern Indian state of Karnataka.</p>
                        <h4 class="card-text">₹49899</h4>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card">
                <img src={tajmahal}
                    alt="Loading..."
                    width="300px"
                    height="250px"
                    />
                    <div class="card-body">
                        <h1 class="card-title">Taj Mahal</h1>
                        <p>The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.</p>
                        <h4 class="card-text">₹14278</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </>
    )
}
export default Destination