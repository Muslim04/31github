document.addEventListener('DOMContentLoaded', function () {
    // Get the language selector element
    var languageSelector = document.getElementById('languageSelector');

    // Get the elements with language-specific content
    var headerContent = document.getElementById('headerContent');
    var sectionTitle = document.getElementById('sectionTitle');
    var sectionContent = document.getElementById('sectionContent');
    var welcomeNavLink = document.getElementById('welcomeNavLink');
    var basicInfoNavLink = document.getElementById('basicInfoNavLink');
    var cultureNavLink = document.getElementById('cultureNavLink');
    var geographyNavLink = document.getElementById('geographyNavLink');
    var contactUsNavLink = document.getElementById('contactUsNavLink');
    var Quote = document.getElementById('Quote');
    var infoChingiz = document.getElementById('infoChingiz');

    // Define translations
    var translations = {
        'default': {
            'header': 'Welcome to Kyrgyzstan!',
            'title': 'WELCOME',
            'content': 'ARE YOU READY TO EXPLORE A NEW COUNTRY?',
            'welcomeNavLink': 'WELCOME',
            'basicInfoNavLink': 'Basic information',
            'cultureNavLink': 'Culture',
            'geographyNavLink': 'Geography',
            'contactUsNavLink': 'Contact us',
            'Quote': 'The hardest thing for anyone is to be a human being every day' ,
            'infoChingiz': 'The Kyrgyz writer Chingiz Aitmatov, who has died aged 79, was the most celebrated representative of Kyrgyzstan, a landlocked, mountainous nation of 5 million people in the heart of central Asia, which was a Soviet republic until 1991. A bilingual and bicultural writer, Aitmatov wrote his prose and plays in both his native Kyrgyz and in Russian, and was translated into more than 150 languages. Described as a "magical socialist-realist" in the Russian press, he was able to combine elements of Kyrgyz folk-tales and epics with formally traditional Russian realism.'
            // Add more translations as needed
        },
        'french': {
            'header': 'Bienvenue au Kirghizistan!',
            'title': 'BIENVENUE',
            'content': 'ÊTES-VOUS PRÊT À EXPLORER UN NOUVEAU PAYS?',
            'welcomeNavLink': 'BIENVENUE',
            'basicInfoNavLink': 'Informations de base',
            'cultureNavLink': 'Culture',
            'geographyNavLink': 'Géographie',
            'contactUsNavLink': 'Contactez-nous',
            'Quote': 'La chose la plus difficile pour quiconque est d\'être un être humain au quotidien',
            'infoChingiz': 'L\'écrivain kirghize Chingiz Aitmatov, décédé à l\'âge de 79 ans, était le représentant le plus célèbre du Kirghizistan, une nation montagneuse et enclavée de 5 millions d\'habitants au cœur de l\'Asie centrale, qui fut une république soviétique jusqu\'en 1991. Écrivain bilingue et biculturel, Aitmatov a écrit sa prose et ses pièces de théâtre à la fois dans son kirghize natal et en russe, et a été traduit dans plus de 150 langues. Décrit comme un « socialiste-réaliste magique » dans la presse russe, il était capable de combiner des éléments des contes populaires et des épopées kirghizes avec le réalisme russe formellement traditionnel.'
            // Add more translations as needed
        }
    };

    // Function to update content based on language
    function updateContent(language) {
        var translation = translations[language] || translations['default'];

        // Update content based on translation
        headerContent.textContent = translation['header'];
        sectionTitle.textContent = translation['title'];
        sectionContent.innerHTML = translation['content']; // Using innerHTML to include line breaks
        welcomeNavLink.textContent = translation['welcomeNavLink'];
        basicInfoNavLink.textContent = translation['basicInfoNavLink'];
        cultureNavLink.textContent = translation['cultureNavLink'];
        geographyNavLink.textContent = translation['geographyNavLink'];
        contactUsNavLink.textContent = translation['contactUsNavLink'];
        Quote.textContent = translation['Quote'];
        infoChingiz.textContent = translation['infoChingiz'];
        // Update other content as needed
    }

    // Add an event listener to the language selector
    languageSelector.addEventListener('change', function () {
        // Update content when language changes
        updateContent(languageSelector.value);
    });

    // Set initial content based on the default language
    updateContent(languageSelector.value);
});