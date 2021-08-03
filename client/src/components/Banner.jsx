import "./css/Banner.scss";

import imgLoad from '../functions/imgDisplay';

const Banner = (props) => {

  const bannerUrl = props.url;

  return (
    <div className="banner">
      <img className="banner" src={bannerUrl} alt='Img not supported' onLoad={(e)=> imgLoad(e, {
        animationName: "move"
      })} />
    </div>
  )
}

export default Banner;