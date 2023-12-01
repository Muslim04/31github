document.addEventListener('DOMContentLoaded', function () {
    // Get the language selector element
    var languageSelector = document.getElementById('languageSelector');

    // Get the elements with language-specific content
    var navbarBrandContent = document.getElementById('navbarBrandContent');
    var basicInfoNavLink = document.getElementById('basicInfoNavLink');
    var cultureNavLink = document.getElementById('cultureNavLink');
    var geographyNavLink = document.getElementById('geographyNavLink');
    var contactUsNavLink = document.getElementById('contactUsNavLink');
    var contactTitle = document.getElementById('contactTitle');
    var interestLabel = document.getElementById('interestLabel');
    var interestYesLabel = document.getElementById('interestYesLabel');
    var interestNoLabel = document.getElementById('interestNoLabel');

    // Define translations
    var translations = {
        'default': {
            'navbarBrand': 'WELCOME',
            'basicInfoNavLink': 'Basic information',
            'cultureNavLink': 'Culture',
            'geographyNavLink': 'Geography',
            'contactUsNavLink': 'Contact us',
            'contactTitle': 'Contact us',
            'interestLabel': 'Did you interest in Kyrgyzstan?',
            'interestYesLabel': 'Yes',
            'interestNoLabel': 'No'
            // Add more translations as needed
        },
        'french': {
            'navbarBrand': 'BIENVENUE',
            'basicInfoNavLink': 'Informations de base',
            'cultureNavLink': 'Culture',
            'geographyNavLink': 'Géographie',
            'contactUsNavLink': 'Contactez-nous',
            'contactTitle': 'Contactez-nous',
            'interestLabel': 'Êtes-vous intéressé par le Kirghizistan?',
            'interestYesLabel': 'Oui',
            'interestNoLabel': 'Non'
            // Add more translations as needed
        }
    };

    // Function to update content based on language
    function updateContent(language) {
        var translation = translations[language] || translations['default'];

        // Update content based on translation
        navbarBrandContent.textContent = translation['navbarBrand'];
        basicInfoNavLink.textContent = translation['basicInfoNavLink'];
        cultureNavLink.textContent = translation['cultureNavLink'];
        geographyNavLink.textContent = translation['geographyNavLink'];
        contactUsNavLink.textContent = translation['contactUsNavLink'];
        contactTitle.textContent = translation['contactTitle'];
        interestLabel.textContent = translation['interestLabel'];
        interestYesLabel.textContent = translation['interestYesLabel'];
        interestNoLabel.textContent = translation['interestNoLabel'];
        // Update other content as needed
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

// Set initial content based on the default language
updateContent(languageButtons[0].dataset.lang);
});