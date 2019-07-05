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
        // HTML fields list to check
        const otherFields = [
            $('#name'),
            $('#forname'),
            $('#email'),
            $('#object')
        ];

        let isFormComplete = true;

        otherFields.forEach((field) => {
            if (field.val() == '') {
                isFormComplete = false;
            }
        });
        // Hey button... on t'active ou pas ?
        if (isFormComplete) {
            $('#send-it').removeAttr('disabled');
        } else {
            $('#send-it').attr('disabled', 'disabled');
        }
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