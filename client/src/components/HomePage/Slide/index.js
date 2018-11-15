import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './index.css';
class Slide extends React.Component {

galleryItems = (imgLinks) => {
imgLinks = [
  {link: 'http://cdn.onlinewebfonts.com/svg/img_544040.png', title: 'General' },
  {link: 'http://cdn.onlinewebfonts.com/svg/img_142809.png', title: 'Education'},
  {link: 'http://icons.iconarchive.com/icons/medicalwp/medical/256/Health-Sign-icon.png', title: 'Health' },
  {link: 'http://cdn.onlinewebfonts.com/svg/img_491768.png', title: 'Disability' },
  {link: 'https://image.flaticon.com/icons/svg/883/883403.svg', title: 'Overseas Aid' },
  {link: 'https://static.thenounproject.com/png/221476-200.png', title: 'Poverty Relief' },
  {link: 'https://cdn2.iconfinder.com/data/icons/apple-inspire-black/100/Apple-83-512.png', title: 'Housing' },
  {link: 'https://banner2.kisspng.com/20180421/otq/kisspng-computer-icons-prayer-5adac4a8574a65.4281847415242866323576.jpg', title: 'Religious activities' },
  {link: 'https://png.pngtree.com/svg/20170718/paint_plate_690441.png', title: 'Art/culture' },
  {link: 'https://image.flaticon.com/icons/svg/53/53283.svg', title: 'Amateur sport' },
  {link: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/paw-512.png', title: 'Animals' },
  {link: ' https://banner2.kisspng.com/20180824/jjx/kisspng-ecology-natural-environment-conservation-computer-tree-svg-png-icon-free-download-498949-online-5b7fe654ef2802.5403373415351086929796.jpg', title: 'Environment' },
  {link: ' https://cdn1.iconfinder.com/data/icons/monocromatic-vol-1/24/economy-down-512.png', title: 'Economic' },
  {link: 'https://png2.kisspng.com/20180710/cks/kisspng-medal-computer-icons-five-pointed-star-symbol-bronze-medal-icon-5b449cd10984f7.516293541531223249039.png', title: 'Armed Forces' },
  {link: ' https://www.directlink.coop/img/icons/111069-trading/svg/imbalanced-scale.svg', title: 'Human rights' },
  {link: 'https://banner2.kisspng.com/20180810/bbo/kisspng-camping-clip-art-outdoor-recreation-computer-icons-camp-fire-svg-png-icon-free-download-498244-o-5b6d8e5bb79b69.8237060915339065237521.jpg', title: 'Recreation' },
  {link: 'http://cdn.onlinewebfonts.com/svg/img_191941.png', title: 'Others' },

];

return imgLinks.map((img, index) => (
  <div><img
  style={{ height: '50px', width: '50px'}}
  alt={imgLinks[index]}
  key={img.id}
  src={imgLinks[index].link}
  onDragStart={this.handleOnDragStart}
className="yours-custom-class"/>
<h4  className="yours-custom-class">{imgLinks[index].title}</h4>
</div>
  
));
};

render() {
const items = this.galleryItems();
return (
<div className="div">
<p className="main"> Categories</p>
<AliceCarousel  items={items} duration={400} autoPlay startIndex={0} fadeOutAnimation mouseDragEnabled playButtonDisabled autoPlayInterval={2000} autoPlayDirection="rtl" responsive={{ 0: { items: 5 }, }} disableAutoPlayOnAction onSlideChange={this.onSlideChange} dotsDisabled onSlideChanged={this.onSlideChanged} />
</div>
);
}
}

export default Slide;
