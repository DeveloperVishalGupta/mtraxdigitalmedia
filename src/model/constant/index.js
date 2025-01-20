import contactPage from '@/assets/images/HeaderCarousel/contactPage.jpg'
import coverPage from '@/assets/images/HeaderCarousel/coverPage.jpg'
import embeddedLink from '@/assets/images/HeaderCarousel/embeddedLink.jpg'
import ownerPage from '@/assets/images/HeaderCarousel/ownerPage.jpg'
import product1 from '@/assets/images/HeaderCarousel/product1.png'
import product2 from '@/assets/images/HeaderCarousel/product2.jpg'
import product3 from '@/assets/images/HeaderCarousel/product3.jpg'
import product4 from '@/assets/images/HeaderCarousel/product4.jpg'
import product5 from '@/assets/images/HeaderCarousel/product5.jpg'
import productIntro1 from '@/assets/images/HeaderCarousel/productIntro1.jpg'
import productIntro from '@/assets/images/HeaderCarousel/productIntro.jpg'
import quote from '@/assets/images/HeaderCarousel/quote.jpg'
import service1 from '@/assets/images/service1.png'
import AnitaAromatic from '@/assets/images/partner/AnitaAromatic.png'
import ArganQOD from '@/assets/images/partner/ArganQOD.png'
import BrazilianHairtech from '@/assets/images/partner/BrazilianHairtech.png'
import Deplieve from '@/assets/images/partner/Deplieve.png'
import Jeannot from '@/assets/images/partner/Jeannot.png'
import Kanpeki from '@/assets/images/partner/Kanpeki.png'
import Loreal from '@/assets/images/partner/Loreal.png'
import MoroccanOil from '@/assets/images/partner/MoroccanOil.png'
import O3 from '@/assets/images/partner/O3.png'
import Olaplex from '@/assets/images/partner/Olaplex.png'
import Raaga from '@/assets/images/partner/Raaga.png'
import RemyLaure from '@/assets/images/partner/RemyLaure.png'
import Richfeel from '@/assets/images/partner/Richfeel.png'
import Spatika from '@/assets/images/partner/Spatika.png'
import WellaProfessional from '@/assets/images/partner/WellaProfessional.png'
import { time } from 'framer-motion'




export function NavMenus() {
  return [
    {
      title: "HOME",
      href: "/home",
      active: true,
    },
    {
      title: "category",
      href: "/category",
      active: true,
    },
    {
      title: "cart",
      href: "/cart",
      active: false,
    },
    {
      title: "Favorite",
      href: "/favorite",
      active: false,
    },
    {
      title: "CONNECT US",
      href: "/connect_us",
      active: false,
    },
  ];
}

export const CarouselItem = [
  {
    // heading: 'flat 30% off',
    // subeading: '+20% poits get back',
    btnText: 'Explore Now',
    image: product1,
    _id: 1,
    isShow: true
  },
  {
    heading: 'flat 10% off',
    subeading: '+20% poits get back',
    btnText: 'Explore Now',
    image: product2,
    _id: 1,
    isShow: true
  },
  {
    heading: 'flat 40% off',
    subeading: '+10% poits get back',
    btnText: 'Explore Now',
    image: product3,
    _id: 1,
    isShow: true
  },
]

export const services = [
  {
    "title": "Car Wash",
    "img": service1,
    "detail": "Premium Car Wash Services",
    "subServices": [
      {
        "serviceName": "Exterior Wash",
        "priceRange": "$20",
        "timeRequired": "30 minutes",
        "subServices": [
          {
            "serviceName": "Hand Wash",
            "priceRange": "$10",
            "timeRequired": "15 minutes"
          },
          {
            "serviceName": "Wax Coating",
            "priceRange": "$15",
            "timeRequired": "20 minutes"
          }
        ]
      },
      {
        "serviceName": "Interior Cleaning",
        "priceRange": "$30",
        "timeRequired": "45 minutes",
        "subServices": [
          {
            "serviceName": "Vacuum Cleaning",
            "priceRange": "$10",
            "timeRequired": "20 minutes"
          },
          {
            "serviceName": "Seat Shampoo",
            "priceRange": "$15",
            "timeRequired": "25 minutes"
          }
        ]
      },
      {
        "serviceName": "Full Wash",
        "priceRange": "$50",
        "timeRequired": "1 hour"
      }
    ]
  },
  {
    "title": "Home Cleaning",
    "img": service1,
    "detail": "Professional Home Cleaning",
    "subServices": [
      {
        "serviceName": "Kitchen Cleaning",
        "priceRange": "$25",
        "timeRequired": "1 hour",
        "subServices": [
          {
            "serviceName": "Dishwashing",
            "priceRange": "$10",
            "timeRequired": "30 minutes"
          },
          {
            "serviceName": "Stove Scrubbing",
            "priceRange": "$15",
            "timeRequired": "30 minutes"
          }
        ]
      },
      {
        "serviceName": "Bathroom Cleaning",
        "priceRange": "$20",
        "timeRequired": "45 minutes"
      },
      {
        "serviceName": "Full House Cleaning",
        "priceRange": "$100",
        "timeRequired": "3 hours",
        "subServices": [
          {
            "serviceName": "Floor Mopping",
            "priceRange": "$30",
            "timeRequired": "1 hour"
          },
          {
            "serviceName": "Dusting",
            "priceRange": "$20",
            "timeRequired": "1 hour"
          }
        ]
      }
    ]
  },
  {
    "title": "Salon Services",
    "img": service1,
    "detail": "At-Home Beauty Services",
    "subServices": [
      {
        "serviceName": "Haircut",
        "priceRange": "$15",
        "timeRequired": "30 minutes"
      },
      {
        "serviceName": "Facial",
        "priceRange": "$40",
        "timeRequired": "1 hour",
        "subServices": [
          {
            "serviceName": "Basic Facial",
            "priceRange": "$25",
            "timeRequired": "30 minutes"
          },
          {
            "serviceName": "Advanced Facial",
            "priceRange": "$50",
            "timeRequired": "1 hour"
          }
        ]
      },
      {
        "serviceName": "Manicure & Pedicure",
        "priceRange": "$35",
        "timeRequired": "1.5 hours"
      }
    ]
  },
  {
    "title": "Car Wash",
    "img": service1,
    "detail": "Premium Car Wash Services",
    "subServices": [
      {
        "serviceName": "Exterior Wash",
        "priceRange": "$20",
        "timeRequired": "30 minutes",
        "subServices": [
          {
            "serviceName": "Hand Wash",
            "priceRange": "$10",
            "timeRequired": "15 minutes"
          },
          {
            "serviceName": "Wax Coating",
            "priceRange": "$15",
            "timeRequired": "20 minutes"
          }
        ]
      },
      {
        "serviceName": "Interior Cleaning",
        "priceRange": "$30",
        "timeRequired": "45 minutes",
        "subServices": [
          {
            "serviceName": "Vacuum Cleaning",
            "priceRange": "$10",
            "timeRequired": "20 minutes"
          },
          {
            "serviceName": "Seat Shampoo",
            "priceRange": "$15",
            "timeRequired": "25 minutes"
          }
        ]
      },
      {
        "serviceName": "Full Wash",
        "priceRange": "$50",
        "timeRequired": "1 hour"
      }
    ]
  },

]

export const aboutSalon = `Established in the year 2007, Spatika Spa & Salon in Chembur East, Mumbai is 
a top player in the category Unisex Beauty Parlours in the Mumbai. This well-known establishment acts as a one-stop
 destination servicing customers both local and from other parts of Mumbai. Over the course of its journey, this
  business has established a firm foothold in it's industry. The belief that customer satisfaction is as important as
   their products and services, have helped this establishment garner a vast base of customers, which continues to 
   grow by the day. This business employs individuals that are dedicated towards their respective roles and put in a
    lot of effort to achieve the common vision and larger goals of the company. In the near future, this business aims
     to expand its line of products and services and cater to a larger client base. In Mumbai this establishment
      occupies a prominent location in Chembur East. It is an effortless task in commuting to this establishment as
       there are various modes of transport readily available. It is at, Opposite Tea Villa Cafe,Near Chembur Olps 
       Church, Near Central Avenue Road, Next to Diamond Garden, which makes it easy for first-time visitors in
        locating this establishment. It is known to provide top service in the following categories: Salons, Beauty 
        Parlours, Unisex Salons, Makeup Artists, Beauty Salons, Hair Stylists, Unisex Beauty Parlours, Beauty Spas For Women.`


export const partenrs = [
  {
    title: 'Anita Aromatic',
    img: AnitaAromatic,
    discription: ''
  },
  {
    title: 'Argan QOD',
    img: ArganQOD,
    discription: ''
  },
  {
    title: 'Brazilian Hairtech',
    img: BrazilianHairtech,
    discription: ''
  },
  {
    title: 'Deplieve',
    img: Deplieve,
    discription: ''
  },
  {
    title: 'Jeannot',
    img: Jeannot,
    discription: ''
  },
  {
    title: 'Kanpeki',
    img: Kanpeki,
    discription: ''
  },
  {
    title: 'Loreal',
    img: Loreal,
    discription: ''
  },
  {
    title: 'Moroccan Oil',
    img: MoroccanOil,
    discription: ''
  },
  {
    title: 'O3',
    img: O3,
    discription: ''
  },
  {
    title: 'Olaplex',
    img: Olaplex,
    discription: ''
  },
  {
    title: 'Raaga',
    img: Raaga,
    discription: ''
  },
  {
    title: 'Remy Laure',
    img: RemyLaure,
    discription: ''
  },
  {
    title: 'Richfeel',
    img: Richfeel,
    discription: ''
  }
  ,
  {
    title: 'Spatika',
    img: Spatika,
    discription: ''
  },
  {
    title: 'Wella Professional',
    img: WellaProfessional,
    discription: ''
  },
]

export const contactNumbers = [
  "8655165656",
  "8655167676",
  "9167597776",
  "9167598886"
]
export const spatikaServiceMenu = {
  "menu": {
    "categories": [
      {
        title: 'Haircare'
        // y = null 
      },
      { title: 'Skincare' },
      { title: 'Waxing' },
      { title: 'Manicure/Pedicure' },
      { title: 'Spa' },
    ],
    "haircare": {
      "male": {
        "haircuts": [
          {
            "name": "Kings Haircut",
            "rate": 1000,
            "members_rate": 800,
            "time": 15,
            "service": ['Haircut', 'Soothing', 'Head Massage', 'Hair wash', 'Styling']
          },
          {
            "name": "Haircut",
            "rate": 500,
            "members_rate": 400,
            time: null,
            service: null
          },
          {
            "name": "Haircut For undergraduates with ID card",
            "rate": 400,
            "members_rate": 320,
            time: null,
            service: null
          },
          {
            "name": "Kids below 12 years (without wash)",
            "rate": 375,
            "members_rate": 300,
            time: null,
            service: null
          },
          {
            "name": "Additional charges for Wash with Haircut / Head Massage",
            "rate": 125,
            "members_rate": 100,
            time: null,
            service: null
          }
        ],
        "head_massages": [
          {
            "name": "Coconut / Olive / Almond Oil",
            "rate": 650,
            "members_rate": 440,
            time: 30,
            service: null
          },
          {
            "name": "Moroccan Oil Head Massage",
            "rate": 1200,
            "members_rate": 960,
            time: 30,
            service: null
          },
          {
            "name": "Yuana Oil Head Massage",
            "rate": 900,
            "members_rate": 720,
            time: 30,
            service: null
          }
        ],
        "hair_spa": [
          {
            "name": "Loreal - Hair Spa up to neck",
            "rate": 1000,
            "members_rate": null,
            time: 60,
            service: null
          },
          {
            "name": "Moroccan / Bio Top - Hair Spa",
            "rate": 1800,
            "members_rate": null,
            time: 60,
            service: null
          }
        ],
        "shave": [
          {
            "name": "Classic Shave",
            "rate": 400,
            "members_rate": 320,
            time: null,
            service: null
          },
          {
            "name": "Luxury Shave",
            "rate": 650,
            "members_rate": 520,
            time: null,
            service: ['pre shave oil', 'timeless straight razor shave', 'mini face massage']
          },
          {
            "name": "Kings Shave",
            "rate": 1100,
            "members_rate": 880,
            time: null,
            service: ['mini face scrub', 'pre shave oil', 'timeless straight razor shave', 'mini face massage', 'combo hot and cold towel wrap']
          },
          {
            "name": "Beard Trim / Styling / Crafting",
            "rate": 350,
            "members_rate": 280,
            time: null,
            service: null
          }
        ],
        "hair_coloring": [
          {
            "name": "Majirel Global Colour",
            "rate": 1000,
            "members_rate": 800,
            time: null,
            service: ['Hair up to neck (includes moustache)']
          },
          {
            "name": "Inoa Global Colour",
            "rate": 1200,
            "members_rate": 960,
            time: null,
            service: ['Hair up to neck (includes moustache)']
          },
          {
            "name": "Majirel",
            "rate": 400,
            "members_rate": 320,
            time: null,
            service: ['Sidelocks', 'moustache']
          },
          {
            "name": "Inoa",
            "rate": 475,
            "members_rate": 380,
            time: null,
            service: ['Sidelocks', 'moustache']
          },
          {
            "name": "Majirel Beard",
            "rate": 500,
            "members_rate": 400,
            time: null,
            service: null
          },
          {
            "name": "Inoa Beard",
            "rate": 550,
            "members_rate": 440,
            time: null,
            service: null
          },
          {
            "name": "Majirel highlights",
            "rate": 1200,
            "members_rate": 960,
            time: null,
            service: null
          },
          {
            "name": "Inoa highlights",
            "rate": 1200,
            "members_rate": 960,
            time: null,
            service: null
          }
        ]
      },
      "female": {
        "haircuts": [
          {
            "name": "Fringe Cut",
            "rate": 250,
            "members_rate": 200,
            time: null,
            service: null
          },
          {
            "name": "Kids below 12 years (without wash)",
            "rate": 425,
            "members_rate": 340,
            time: null,
            service: null
          },
          {
            "name": "Haircuts",
            "rate": 850,
            "members_rate": 638,
            time: null,
            service: null
          }
        ],
        "styling": {
          "Ironing": [
            {
              "name": "Ironing - Up to Shoulder",
              "rate": 650,
              "members_rate": 520,
              time: null,
              service: null
            },
            {
              "name": "Ironing - Below Shoulder",
              "rate": 750,
              "members_rate": 600,
              time: null,
              service: null
            },
            {
              "name": "Ironing - Up to Waist",
              "rate": 1100,
              "members_rate": 880,
              time: null,
              service: null
            }
          ],
          "hair_wash": [
            {
              "name": "Hair wash - Hair up to shoulder",
              "rate": 400,
              "members_rate": 320,
              time: null,
              service: null
            },
            {
              "name": "Hair wash - Hair Below shoulder",
              "rate": 475,
              "members_rate": 380,
              time: null,
              service: null
            },
            {
              "name": "Hair wash - Hair up to Waist",
              "rate": 600,
              "members_rate": 480,
              time: null,
              service: null
            },
            {
              "name": "Additional charges for Wash with Haircut / Head Massage",
              "rate": 250,
              "members_rate": 200,
              time: null,
              service: null
            },
          ],
          "blow_dry": [
            {
              "name": "Hair up to shoulder",
              "rate": 550,
              "members_rate": 440
            },
            {
              "name": "Hair Below shoulder",
              "rate": 700,
              "members_rate": 560
            },
            {
              "name": "Hair up to Waist",
              "rate": 950,
              "members_rate": 760
            },
            {
              "name": "With shampoo - Hair up to Shoulder",
              "rate": 700,
              "members_rate": 560
            },
            {
              "name": "With shampoo - Hair below shoulder",
              "rate": 850,
              "members_rate": 560
            },
            {
              "name": "With Shampoo - Hair Up to Waist",
              "rate": 1100,
              "members_rate": 880
            }
          ],
          "hair_color": [
            {
              "name": "Majirel Colour Streak",
              "rate": 500,
              "members_rate": 400
            },
            {
              "name": "Majirel Touch up (up to 2 inches)",
              "rate": 1500,
              "members_rate": 1200
            },
            {
              "name": "Majirel Colour Re-growth up to 4 inches",
              "rate": 1900,
              "members_rate": 1520
            },
            {
              "name": "Majirel Global Colour - Hair up to neck",
              "rate": 2500,
              "members_rate": 2000
            },
            {
              "name": "Majirel Global Colour - Hair up to shoulder",
              "rate": 4000,
              "members_rate": 3200
            },
            {
              "name": "Majirel Global - hair below shoulder",
              "rate": 5000,
              "members_rate": 4000
            },
            {
              "name": "Majirel Global Colour - Hair up to waist",
              "rate": 6250,
              "members_rate": 5000
            }
          ],
          "inoa_Colour_Streak": [
            {
              "name": "Inoa Touch up (up to 2 inches)",
              "rate": 500,
              "members_rate": 400
            },
            {
              "name": "Inoa Colour Re-growth up to 4 inches",
              "rate": 1800,
              "members_rate": 1440
            },
            {
              "name": "Inoa Global Colour - Hair up to neck",
              "rate": 3000,
              "members_rate": 2400
            },
            {
              "name": "Inoa Global Colour - Hair up to shoulder",
              "rate": 4200,
              "members_rate": 3360
            },
            {
              "name": "Inoa Global - Hair below shoulder",
              "rate": 5200,
              "members_rate": 4160
            },
            {
              "name": "Inoa Global colour - hair up to waist",
              "rate": 6500,
              "members_rate": 5200
            },
          ],
          "majirel_inoa": [
            {
              "name": "Global color + Highlights air up to neck (Combo)",
              "rate": 4200,
              "members_rate": 3360
            },
            {
              "name": "Global color + Highlights air up to shoulder (Combo)",
              "rate": 6200,
              "members_rate": 4960
            },
            {
              "name": "Global color + Highlights air below shoulder (Combo)",
              "rate": 8400,
              "members_rate": 6720
            },
            {
              "name": "Global color + Highlights air upto waist (Combo)",
              "rate": 10300,
              "members_rate": 8240
            },
          ],
          "Highlights": [
            {
              "name": "Majirel - upto neck",
              "rate": 3000,
              "members_rate": 2400
            },
            {
              "name": "Majirel - upto shoulder",
              "rate": 4000,
              "members_rate": 3200
            },
            {
              "name": "Majirel - below shoulder",
              "rate": 5300,
              "members_rate": 4240
            },
            {
              "name": "Majirel - upto waist",
              "rate": 6500,
              "members_rate": 5200
            },
            {
              "name": "Inoa - upto neck",
              "rate": 3300,
              "members_rate": 2640
            },
            {
              "name": "Inoa - upto shoulder",
              "rate": 4300,
              "members_rate": 3440
            },
            {
              "name": "Inoa - below shoulder",
              "rate": 5600,
              "members_rate": 4480
            },
            {
              "name": "Inoa - upto waist",
              "rate": 6800,
              "members_rate": 5440
            },
          ],
        },
        "haircare": {
          "hair_spa": [
            {
              "name": "Loreal - Hair Spa upto neck",
              "rate": 1000,
              "members_rate": null
            },
            {
              "name": "Loreal - Hair Spa upto shoulder",
              "rate": 1200,
              "members_rate": null
            },
            {
              "name": "Loreal - Hair Spa below shoulder",
              "rate": 1600,
              "members_rate": null
            },
            {
              "name": "Loreal - Hair Spa upto waist",
              "rate": 1900,
              "members_rate": null
            },
          ],
          "moroccan_Hair_Spa ": [
            {
              "name": "Upto Neck",
              "rate": 1800,
              "members_rate": null
            },
            {
              "name": "Upto shoulder",
              "rate": 2200,
              "members_rate": null
            },
            {
              "name": "below shoulder",
              "rate": 2700,
              "members_rate": null
            },
            {
              "name": "Upto waist",
              "rate": 3200,
              "members_rate": null
            },
          ],
          "head_Massage ": [
            {
              "name": "Coconut / Olive / Almond Oil",
              "rate": 650,
              "members_rate": 440,
              "time": 30
            },
            {
              "name": "Moroccan Oil Head massage",
              "rate": 1200,
              "members_rate": 960,
              "time": 30
            },
            {
              "name": "Yuana Oil Head Massage",
              "rate": 900,
              "members_rate": 720,
              "time": 30
            },

          ],
          "hairTreatments": [
            {
              "name": "Lipidium Primer Reconstructor for dry & damaged hair",
              "rate": 500,
              "unit": 'tube',
              "members_rate": null,

            },
            {
              "name": "Clear Dose for dandruff / dry scalp",
              "rate": 1100,
              "unit": 'tube',
              "members_rate": null,
            },
          ],
          "Extenso": [
            {
              "name": "fringe",
              "rate": 2000,
              "members_rate": 1500,

            },
            {
              "name": "Upto neck",
              "rate": 3900,
              "members_rate": 2925,
            },
            {
              "name": "Upto shoulder",
              "rate": 5000,
              "members_rate": 3750,

            },
            {
              "name": "below shoulder",
              "rate": 7000,
              "members_rate": 5250,
            },
            {
              "name": "upto waist",
              "rate": 9000,
              "members_rate": 6750,

            },
            {
              "name": "Regrowth or touch up upto 4 inches",
              "rate": 3000,
              "members_rate": 2250,
            },
          ],
        },
        "protein_Reinforcement": {
          "cysteine_complex": [
            {
              "name": "Fringe",
              "rate": 3000,
              "members_rate": 2250
            },
            {
              "name": "Upto neck",
              "rate": 4200,
              "members_rate": 3150
            },
            {
              "name": "Upto shoulder",
              "rate": 6200,
              "members_rate": 4650
            },
            {
              "name": "Below shoulder",
              "rate": 8200,
              "members_rate": 6150
            },
            {
              "name": "Upto waist",
              "rate": 10200,
              "members_rate": 7650
            },
          ],
          "QOD_smoothening": [
            {
              "name": "Fringe",
              "rate": 3350,
              "members_rate": 2663
            },
            {
              "name": "Upto neck",
              "rate": 5500,
              "members_rate": 4125
            },
            {
              "name": "Upto shoulder",
              "rate": 7250,
              "members_rate": 5438
            },
            {
              "name": "Below shoulder",
              "rate": 9500,
              "members_rate": 7125
            },
            {
              "name": "Upto waist",
              "rate": 11000,
              "members_rate": 8250
            },
          ],
          "tongs": [
            {
              "name": "Hair Tongs",
              "rate": 1500,
              "members_rate": 1200
            },
            {
              "name": "Iron Tongs",
              "rate": 1500,
              "members_rate": 1200
            },
            {
              "name": "Hair Trim",
              "rate": 600,
              "members_rate": 480
            },
            {
              "name": "For Undergraduates With Id Card",
              "rate": 550,
              "members_rate": 440
            },
            {
              "name": "Basic Styling (pin-up/ironing/tong/blow-dry)",
              "rate": 1750,
              "members_rate": 1400
            },
            {
              "name": "Up-Dos (pre styling/bun/chignon/knot)",
              "rate": 2500,
              "members_rate": 2000
            },
          ],

        },
        "threading": [
          {
            "name": "Eyebrows",
            "rate": 90,
            "members_rate": 72
          },
          {
            "name": "Chin",
            "rate": 90,
            "members_rate": 72
          },
          {
            "name": "Upper lip",
            "rate": 90,
            "members_rate": 72
          },
          {
            "name": "Lower lip",
            "rate": 90,
            "members_rate": 72
          },
          {
            "name": "Forehead",
            "rate": 90,
            "members_rate": 72
          },
          {
            "name": "Jawline",
            "rate": 105,
            "members_rate": 84
          },
          {
            "name": "Sidelocks",
            "rate": 105,
            "members_rate": 84
          },
        ]
      }
    },
    "skincare": {
      "male": {
        "Kenpaki_D_Tan": [
          {
            "name": "Kenpaki D Tan",
            "rate": 605,
            "members_rate": null
          },
        ],
        "Skinora": [
          {
            "name": "Hydra facial treatment",
            "rate": 3500,
            "members_rate": null
          },
          {
            "name": "Age Control facial treatment",
            "rate": 3500,
            "members_rate": null
          },
          {
            "name": "Calming facial treatment",
            "rate": 3500,
            "members_rate": null
          },
          {
            "name": "Mattifying  facial treatment",
            "rate": 3500,
            "members_rate": null
          },
          {
            "name": "Radiance facial treatment",
            "rate": 3500,
            "members_rate": null
          },
        ],
        "Body_Scrub": [
          {
            "name": "Body Scrub",
            "rate": 2000,
            "members_rate": null
          },
        ],
        "Body_D_tan": [
          {
            "name": "Body D tan",
            "rate": 2500,
            "members_rate": null
          },
        ],
        "Body_Bleach": [
          {
            "name": "Body Bleach",
            "rate": 3000,
            "members_rate": null
          },
        ],
        "facials": [
          {
            "name": "Jennot Hydra Boost",
            "rate": 3000
          },
          {
            "name": "Jennot Instant glow",
            "rate": 3000
          },
          {
            "name": "Bikni D Tan",
            "rate": 400
          },
          {
            "name": "Bikni Scurb",
            "rate": 500
          },
          {
            "name": "Bikni Line",
            "rate": 750
          },
          {
            "name": "Head Massage",
            "rate": 650
          },
          {
            "name": "Eyebrow  Trading",
            "rate": 100
          },
          {
            "name": "Upperlip",
            "rate": 100
          },
          {
            "name": "Four Head",
            "rate": 100
          },
          {
            "name": "Lower Lip",
            "rate": 100
          },
        ],
        "Thermo_Herb_Bleach": [
          {
            "name": "Jennot",
            "rate": 4000
          },
          {
            "name": "Full Body waxing",
            "rate": 3700
          },
          {
            "name": "Full Aram’s",
            "rate": 600
          },
          {
            "name": "Full legs ",
            "rate": 800
          },
          {
            "name": "Under Arms (Peel  Off)",
            "rate": 300
          },
        ],
        "Peel_Off": [
          {
            "name": "Full Front",
            "rate": 1800
          },
          {
            "name": "Full Back",
            "rate": 1800
          },
        ]
      },
      "female": {
        "Bleach": {
          "Oxy_or_De_Tan_bleach": [
            {
              "name": "Upper lip",
              "rate": 130,
              "members_rate": 104
            },
            {
              "name": "Face n Neck",
              "rate": 525,
              "members_rate": 420
            },
            {
              "name": "Under Arms",
              "rate": 275,
              "members_rate": 220
            },
            {
              "name": "Full Arms includes palm",
              "rate": 600,
              "members_rate": 480
            },
            {
              "name": "Half Arms includes Palm",
              "rate": 500,
              "members_rate": 400
            },
            {
              "name": "Full legs includes feet",
              "rate": 800,
              "members_rate": 640
            },
            {
              "name": "Half Legs includes feet",
              "rate": 560,
              "members_rate": 448
            },
            {
              "name": "Full Front with stomach",
              "rate": 810,
              "members_rate": 648
            },
            {
              "name": "Full back",
              "rate": 810,
              "members_rate": 648
            },
            {
              "name": "Half front",
              "rate": 500,
              "members_rate": 400
            },
            {
              "name": "Half Back",
              "rate": 500,
              "members_rate": 400
            },
            {
              "name": "Stomach",
              "rate": 500,
              "members_rate": 400
            },
            {
              "name": "Feet",
              "rate": 325,
              "members_rate": 260
            },
            {
              "name": "Back of Palms",
              "rate": 325,
              "members_rate": 260
            },
            {
              "name": "Full Body",
              "rate": 3000,
              "members_rate": 2400
            },
          ],
          "Thermo_Herb_Bleach": [
            {
              "name": "Under Arms",
              "rate": 300,
              "members_rate": 240
            },
            {
              "name": "Full Arms includes palm",
              "rate": 800,
              "members_rate": 640
            },
            {
              "name": "Half Arms includes Palm",
              "rate": 600,
              "members_rate": 480
            },
            {
              "name": "Full legs includes feet",
              "rate": 900,
              "members_rate": 720
            },
            {
              "name": "Half Legs includes feet",
              "rate": 700,
              "members_rate": 560
            },
            {
              "name": "Full Front with stomach",
              "rate": 900,
              "members_rate": 720
            },
            {
              "name": "Full back",
              "rate": 900,
              "members_rate": 720
            },
            {
              "name": "Half front",
              "rate": 550,
              "members_rate": 440
            },
            {
              "name": "Half Back",
              "rate": 550,
              "members_rate": 440
            },
            {
              "name": "Stomach",
              "rate": 550,
              "members_rate": 440
            },
            {
              "name": "Feet",
              "rate": 400,
              "members_rate": 320
            },
            {
              "name": "Back of Palms",
              "rate": 400,
              "members_rate": 320
            },
            {
              "name": "Full Body",
              "rate": 3750,
              "members_rate": 3000
            },
            {
              "name": "Bikini D tan",
              "rate": 400,
              "members_rate": null
            },
            {
              "name": "Bikini Scrub",
              "rate": 600,
              "members_rate": null
            },
          ]
        },
        "Masks": {
          'Black_Earth_Mask': [
            {
              "name": "Face and Neck",
              "rate": 1200,
              "members_rate": 960,
              time: 30
            },
            {
              "name": "Under Arms and Back of Palms",
              "rate": 656,
              "members_rate": 525,
              time: 30
            },
            {
              "name": "Back",
              "rate": 2500,
              "members_rate": 2000,
              time: 30
            },
            {
              "name": "Front",
              "rate": 2500,
              "members_rate": 2000,
              time: 30
            },
            {
              "name": "Full Arms",
              "rate": 2500,
              "members_rate": 1875,
              time: 30
            },
            {
              "name": "Half Arms",
              "rate": 1600,
              "members_rate": 1280,
              time: 30
            },
            {
              "name": "Full Legs",
              "rate": 5000,
              "members_rate": 4000,
              time: 30
            },
            {
              "name": "Half Legs",
              "rate": 3300,
              "members_rate": 2640,
              time: 30
            },
            {
              "name": "Feet",
              "rate": 656,
              "members_rate": 525,
              time: 30
            },
            {
              "name": "Behind",
              "rate": 900,
              "members_rate": 720,
              time: 30
            },
            {
              "name": "Full Body",
              "rate": 12500,
              "members_rate": 10000,
              time: 45
            },
          ],
          'Sensitive_Powder_Mask': [
            {
              "name": "Face and Neck",
              "rate": 1000,
              "members_rate": 800,
              time: 30
            },
            {
              "name": "Remy’S Face Massage",
              "rate": 650,
              "members_rate": 520,
              time: 15
            },
            {
              "name": "Remy’S Face Massage",
              "rate": 1000,
              "members_rate": 800,
              time: 30
            },
          ],
          "Brightening_mask_with_goodness_of_Vitamin_C": [
            {
              "name": "Face and Neck",
              "rate": 1000,
              "members_rate": 800,
              time: 30
            },
          ],
          "Under_Eye_Treatment": [
            {
              "name": "Under Eye Treatment",
              "rate": 900,
              "members_rate": 720,
              time: 30,
              service: ['Ultimate relaxation for eyes', 'helps in soothing and reducing under eye bags and dark circles']
            },
          ]
        },
        "Clean_Up": {

        }
      }
    }
  }
}
