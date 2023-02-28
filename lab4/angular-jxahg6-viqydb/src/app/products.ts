import { categories, Category } from './categories';

export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  description: string;
  link: string;
  category: string;
  likes:number;
  watsLink:string;

}

export const products = [
  {
    id: 1,
    name: 'Ревит',
    price: 799,
    rating: 4.5,
    img: 'https://images.satu.kz/163776127_revit-100drazhe-altajvitaminy.jpg',
    description: 'Витаминки',
    link: 'https://kaspi.kz/shop/p/altaivitaminy-revit-100-drazhe-100695785/?c=750000000#!/item',
    category:"Медицина",
    likes:0,
    watsLink:"whatsapp://send?text=https://kaspi.kz/shop/p/altaivitaminy-revit-100-drazhe-100695785/?c=750000000#!/item",
    
  },
  {
    id: 2,
    name: 'Zubochistka',
    price: 699,
    rating: 1,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdc/h53/67427144564766/zubochistki-108270150-1.jpg',
    description:
      '50 штук зубочисток в пластиковом диспенсере. Производство - Китай',
    link: 'https://kaspi.kz/shop/p/watsons-mint-50-sht-108270150/?c=750000000#!/item',
    category:"Бытовая техника",
    likes:0,
    watsLink:"whatsapp://send?text=https://kaspi.kz/shop/p/watsons-mint-50-sht-108270150/?c=750000000#!/item"
  },
  {
    id: 3,
    name: 'Курт',
    price: 1,
    rating: 100,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2b/ha6/45294250328094/ferma-orda-kurt-solenyj-110-g-102231155-1.jpg',
    description: 'Лучшая еда на свете',
    link: 'https://kaspi.kz/shop/p/ferma-orda-kurt-soljonyi-110-g-102231155/?c=750000000#!/item',
    category:"Еда",
    likes:0,
    
    watsLink:"whatsapp://send?text=https://kaspi.kz/shop/p/ferma-orda-kurt-soljonyi-110-g-102231155/?c=750000000#!/item"
  },
  {
    id: 4,
    name: 'Apple Watch',
    price: 514,
    rating: 4.2,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    description: 'поддержка платформ: iOS материал корпуса: алюминийцвет корпуса: черный технология экрана: OLED объем встроенной памяти: 32 Гб интерфейсы: Bluetooth, ,Wi-Fi, ,NFC время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов',
    link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
    category:"Электроника",
    likes:0,
    watsLink:"whatsapp://send?text=https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item"
  },
  {
    id: 5,
    name: 'Тостер CENTEK СТ-1432 ',
    price: 24.5,
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/hf3/32725893414942/centek-st-1432-cernyj-100295343-1-Container.jpg',
    description: 'тип управления: механическое количество тостов: 2 поддон для крошек: Да материал корпуса: пластик цвет: черный',
    link: 'https://kaspi.kz/shop/p/centek-st-1432-chernyi-100295343/?c=750000000#!/item',
    category:"Бытовая техника",
    likes:0,
    watsLink:"whatsapp://send?text=https://kaspi.kz/shop/p/centek-st-1432-chernyi-100295343/?c=750000000#!/item"
  },
  {
    id: 6,
    name: 'Маска для лица EKEL тканевая Aloe Ultra Hydrating 25 мл',
    price: 0.25,
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1e/h4c/32307118178334/ekel-aloe-ultra-hydrating-mask-100012922-1-Container.jpg',
    description: 'вид маски: тканевая действие: очищение, ,разглаживание, ,увлажнение объем: 25 мл тип кожи: для всех типов страна производства: Корея',
    link: 'https://kaspi.kz/shop/p/ekel-tkanevaja-aloe-ultra-hydrating-25-ml-100012922/?c=750000000#!/item',
    category:"Медицина",
    likes:0,
    watsLink:"whatsapp://send?text=https://kaspi.kz/shop/p/ekel-tkanevaja-aloe-ultra-hydrating-25-ml-100012922/?c=750000000#!/item"
  },
  {
    id: 7,
    name: 'Стул N-12',
    price: 17,
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/hdc/32360448491550/stul-klassicheskii-barneo-woodmold-n-12-81x50x25-belyi-100189414-1.jpg',
    description: 'тип: стул материал: пластик обивка: отсутствует жесткость сиденья: высокая высота, см: 81 ширина, см: 50 глубина, см: 25 цвет: белый страна: Китай',
    link: 'https://kaspi.kz/shop/p/centek-st-1432-chernyi-100295343/?c=750000000#!/item',
    category:"Мёбель",
    likes:0,
    watsLink:"whatsapp://send?text=https://kaspi.kz/shop/p/centek-st-1432-chernyi-100295343/?c=750000000#!/item"
  },
  {
    id: 8,
    name: 'поп-фильтр XTUGA POP Shield',
    price: 2.5,
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h94/ha5/48005253005342/pop-filtr-xtuga-pop-shield-103316894-1.jpg',
    description: 'тип: поп-фильтр материал: пластик количество в комплекте: 1 цвет: черный',
    link: 'https://kaspi.kz/shop/p/pop-fil-tr-xtuga-pop-shield-103316894/?c=750000000#!/item',
    category:"Электроника",
    likes:0,
    watsLink:"whatsapp://send?text=https://kaspi.kz/shop/p/pop-fil-tr-xtuga-pop-shield-103316894/?c=750000000#!/item"
  },
  {
    id: 9,
    name: 'Светильник USB PowerPlant 79095AKS белый',
    price: 1,
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h60/h64/65901729579038/nastol-naya-lampa-powerplant-led-79095aks-usb-belyi-102025425-1.jpg',
    description: 'материал: пластик',
    link: 'https://kaspi.kz/shop/p/powerplant-79095aks-belyi-102025425/?c=750000000#!/item',
    category:"Бытовая техника",
    likes:0,
    watsLink:"whatsapp://send?text=https://kaspi.kz/shop/p/powerplant-79095aks-belyi-102025425/?c=750000000#!/item"
  },
  {
    id: 10,
    name: 'Внешний аккумулятор Xiaomi Redmi Power Bank 20000 мАч черный',
    price: 26.6,
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/ha4/32685349371934/xiaomi-redmi-fast-charge-20000-pb200lzm-cernyj-100322086-1-Container.jpg',
    description: 'емкость: 20000 мАч выходы: USB поддержка быстрой зарядки: Да',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-power-bank-20000-mach-chernyi-100322086/?c=750000000#!/item',
    category:"Электроника",
    likes:0,
    watsLink:"whatsapp://send?text=https://kaspi.kz/shop/p/xiaomi-redmi-power-bank-20000-mach-chernyi-100322086/?c=750000000#!/item"
  },
  {
    id: 11,
    name: 'Уголь активированнный таблетки 250 мг 10 шт',
    price: 0.1,
    rating: 200,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hec/h4b/33973163753502/irbitskij-hfz-ugol-aktivirovannyj-250-mg-10-tabletok-101075552-1.jpg',
    description: 'назначение: энтеросорбенты количество штук в упаковке: 10 антибиотик: Нет рецептурный препарат: Нет действующее вещество: активированный уголь способ применения: пероральный лекарственная форма: таблетки возрастные ограничения: с 3 лет дозировка: 250 мг страна производитель: Россия',
    link: 'https://kaspi.kz/shop/p/ugol-aktivirovannnyi-tabletki-250-mg-10-sht-101075552/?c=750000000#!/item',
    category:"Медицина",
    likes:245,
    watsLink:"whatsapp://send?text=https://kaspi.kz/shop/p/ugol-aktivirovannnyi-tabletki-250-mg-10-sht-101075552/?c=750000000#!/item"
  },
  {
    id: 12,
    name: 'Маска медицинская',
    price: 0.2,
    rating: 3,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/h59/63109089001502/maska-medicinskaa-106806026-1.jpg',
    description: '0.1 мг 10 шт',
    link: 'https://kaspi.kz/shop/p/maska-meditsinskaja-106806026/?c=750000000#!/item',
    category:"Медицина",
    likes:25,
    watsLink:"whatsapp://send?text=https://kaspi.kz/shop/p/maska-meditsinskaja-106806026/?c=750000000#!/item"
  },
  {
    id: 13,
    name: 'Аскорбиновая кислота таблетки',
    price: 0.2,
    rating: 1000,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9d/h7b/49474511536158/borisovskij-zavod-medicin-askorbinovaa-kislota-0-1-mg-s-glukozoj-10-tabletok-100807030-1-Container.jpg',
    description: '0.1 мг 10 шт',
    link: 'https://kaspi.kz/shop/p/askorbinovaja-kislota-tabletki-0-1-mg-10-sht-100807030/?c=750000000#!/item',
    category:"Медицина",
    likes:5000,
    watsLink:"whatsapp://send?text=https://kaspi.kz/shop/p/askorbinovaja-kislota-tabletki-0-1-mg-10-sht-100807030/?c=750000000#!/item"
  },
  {
    id: 14,
    name: 'Шприц',
    price: 0.05,
    rating: 3,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8a/h77/51618527641630/spric-bioject-5-ml-105346992-1.jpg',
    description: '5 мл 1 шт',
    link: 'https://kaspi.kz/shop/p/shprits-5-ml-1-sht-105346992/?c=750000000#!/item',
    category:"Медицина",
    likes:5000,
    watsLink:"whatsapp://send?text=https://kaspi.kz/shop/p/shprits-5-ml-1-sht-105346992/?c=750000000#!/item"
  },
  {
    id: 15,
    name: 'Электронная книга POCKET BOOK PB617-P-CIS',
    price: 137,
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/hc1/51482116554782/pocket-book-pb617-p-cis-cernyj-105268772-1.jpg',
    description: 'встроенная подсветка:',
    link: 'https://kaspi.kz/shop/p/pocket-book-pb617-p-cis-chernyi-105268772/?c=750000000#!/item',
    category:"Электроника",
    likes:2,
    watsLink:"whatsapp://send?text=https://kaspi.kz/shop/p/pocket-book-pb617-p-cis-chernyi-105268772/?c=750000000#!/item"
  },
  {
    id: 16,
    name: 'Веб-камера Wintek WT-STAR 39',
    price: 9,
    rating: 4.5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h6b/50510848491550/wintek-wt-star-39-cernyj-100899086-1-Container.jpg',
    description: 'разрешение видео: 1920x1080',
    link: 'https://kaspi.kz/shop/p/wintek-wt-star-39-100899086/?c=750000000#!/item',
    category:"Электроника",
    likes:13,
    watsLink:"whatsapp://send?text=https://kaspi.kz/shop/p/wintek-wt-star-39-100899086/?c=750000000#!/item"
  },
  {
    id: 17,
    name: 'Умная колонка Яндекс Станция Мини 2 с часами черный',
    price: 11,
    rating: 3.5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/hb7/46546983649310/yandeks-novaya-stantsiya-mini-s-chasami-chernyi-102580021-1.jpg',
    description: 'суммарная мощность: 10 Вт',
    link: 'https://kaspi.kz/shop/p/jandeks-stantsija-mini-2-s-chasami-chernyi-102580021/?c=750000000#!/item',
    category:"Электроника",
    likes:3,
    watsLink:"whatsapp://send?text=https://kaspi.kz/shop/p/jandeks-stantsija-mini-2-s-chasami-chernyi-102580021/?c=750000000#!/item"
  },
  {
    id: 18,
    name: 'Процессор Intel Core i5-10400F OEM',
    price: 13.2,
    rating: 2.5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/h19/32961747091486/intel-core-i5-10400f-oem-100422560-1-Container.jpg',
    description: 'базовая частота процессора: 2900 МГц',
    link: 'https://kaspi.kz/shop/p/intel-core-i5-10400f-oem-100422560/?c=750000000#!/item',
    category:"Электроника",
    likes:7,
    watsLink:"whatsapp://send?text=https://kaspi.kz/shop/p/intel-core-i5-10400f-oem-100422560/?c=750000000#!/item"
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
