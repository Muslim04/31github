document.addEventListener('DOMContentLoaded', function () {
    // Get the language selector element
    var languageSelector = document.getElementById('languageSelector');

    // Get the elements with language-specific content
    var headings = document.querySelectorAll('h2, h3');
    var paragraphs = document.querySelectorAll('p');
    var navbarBrandContent = document.getElementById('navbarBrandContent');
    var welcomeNavLink = document.getElementById('welcomeNavLink');
    var basicInfoNavLink = document.getElementById('basicInfoNavLink');
    var cultureNavLink = document.getElementById('cultureNavLink');
    var geographyNavLink = document.getElementById('geographyNavLink');
    var contactUsNavLink = document.getElementById('contactUsNavLink');
    var ManasContent = document.getElementById('ManasContent');
    var TushContent = document.getElementById('TushContent');

    // Define translations
    var translations = {
      'default': {
        'Culture': 'Culture',
        'Manas': 'Manas',
        'Tush Kyiz': 'Tush kyiz',
        'navbarBrand': 'Kyrgyzstan',
                  'welcomeNavLink': 'WELCOME',
                  'basicInfoNavLink': 'Basic information',
                  'cultureNavLink': 'Culture',
                  'geographyNavLink': 'Geography',
                  'contactUsNavLink': 'Contact us',
                  'ManasContent' : 'Manas, an epic poem, revolves around a series of events that coincide with the history of the region in the 9th century, primarily the interaction of the Kyrgyz people with other Turkic and Chinese people. Manas is the biggest among the poems.',
                  'TushContent' : 'Tush kyiz are large, elaborately embroidered wall hangings, traditionally made in Kyrgyzstan and Kazakhstan by women to commemorate the marriage of a son or daughter. Colors and designs are chosen to symbolize Kyrgyz traditions and rural life. Flowers, plants, animals, stylized horns, national designs, and emblems of Kyrgyz life are often found in these ornate and colorful embroideries.',
        // Add more translations as needed
      },
      'french': {
        'Culture': 'Culture',
        'Manas': 'Manas',
        'Tush Kyiz': 'Tush kyiz (French)',
        'navbarBrand': 'Kirghizistan',
                  'welcomeNavLink': 'BIENVENUE',
                  'basicInfoNavLink': 'Informations de base',
                  'cultureNavLink': 'Culture',
                  'geographyNavLink': 'Géographie',
                  'contactUsNavLink': 'Contactez-nous',
                  'ManasContent' : 'Manas, un poème épique, tourne autour d\'une série d\'événements qui coïncident avec l\'histoire de la région au 9ème siècle, principalement l\'interaction du peuple kirghize avec d\'autres peuples turcs et chinois. Manas est le plus grand des poèmes.',
                  'TushContent' : 'Les Tush kyiz sont de grandes tentures murales richement brodées, traditionnellement fabriquées au Kirghizistan et au Kazakhstan par des femmes pour commémorer le mariage d\'un fils ou d\'une fille. Les couleurs et les motifs sont choisis pour symboliser les traditions kirghizes et la vie rurale. Fleurs, plantes, animaux, cornes stylisées, dessins nationaux et emblèmes de la vie kirghize se retrouvent souvent dans ces broderies ornées et colorées.'

        // Add more translations as needed
      }
    };

    // Function to update content based on language
    function updateContent(language) {
      var translation = translations[language] || translations['default'];
      navbarBrandContent.textContent = translation['navbarBrand'];
              welcomeNavLink.textContent = translation['welcomeNavLink'];
              basicInfoNavLink.textContent = translation['basicInfoNavLink'];
              cultureNavLink.textContent = translation['cultureNavLink'];
              geographyNavLink.textContent = translation['geographyNavLink'];
              contactUsNavLink.textContent = translation['contactUsNavLink'];
              ManasContent.textContent = translation['ManasContent'];
              TushContent.textContent = translation['TushContent'];

      // Update content based on translation
      headings.forEach(function (element) {
        var key = element.textContent.trim();
        element.textContent = translation[key] || key;
      });

      paragraphs.forEach(function (element) {
        var key = element.textContent.trim();
        element.textContent = translation[key] || key;
      });
    }

    // Add an event listener to the language selector
    var languageButtons = document.querySelectorAll('.dropdown-item');
    languageButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        // Update content when language changes
        updateContent(button.dataset.lang);
      });
    });

    // Manually initialize the Bootstrap dropdown
    new bootstrap.Dropdown(document.querySelector('.btn-group'));

    // Set initial content based on the default language
    updateContent('default');
  });