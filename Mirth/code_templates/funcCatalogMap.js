/**
    Map maintainence Module for the available catalogs in OpenEMR.
    .TODO - Bring all the catalogMaps to this method.

    @param {String} input - Input Value to be supplied from outside.
    @param {String} type - gender, marital_status, race_id, race_text .....
    @return {String} Mapped Value.
*/

function catalogMapOut(input, type) {
    // type - type of map that needs to be invoked
    //input = input.toUpperCase();

    type = type.toUpperCase();

    switch (type.toUpperCase()) {
        case 'GENDER':
            {
                switch (input.toUpperCase()) {
                    case 'FEMALE': return 'F';
                    case 'MALE'  : return 'M';
                    case 'UNK'   : return 'U';
                    default      : return input;
                }
            }

        case 'MARITAL_STATUS_ID':
            {
                switch (input.toUpperCase()) {
                    case 'MARRIED'          : return 'M';
                    case 'SINGLE'           : return 'S';
                    case 'DIVORCED'         : return 'D';
                    case 'WIDOWED'          : return 'W';
                    case 'SEPARATED'        : return 'A';
                    case 'DOMESTIC PARTNER' : return 'U';
                    default                 : return input;
                }
            }

        case 'RACE_ID':
            {
                switch(input.toUpperCase()) {
                    case 'amer_ind_or_alaska_native'	: return '1002-5';
                    case 'Asian'	                    : return '2028-9';
                    case 'black_or_afri_amer'	        : return '2054-5';
                    case 'native_hawai_or_pac_island'	: return '2076-8';
                    case 'white'	                    : return '2106-3';
                    case 'declne_to_specfy'	            : return '2131-1';
                    default                             : return '2131-1'; 
                }
            }

        case 'RACE_TEXT':
                {
                    switch(input.toUpperCase()) {
                        case 'amer_ind_or_alaska_native'	: return 'American Indian or Alaska Native';
                        case 'Asian'	                    : return 'Asian';
                        case 'black_or_afri_amer'	        : return 'Black or African American';
                        case 'native_hawai_or_pac_island'	: return 'Native Hawaiian or Other Pacific Islander	';
                        case 'white'	                    : return 'White';
                        case 'declne_to_specfy'	            : return 'Other Race';
                        default                             : return 'Other Race';
                    }
                }
    }
}
