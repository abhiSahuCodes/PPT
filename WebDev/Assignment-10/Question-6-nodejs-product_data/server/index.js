const http = require('http');

// Dummy product data for men and women
const menProducts = [
    {
        "id": 1,
        "title": "Men T-Shirt-one",
        "price": 22.3,
        "category": "Clothing",
        "rating": {
          "rate": 4.1,
          "count": 259
        }
      },
      {
        "id": 2,
        "title": "Men T-Shirt-two",
        "price": 55.99,
        "category": "Clothing",
        "rating": {
          "rate": 4.7,
          "count": 500
        }
      },
      {
        "id": 3,
        "title": "Men T-Shirt-three",
        "price": 15.99,
        "category": "Clothing",
        "rating": {
          "rate": 2.1,
          "count": 430
        }
      },
      {
        "id": 4,
        "title": "Men T-Shirt-four",
        "price": 25.99,
        "category": "Clothing",
        "rating": {
          "rate": 2.6,
          "count": 435
        }
      },
      {
        "id": 5,
        "title": "Men T-Shirt-five",
        "price": 35.99,
        "category": "Clothing",
        "rating": {
          "rate": 3.2,
          "count": 423
        }
      },
      {
        "id": 6,
        "title": "Men T-Shirt-six",
        "price": 42.99,
        "category": "Clothing",
        "rating": {
          "rate": 4.1,
          "count": 250
        }
      },
      {
        "id": 7,
        "title": "Men T-Shirt-seven",
        "price": 12.99,
        "category": "Clothing",
        "rating": {
          "rate": 3.4,
          "count": 421
        }
      },
      {
        "id": 8,
        "title": "Men T-Shirt-eight",
        "price": 24.99,
        "category": "Clothing",
        "rating": {
          "rate": 3.1,
          "count": 450
        }
      },
      {
        "id": 9,
        "title": "Men T-Shirt-nine",
        "price": 15.99,
        "category": "Clothing",
        "rating": {
          "rate": 4.1,
          "count": 220
        }
      },
      {
        "id": 10,
        "title": "Men T-Shirt-ten",
        "price": 35.99,
        "category": "Clothing",
        "rating": {
          "rate": 4.6,
          "count": 150
        }
      }
];

const womenProducts = [
    {
        "id": 11,
        "title": "Women's 3-in-1 Snowboard Jacket Winter Coats",
        "price": 56.99,
        "category": "Clothing",
        "rating": {
          "rate": 2.6,
          "count": 235
        }
      },
      {
        "id": 12,
        "title": "Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 29.95,
        "category": "Clothing",
        "rating": {
          "rate": 2.9,
          "count": 340
        }
      },
      {
        "id": 13,
        "title": "Women Windbreaker Striped Climbing Raincoats",
        "price": 39.99,
        "category": "Clothing",
        "rating": {
          "rate": 3.8,
          "count": 679
        }
      },
      {
        "id": 14,
        "title": "Women's Solid Short Sleeve Boat Neck V ",
        "price": 9.85,
        "category": "Clothing",
        "rating": {
          "rate": 4.7,
          "count": 130
        }
      },
      {
        "id": 15,
        "title": "Women's Short Sleeve Moisture",
        "price": 7.95,
        "category": "Clothing",
        "rating": {
          "rate": 4.5,
          "count": 146
        }
      },
      {
        "id": 16,
        "title": "Womens T Shirt Casual Lenin",
        "price": 12.99,
        "category": "Clothing",
        "rating": {
          "rate": 3.6,
          "count": 145
        }
      },
      {
        "id": 17,
        "title": "Womens T Shirt Casual White",
        "price": 13.99,
        "category": "Clothing",
        "rating": {
          "rate": 3.6,
          "count": 145
        }
      },
      {
        "id": 18,
        "title": "Womens T Shirt Casual Black",
        "price": 14.99,
        "category": "Clothing",
        "rating": {
          "rate": 3.6,
          "count": 145
        }
      },
      {
        "id": 19,
        "title": "Womens T Shirt Casual Brown",
        "price": 18.99,
        "category": "Clothing",
        "rating": {
          "rate": 3.6,
          "count": 145
        }
      },
      {
        "id": 19,
        "title": "Womens T Shirt Casual Cotton",
        "price": 19.99,
        "category": "Clothing",
        "rating": {
          "rate": 3.6,
          "count": 145
        }
      },
      {
        "id": 20,
        "title": "Womens T Shirt Casual Cotton",
        "price": 21.99,
        "category": "Clothing",
        "rating": {
          "rate": 3.6,
          "count": 145
        }
      }
];


const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/') {
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
  } else if (req.url === '/men') {
    res.writeHead(200);
    res.end(JSON.stringify(menProducts));
  } else if (req.url === '/women') {
    res.writeHead(200);
    res.end(JSON.stringify(womenProducts));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Page not found' }));
  }
});


const port = 8081;
const hostname = 'localhost';


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
