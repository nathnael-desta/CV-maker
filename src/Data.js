import FullInput from "./components/FullInput"

const data = {
    general: {
        firstName: '',
        lastName: '',
        title: ''
    },
    profile: '',
    contact: {
        adress: '',
        email: '',
        phoneNo: ''
    },
    work: [
        // {
        //     companyName: '',
        //     postion: '',
        //     details: '',
        //     start: '',
        //     end: ''
        // }
    ],
    skills: [],
    projects: [
        // {
        //     title: '',
        //     details: '',
        //     start: '',
        //     end: ''
        // }
    ],
    courses: [
        // {
        //     courseName: '',
        //     offeredBy: '',
        //     details: '',
        //     start: '',
        //     end: ''
        // }
    ],
    interests: [],
    languages: [],
}

export const arrangements = {
    general: [
        {
            type: 'FullInput',
            props: { text: 'First Name' }
        },
        {
            type: 'FullInput',
            props: { text: 'Last Name' }
        },
        {
            type: 'FullInput',
            props: { text: 'Title' }
        }
    ],
    profile: [
        {
            type: 'Description',
            props: { text: 'Title' }
        }
    ],
    contact: [
        {
            type: 'FullInput',
            props: { text: 'Adress' }
        },
        {
            type: 'FullInput',
            props: { text: 'Email' }
        },
        {
            type: 'FullInput',
            props: { text: 'Phone No' }
        }
    ],
    education: [
        {
            type: 'Add',
        }
    ],
    work: [
        {
            type: 'Add',
        }
    ],
    skill: [
        {
            type: 'Add',
        }
    ],
    project: [
        {
            type: 'Add',
        }
    ],
    course: [
        {
            type: 'Add',
        }
    ],
    interest: [
        {
            type: 'Add',
        }
    ],
    language: [
        {
            type: 'Add',
        }
    ],

}