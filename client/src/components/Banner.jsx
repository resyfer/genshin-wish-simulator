import "./css/Banner.scss";

const Banner = (props) => {

  const bannerUrl = props.url;

  return (
    <div className="banner">
      <img className="banner" src={bannerUrl} alt='Img not supported' />
    </div>
  )
}

export default Banner;