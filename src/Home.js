import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        />

        <div className='home__row'>
          <Product
            id='49538099'
            title='Ikigai: The Japanese secret to a long and happy life'
            price={300}
            image='https://m.media-amazon.com/images/I/51T8OXMiB5L.jpg'
            rating={4}
          />
          <Product
            id='49538098'
            title='Home Art Wooden Chopping Cutting Board'
            price={501}
            image='https://images-na.ssl-images-amazon.com/images/I/619JDHTtxhL._SL1500_.jpg'
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            id='49538097'
            title='Ikigai: The Japanese secret to a long and happy life'
            price={300}
            image='https://m.media-amazon.com/images/I/51T8OXMiB5L.jpg'
            rating={4}
          />
          <Product
            id='49538096'
            title='Ikigai: The Japanese secret to a long and happy life'
            price={300}
            image='https://m.media-amazon.com/images/I/51T8OXMiB5L.jpg'
            rating={4}
          />
          <Product
            id='12321341'
            title='Ikigai: The Japanese secret to a long and happy life'
            price={300}
            image='https://m.media-amazon.com/images/I/51T8OXMiB5L.jpg'
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            id='49538094'
            title='Ikigai: The Japanese secret to a long and happy life'
            price={300}
            image='https://m.media-amazon.com/images/I/51T8OXMiB5L.jpg'
            rating={4}
          />
          <Product
            id='49538095'
            title='Ikigai: The Japanese secret to a long and happy life'
            price={300}
            image='https://m.media-amazon.com/images/I/51T8OXMiB5L.jpg'
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
