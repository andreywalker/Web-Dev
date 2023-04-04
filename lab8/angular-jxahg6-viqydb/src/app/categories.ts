import { Product, products } from './products';

export interface Category {
    name: string;
    img: string;
    description: string;
  }

export const categories = [
    {
    name: 'Медицина',
    img: 'https://www.ixbt.com/img/n1/news/2022/7/3/tably_large.jpg',
    description: 'То, что спасает миллионы жизней каждый день. Ну или не спасает',
    },
    {
    name: 'Еда',
    img: 'https://www.advantour.com/img/kazakhstan/food/kazakh-dairy-products.jpg',
    description: 'То, что реально спасает жизни людям. И кайф еще приносит',
    },
    {
    name: 'Бытовая техника',
    img: 'http://filearchive.cnews.ru/img/zoom/2010/01/25/1_6b1c1.jpg',
    description: 'Будет стоять на кухне непользованное еще года 2',
    },
    {
    name: 'Мёбель',
    img: 'https://www.kuxni.net/upload/iblock/cc9/wbj4t233d29nfal1alddf2yeiey3k8ff/bigkomp07_Cam01.jpg',
    description: 'Чтоб было где есть, спать и в принципе существовать',
    },
    {
    name: 'Электроника',
    img: 'http://zhzh.info/_pu/125/86098916.jpg',
    description: 'Место для жизни',
    },
];