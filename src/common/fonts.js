import WebFontLoader from 'webfontloader';

WebFontLoader.load({
  // google: {
  //   families: [
  //     'Rubik:300,400,500',
  //   ]
  // },
  custom: {
    families: [
      'Rubik:n3,n4,n5',
    ],
    urls: [
      'https://fonts.googleapis.com/css?family=Rubik:300,400,500&display=swap',
      // 'https://fonts.googleapis.com/css?family=Rubik:300,400,500&display=optional',
    ],
  },
})
