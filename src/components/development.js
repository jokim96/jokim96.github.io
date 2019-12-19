import React from "react"
import './App.css';
import Page from './Page';
import Sketch1a from './images/development/sketch1a.png'
import Sketch1b from './images/development/sketch1b.png'
import Sketch1c from './images/development/sketch1c.png'
import Sketch1d from './images/development/sketch1d.png'
import Sketch2a from './images/development/sketch2a.png'
import Sketch2b from './images/development/sketch2b.png'
import Sketch2c from './images/development/sketch2c.png'
import Sketch2d from './images/development/sketch2d.png'
import Sketch3a from './images/development/sketch3a.png'
import Sketch3b from './images/development/sketch3b.png'
import Sketch3c from './images/development/sketch3c.png'
import Sketch3d from './images/development/sketch3d.png'
import Sketch4a from './images/development/sketch4a.png'
import Sketch4b from './images/development/sketch4b.png'
import Sketch4c from './images/development/sketch4c.png'
import Sketch4d from './images/development/sketch4d.png'
import Proto1a from './images/development/dev-screen2.png'
import Proto1b from './images/development/dev-screen1.png'
import Proto1c from './images/development/dev-screen3.png'
import Proto1d from './images/development/dev-screen4.png'
import Proto2a from './images/development/redev-screen1.png'
import Proto2b from './images/development/redev-screen2.png'
import Proto2c from './images/development/redev-screen3.png'
import Proto2d from './images/development/redev-screen4.png'
import Proto2e from './images/development/redev-screen5.png'
import Proto2f from './images/development/redev-screen6.png'
import results from './images/development/table.png'




function Development(props) {
    return (
        <Page className="portfolio" >
            <h1> Iteratively Redesigning Simmer's UI</h1>
            <div className="development-page">
            <div className="portfolio-dev-section1" >
                <h2>Context</h2>
                <p> We chose to design an interface for the startup “Simmer”. We designed 4 different mockup wireframes and collectively created a hi-fi prototype. We took this prototype to users at Brown University to gather feedback with which improved the final prototye. This prototype was then shared on UserTesting.com to see how respondents used the products. We formed hypothesises and analyzed the quantatitive and qualititive aspects to the interactions.   </p>
            </div>

            <div className="portfolio-dev-section2" >
                <h2> Simmer</h2>

                <p>  Simmer is a startup for an app that creates a collection of reviews of dishes. Simmer differentiates itself from Yelp or OpenTable through its focus on dishes rather than  restaurants. Simmer is an interesting user interaction experiment, as it requires some sort of incentive creation for people to be willing to user the app. There are also ways of thinking about functionalities that don’t currently exist (i.e. selecting combinations of menu items that you think complement each other well, favoriting dishes, or incorporating a newsfeed) that would be worth designing the UI for. We decided to design a mobile interface for Simmer for on-the-go ordering and browsing for food options.  </p>
            </div>

            <div className="portfolio-dev-section2" >
                <h2> Pre-Mock Up Questions</h2>

                <p>In order to understand the users for which we are designing, we started thinking about the needs of the specific groups of people the app is impacting.</p>
<br></br>
                <b>What is a group of people that will be directly impacted by your interface? </b>
            
                <p>The users deciding what food to order and the users leaving reviews of dishes will be the main groups of people that will be directly impacted by our interface. They are interacting with each other through the app/website and their choices are affected by the experiences and choices made by previous reviewers.</p>
<br></br>

                <b>How are these groups affected by your interface? What are some questions that your interface should address to ethically handle these effects?</b>

                <p>Bad reviews can quickly sink a company, and this can disproportionately affect smaller businesses, for whom one bad review can drastically pull down their average review score.

                Uneven numbers of reviews for specific dishes in restaurant could bias users towards more reviewed dishes. 

                If Simmer prioritizes popular restaurants such as chains, it could overpower smaller businesses who will in turn lose more customers. 
                </p>
<br></br>
                <b>What is a group of people that will be directly impacted by your interface?</b>

                <p>The users deciding what food to order and the users leaving reviews of dishes will be the main groups of people that will be directly impacted by our interface. They are interacting with each other through the app/website and their choices are affected by the experiences and choices made by previous reviewers. </p>
                <br></br>
                <br></br>
                
                <h2> Main Functionality of Simmer</h2>
                <h3>Based off of our analysis of the target groups and our understanding of the purpose of Simmer, we decided on the most important elements for the functionality of the app. </h3>

                <p>1. Write a review for a specific dish <br></br>
                2. Read other people’s opinions on dishes <br></br>
                3. Browse through different dish options at restaurants or find a single dish  option from different restaurants <br></br>
                </p>
                </div>

                <div className="portfolio-dev-section3" >
                <h2> LoFi Sketches</h2>
                <h3>We started ideating by creating quick sketches of potential layouts of the app. We created 4 initial sketches, all of which try and incorporate the main functionality of the app and intuitive layout. </h3>
                 <br></br>
                <h3>Sketch 1</h3>
                <p>This sketch focuses on having a distinct landing page with options for discovery, which are accessible through a scroll. It has a search that displays both restaurants and dishes and a menu review page, from which you can access individual dish reviews with an option to add your own review on the same page. 
</p>
                <div className="sketch-container">
                    <img src={(Sketch1a)} />
                    <img src={(Sketch1b)} />
                    <img src={(Sketch1c)} />
                    <img src={(Sketch1d)} />
                </div>

                <h3>Sketch 2</h3>
                <p>This sketch focuses on the element of discoverability. The user in this case would look through the dishes and find the one with the best reviews. The search would have more filters than the first sketch, and the review page would be an entire page, rather than a section at the bottom of the dish review page. 
</p>
                <div className="sketch-container">
                    <img src={(Sketch2a)} />
                    <img src={(Sketch2b)} />
                    <img src={(Sketch2c)} />
                    <img src={(Sketch2d)} />
                </div>

                <h3>Sketch 3</h3>
                <p>This sketch focuses on the keeping information readily available when the user browses through their options. As seen in the first and second sketches, users are able to see the prices, ratings, restaurant and restaurant distance. This will allow users to make better comparisons without clicking into the dish.
</p>
                <div className="sketch-container">
                    <img src={(Sketch3a)} />
                    <img src={(Sketch3b)} />
                    <img src={(Sketch3c)} />
                    <img src={(Sketch3d)} />
                    
                </div>

                <h3>Sketch 4</h3>
                <p>This sketch has a map feature that allows people to browse an area and find the best dish that is closest to them. Like another sketch, it leaves room for the user to add a photo to their review, but doesn’t allow you to add multiple photos. It features a menu bar at the bottom of the screen for people to easily navigate between their likes, reviews, and profile. 
</p>
                <div className="sketch-container">
                    <img src={(Sketch4a)} />
                    <img src={(Sketch4b)} />
                    <img src={(Sketch4d)} />
                    <img src={(Sketch4c)} />
                </div>
            </div>


            <div className="portfolio-dev-section4" >
                <h2> First Prototype</h2>

                <p> After looking through our lo fi sketches and ideas for layout, we created one high fidelity prototype. We now took color, contrast, font size and style, and content into consideration, and tried to create a clean looking interface that allows users to focus on the dish and it’s reviews. </p>
                <br></br>
                <h3>Design Choices</h3>
                <p>When iterating through our original lo fi sketches, we realised that the tasks most important to the functionality of this app was the ability to look up dishes without the context of a restaurant, comparing different dishes within a restaurant, and creating a quick way for people to rate dishes, with an option of going further and leaving a review. Since the functionality of the app depends on the user’s willingness to leave a rating and/or review, we incorporated the design which makes it seem the easiest to leave a review, which was the design that had a whole page dedicated to leaving a review. We decided to have a clean home page, with options for discovering new dishes below, so if a user simply wants to search a specific dish they would be able to do so easily. The dishes all have drop shadows, to imply that it is clickable, and are formatted like stacked cards that expand when clicked upon.
</p>
                <div className="sketch-container">
                    <img src={(Proto1a)} />
                    <img src={(Proto1b)} />
                    <img src={(Proto1c)} />
                    <img src={(Proto1d)} />
                </div>            
            </div>



            <div className="portfolio-dev-section5" >
                <h2> Improved Prototype</h2>

                <h3>Feedback and Improvements</h3>
                <p> - Clickable items are too small -> got rid of small dropdown items
                    <br></br>
- Original blue color choice does not stimulate hunger -> we switched to orange <br></br>
- Original grey font choice too light -> we made it darker <br></br>
- Added a back button to nested screens <br></br> 
- Create previous reviews and likes pages in the profile view <br></br>
- Created a full profile page instead of a dropdown  <br></br>
- Removed hamburger icon which suggested it was made for desktop
 </p>
                <br></br>
            
                <div className="sketch-container">
                    <img src={(Proto2d)} />
                    <img src={(Proto2a)} />
                    <img src={(Proto2b)} />
                    <img src={(Proto2c)} />
                    <img src={(Proto2e)} />
                    <img src={(Proto2f)} />
                </div>
            </div>


            <div className="portfolio-dev-section5" >
                <h2> User Testing</h2>

                <p>After receiving feedback on our first interactive hi-fi prototype, we created another iteration of our design and sent it out for users to test online. We created a set of tasks for the users to carry out, defined hypotheses for how we predicted they would understand the interaction, and analysed the results we found.</p>
                <br></br>
                <h3>Tasks and Hypotheses</h3>
                <p>
                    Task 1: Use Simmer to find a good curry dish you would buy for lunch, and read some reviews of the dish. Explain why and how you chose the dish.<br></br>
                    Hypothesis: We hypothesize that users will first search “Curry” to look for a curry dish from the search bar. They will then select the dish that is both reasonable in cost and rated high. 
                    <br></br>
                    <br></br>
                    Task 2: 
                    After finding the curry dish that you would buy, write a review for it
                    <br></br>
                    Hypothesis:We hypothesize that users will not have a difficult time finding the “Write a Review” button as it stands out with its orange color against a plain white background. We hypothesize that the time taken would be 5s
                    <br></br>
                    <br></br>
                    Task 3: Find the page that lists all of your previous reviews <br></br> We hypothesize that users will be able to successfully navigate to their Account to find their personal dish review page as they would know from experience from other apps that features dedicated to themselves are usually found under an “Account” heading. We hypothesize the time taken to be 5-10s.
                    </p>

                <br></br>
                <h3>Results</h3>
                <br></br>
                We tested 3 users on UserTesting.com with the above-mentioned tasks. 
                <br></br>
                <br></br>
                <div id="results">
                    <p>Task 1: Our hypothesis was only met with 1 user, who used the search bar to look for curry options. They evaluated their option based on the cost, ratings and reviews. The other 2 users saw a curry option immediately on our landing page under the “Popular Dishes Near You” heading and proceeded to the dish page. Upon seeing good reviews for the dish, they selected it
                    <br></br>
                    <br></br>
                    Task 2: All users could write a review with ease and did not have trouble finding how to write a review for a specific dish. They averaged a time of 4 seconds on the task.  This result matched our hypothesis.
                    <br></br>
                    <br></br>
                    Task 3: 1 user made an error looking for the review page. They believed that they could find the page within a dish page. For the other 2 users, it was very clear and intuitive that they click the account button to navigate to their review page. The average time for the task was 8s, which was within our hypothesized time range.
                    </p>
                    <img src={(results)} />
                </div>
            </div>
            <div className="portfolio-dev-section5" >
                <h2>Analysis and Reflection</h2>
                <h3>Quantitative Analysis</h3>
                <p>
                Users were generally comfortable using their interface. They all had positive things to say about its appearance and layout, saying that it is simple and attractive and they could carry out tasks efficiently. This is also reflected by the metrics, where all users had a 100% completion rate on the tasks, and only one user made an error. This error was instantly noticed and corrected by the user. The time on task is also as expected. Task 1 took a longer time as users were describing their evaluation process for their dishes and as they browsed through the reviews for the dishes. 
                </p>

                <br></br>

                <h3>Potential Interface Changes</h3>
                <p>
                We propose a few minor interface changes based off some feedback given by the users. One user reported that it could be convenient to have a “Favorite” feature for dishes so that they could reference their top dishes on the go. We propose that we could add a bookmark button within each dish page to allow a user to favorite a dish, and a button on the top left corner of the app for a quick reference to a list of favorite dishes.  
                </p>


                <br></br>

                <h3>Reflection</h3>
                <p>
                We believe that the user testing experience was extremely successful. We started our app design with a concept that we believed was intuitive and easy to use. However, by testing with users, both live and online, we realized that there was plenty of room for improvement and was able to iterate to develop an app with a more pleasant user experience that maximizes user’s ability to browse and clickability. We learnt to be open to the ideas of others and to think critically about everyone’s comments. We also learnt to that we need to critically evaluate how we ask our questions to users in order to draw out constructive criticisms from them. 
                </p>

            </div>


            </div>
        </Page>
    )
  }
  

export default Development;