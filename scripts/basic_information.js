document.addEventListener('DOMContentLoaded', function () {
    // Get the language selector element
    var languageSelector = document.getElementById('languageSelector');

    // Get the elements with language-specific content
    var navbarBrandContent = document.getElementById('navbarBrandContent');
    var welcomeNavLink = document.getElementById('welcomeNavLink');
    var basicInfoNavLink = document.getElementById('basicInfoNavLink');
    var cultureNavLink = document.getElementById('cultureNavLink');
    var geographyNavLink = document.getElementById('geographyNavLink');
    var contactUsNavLink = document.getElementById('contactUsNavLink');
    var basicInfoTitle = document.getElementById('basicInfoTitle');
    var basicInfoContent = document.getElementById('basicInfoContent');
    var countryName = document.getElementById('countryName');
    var KyrgyzFlag = document.getElementById('KyrgyzFlag');
    var GerbContent = document.getElementById('GerbContent');
    var flagTitle = document.getElementById('flagTitle');
    var emblemTitle = document.getElementById('emblemTitle');

    // Define translations
    var translations = {
        'default': {
            'navbarBrand': 'Kyrgyzstan',
            'welcomeNavLink': 'WELCOME',
            'basicInfoNavLink': 'Basic information',
            'cultureNavLink': 'Culture',
            'geographyNavLink': 'Geography',
            'contactUsNavLink': 'Contact us',
            'basicInfoTitle': 'Basic Information',
            'basicInfoContent': '<b>Kyrgyzstan</b>, officially the Kyrgyz Republic, is a landlocked country in Central Asia, lying in the Tian Shan and Pamir mountains ranges. Bishkek is the capital and largest city of the country. Kyrgyzstan is bordered by Kazakhstan to the north, Uzbekistan to the west, Tajikistan to the south, and China to the east and southeast. Ethnic Kyrgyz make up most of the country’s seven million people, followed by significant minorities of Uzbek and Russians.',
            'countryName': 'Kyrgyzstan',
            'KyrgyzFlag': 'The red field stands for "bravery and valor", and alludes to the purported emblem hoisted by Manas, the national hero of Kyrgyzstan. The sun epitomizes peace and prosperity, while its 40 rays stand for the number of tribes united by Manas to fight against the Mongols, as well as the number of followers he had.',
            'GerbContent': 'The National emblem of Kyrgyzstan was adopted in 2016. The emblem has a circular form which mostly bears the color blue.  Light blue is known as the Kyrgyz color of courage and generosity. To the left and right of the coat of arms, wheat and cotton are displayed.',
            'flagTitle': 'Flag of Kyrgyzstan',
            'emblemTitle': 'Emblem of Kyrgyz Republic'
            // Add more translations as needed
        },
        'french': {
            'navbarBrand': 'Kirghizistan',
            'welcomeNavLink': 'BIENVENUE',
            'basicInfoNavLink': 'Informations de base',
            'cultureNavLink': 'Culture',
            'geographyNavLink': 'Géographie',
            'contactUsNavLink': 'Contactez-nous',
            'basicInfoTitle': 'Informations de base',
            'basicInfoContent': '<b>Kirghizistan</b>, officiellement la République kirghize, est un pays enclavé d\'Asie centrale, situé dans les chaînes de montagnes du Tian Shan et du Pamir. Bichkek est la capitale et la plus grande ville du pays. Le Kirghizistan est bordé par le Kazakhstan au nord, l\'Ouzbékistan à l\'ouest, le Tadjikistan au sud et la Chine à l\'est et au sud-est. Les Kirghizes ethniques constituent la majeure partie des sept millions d\'habitants du pays, suivis de minorités importantes d\'Ouzbeks et de Russes.',
            'countryName': 'Kirghizistan',
            'KyrgyzFlag': 'Le champ rouge représente « la bravoure et la bravoure » et fait allusion au prétendu emblème arboré par Manas, le héros national du Kirghizistan.Le soleil incarne la paix et la prospérité, tandis que ses 40 rayons représentent le nombre de tribus unies par Manas pour lutter contre les Mongols, ainsi que le nombre de partisans qu\'il avait.',
            'GerbContent': 'L\'emblème national du Kirghizistan a été adopté en 2016. L\'emblème a une forme circulaire qui porte principalement la couleur bleue e bleu clair est connu comme la couleur kirghize du courage et de la générosité. À gauche et à droite des armoiries, sont représentés le blé et le coton.',
            'flagTitle': 'Drapeau du Kirghizistan',
            'emblemTitle': 'Emblème de la République Kirghize'
            // Add more translations as needed
        }
    };

    // Function to update content based on language
    function updateContent(language) {
        var translation = translations[language] || translations['default'];

        // Update content based on translation
        navbarBrandContent.textContent = translation['navbarBrand'];
        welcomeNavLink.textContent = translation['welcomeNavLink'];
        basicInfoNavLink.textContent = translation['basicInfoNavLink'];
        cultureNavLink.textContent = translation['cultureNavLink'];
        geographyNavLink.textContent = translation['geographyNavLink'];
        contactUsNavLink.textContent = translation['contactUsNavLink'];
        basicInfoTitle.textContent = translation['basicInfoTitle'];
        basicInfoContent.innerHTML = translation['basicInfoContent'];
        countryName.innerHTML = translation['countryName'];
        KyrgyzFlag.innerHTML = translation['KyrgyzFlag'];
        GerbContent.innerHTML = translation['GerbContent'];
        flagTitle.textContent = translation['flagTitle'];
        emblemTitle.textContent = translation['emblemTitle'];
        // Update other content as needed
    }

    // Add an event listener to the language selector
    var languageButtons = document.querySelectorAll('.dropdown-item');
    languageButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            // Update content when language changes
            updateContent(button.getAttribute('data-lang'));
        });
    });

    // Set initial content based on the default language
    updateContent(languageSelector.value);
});