import logo from './logo.svg';
import './App.css';
import Img1 from './assets/img1.svg'
import Img2 from './assets/img2.svg'


//Here we import our Components
import Header from './components/Header'
import BreadCrumb from './components/BreadCrumb'
import ProfileCard from './components/ProfileCard';
import ThumbPic from './components/ThumbPic';

import Paragraph from './components/Paragraph'
import Topic from './components/Topic'
import Card from './components/DescriptionCard'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

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
            <ProfileCard/>
            <Paragraph text="Purple is closely associated with violet. In common usage, both refer to colors that are between red and blue in hue, with purples closer to red and violets closer to blue. Similarly, in the traditional painters' color wheel, purple and violet are both placed between red and blue, with purple is closer to red" />
            <ThumbPic/>
            <Paragraph text="In humans, the L (red) cone in the eye is primarily sensitive to long wavelength light in the yellow-red region of the spectrum, but is also somewhat sensitive to the shorter wavelength violet light that primarily stimulates the S (blue) cone." />
            <Topic text="As a Result" />
            <Paragraph text="As a result, when violet light strikes the eye, the S-cone is stimulated strongly and the L-cone is stimulated weakly. Accordingly, strong blue light mixed with weaker red light can mimic this pattern of stimulation, causing humans to perceive colors that the same hue as violet, but with lower saturation." />
          </div>
        </div>
        <div class="row justify-content-between align-content-around  col-12" data-mdb-ride="carousel" >
          <div class="row justify-content-between">
              <a class="mt-5 btn btn-secondary-outline prev lead" href="" title="go back"><ArrowBackIcon/></a>
              <Card img={Img1} desc="In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum." date="13-August-2020" title="Lorem Ipsum" />
              <Card img={Img2} desc="In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum." date="13-August-2020" title="Lorem Ipsum" />
              <Card img={Img1} desc="In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum." date="13-August-2020" title="Lorem Ipsum" />
              <a class="mt-5 btn btn-secondary-outline next lead " href="" title="more"><ArrowForwardRoundedIcon/></a>

            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
