import { Injectable } from '@angular/core'
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {userName: 'Darya', userPass: '111'},
      {userName: 'Kira', userPass: '777'},
      {userName: 'Nata', userPass: '222'}
    ]
    const products = [
        {
            "id": 0,
            "image": "https://images-eu.ssl-images-amazon.com/images/I/51vUT2jBuAL.jpg",
            "title": "The Contract (The Contract Series Book 1)",
            "author": "Melanie Moreland",
            "description": "A tyrant by day, a playboy by night. That is the reputation that precedes Richard VanRyan. He lives life the way he wants, no concern for the opinion of others.",
            "price": 137,
            "currency": "$",
            "type": "book"
        },
        {
            "id": 1,
            "image": "https://images-na.ssl-images-amazon.com/images/I/41k9HxNTJQL._SX311_BO1,204,203,200_.jpg",
            "title": "Life is What You Make It",
            "author": "Preeti Shenoy ",
            "description": "The story revolves around Ankita’s struggles, determination, her decisions and her faith in self. The book beautifully describes how she gets acquainted with her bipolar disorder, how she decides to help her own self and how she battles these situations all by herself.",
            "price": 56,
            "currency": "$",
            "type": "book"
        },
        {
            "id": 2,
            "image": "https://www.newsstand.co.uk/i2619224/Zoom/BLOOM_Issue-3.jpg",
            "title": "Bloom Magazine",
            "author": "Bloom Magazine",
            "description": "Bloom is a magazine for gardeners, plant admirers, nature lovers, curious explorers and outdoor adventurers.",
            "price": 25,
            "currency": "$",
            "type": "magazine"
        },
        {
            "id": 3,
            "image": "https://images-na.ssl-images-amazon.com/images/I/51YDQZYoHqL._SX324_BO1,204,203,200_.jpg",
            "title": "Can Love Happen Twice",
            "author": "Ravinder Singh",
            "description": "In today's generation, love and relationships have lost the profound effect that they used to have.",
            "price": 30,
            "currency": "$",
            "type": "book"
        },
        {
            "id": 4,
            "image": "https://www.newsstand.co.uk/i2622755/Zoom/POSITIVE-NEWS_Issue-98.jpg",
            "title": "Positive News Magazine",
            "author": "Positive News Magazine",
            "description": "A quarterly magazine that strives towards constructive journalism and truth bearing as a force for good. Positive News magazine is an independent title reporting on current affairs and progressive politics.",
            "price": 17,
            "currency": "$",
            "type": "magazine"
        },
        {
            "id": 5,
            "image": "https://www.newsstand.co.uk/i2619224/Zoom/BLOOM_Issue-3.jpg",
            "title": "Bloom Magazine",
            "author": "Bloom Magazine",
            "description": "Bloom is a magazine for gardeners, plant admirers, nature lovers, curious explorers and outdoor adventurers.",
            "price": 25,
            "currency": "$",
            "type": "magazine"
        },
        {
            "id": 6,
            "image": "https://images-na.ssl-images-amazon.com/images/I/51YDQZYoHqL._SX324_BO1,204,203,200_.jpg",
            "title": "Can Love Happen Twice",
            "author": "Ravinder Singh",
            "description": "In today's generation, love and relationships have lost the profound effect that they used to have.",
            "price": 30,
            "currency": "$",
            "type": "book"
        },
        {
            "id": 7,
            "image": "https://www.newsstand.co.uk/i2622755/Zoom/POSITIVE-NEWS_Issue-98.jpg",
            "title": "Positive News Magazine",
            "author": "Positive News Magazine",
            "description": "A quarterly magazine that strives towards constructive journalism and truth bearing as a force for good. Positive News magazine is an independent title reporting on current affairs and progressive politics.",
            "price": 17,
            "currency": "$",
            "type": "magazine"
        },
        {
            "id": 8,
            "image": "https://www.newsstand.co.uk/i2619224/Zoom/BLOOM_Issue-3.jpg",
            "title": "Bloom Magazine",
            "author": "Bloom Magazine",
            "description": "Bloom is a magazine for gardeners, plant admirers, nature lovers, curious explorers and outdoor adventurers.",
            "price": 25,
            "currency": "$",
            "type": "magazine"
        },
        {
            "id": 9,
            "image": "https://images-na.ssl-images-amazon.com/images/I/51YDQZYoHqL._SX324_BO1,204,203,200_.jpg",
            "title": "Can Love Happen Twice",
            "author": "Ravinder Singh",
            "description": "In today's generation, love and relationships have lost the profound effect that they used to have.",
            "price": 30,
            "currency": "$",
            "type": "book"
        },
        {
            "id": 10,
            "image": "https://www.newsstand.co.uk/i2622755/Zoom/POSITIVE-NEWS_Issue-98.jpg",
            "title": "Positive News Magazine",
            "author": "Positive News Magazine",
            "description": "A quarterly magazine that strives towards constructive journalism and truth bearing as a force for good. Positive News magazine is an independent title reporting on current affairs and progressive politics.",
            "price": 17,
            "currency": "$",
            "type": "magazine"
        }
        ,
        {
            "id": 11,
            "image": "https://images-na.ssl-images-amazon.com/images/I/51YDQZYoHqL._SX324_BO1,204,203,200_.jpg",
            "title": "Can Love Happen Twice",
            "author": "Ravinder Singh",
            "description": "In today's generation, love and relationships have lost the profound effect that they used to have.",
            "price": 30,
            "currency": "$",
            "type": "book"
        },
        {
            "id": 12,
            "image": "https://www.newsstand.co.uk/i2622755/Zoom/POSITIVE-NEWS_Issue-98.jpg",
            "title": "Positive News Magazine",
            "author": "Positive News Magazine",
            "description": "A quarterly magazine that strives towards constructive journalism and truth bearing as a force for good. Positive News magazine is an independent title reporting on current affairs and progressive politics.",
            "price": 17,
            "currency": "$",
            "type": "magazine"
        }
    ]
    return { users, products }
  }
  constructor() { }
}
