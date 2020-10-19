export default {
  categories: {
    active: 'burger',
    list: [
      {
        emojiSymbol: '🍕',
        id: 'pizza',
        title: 'Pizza',
        variations: 'pizza,pizzas,calzone'
      },
      {
        emojiSymbol: '🍔',
        id: 'burger',
        title: 'Burger',
        variations: 'burgers,bürger,bürgers,burguer,burguers'
      },
      {
        emojiSymbol: '🍣',
        id: 'sushi',
        title: 'Sushi',
        variations: 'sushi,viet,vietnamese'
      }
    ]
  },
  location: {
    active: {
      id: 'berlin',
      title: 'Berlin, Germany',
      coordinates: {
        latitude: 52.52,
        longitude: 13.405
      }
    }
  },
  results: {
    list: [
      {
        id: 'yAhYpg2GGeEUV2Li7HOp8g',
        alias: 'momotaro-tavern-berlin',
        name: 'Momotaro Tavern',
        image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/_dlFHwDjxj6jcSHMj7y6Ig/o.jpg',
        is_closed: false,
        url: 'https://www.yelp.com/biz/momotaro-tavern-berlin?adjust_creative=ors6zRuF6OV8AsDVv84wmA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ors6zRuF6OV8AsDVv84wmA',
        review_count: 58,
        categories: [
          {
            alias: 'burgers',
            title: 'Burgers'
          },
          {
            alias: 'asianfusion',
            title: 'Asian Fusion'
          }
        ],
        rating: 4.5,
        coordinates: {
          latitude: 52.521213,
          longitude: 13.4096765920655
        },
        transactions: [],
        price: '€€',
        location: {
          address1: 'Panoramastr. 1 A',
          address2: null,
          address3: '',
          city: 'Berlin',
          zip_code: '10178',
          country: 'DE',
          state: 'BE',
          display_address: [
            'Panoramastr. 1 A',
            '10178 Berlin',
            'Germany'
          ]
        },
        phone: '+4915203708888',
        display_phone: '+49 1520 3708888',
        distance: 343.96375737519054
      },
    ]
  },
  polling: {
    progress: 0
  }
};
