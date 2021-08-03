import Banner from "../components/Banner";

import imgLoad from '../functions/imgDisplay';

import "./css/Home.scss";

const bigPicUrl = 'https://lh3.googleusercontent.com/pw/AM-JKLWF5-BoKknZMrKSOju1XQt5GIzYI5iDy1Fw7ldRkT2XKd-b0CD6df9zSH7nw383GLROAr7W2a6fAFdbJSdaUX7O6FJAihpNYcOLXJ2xgtbZy0ROclFG0UOMrMRHw_XfCst0JCHwn6tN0_s-UtuWbC16=w1366-h768-no';
const bannerUrl = 'https://lh3.googleusercontent.com/pw/AM-JKLXP-eKG-58kUzEcaBADaedBb862kDb8Rgm70ofuYvN2Z1rncBwKLwlEPZ9ES5nhYcw-WEE6N0L2PEQ29yKjB7JHishvaaE_Uz8kRcTFCR3wYUW1LBS6Jn2kEuNRDa-uq6yBQ3xFsvJnpKXROOHkkRAa=w1303-h676-no';

const Home = () => {
  return (
    <div className="home">
			<img className='bgpic' src={bigPicUrl} alt='Img not supported' onLoad={(e)=> imgLoad(e, {})} />

      <Banner url={bannerUrl} />
    </div>
  )
}

export default Home;