import React from "react"
import './App.css';
import Page from './Page';
import spi1 from './images/en_otro_paraiso/spi1.jpeg'
import spi2 from './images/en_otro_paraiso/spi2.png'
import rig from './images/en_otro_paraiso/rig.jpeg'
import planning1 from './images/en_otro_paraiso/planning1.jpeg'
import planning2 from './images/en_otro_paraiso/planning2.jpeg'
import scout1 from './images/en_otro_paraiso/scout1.jpeg'
import scout2 from './images/en_otro_paraiso/scout2.jpeg'
import scout3 from './images/en_otro_paraiso/scout3.jpeg'
import scout4 from './images/en_otro_paraiso/scout4.jpeg'
import scout5 from './images/en_otro_paraiso/scout5.png'
import shoot1 from './images/en_otro_paraiso/shoot1.jpeg'
import nightshoot1 from './images/en_otro_paraiso/nightshoot.jpeg'
import nightshoot2 from './images/en_otro_paraiso/nightshoot2.jpeg'
import trouble1 from './images/en_otro_paraiso/trouble1.png'
import wrap from './images/en_otro_paraiso/wrap.jpeg'
import grab1 from './images/en_otro_paraiso/grab1.png'
import grab2 from './images/en_otro_paraiso/grab2.png'
import grab3 from './images/en_otro_paraiso/grab3.png'
import grab4 from './images/en_otro_paraiso/grab4.png'
import grab5 from './images/en_otro_paraiso/grab5.png'


function EnOtroParaiso(props) {
    return (

            <div className="eop-page">
            <h1> En Otro Paraiso</h1>
            <div className="portfolio-eop-section1" >
                <h2>Context</h2>
                <p>Over the winter of 2018, my friend Michael and I planned and shot a short film in South Texas. The short film is about 2 undocumented sisters who come to the US with only each other - The idea was first brought to life after Michael volunteered at an organization supporting undocumented immigrants in South Texas. The film explores the cultural and social distancing as a product of migration and how each sister tries to overcome it. We assembled a small crew and cast from both overseas and South Texas to produce the film.   </p>
            </div>

            <div className="portfolio-eop-section2" >
                <h2>Pre-Production</h2>

                <p> Pre-production began in October 2019, when Michael and I reviewed the script over iterations, casted actors, and scouted locations. For locations, we had an Assistant Director on the ground to help give recommendations and report back to us. </p> 
                <br></br>
                <h2>Location and Cast Decision</h2>
                <p> By the end of November, we locked down our locations and cast. The whole shoot was to take place on South Padre Island in South Texas. We had a 13 year old actress from Rio Grande Valley and a student actress from Brown University as the sister. We had to work around the young actress's schedule as she had school in the 2nd week of our shoot. In total we planned for 6 days of shooting.</p>
                <br></br>
                <p>On January 2nd, we arrived in South Padre Island and spent two days doing ground recce and locking down our schedule for the upcoming days. Most of the locations were as expected, therefore our schedule remained as expected! </p>

                <br></br>
                <div className="spi-img">
                    <img src={spi1}/>
                    <img src={spi2}/>
                </div>
                <h3>Location Scout Images</h3>
                <div className="location-scout-img">
                    <img src={scout1}/>
                    <img src={scout2}/>
                    <img src={scout3}/>
                    <img src={scout4}/>

                    
                </div>

                <h3>Planning</h3>
                <div className="location-scout-img">

                    <img src={planning1}/>
                    <img src={planning2}/>
                    
                </div>
            </div>

            <div className="portfolio-eop-section3" >
                <h2>Production</h2>
                <p> Our core crew was 4 people: Michael, me, Matias (co-producer) and Colleen (AD). We also had 3 other extra hands helping out here and there. But since we were a small crew , everyone wore a lot of hats. I, as a DP and co-producer, handled all the technical matters. That meant I was in charge of managing schedules, equipment and ensuring smooth production flow. Colleen was running around buying production design items, picking up cast and crew members that lived an hour away while Matias ran around managing location and devising perpetual reschedules. At times both of them even operated sound, AC'd and in Matias' case, acted! <br></br><br></br>
                There were alot of bumpy moments too - for example we had a nighttime beach scene during the windiest and stormiest time of the year. The first time we attempted to shoot, we had brought all our gear out in the dark cold night (note we only had 4 people on crew) with sound equipment, camera, light equipment, only for it to rain. Dejetected, we cancelled everything that night and did it all over another night. <br>
                </br> Another funny moment was for a sewing scene we had planned - but no one knew how to use a sewing machine! Our actor had to FaceTime their grandmother to figure it out</p>


                <br></br>
    
                <div className="shoot-img">
                    <img src={shoot1}/>
                    <img src={nightshoot1}/>
                    <img src={trouble1}/>
                </div>
            </div>

            <div className="portfolio-eop-section4">
                <h2>Reflection and Post Production</h2>
                <p>All in all, it was a wonderful experience. Wearing a lot of hats was stressful but so rewarding because we got to gain so much experience. We are currently in post-production and the film is looking GOOD. Look out for more!</p>
                <br></br>
                <div className="screengrabs">
                    <img src={grab1}/>
                    {/* <img src={grab2}/> */}
                    <img src={grab3}/>
                    <img src={grab4}/>
                    <img src={grab5}/>
                </div>
            </div>






            </div>
        
    )
  }
  

export default EnOtroParaiso;