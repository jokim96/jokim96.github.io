import React from "react"
import './App.css';
import Page from './Page';
import style_transfer from './images/styletransfer/screamgalata.gif'
import vgg from './images/styletransfer/vgg-network.png'
import galata from './images/styletransfer/galata.jpg'
import starry_night from './images/styletransfer/starry-night.jpg'
import res1 from './images/styletransfer/result/yesdat0.png'
import res2 from './images/styletransfer/result/yesdat3.png'
import res3 from './images/styletransfer/result/yesdat5.png'
import res4 from './images/styletransfer/result/yesdat10.png'
import res5 from './images/styletransfer/result/yesdat15.png'
import res6 from './images/styletransfer/result/yesdat19.png'
import resgif from './images/styletransfer/goodres.gif'
import basq from './images/styletransfer/seated-nude.jpg'
import scream from './images/styletransfer/scream.jpg'
import scream_gala from './images/styletransfer/style_transfer2.png'
import basq_gala from './images/styletransfer/picasso.png'
import kandinsky from './images/styletransfer/kandinsky.jpg'
import kandinsky_gala from './images/styletransfer/galatakandinsky.png'


function StyleTransfer(props) {
    return (
        <Page className="portfolio" >
        <div className="styletransfer-page">
        <h1> Style Transfer</h1>
        <div className="portfolio-st-section1" >
            <div id="text-container">
            <h2>Context</h2>
            <p>We took on the task of implementing image style transfer, which is a method of applying the artistic style of an image onto a target
            image. We aimed to implement the original Gatys et al
            (2016) paper titled ”Image Style Transfer Using Convolutional Neural Networks”. The main idea was to use the image features derived from the layers of a Convolutional Neural Network (CNN) and recombine them to create stylized image. </p>
            </div>
            <img id="portfolio-intro-image"src={style_transfer}/>
        </div>

        <div className="portfolio-st-section2" >
            <h2>Architecture</h2>
            <img id="portfolio-vgg-image"src={vgg}/>
            <p> As in Gatys et. al (2016), style transfer can be achieved by combining extracted style and content features of an input image. Such features are best extracted by the pre-trained network VGG19, which is a 19-layer convolution network trained on the ImageNet database and is used for image classification. </p>
            
        </div>

        <div className="portfolio-st-section3" >
            <h2>Image Representations</h2>

            <p>

            Image representations are gathered from the contents of VGG19 layers. Layers act as perception fields that perform feature and pattern extraction. Deeper layers focus on more general patterns. As it was suggested in the paper, we used convolutional layers conv1.1, conv2.1, conv3.1, conv4.1, conv5.1 for generating the style features, while only the conv4.2 was used for content extraction.

            </p>
        </div>

        <div className="portfolio-st-section4" >
            
        <h2>Design Choices</h2>
            
            <p> We made several design choices to generate improved results than the Gatys et. al paper. We used a maxpooling layer contrary to the average pool-ing layer suggested, which achieved more photorealistic results.
Between convolutional layers 4 and 5, we found that Conv 5 outputted better content features. This might be a result of deeper layers extracting more generalized features.
Our initial results generated very pixelated and noisy images since we resized the images before loading them to our model. We overcame this problem by using a median filter of size 3x3, to reduce the noise in the image and make it look more smooth. Gatys et al paper suggests changing the rel-
ative weights of the style and content images, which we did
while experimenting with different images and found the
most optimal β ratio to be 0.025</p>
    
        </div>

        <div className="portfolio-st-section5">
            <h1>Results</h1>

            <div className="img-container">
                <div className="image-wrapper">
                <img className="styletransfer-results-image"src={galata}/>
                <h3>Input Image</h3>
                </div>
                <div className="image-wrapper">
                <img className="styletransfer-results-image" src={starry_night}/>
                <h3> Style Image</h3>
                </div>
                {/* <img id="portfolio-vgg-image"src={galata}/> */}
            </div>
            <div className="img-container">
                <p>Across iterations 0, 5, 10, 15, 20</p>
                <img className="styletransfer-results-image" src={res1}/>
                <img className="styletransfer-results-image" src={res2}/>
                <img className="styletransfer-results-image" src={res3}/>
                <img className="styletransfer-results-image" src={res4}/>
                <img className="styletransfer-results-image" src={res5}/>
                <img className="styletransfer-results-image" src={res6}/>
                <img className="styletransfer-results-image" src={resgif}/>
            </div>
            <div className="img-container">

            </div>
        </div>

        <div className="portfolio-st-section6">
            <div className="img-container">
                <h2>Other Results</h2>
                <img className="styletransfer-results-image" src={basq}/>
                <img className="styletransfer-results-image" src={basq_gala}/>
                <img className="styletransfer-results-image" src={scream}/>
                <img className="styletransfer-results-image" src={scream_gala}/>
                <img className="styletransfer-results-image" src={kandinsky}/>
                <img className="styletransfer-results-image" src={kandinsky_gala}/>
            </div>
        </div>
        </div>
    </Page>
    )
  }
  

export default StyleTransfer;