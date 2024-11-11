import {Product} from '@domain/models/Product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Portátil Apple MacBook Pro',
    description:
      'Portátil de alto rendimiento con pantalla Retina de 13 pulgadas, chip Apple M1, 8 GB de RAM y 256 GB de SSD.',
    price: 1299.99,
    stockQuantity: 75,
    categoryName: 'Electrónica',
    imageUrl: 'https://i.ibb.co/cDj3dpX/Apple-Mac-Book-Pro.png',
    createdAt: '2023-12-29',
    updatedAt: '2023-12-29',
  },
  {
    id: 3,
    name: 'Cámara Sony Alpha A7 III',
    description:
      'Cámara mirrorless con sensor full-frame de 24.2 MP, grabación de vídeo 4K HDR y sistema de enfoque automático rápido.',
    price: 1999.99,
    stockQuantity: 30,
    categoryName: 'Electrónica',
    imageUrl: 'https://i.ibb.co/ZHT2r1s/C-mara-Sony-Alpha-A7-III.png',
    createdAt: '2023-12-29',
    updatedAt: '2023-12-29',
  },
  {
    id: 4,
    name: 'Consola PlayStation 5',
    description:
      'Consola de juegos de última generación con gráficos en 4K, SSD ultrarrápido y retrocompatibilidad con juegos de PS4.',
    price: 499.99,
    stockQuantity: 100,
    categoryName: 'Electrónica',
    imageUrl: 'https://i.ibb.co/BcqzzgF/Consola-Play-Station-5.png',
    createdAt: '2023-12-29',
    updatedAt: '2023-12-29',
  },
  {
    id: 5,
    name: 'Altavoz Bluetooth Portátil',
    description:
      'Altavoz Bluetooth compacto y portátil con excelente calidad de sonido y resistencia al agua, ideal para llevarlo a cualquier parte.',
    price: 99.99,
    stockQuantity: 75,
    categoryName: 'Otros',
    imageUrl:
      'https://storage.googleapis.com/catalog-pictures-carrefour-es/catalog/pictures/hd_510x_/3609020128052_1.jpg',
    createdAt: '2023-12-29',
    updatedAt: '2023-12-29',
  },
  {
    id: 6,
    name: 'Mr',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 1819.75,
    stockQuantity: 56,
    categoryName: 'Otros',
    imageUrl: 'https://i.ibb.co/cDj3dpX/Apple-Mac-Book-Pro.png',
    createdAt: '1/22/2024',
    updatedAt: '1/8/2024',
  },
  {
    id: 7,
    name: 'Ms',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    price: 1763.75,
    stockQuantity: 55,
    categoryName: 'Electrónica',
    imageUrl: 'https://i.ibb.co/cDj3dpX/Apple-Mac-Book-Pro.png',
    createdAt: '1/4/2024',
    updatedAt: '1/12/2024',
  },
  {
    id: 8,
    name: 'Control PS5',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 1425.0,
    stockQuantity: 33,
    categoryName: 'Electrónica',
    imageUrl: 'https://i.ibb.co/cDj3dpX/Apple-Mac-Book-Pro.png',
    createdAt: '1/22/2024',
    updatedAt: '1/5/2024',
  },
  {
    id: 9,
    name: 'MacBook pro 16',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 1621.54,
    stockQuantity: 85,
    categoryName: 'Electrónica',
    imageUrl: 'https://i.ibb.co/cDj3dpX/Apple-Mac-Book-Pro.png',
    createdAt: '1/25/2024',
    updatedAt: '1/3/2024',
  },
  {
    id: 10,
    name: 'Pasta dental',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 513.1,
    stockQuantity: 53,
    categoryName: 'Salud y belleza',
    imageUrl: 'https://i.ibb.co/cDj3dpX/Apple-Mac-Book-Pro.png',
    createdAt: '12/31/2023',
    updatedAt: '1/15/2024',
  },
  {
    id: 11,
    name: 'Cepillo de dientes',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 316.22,
    stockQuantity: 14,
    categoryName: 'Salud y belleza',
    imageUrl: 'https://i.ibb.co/cDj3dpX/Apple-Mac-Book-Pro.png',
    createdAt: '1/22/2024',
    updatedAt: '1/18/2024',
  },
  {
    id: 12,
    name: 'Shampoo',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 1402.55,
    stockQuantity: 30,
    categoryName: 'Salud y belleza',
    imageUrl: 'https://i.ibb.co/cDj3dpX/Apple-Mac-Book-Pro.png',
    createdAt: '1/24/2024',
    updatedAt: '1/9/2024',
  },
  {
    id: 13,
    name: 'Jabon',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 1366.52,
    stockQuantity: 28,
    categoryName: 'Salud y belleza',
    imageUrl: 'https://i.ibb.co/cDj3dpX/Apple-Mac-Book-Pro.png',
    createdAt: '12/30/2023',
    updatedAt: '12/31/2023',
  },
  {
    id: 14,
    name: 'Pomada',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: 221.06,
    stockQuantity: 99,
    categoryName: 'Salud y belleza',
    imageUrl: 'https://i.ibb.co/cDj3dpX/Apple-Mac-Book-Pro.png',
    createdAt: '1/9/2024',
    updatedAt: '1/11/2024',
  },
  {
    id: 15,
    name: 'Google pixel',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 999.06,
    stockQuantity: 87,
    categoryName: 'Electrónica',
    imageUrl: 'https://i.ibb.co/cDj3dpX/Apple-Mac-Book-Pro.png',
    createdAt: '1/23/2024',
    updatedAt: '1/18/2024',
  },
  {
    id: 16,
    name: 'Extractor puntos negros',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 997.15,
    stockQuantity: 25,
    categoryName: 'Salud y belleza',
    imageUrl: 'https://i.ibb.co/cDj3dpX/Apple-Mac-Book-Pro.png',
    createdAt: '12/30/2023',
    updatedAt: '1/1/2024',
  },
  {
    id: 17,
    name: 'Labial',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    price: 1014.4,
    stockQuantity: 74,
    categoryName: 'Salud y belleza',
    imageUrl: 'https://i.ibb.co/cDj3dpX/Apple-Mac-Book-Pro.png',
    createdAt: '1/12/2024',
    updatedAt: '1/15/2024',
  },
  {
    id: 18,
    name: 'Audifonos',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 1754.46,
    stockQuantity: 54,
    categoryName: 'Electrónica',
    imageUrl: 'https://i.ibb.co/cDj3dpX/Apple-Mac-Book-Pro.png',
    createdAt: '1/11/2024',
    updatedAt: '1/3/2024',
  },
  {
    id: 19,
    name: 'Nitro 5',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 562.01,
    stockQuantity: 62,
    categoryName: 'Electrónica',
    imageUrl: 'https://i.ibb.co/cDj3dpX/Apple-Mac-Book-Pro.png',
    createdAt: '12/29/2023',
    updatedAt: '1/15/2024',
  },
  {
    id: 20,
    name: 'Samsung S23',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 28.51,
    stockQuantity: 52,
    categoryName: 'Electrónica',
    imageUrl: 'https://i.ibb.co/cDj3dpX/Apple-Mac-Book-Pro.png',
    createdAt: '1/2/2024',
    updatedAt: '1/8/2024',
  },
];