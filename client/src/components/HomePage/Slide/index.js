import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './index.css';
import { Link } from 'react-router-dom';

class Slide extends React.Component {
  galleryItems = imgLinks => {
    let images = imgLinks;
    images = [
      {
        link: 'https://imgur.com/lAc1uvj.png',
        title: 'General',
      },
      {
        link: 'https://imgur.com/QEaZ6Ic.png',
        title: 'Education',
      },
      {
        link: 'https://imgur.com/5TiSSRy.png',
        title: 'Medical Research',
      },
      {
        link: 'https://imgur.com/BjqXDvf.png',
        title: 'Hospitals & Hospices ',
      },
      {
        link: 'https://imgur.com/3CYfoGT.png',
        title: 'Disability',
      },
      {
        link: 'https://imgur.com/kS7wOLb.png',
        title: 'Overseas Aid and Relief',
      },
      {
        link: 'https://imgur.com/KwTbAWP.png',
        title: 'Homelessness',
      },
      {
        link: 'https://imgur.com/lfuRPqq.png',
        title: 'Children',
      },
      {
        link: 'https://imgur.com/1yPdi06.png',
        title: 'Animals',
      },
      {
        link: 'https://imgur.com/n10hQDa.png',
        title: 'Environment',
      },
    ];

    return images.map((img, index) => (
      <div>
        <Link to={`category?category=${images[index].title}`}>
          <img
            style={{ height: '70px', width: '70px' }}
            alt={images[index]}
            key={img.id}
            src={images[index].link}
            onDragStart={this.handleOnDragStart}
            className="yours-custom-class"
          />
          <h4 className="yours-custom-class">{images[index].title}</h4>
        </Link>
      </div>
    ));
  };

  render() {
    const items = this.galleryItems();
    return (
      <div className="movingSlider">
        <h1 className="mainTitle"> Categories</h1>
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
