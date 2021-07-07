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
            rating={5}
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
            title='HP 22fw Ultra-Thin Full HD 21.5-inch IPS Monitor with VGA and HDMI Ports'
            price={9999}
            image='https://images-na.ssl-images-amazon.com/images/I/71yYGgCG%2BhL._SL1500_.jpg'
            rating={4}
          />
          <Product
            id='49538096'
            title='HP Pavilion Gaming 10th Gen Intel Core i5 Processor 16.1" (40.9 cms) FHD Gaming Laptop (8GB/1TB HDD + 256GB SSD/Windows 10'
            price={87650}
            image='https://images-na.ssl-images-amazon.com/images/I/71FHcGAPevL._SL1498_.jpg'
            rating={4}
          />
          <Product
            id='12321341'
            title='Kindle Paperwhite (10th gen) - with Built-in Light, Waterproof, 8 GB, WiFi'
            price={7000}
            image='https://images-na.ssl-images-amazon.com/images/I/51tOeESHKOS._SL1000_.jpg'
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product
            id='49538094'
            title='Asgard Melt-Blown Fabric Disposable 3 Ply Surgical Mask (Blue, Without Valve, Pack of 100) for Unisex'
            price={499}
            image='https://images-na.ssl-images-amazon.com/images/I/71qshn-Y67L._SL1500_.jpg'
            rating={4}
          />
          <Product
            id='49538095'
            title='Adidas Mens Easy Vulc 2.0 Walking Shoe'
            price={1300}
            image='https://images-na.ssl-images-amazon.com/images/I/71U8gcoMsiL._UL1500_.jpg'
            rating={3}
          />
        </div>
        <div className='home__row'>
          <Product
            id='49538094'
            title='TIMEX Analog Black Men Watch TW000U934'
            price={2180}
            image='https://images-na.ssl-images-amazon.com/images/I/71Xx0qjYsHL._UL1500_.jpg'
            rating={4}
          />
          <Product
            id='49538095'
            title='Vivo Y20 (Obsidian Black, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers'
            price={13000}
            image='https://images-na.ssl-images-amazon.com/images/I/71SVzNmepQL._SL1500_.jpg'
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
