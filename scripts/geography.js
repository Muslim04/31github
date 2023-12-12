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
    var sectionContent = document.getElementById('sectionContent');
    var tableSummary = document.querySelector('.tablesummary');
    var tableCaption = document.querySelector('table caption strong');
    var helpSummary = document.querySelector('table caption details summary');
    var ethnicGroupHeading = document.querySelector('table thead tr');
    var kyrgyzEthnicGroup = document.querySelector('table tbody tr:nth-child(1)');
    var uzbekEthnicGroup = document.querySelector('table tbody tr:nth-child(2)');
    var russiansEthnicGroup = document.querySelector('table tbody tr:nth-child(3)');
    var ukrainiansEthnicGroup = document.querySelector('table tbody tr:nth-child(4)');
    var videoDescription = document.getElementById('videoDescription');

    // Define translations
    var translations = {
        'default': {
            'navbarBrand': 'Kyrgyzstan',
            'welcomeNavLink': 'WELCOME',
            'basicInfoNavLink': 'Basic information',
            'cultureNavLink': 'Culture',
            'geographyNavLink': 'Geography',
            'contactUsNavLink': 'Contact us',
            'sectionContent': 'Kyrgyzstan is a landlocked country in Central Asia, bordering Kazakhstan, China, Tajikistan, and Uzbekistan. It lies between latitudes 39° and 44° N, and longitudes 69° and 81° E. It is farther from the sea than any other individual country, and all its rivers flow into closed drainage systems which do not reach the sea. The mountainous region of the Tian Shan covers over 80% of the country (Kyrgyzstan is occasionally referred to as "the Switzerland of Central Asia", as a result), with the remainder made up of valleys and basins.',
            'tableCaption': 'Distribution by Ethnic Group (2022)',
            'helpSummary': 'In this table you can find populations of Kyrgyzstan according to ethnic group 2022',
            'ethnicGroupHeading': ['Ethnic group', '2022 census', '%'],
            'kyrgyzEthnicGroup': ['Kyrgyz', '5,379,000', '77.5'],
            'uzbekEthnicGroup': ['Uzbek', '986,900', '14.2'],
            'russiansEthnicGroup': ['Russians', '282,800', '4.1'],
            'ukrainiansEthnicGroup': ['Ukrainians', '-', '-'],
            'videoDescription': 'Video about Kyrgyzstan in English',
            'helpSummary': 'Help/Summary',
            // Add more translations as needed
        },
        'french': {
            'navbarBrand': 'Kirghizistan',
            'welcomeNavLink': 'BIENVENUE',
            'basicInfoNavLink': 'Informations de base',
            'cultureNavLink': 'Culture',
            'geographyNavLink': 'Géographie',
            'contactUsNavLink': 'Contactez-nous',
            'sectionContent': 'Le Kirghizistan est un pays enclavé d\'Asie centrale, bordant le Kazakhstan, la Chine, le Tadjikistan et l\'Ouzbékistan. Il se situe entre les latitudes 39° et 44° N, et les longitudes 69° et 81° E. Il est plus éloigné de la mer que tout autre pays individuel, et tous ses fleuves se jettent dans des systèmes de drainage fermés qui ne rejoignent pas la mer. La région montagneuse du Tian Shan couvre plus de 80 % du pays (le Kirghizistan est parfois appelé "la Suisse de l\'Asie centrale", en conséquence), le reste étant constitué de vallées et de bassins.',
            'tableCaption': 'Répartition par groupe ethnique (2022)',
            'helpSummary': 'Dans ce tableau, vous pouvez trouver les populations du Kirghizistan selon le groupe ethnique en 2022',
            'ethnicGroupHeading': ['Groupe ethnique', 'Recensement 2022', '%'],
            'kyrgyzEthnicGroup': ['Kirghizes', '5,379,000', '77,5'],
            'uzbekEthnicGroup': ['Ouzbek', '986,900', '14,2'],
            'russiansEthnicGroup': ['Russes', '282,800', '4,1'],
            'ukrainiansEthnicGroup': ['Ukrainiens', '-', '-'],
            'videoDescription': 'Vidéo sur le Kirghizistan en anglais',
            'helpSummary': 'Aide/Résumé',
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
        sectionContent.innerHTML = translation['sectionContent'];
        tableCaption.innerHTML = translation['tableCaption'];
        helpSummary.innerHTML = translation['helpSummary'];
        ethnicGroupHeading.innerHTML = translation['ethnicGroupHeading'].map(function (heading) {
            return '<th>' + heading + '</th>';
        }).join('');
        kyrgyzEthnicGroup.innerHTML = translation['kyrgyzEthnicGroup'].map(function (data) {
            return '<td>' + data + '</td>';
        }).join('');
        uzbekEthnicGroup.innerHTML = translation['uzbekEthnicGroup'].map(function (data) {
            return '<td>' + data + '</td>';
        }).join('');
        russiansEthnicGroup.innerHTML = translation['russiansEthnicGroup'].map(function (data) {
            return '<td>' + data + '</td>';
        }).join('');
        ukrainiansEthnicGroup.innerHTML = translation['ukrainiansEthnicGroup'].map(function (data) {
            return '<td>' + data + '</td>';
        }).join('');
        videoDescription.textContent = translation['videoDescription'];
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