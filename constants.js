function createImageUrl(fileName) {
  const path = `../images/${fileName}`
  return new URL(path, import.meta.url).href
}

export default {
  homeSlides: [
    { url: createImageUrl('SLIDE0.jpg'), title: 'N-420 CÓRDOBA-TARRACO' },
    {
      url: createImageUrl('SLIDE1.jpg'),
      title: 'SIERRA CAMEROS-LA DEMANADA-VALLE DEL EBRO',
    },
    { url: createImageUrl('SLIDE2.jpg'), title: 'EJE PIRENAICO-VIELHA' },
    {
      url: createImageUrl('SLIDE3.jpg'),
      title: 'MAESTRAZGO-SERRANÍA DE CUENCA',
    },
    {
      url: createImageUrl('SLIDE4.jpg'),
      title: 'ENTRE SIERRAS-MAR Y DESIERTO',
    },
  ],
}
