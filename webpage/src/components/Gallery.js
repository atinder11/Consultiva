import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import GalleryImage1 from '../assets/img/gallery/gallery-1.jpg';
import GalleryImage2 from '../assets/img/gallery/gallery-2.jpg';
import GalleryImage3 from '../assets/img/gallery/gallery-3.jpg';
import GalleryImage4 from '../assets/img/gallery/gallery-4.jpg';
import GalleryImage5 from '../assets/img/gallery/gallery-5.jpg';
import GalleryImage6 from '../assets/img/gallery/gallery-6.jpg';
import GalleryImage7 from '../assets/img/gallery/gallery-7.jpg';
import GalleryImage8 from '../assets/img/gallery/gallery-8.jpg';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Visit our gallery to get a visual insight into our commitment to healthcare excellence. Explore snapshots of our services, dedicated staff, and the journey toward your well-being. Our gallery encapsulates our professional and compassionate approach to healthcare.</p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row g-0">
          {/* Gallery items */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href={GalleryImage1} className="gallery-lightbox">
                <img src={GalleryImage1} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href={GalleryImage2} className="gallery-lightbox">
                <img src={GalleryImage2} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href={GalleryImage3} className="gallery-lightbox">
                <img src={GalleryImage3} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href={GalleryImage4} className="gallery-lightbox">
                <img src={GalleryImage4} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href={GalleryImage5} className="gallery-lightbox">
                <img src={GalleryImage5} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href={GalleryImage6} className="gallery-lightbox">
                <img src={GalleryImage6} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href={GalleryImage7} className="gallery-lightbox">
                <img src={GalleryImage7} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href={GalleryImage8} className="gallery-lightbox">
                <img src={GalleryImage8} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
