// 1:  Defines the context object containing homepage and instruments data for Handlebars templates.
// 2:  The context includes a title, body, and an array of instrument objects with their details.
// 3:  Each instrument object may include image, name, description, price, and optional sale price.
// 4:  The try-catch block ensures errors in template compilation or rendering are caught and logged.
// 5:  Selects the Handlebars template element by its ID.
// 6:  Throws an error if the template element is not found in the DOM.
// 7:  Retrieves the template source (HTML) from the template element.
// 8:  Compiles the Handlebars template source into a render function.
// 9:  Selects the #information element (homepage) and renders the template with the full context if it exists.
// 10: Selects the .container inside #showcase (store page) and renders the template with only the instruments array if it exists.
// 11: Catches and logs any errors that occur during template compilation or rendering.

const context = { // 1
  title: "Welcome to Musicon", // 2
  body: "Musicon is a budding musical storefront with a mission to share the joy of music. These magnificent auditory tools are designed with musical creators, like you, in mind. Hobbyists, beginners, and experts alike can appreciate the resplendent sounds supplied by each and every instrument we carry. Join us in delivering the euphoric vibrations of melodia to the citizens of the world!", // 2
  instruments: [ // 2
    {
      image:
        "https://content.codecademy.com/courses/learn-handlebars/musicon/electronic-keyboard.png",
      name: "Electronic Keyboard",
      description:
        "A piano welcomed to the 21th century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.",
      price: "$1,999.00",
      sale: "$1,699.89",
    },
    {
      image:
        "https://content.codecademy.com/courses/learn-handlebars/musicon/electric-guitar.png",
      name: "Electric Guitar",
      description:
        "Join the legends of the '50s and '60s when the marriage of guitar and electricity created the most influential instrument of a generation. Note: picks sold separately.",
      price: "$599.99",
    },
    {
      image:
        "https://content.codecademy.com/courses/learn-handlebars/musicon/bass-guitar.png",
      name: "Bass Guitar",
      description:
        "Experience the embodiment of funkadelic frequencies that is the bass guitar. Let the deep low notes of the bass guitar resonate with heartbeats everywhere.",
      price: "$624.99",
    },
    {
      image:
        "https://content.codecademy.com/courses/learn-handlebars/musicon/drum-kit.png",
      name: "Drum Kit",
      description:
        'Ever thought, "one instrument isn\'t enough?" Find an answer in the drum kit. Coordinate a collections of drums and cymbals to dictate the rhythm of musical masterpiece.',
      price: "$649.00",
      sale: "$349.00",
    },
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/violin.png',
      name: 'violin',
      description: 'A versatile instrument that is suited for any and all occasions. Those wearing tuxedos can strum together a classic. Others who prefer overalls can call it a fiddle and play some folk songs.',
      price: '245.00'
    }
  ]
};

try { // 4
  const templateElement = document.getElementById("templateHB"); // 5
  if (!templateElement) throw new Error('Template element not found'); // 6
  const templateSource = templateElement.innerHTML; // 7
  const template = Handlebars.compile(templateSource); // 8

  // Render to #information if it exists (index.html)
  const infoElement = document.getElementById('information'); // 9
  if (infoElement) {
    infoElement.innerHTML = template(context);
  }

  // Render to .container inside #showcase if it exists (store.html)
  const showcaseContainer = document.querySelector('#showcase .container'); // 10
  if (showcaseContainer) {
    showcaseContainer.innerHTML = template({ instruments: context.instruments });
  }
} catch (error) { // 11
  console.error('Error compiling template:', error);
}