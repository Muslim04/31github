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
    var nameLabel = document.getElementById('nameLabel');
    var resetButton = document.getElementById('resetButton');
    var submitButton = document.getElementById('submitButton');
    var address = document.getElementById('address');
    var question = document.getElementById('question');

    // Define translations
    var translations = {
        'default': {
            'navbarBrand': 'Kyrgyzstan',
            'basicInfoNavLink': 'Basic information',
            'cultureNavLink': 'Culture',
            'geographyNavLink': 'Geography',
            'contactUsNavLink': 'Contact us',
            'contactTitle': 'Contact us',
            'interestLabel': 'Did you interest in Kyrgyzstan?',
            'interestYesLabel': 'Yes',
            'interestNoLabel': 'No',
            'nameLabel': 'Name:',
            'resetButton': 'Reset',
            'submitButton': 'Submit',
            'address': 'My Address: Mester utca 37, Budapest',
            'question': 'Your question:',
            
            // Add more translations as needed
        },
        'french': {
            'navbarBrand': 'Kirghizistan',
            'basicInfoNavLink': 'Informations de base',
            'cultureNavLink': 'Culture',
            'geographyNavLink': 'Géographie',
            'contactUsNavLink': 'Contactez-nous',
            'contactTitle': 'Contactez-nous',
            'interestLabel': 'Êtes-vous intéressé par le Kirghizistan?',
            'interestYesLabel': 'Oui',
            'interestNoLabel': 'Non',
            'nameLabel': 'Nom :',
            'resetButton': 'Réinitialiser',
            'submitButton': 'Soumettre',
            'address': 'Mon adresse : Mester utca 37, Budapest',
            'question': 'Ta question'
            

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
        nameLabel.textContent = translation['nameLabel'];
        resetButton.textContent = translation['resetButton'];
        submitButton.textContent = translation['submitButton'];
        address.textContent = translation['address'];
        question.textContent = translation['question'];

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