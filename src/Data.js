import { v4 as uuidv4 } from 'uuid';
import FullInput from "./components/FullInput"


export const arrangements = {
    general: [
        {
            inputKind: 'FullInput',
            props: { text: 'First Name', inputName: 'firstName' },
            id: uuidv4(),
        },
        {
            inputKind: 'FullInput',
            props: { text: 'Last Name', inputName: 'lastName' },
            id: uuidv4(),
        },
        {
            inputKind: 'FullInput',
            props: { text: 'Title', inputName: 'title' },
            id: uuidv4(),
        },
    ],
    profile: [
        {
            inputKind: 'Description',
            props: { text: 'Title', inputName: 'profile' },
            id: uuidv4(),
        }
    ],
    contact: [
        {
            inputKind: 'FullInput',
            props: { text: 'Adress', inputName: 'adress' },
            id: uuidv4(),
        },
        {
            inputKind: 'FullInput',
            props: { text: 'Email', inputName: 'email' },
            id: uuidv4(),
        },
        {
            inputKind: 'FullInput',
            props: { text: 'Phone No', inputName: 'phoneNo' },
            id: uuidv4(),
        }
    ],
    education: [
        {
            inputKind: 'Add',
            props: {  },
            id: uuidv4(),
        }
    ],
    work: [
        {
            inputKind: 'Add',
            props: { },
            id: uuidv4(),
        }
    ],
    skill: [
        {
            inputKind: 'Add',
            props: { },
            id: uuidv4(),
        }
    ],
    project: [
        {
            inputKind: 'Add',
            props: { },
            id: uuidv4(),
        }
    ],
    course: [
        {
            inputKind: 'Add',
            props: { },
            id: uuidv4(),
        }
    ],
    interest: [
        {
            inputKind: 'Add',
            props: { },
            id: uuidv4(),
        }
    ],
    language: [
        {
            inputKind: 'Add',
            props: { },
            id: uuidv4(),
        }
    ],
}

export const popupFormats = {
    education: {
        inputs: [
            {
                inputKind: 'FullInput',
                props: { text: 'Name', inputName: 'name' },
                id: uuidv4(),
            },
            {
                inputKind: 'FullInput',
                props: { text: 'OfferedBy', inputName: 'offeredBy' },
                id: uuidv4(),
            },
            {
                inputKind: 'FullInput',
                props: { text: 'Details', inputName: 'details' },
                id: uuidv4(),

            },
            {
                inputKind: 'HalfInput',
                props: {firstText: 'Start', secondText: 'End', inputName1: 'start', inputName2: 'end'},
                id: uuidv4(),
            },
            {
                inputKind: 'Confirm',
                props: {},
                id: uuidv4(),
            }
        ],
        data: {   
            name: '',
            offeredBy: '',
            details: '',
            start: '',
            end: '',
            id: '',
        }
    },
    work: {
        inputs: [
            {
                inputKind: 'FullInput',
                props: { text: 'Company', inputName: 'company' },
                id: uuidv4(),
            },
            {
                inputKind: 'FullInput',
                props: { text: 'Position', inputName: 'position' },
                id: uuidv4(),
            },
            {
                inputKind: 'FullInput',
                props: { text: 'Details', inputName: 'details' },
                id: uuidv4(),
            },
            {
                inputKind: 'HalfInput',
                props: {firstText: 'Start', secondText: 'End', inputName1: 'start', inputName2: 'end'},
                id: uuidv4(),
            },
            {
                inputKind: 'Confirm',
                props: {},
                id: uuidv4(),
            }
        ],
        data: {   
            company: '',
            position: '',
            details: '',
            start: '',
            end: '',
            id: '',
        }
    },
    skill: {
        inputs: [
            {
                inputKind: 'FullInput',
                props: { text: 'Skill', inputName: 'skillName' },
                id: uuidv4(),
            },
            {
                inputKind: 'Confirm',
                props: {},
                id: uuidv4(),
            }
        ],
        data: {   
            skillName: '',
            id: ''
        }
    },
    project: {
        inputs: [
            {
                inputKind: 'FullInput',
                props: { text: 'Title', inputName: 'title' },
                id: uuidv4(),
            },
            {
                inputKind: 'FullInput',
                props: { text: 'Details', inputName: 'details' },
                id: uuidv4(),
            },
            {
                inputKind: 'HalfInput',
                props: {firstText: 'Start', secondText: 'End', inputName1: 'start', inputName2: 'end'},
                id: uuidv4(),
            },
            {
                inputKind: 'Confirm',
                props: {},
                id: uuidv4(),
            }
        ],
        data: {   
            title: '',
            details: '',
            start: '',
            end: '',
            id: ''
        }
    },
    course: {
        inputs: [
            {
                inputKind: 'FullInput',
                props: { text: 'Name', inputName: 'name' },
                id: uuidv4(),
            },
            {
                inputKind: 'FullInput',
                props: { text: 'Offered By', inputName: 'offeredBy' },
                id: uuidv4(),
            },
            {
                inputKind: 'FullInput',
                props: { text: 'Details', inputName: 'details' },
                id: uuidv4(),
            },
            {
                inputKind: 'HalfInput',
                props: {firstText: 'Start', secondText: 'End', inputName1: 'start', inputName2: 'end'},
                id: uuidv4(),
            },
            {
                inputKind: 'Confirm',
                props: {},
                id: uuidv4(),
            }
        ],
        data: {   
            name: '',
            offeredBy: '',
            details: '',
            start: '',
            end: '',
            id: ''
        }
    },
    interest: {
        inputs: [
            {
                inputKind: 'FullInput',
                props: { text: 'Interest', inputName: 'interestName' },
                id: uuidv4(),
            },
            {
                inputKind: 'Confirm',
                props: {},
                id: uuidv4(),
            }
        ],
        data: {   
            interestName: '',
            id: ''
        }
    },
    language: {
        inputs: [
            {
                inputKind: 'FullInput',
                props: { text: 'language', inputName: 'languageName' },
                id: uuidv4(),
            },
            {
                inputKind: 'Confirm',
                props: {},
                id: uuidv4(),
            }
        ],
        data: {   
            languageName: '',
            id: ''
        }
    }
}