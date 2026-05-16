export class testData{
    url='https://thinking-tester-contact-list.herokuapp.com/'

    users={
            validUser:{
                firstName: 'Dilruba',
                lastName: 'akter',
                email:'dilrubaakterdiparpicse002@gmail.com',
                password: 'dipa1234@!'
            },

            missingFirstName:{
                firstName: '',
                lastName: 'akter',
                email:'dilrubaakterdipa2002@gmail.com',
                password: 'dipa1234@!'
            },

            missingLastName:{
                firstName: 'dilruba',
                lastName: '',
                email:'dilrubaakterdipa2002@gmail.com',
                password: 'dipa1234@!'
            },

            missingemail:{
                firstName: 'dilruba',
                lastName: 'akter',
                email:'',
                password: 'dipa1234@!'
            },

            missingPassword:{
                firstName: 'dilruba',
                lastName: 'akter',
                email:'dilrubaakterdipa2002@gmail.com',
                password: ''
            },

            ShortPassword:{
                firstName: 'dilruba',
                lastName: 'akter',
                email:'dilrubaakterdipa2002@gmail.com',
                password: 'dipa12'
            },

            invalid:{
                firstName: '',
                lastName: '',
                email:'',
                password: ''
            }
    }

    login_user={
            valid_login:{
                email: 'emonrpi@gmail.com',
                password:'emon1234@!'
            },

            invalid_login:{
                email: '',
                password:''
            },

            invalidEmail_login:{
                email: '',
                password:'dipa1234@!'
            },

            invalidPassword_login:{
                email: 'dilrubaakterdipa2002@gmail.com',
                password:''
            },
    }

    newContact={
        validContact:{
            firstName: 'dilruba',
            lastName: 'akter',
            birthdate: '2000-05-28',
            email: 'dilrubaakterdiparpicse002@gmail.com',
            phone: '01738438619',
            address1: 'Uttara,Dhaka',
            address2: 'Sector-11',
            city: 'Dhaka',
            state: 'Uttara',
            postalcode: '1206',
            country: 'Bangladesh'
        },

        missingFirstnameContact:{
            firstName: '',
            lastName: 'Akter',
            birthdate: '2000-05-28',
            email: 'dilrubaakterdipa2002@gmail.com',
            phone: '01738438619',
            address1: 'Uttara,Dhaka',
            address2: 'Sector-11',
            city: 'Dhaka',
            state: 'Uttara',
            postalcode: '1206',
            country: 'Bangladesh'
        },

        missingLastnameContact:{
            firstName: 'Dilruba',
            lastName: '',
            birthdate: '2000-05-28',
            email: 'dilrubaakterdipa2002@gmail.com',
            phone: '01738438619',
            address1: 'Uttara,Dhaka',
            address2: 'Sector-11',
            city: 'Dhaka',
            state: 'Uttara',
            postalcode: '1206',
            country: 'Bangladesh'
        },

        missingBirthdateContact:{
            firstName: 'Dilruba',
            lastName: 'Akter',
            birthdate: '',
            email: 'dilrubaakterdipa2002@gmail.com',
            phone: '01738438619',
            address1: 'Uttara,Dhaka',
            address2: 'Sector-11',
            city: 'Dhaka',
            state: 'Uttara',
            postalcode: '1206',
            country: 'Bangladesh'
        },

        missingEmailContact:{
            firstName: 'Dilruba',
            lastName: 'Akter',
            birthdate: '2000-05-28',
            email: '',
            phone: '01738438619',
            address1: 'Uttara,Dhaka',
            address2: 'Sector-11',
            city: 'Dhaka',
            state: 'Uttara',
            postalcode: '1206',
            country: 'Bangladesh'
        },

         missingPhoneContact:{
            firstName: 'Dilruba',
            lastName: 'Akter',
            birthdate: '2000-05-28',
            email: 'dilrubaakterdipa2002@gmail.com',
            phone: '',
            address1: 'Uttara,Dhaka',
            address2: 'Sector-11',
            city: 'Dhaka',
            state: 'Uttara',
            postalcode: '1206',
            country: 'Bangladesh'
        },

        missingAddressContact:{
            firstName: 'Dilruba',
            lastName: 'Akter',
            birthdate: '2000-05-28',
            email: 'dilrubaakterdipa2002@gmail.com',
            phone: '01738438619',
            address1: '',
            address2: 'Sector-11',
            city: 'Dhaka',
            state: 'Uttara',
            postalcode: '1206',
            country: 'Bangladesh'
        },

        missingCityContact:{
            firstName: 'Dilruba',
            lastName: 'Akter',
            birthdate: '2000-05-28',
            email: 'dilrubaakterdipa2002@gmail.com',
            phone: '01738438619',
            address1: 'Uttara,Dhaka',
            address2: 'Sector-11',
            city: '',
            state: 'Uttara',
            postalcode: '1206',
            country: 'Bangladesh'
        },

         missingStateContact:{
            firstName: 'Dilruba',
            lastName: 'Akter',
            birthdate: '2000-05-28',
            email: 'dilrubaakterdipa2002@gmail.com',
            phone: '01738438619',
            address1: 'Uttara,Dhaka',
            address2: 'Sector-11',
            city: 'Dhaka',
            state: '',
            postalcode: '1206',
            country: 'Bangladesh'
        },

        missingPostalCodeContact:{
            firstName: 'Dilruba',
            lastName: 'Akter',
            birthdate: '2000-05-28',
            email: 'dilrubaakterdipa2002@gmail.com',
            phone: '01738438619',
            address1: 'Uttara,Dhaka',
            address2: 'Sector-11',
            city: 'Dhaka',
            state: 'Uttara',
            postalcode: '',
            country: 'Bangladesh'
        },

        missingCountryContact:{
            firstName: 'Dilruba',
            lastName: 'Akter',
            birthdate: '2000-05-28',
            email: 'dilrubaakterdipa2002@gmail.com',
            phone: '01738438619',
            address1: 'Uttara,Dhaka',
            address2: 'Sector-11',
            city: 'Dhaka',
            state: 'Uttara',
            postalcode: '1206',
            country: ''
        },

        invalidContact:{
            firstName: '',
            lastName: '',
            birthdate: '',
            email: '',
            phone: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            postalcode: '',
            country: ''
        }
    }

    updateContact={
        firstname: 'Emoncse',
        lastname: 'Dipa',
        birthdate: '1996-11-29',
        email: 'dilrubaakterdipacse09@gmail.com',
        phone: '01796795458',
        address1: 'Uttara,Dhaka',
        address2: 'Sector-11',
        city: 'Dhaka',
        state: 'Uttara',
        postalcode: '1206',
        country: 'bangladesh'
    }
}