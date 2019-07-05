/**
 * @name contact-form-manager
 * @abstract 
 *  - Contrôle les champs du formulaire de contact
 *  - Active ou désactive le bouton d'envoi
 *  - and so on...
 */

// set an event listener on the form itself...
// and listen to keyboard events
const contactForm = $('#contact-form');
contactForm.on(
    'keyup',
    (event) => {
        console.log('Ok JL, je viens de détecter une touche dans le form');
    }
);





/*
// Set an event listener on the name field
const nameField = $('[name="name"]');
const nameFieldById = $('#name');

nameField.on(
    'blur',
    (event) => {
        const otherFields = [
            $('#forname'),
            $('#email'),
            $('#object')
        ];

        // Check if that fck field is not empty
        if (nameField.val() != '') {
            //otherFields.forEach((index, field) => {});

            let activateButton = true;

            for (let indice = 0; indice < otherFields.length; indice++) {
                if (otherFields[indice].val() == '') {
                    activateButton = false;
                }
            }
            alert(activateButton ? 'Active le bouton JL...' : 'Laisse tomber !');
        }
    }
);
*/