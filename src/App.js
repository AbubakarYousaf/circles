
import './App.css';
import React from "react";


//Images
import Img1 from './assets/img1.svg'
import Img2 from './assets/img2.svg'
import Ocean from './assets/ocean.png'
import Girl from './assets/girl.png'

//Here we import our Components
import Header from './components/Header'
import Footer from './components/Footer'
import BreadCrumb from './components/BreadCrumb'
import ProfileCard from './components/ProfileCard';
import ThumbPic from './components/ThumbPic';

import Paragraph from './components/Paragraph'
import Topic from './components/Topic'
import Card from './components/DescriptionCard'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import Button from './components/Button';


const tempData = {
  thumbPicCaption : 'In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum, between approximately 380 and 450 nanometers.',
  blockquote : '“The process of making the dye was long, difficult and expensive”'
}

const cardData = [
  {
    img : Img1,
    desc : 'In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.',
    date: "17-August-2020",
    title:"Lorem Ipsum"
  },
  {
    img : Img2,
    desc : 'In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.',
    date: "17-August-2020",
    title:"Lorem Ipsum"
  },
  {
    img : Img1,
    desc : 'In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum.',
    date: "17-August-2020",
    title:"Lorem Ipsum"
  },
]

const paraData = [
  "Purple is closely associated with violet. In common usage, both refer to colors that are between red and blue in hue, with purples closer to red and violets closer to blue. Similarly, in the traditional painters' color wheel, purple and violet are both placed between red and blue, with purple is closer to red",
  "In humans, the L (red) cone in the eye is primarily sensitive to long wavelength light in the yellow-red region of the spectrum, but is also somewhat sensitive to the shorter wavelength violet light that primarily stimulates the S (blue) cone.",
  "As a result, when violet light strikes the eye, the S-cone is stimulated strongly and the L-cone is stimulated weakly. Accordingly, strong blue light mixed with weaker red light can mimic this pattern of stimulation, causing humans to perceive colors that the same hue as violet, but with lower saturation.",
  "As a result, when violet light strikes the eye, the S-cone is stimulated strongly and the L-cone is stimulated weakly."
]

const authorInfo = {
  img : Girl,
  title : "Projectmanager Dekode",
  readTime : "5 min read",
  datePub : "2 june",
  name : "Jane Doe"
}

function App() {
  return (
    <div>
      <Header/>
      <BreadCrumb/>
      <div className="pt-5 pb-5 text-center">
        <h2 className="my-3 mb-4" >Purple Circles</h2>
        <span className="subtitle lead mx-5 my-3"  >Purple is closely associated with violet. In optics, purple and violet refer to colors that look similar, but purples are mixtures of red  and blue or violet light.</span>
      </div>
      <div id="content" class="container" >
        <div className="row justify-content-center" >
          <div className="col-12 col-md-8 col-lg-7 " >
            <ProfileCard authorInfo={authorInfo} />
            <Paragraph text={paraData[0]} />
            <ThumbPic blockquote={tempData.blockquote} img={Ocean} caption={tempData.thumbPicCaption}/>
            <Paragraph text={paraData[1]} />
            <Topic text="As a Result" />
            <Paragraph text={paraData[2]} />
          </div>
        </div>
        <div class="row my-4 " >
''          <div class="row justify-content-between flex-row flex-nowrap fixed col-lg-12 ">
              <a class="mt-5 btn btn-secondary-outline prev lead align-self-center" href="" title="go back"><ArrowBackIcon/></a>
              {cardData.map((item,index) => {
                return (
                  <Card desc={item.desc} title={item.title} img={item.img} date={item.date} key={index} />
                )
              })}
              <br/>
              <a class="mt-5 btn btn-secondary-outline next lead align-self-center " href="" title="more"><ArrowForwardRoundedIcon/></a>
            </div>
        </div>
        <div className="row justify-content-center my-4" >
          <div className="col-12 col-md-8 col-lg-7 " >
            <Topic text="Why Teft?" />
            <Paragraph text={paraData[3]} />
            <div className="align-self-center center text-center"><Button title="Why Teft?" class=" my-3  custom-btn btn  " /></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
