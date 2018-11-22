import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './index.css';
import { Link } from 'react-router-dom';

class Slide extends React.Component {
  galleryItems = imgLinks => {
    imgLinks = [
      {
        link: 'http://cdn.onlinewebfonts.com/svg/img_544040.png',
        title: 'General',
      },
      {
        link: 'https://image.flaticon.com/icons/svg/182/182327.svg',
        title: 'Education',
      },
      {
        link: 'https://image.flaticon.com/icons/svg/1021/1021799.svg',
        title: 'Health',
      },
      {
        link: 'http://cdn.onlinewebfonts.com/svg/img_491768.png',
        title: 'Disability',
      },
      {
        link: 'https://image.flaticon.com/icons/svg/883/883403.svg',
        title: 'Overseas Aid',
      },
      {
        link: 'https://static.thenounproject.com/png/221476-200.png',
        title: 'Poverty Relief',
      },
      {
        link:
          'https://cdn2.iconfinder.com/data/icons/apple-inspire-black/100/Apple-83-512.png',
        title: 'Housing',
      },
      {
        link: 'https://image.flaticon.com/icons/svg/182/182482.svg',
        title: 'Religious activities',
      },
      {
        link: 'https://png.pngtree.com/svg/20170718/paint_plate_690441.png',
        title: 'Art/culture',
      },
      {
        link: 'https://image.flaticon.com/icons/svg/53/53283.svg',
        title: 'Amateur sport',
      },
      {
        link:
          'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/paw-512.png',
        title: 'Animals',
      },
      {
        link: ' https://image.flaticon.com/icons/svg/1231/1231898.svg',
        title: 'Environment',
      },
      {
        link:
          ' https://cdn1.iconfinder.com/data/icons/monocromatic-vol-1/24/economy-down-512.png',
        title: 'Economic',
      },
      {
        link:
          'https://png2.kisspng.com/20180710/cks/kisspng-medal-computer-icons-five-pointed-star-symbol-bronze-medal-icon-5b449cd10984f7.516293541531223249039.png',
        title: 'Armed Forces',
      },
      {
        link:
          ' https://www.directlink.coop/img/icons/111069-trading/svg/imbalanced-scale.svg',
        title: 'Human rights',
      },
      {
        link: 'https://image.flaticon.com/icons/svg/992/992604.svg',
        title: 'Recreation',
      },
      {
        link: 'http://cdn.onlinewebfonts.com/svg/img_191941.png',
        title: 'Others',
      },
    ];

    return imgLinks.map((img, index) => (
      <div>
        <img
          style={{ height: '50px', width: '50px' }}
          alt={imgLinks[index]}
          key={img.id}
          src={imgLinks[index].link}
          onDragStart={this.handleOnDragStart}
          className="yours-custom-class"
        />
        <Link to={`category?category=${imgLinks[index].title}`}>
          <h4 className="yours-custom-class">{imgLinks[index].title}</h4>
        </Link>
      </div>
    ));
  };

  render() {
    const items = this.galleryItems();
    return (
      <div className="movingSlider">
        <p className="main"> Categories</p>
        <a name="Slider" title="slider" />
        <AliceCarousel
          items={items}
          duration={400}
          autoPlay
          startIndex={0}
          fadeOutAnimation
          mouseDragEnabled
          playButtonDisabled
          autoPlayInterval={2000}
          autoPlayDirection="rtl"
          responsive={{ 0: { items: 5 } }}
          disableAutoPlayOnAction
          onSlideChange={this.onSlideChange}
          dotsDisabled
          onSlideChanged={this.onSlideChanged}
          className="actualSlider"
        />
      </div>
    );
  }
}

export default Slide;
