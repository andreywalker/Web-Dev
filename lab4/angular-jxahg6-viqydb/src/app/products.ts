export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  description: string;
  link: 'https://kaspi.kz/shop/p/watsons-mint-50-sht-108270150/?c=750000000#!/item';
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
  },
  {
    id: 3,
    name: 'Курт',
    price: 1,
    rating: 100,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2b/ha6/45294250328094/ferma-orda-kurt-solenyj-110-g-102231155-1.jpg',
    description: 'Лучшая еда на свете',
    link: 'https://kaspi.kz/shop/p/ferma-orda-kurt-soljonyi-110-g-102231155/?c=750000000#!/item',
  },
  {
    id: 4,
    name: 'Apple Watch',
    price: 514,
    rating: 4.2,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    description: 'поддержка платформ: iOS материал корпуса: алюминийцвет корпуса: черный технология экрана: OLED объем встроенной памяти: 32 Гб интерфейсы: Bluetooth, ,Wi-Fi, ,NFC время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов',
    link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
  },
  {
    id: 5,
    name: 'Тостер CENTEK СТ-1432 ',
    price: 24.5,
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/hf3/32725893414942/centek-st-1432-cernyj-100295343-1-Container.jpg',
    description: 'тип управления: механическое количество тостов: 2 поддон для крошек: Да материал корпуса: пластик цвет: черный',
    link: 'https://kaspi.kz/shop/p/centek-st-1432-chernyi-100295343/?c=750000000#!/item',
  },
  {
    id: 6,
    name: 'Маска для лица EKEL тканевая Aloe Ultra Hydrating 25 мл',
    price: 0.25,
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1e/h4c/32307118178334/ekel-aloe-ultra-hydrating-mask-100012922-1-Container.jpg',
    description: 'вид маски: тканевая действие: очищение, ,разглаживание, ,увлажнение объем: 25 мл тип кожи: для всех типов страна производства: Корея',
    link: 'https://kaspi.kz/shop/p/ekel-tkanevaja-aloe-ultra-hydrating-25-ml-100012922/?c=750000000#!/item',
  },
  {
    id: 7,
    name: 'Стул N-12',
    price: 17,
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/hdc/32360448491550/stul-klassicheskii-barneo-woodmold-n-12-81x50x25-belyi-100189414-1.jpg',
    description: 'тип: стул материал: пластик обивка: отсутствует жесткость сиденья: высокая высота, см: 81 ширина, см: 50 глубина, см: 25 цвет: белый страна: Китай',
    link: 'https://kaspi.kz/shop/p/centek-st-1432-chernyi-100295343/?c=750000000#!/item',
  },
  {
    id: 8,
    name: 'поп-фильтр XTUGA POP Shield',
    price: 2.5,
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h94/ha5/48005253005342/pop-filtr-xtuga-pop-shield-103316894-1.jpg',
    description: 'тип: поп-фильтр материал: пластик количество в комплекте: 1 цвет: черный',
    link: 'https://kaspi.kz/shop/p/pop-fil-tr-xtuga-pop-shield-103316894/?c=750000000#!/item',
  },
  {
    id: 9,
    name: 'Светильник USB PowerPlant 79095AKS белый',
    price: 1,
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h60/h64/65901729579038/nastol-naya-lampa-powerplant-led-79095aks-usb-belyi-102025425-1.jpg',
    description: 'материал: пластик',
    link: 'https://kaspi.kz/shop/p/powerplant-79095aks-belyi-102025425/?c=750000000#!/item',
  },
  {
    id: 10,
    name: 'Внешний аккумулятор Xiaomi Redmi Power Bank 20000 мАч черный',
    price: 26.6,
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/ha4/32685349371934/xiaomi-redmi-fast-charge-20000-pb200lzm-cernyj-100322086-1-Container.jpg',
    description: 'емкость: 20000 мАч выходы: USB поддержка быстрой зарядки: Да',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-power-bank-20000-mach-chernyi-100322086/?c=750000000#!/item',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
