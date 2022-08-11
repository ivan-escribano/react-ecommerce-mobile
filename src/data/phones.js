import * as img from "../assets/images";
const images = [
  {
    id: 1,
    name: "Google pixel 6 pro",
    price: 600,
    description:
      "Google ha puesto todas las cartas sobre la mesa con su Pixel 6 Pro. Un teléfono que por fin compite de tú a tú con los mejores del mercado, que vuelve a conquistar por su cámara de fotos y que llega con un panel Quad HD+ con tasa de refresco adaptativa hasta 120 Hz. En esta generación sí que tenemos venta en España.",
    img: img.google_pixel_6_pro,
    color: "white",
    brand: "google",
  },
  {
    id: 2,
    name: "OPPO Find X5 Pro",
    price: 1300,
    description:
      "El OPPO Find X5 Pro es todo un golpe en la mesa. Supone un refinamiento respecto al OPPO Find X3 Pro, manteniendo lo mejor del modelo anterior y mejorando en cámara, potencia y sistemas de carga rápida. Firme candidato a rey de la corona en Android, con el único pecado de no ser lo más ambicioso del momento en zoom.",
    img: img.oppo_find_x5_pro,
    color: "white",
    brand: "oppo",
  },
  {
    id: 3,
    name: "Samsung Galaxy S22 ultra",
    price: 1260,
    description:
      "Si echabas de menos al Galaxy Note, el Galaxy S22 Ultra viene para cubrir su hueco en el mercado. La mejor pantalla en un Android, un sistema de cámaras con zoom de hasta 100 aumentos y los añadidos en productividad que aporta el S-Pen. La apuesta de Samsung por su familia S es más ambiciosa que nunca, y el modelo Ultra es clara prueba de ello.",
    img: img.samsung_galaxy_s22,
    color: "white",
    brand: "samsung",
    specification: {
      cpu: "Samsung Exynos 2200",
      battery: "5.000 mAh , Carga rápida 45W , Carga inalámbrica 15W",
      OperatingSystem: "Android 12 con One UI 4.1",
      dimensions: "163,3 x 77,9 x 8,9 mm / 227 gramos",
      camera_f: "40 MP f/2.2",
      camera_t: "108 MP f/1.8, OIS",
      screen: "Dynamic AMOLED 2X curva de 6,8 pulgadas , Gorilla Glass Victus",
    },
  },
  {
    id: 4,
    name: "Realme GT 2 pro",
    price: 700,
    description:
      "El Realme GT 2 Pro es el hermano casi gemelo del OPPO Find X5 Pro. Comparte casi todo su hardware, presumiendo del único panel 2K AMOLED LTPO del mercado, una maravilla para los que quieren evitar las pantallas curvas. La cámara es ligeramente inferior a la del OPPO, pero la rebaja en precio respecto a este modelo es considerable.",
    img: img.realme_gt_2_pro,
    color: "white",
    brand: "realme",
  },
  {
    id: 5,
    name: "Vivo x80 pro",
    price: 1200,
    description:
      "El Vivo X80 Pro es uno de los mejores móviles chinos de gama alta. Una bestia en potencia, diseño y fotografía que no tiene miedo de competir contra los mejores en la gama alta.",
    img: img.vivo_x80_pro,
    color: "blue",
    brand: "vivo",
  },
  {
    id: 6,
    name: "Asus ROG Phone 6 Pro",
    price: 1400,
    description:
      "El Asus ROG Phone 6 Pro es una bestia para gamers, con el mejor procesador del mercado, un sistema de ventilación espectacular y una cantidad de accesorios que lo convierten en una propuesta única.",
    img: img.asus_rog_6_pro,
    color: "blue",
    brand: "asus",
  },
  {
    id: 7,
    name: "Xiaomi 12 pro",
    price: 1000,
    description:
      "El Xiaomi 12 Pro tiene como asignaturas pendientes la autonomía y el rendimiento, aunque es la apuesta por la primera línea de Xiaomi, y el resultado final es más que correcto. Un móvil potente, que destaca principalmente por el apartado fotográfico y con un diseño cuidado, en la línea de lo esperado en la gama más premium.",
    img: img.xiaomi_12_pro,
    color: "black",
    brand: "xiaomi",
    specification: {
      cpu: "Qualcomm Snapdragon 8 Gen1 (SM8450)",
      battery: "4.600 mAh , Carga rápida a 120 W , Carga inalámbrica 50 W",
      OperatingSystem: "Android 12 y MIUI 13",
      dimensions: "163,6 x 74,6 x 8,16 mm / 205 gramos",
      camera_f: "32 MP HDR",
      camera_t: "50 MP f/1.9, 24 mm",
      screen:
        "10-bit AMOLED E4,  6,73” 2K (1.440 x 3.200 px) , Gorilla Glass Victus",
    },
  },
  {
    id: 8,
    name: "Google pixel 6 pro",
    price: 600,
    description:
      "Google ha puesto todas las cartas sobre la mesa con su Pixel 6 Pro. Un teléfono que por fin compite de tú a tú con los mejores del mercado, que vuelve a conquistar por su cámara de fotos y que llega con un panel Quad HD+ con tasa de refresco adaptativa hasta 120 Hz. En esta generación sí que tenemos venta en España.",
    img: img.google_pixel_6_pro,
    color: "black",
    brand: "google",
  },
];

export default images;
