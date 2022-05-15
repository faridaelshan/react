import womanimg0 from '../img/c06.jpg'
import womanimg1 from '../img/c05.jpg'
import womanimg2 from '../img/c02.jpg'
import womanimg3 from '../img/c03.jpg'
import womanimg4 from '../img/c04.jpg'
import womanimg5 from '../img/c01.jpg'
import manimg0 from '../img/c09.jpg'
import manimg1 from '../img/c011.jpg'
import manimg2 from '../img/c010.jpg'
import manimg3 from '../img/c07.jpg'
import manimg4 from '../img/c08.jpg'
import kidimg0 from '../img/c015.jpg'
import kidimg1 from '../img/c014.jpg'
import kidimg2 from '../img/c013.jpg'
import kidimg3 from '../img/c016.jpg'
import kidimg4 from '../img/c012.jpg'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import prod1 from '../img/prod1.jpg'
import prod2 from '../img/prod2.jpg'
import prod3 from '../img/prod3.jpg'
import prod4 from '../img/prod4.jpg'
import prod5 from '../img/prod5.jpg'
import prod6 from '../img/prod6.jpg'
import prod7 from '../img/prod7.jpg'
import prod8 from '../img/prod8.jpg'


const Data ={
    navData:[
        {
            navItem: 'Home',
            to:"/",
        },
        {
            navItem: 'Shop',
            to:"/"
        },
        {
            navItem: 'Pages',
            to:"/"
        },
        {
            navItem: 'Blog',
            to:"/"
        },
        {
            navItem: 'Features',
            to:"/"
        }
    ],
    category:[
        {
            categoryItem: 'Womens',
            click: "woman"
        },
        {
            categoryItem: 'Mens',
            click: "man"
        },
        {
            categoryItem: 'Kids',
            click:"kid"
        }
    ],
    womanCategoryCard:[
        {
            title: 'Bag',
            img: womanimg0
        },
        {
            title: 'Jeans',
            img: womanimg1
        },
        {
            title: 'Boots',
            img: womanimg2
        },
        {
            title: 'T-Shirts',
            img: womanimg3
        },
        {
            title: 'Tops',
            img: womanimg4
        },
        {
            title: 'Dresses',
            img: womanimg5
        }
    ],
    manCategoryCard:[
        {
            title: 'Hats',
            img: manimg0
        },
        {
            title: 'Accessories',
            img: manimg1
        },
        {
            title: 'Glasses',
            img: manimg2
        },
        {
            title: 'Slippers',
            img: manimg3
        },
        {
            title: 'Polo Shirts',
            img: manimg4
        },
    ],
    kidCategoryCard:[
        {
            title: 'Coat',
            img:kidimg0
        },
        {
            title: 'Outerwear',
            img:kidimg1
        },
        {
            title: 'Shoes',
            img:kidimg2
        },
        {
            title: 'Hoodie',
            img:kidimg3
        },
        {
            title: 'Knits',
            img:kidimg4
        }
    ],
    categoyshop:[
        {
            title:"Summer Hats",
            img:img1
        },
        {
            title:"Men's shirts",
            img:img2
        },
        {
            title:"Floral Dresses",
            img:img3
        }
    ],
    productData:[
        {
            img:prod1,
            title:"Soft Flap Crossbody",
            price:49.90,
            id:0
        },
        {
            img:prod2,
            title:"Hiking Boots",
            price:44.00,
            id:1
        },
        {
            img:prod3,
            title:"fxjPreschool Flex Runnercj",
            price:42.00,
            id:2
        },
        {
            img:prod4,
            title:"Basic Knit Pompom",
            price:100.00,
            id:3
        },
        {
            img:prod5,
            title:"Boys Yellow Hodded",
            price:50.00,
            id:4
        },
        {
            img:prod6,
            title:"Merino Wool Ridge Cuff",
            price:35.00,
            id:5
        },
        {
            img:prod7,
            title:"Children Burford Duffle",
            price:320.00,
            id:6
        },
        {
            img:prod8,
            title:"Stripe Panel Down-filled",
            price:5,
            id:7
        }
]
}

export default Data