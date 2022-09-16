import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';
import {nanoid} from 'nanoid'
import {Master,Comfy,Enigma,Uphead,Squaro,Simplex} from './images/seats/seatsImgs'
import {Magnifico,SimplusQuadratus,BladeSitter,Cuddlex,MovingLuxury,HomeJungle,QuoVadis} from './images/sofas/sofasImgs'
import {Agilos,StraightForward,Plusquam,Roped,Ceramic,TheMill,Twistify} from './images/tables/tablesImgs'
import {Plumberus,GoldenLight,BlackWidow,NordicHesitation,StandingWave,StandingTriple,QuiteStable,BigBang,LoneLight,HexaOcto,Shovelio} from './images/lamps/lampsImgs'
import {ChillingBirds,Planty,Us,HumbleNature,LongBirdRest,Moderni,Salad,JustBeauty,YellowDiamonds} from './images/pillows/pillowsImgs'
import SeatGallery from './components/SeatGallery';
import Explore from './components/Explore';
import LoyalSeat from './images/explore/pexels-valeria-boltneva-827518.jpg'
import WoodenPlanter from './images/explore/pexels-valeria-boltneva-1129413.jpg'
import TopGallery from './components/TopGallery';
import FindOut from './components/FindOut';
import Footer from './components/Footer';


const data = {
    "products": {
        "seats":[
            {
                'id':nanoid(),
                "imgSource": Master,
                "officialPrice": 30,
                "discount":10,
                "name":"Master",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales."
            },
            {
              'id':nanoid(),
                "imgSource": Comfy,
                "officialPrice": 45,
                "discount":0,
                "name":"Comfy",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales."
            },
            {
              'id':nanoid(),
                "imgSource": Enigma,
                "officialPrice": 45,
                "discount":0,
                "name":"Enigma",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales."
            },
            {
              'id':nanoid(),
                "imgSource": Uphead,
                "officialPrice": 25,
                "discount":0,
                "name":"Uphead",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales."
            },
            {
              'id':nanoid(),
                "imgSource": Squaro,
                "officialPrice": 40,
                "discount":0,
                "name":"Squaro",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales."
            },
            {
              'id':nanoid(),
                "imgSource": Simplex,
                "officialPrice": 20,
                "discount":0,
                "name":"Simplex",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales."
            }
        ],
        "sofas": [
            {
              'id':nanoid(),
                "imgSource": Magnifico,
                "officialPrice": 170,
                "discount":0,
                "name":"Magnifico",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales."
            },
            {
              'id':nanoid(),
                "imgSource": SimplusQuadratus,
                "officialPrice": 100,
                "discount":0,
                "name":"Simplus Quadratus",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales."
            },
            {
              'id':nanoid(),
                "imgSource": BladeSitter,
                "officialPrice": 300,
                "discount":0,
                "name":"Blade Sitter",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales."
            },
            {
              'id':nanoid(),
                "imgSource": Cuddlex,
                "officialPrice": 190,
                "discount":0,
                "name":"Cuddlex",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales."
            },
            {
              'id':nanoid(),
                "imgSource": MovingLuxury,
                "officialPrice": 250,
                "discount":0,
                "name":"Moving Luxury",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales."
            },
            {
              'id':nanoid(),
                "imgSource": HomeJungle,
                "officialPrice": 120,
                "discount":0,
                "name":"Home Jungle",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales."
            },
            {
              'id':nanoid(),
                "imgSource": QuoVadis,
                "officialPrice": 200,
                "discount":0,
                "name":"Quo Vadis",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales."
            }
        ],
        "tables":[
            {
              'id':nanoid(),
            "imgSource": Agilos,
                "officialPrice": 400,
                "discount":0,
                "name":"Agilos",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales."
            },
            {
              'id':nanoid(),
                "imgSource": StraightForward,
                "officialPrice": 280,
                "discount":0,
                "name":"Straight&Forward",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales."
            },
            {
              'id':nanoid(),
                "imgSource": Plusquam,
                "officialPrice": 180,
                "discount":0,
                "name":"Plusquam",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales."
            },
            {
              'id':nanoid(),
            "imgSource": Roped,
                "officialPrice": 220,
                "discount":0,
                "name":"Roped",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales."
            },
            {
              'id':nanoid(),
            "imgSource": Ceramic,
                "officialPrice": 400,
                "discount":0,
                "name":"Ceramic",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales."
            },
            {
              'id':nanoid(),
                "imgSource": TheMill,
                "officialPrice": 550,
                "discount":0,
                "name":"The Mill",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales."
            },
            {
              'id':nanoid(),
            "imgSource": Twistify,
                "officialPrice": 200,
                "discount":0,
                "name":"Twistify",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales."
            },
        ],
        "lamps":[
          {
            'id':nanoid(),
          "imgSource": Plumberus,
              "officialPrice":100,
              "discount":0,
              "name":"Plumberus",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales.",
              "background":true

          },
          {
            'id':nanoid(),
          "imgSource": GoldenLight,
              "officialPrice":25,
              "discount":0,
              "name":"Golden Light",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales.",
              "background":false
          },
          {
            'id':nanoid(),
          "imgSource": BlackWidow,
              "officialPrice":20,
              "discount":0,
              "name":"Black Widow",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales.",
              "background":false
          },
          {
            'id':nanoid(),
          "imgSource": NordicHesitation,
              "officialPrice":35,
              "discount":0,
              "name":"Nordic Hesitation",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales.",
              "background":true
          },
          {
            'id':nanoid(),
          "imgSource": StandingWave,
              "officialPrice":45,
              "discount":0,
              "name":"Standing Wave",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales.",
              "background":true
          },
          {
            'id':nanoid(),
          "imgSource": StandingTriple,
              "officialPrice":50,
              "discount":0,
              "name":"Standing Triple",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales.",
              "background":true
          },
          {
            'id':nanoid(),
          "imgSource": QuiteStable,
              "officialPrice":15,
              "discount":0,
              "name":"Quite Stable",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales.",
              "background":true
          },
          {
            'id':nanoid(),
          "imgSource": BigBang,
              "officialPrice":40,
              "discount":0,
              "name":"Big Bang",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales.",
              "background":true
          },
          {
            'id':nanoid(),
          "imgSource": LoneLight,
              "officialPrice":30,
              "discount":0,
              "name":"Lone Light",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales.",
              "background":true
          },
          {
            'id':nanoid(),
          "imgSource": HexaOcto,
              "officialPrice":20,
              "discount":0,
              "name":"HexaOcto",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales.",
              "background":true
          },
          {
            'id':nanoid(),
          "imgSource": Shovelio,
              "officialPrice":20,
              "discount":0,
              "name":"Shovelio",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales.",
              "background":false
          },
        ],
        'pillows':[
          {
            'id':nanoid(),
            "imgSource": ChillingBirds,
              "officialPrice":4,
              "discount":0,
              "name":"Chilling Birds",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales.",
          },
          {
            'id':nanoid(),
            "imgSource": Planty,
              "officialPrice":4,
              "discount":20,
              "name":"Planty",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales.",
          },
          {
            'id':nanoid(),
            "imgSource": Us,
              "officialPrice":4,
              "discount":25,
              "name":"Us",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales.",
          },
          {
            'id':nanoid(),
            "imgSource": HumbleNature,
              "officialPrice":6,
              "discount":0,
              "name":"Humble Nature",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales.",
          },
          {
            'id':nanoid(),
            "imgSource": LongBirdRest,
              "officialPrice":5,
              "discount":0,
              "name":"Bird's Long Rest",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales.",
          },
          {
            'id':nanoid(),
            "imgSource": Moderni,
              "officialPrice":4,
              "discount":0,
              "name":"Moderni",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales.",
          },
          {
            'id':nanoid(),
            "imgSource": Salad,
              "officialPrice":3,
              "discount":0,
              "name":"Salad",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales.",
          },
          {
            'id':nanoid(),
            "imgSource": JustBeauty,
              "officialPrice":6,
              "discount":0,
              "name":"Just Beauty",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales.",
          },
          {
            'id':nanoid(),
            "imgSource": YellowDiamonds,
              "officialPrice":4,
              "discount":0,
              "name":"Yellow Diamonds",
              "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis consequat risus in ornare. Praesent rhoncus elementum eros, at accumsan augue dapibus condimentum. Praesent dignissim varius pulvinar. Pellentesque sodales ex at dolor varius, quis tincidunt elit bibendum. Aenean eu urna ut arcu condimentum hendrerit nec eget nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel sagittis velit. Sed ut eros vel lectus venenatis sodales.",
          },
          
        ]
    }
}


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <div className='bestseller'>
          <div className='bestseller--leftLine'></div>
          <h1>Our Best Seller</h1>
          <div className='bestseller--rightLine'></div>
        </div>

        <SeatGallery data={data} />
        <Explore down={{image:WoodenPlanter,productName:'Wooden Planter',price:'5'}} up={{image:LoyalSeat,productName:'Loyal Seat',price:'60'}}/>
        <TopGallery products={{pillows:data.products.pillows.slice(0,4),lamps:data.products.lamps.filter(lamp=>lamp.name==="Black Widow"||lamp.name==="Golden Light"||lamp.name==="Shovelio"), }} />
        <FindOut />
        <Footer />
    </div>
  );
}

export default App;
export {data};