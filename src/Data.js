import FullInput from "./components/FullInput"

export const arrangements = {
    general: [
        {
            inputKind: 'FullInput',
            props: { text: 'First Name', inputName: 'firstName' }
        },
        {
            inputKind: 'FullInput',
            props: { text: 'Last Name', inputName: 'lastName' }
        },
        {
            inputKind: 'FullInput',
            props: { text: 'Title', inputName: 'title' }
        },
    ],
    profile: [
        {
            inputKind: 'Description',
            props: { text: 'Title', inputName: 'profile' }
        }
    ],
    contact: [
        {
            inputKind: 'FullInput',
            props: { text: 'Adress', inputName: 'adress' }
        },
        {
            inputKind: 'FullInput',
            props: { text: 'Email', inputName: 'email' }
        },
        {
            inputKind: 'FullInput',
            props: { text: 'Phone No', inputName: 'phoneNo' }
        }
    ],
    education: [
        {
            inputKind: 'Add',
            props: { inputName: '' }
        }
    ],
    work: [
        {
            inputKind: 'Add',
            props: { inputName: '' }
        }
    ],
    skill: [
        {
            inputKind: 'Add',
            props: { inputName: '' }
        }
    ],
    project: [
        {
            inputKind: 'Add',
            props: { inputName: '' }
        }
    ],
    course: [
        {
            inputKind: 'Add',
            props: { inputName: '' }
        }
    ],
    interest: [
        {
            inputKind: 'Add',
            props: { inputName: '' }
        }
    ],
    language: [
        {
            inputKind: 'Add',
            props: { inputName: '' }
        }
    ],
}

export const popups = {
    education: [
        {
            inputKind: 'FullInput',
            props: { text: 'Name', inputName: 'name' }
        },
        {
            inputKind: 'FullInput',
            props: { text: 'OfferedBy', inputName: 'offeredBy' }
        },
        {
            inputKind: 'FullInput',
            props: { text: 'Details', inputName: 'details' }
        },
        {
            inputKind: 'HalfInput',
            props: {firstText: 'Start', secondText: 'End', inputName1: 'start', inputName2: 'end'}
        },
        {
            inputKind: 'Confirm',
            props: {}
        }
    ],
    work: [
        {
            inputKind: 'FullInput',
            props: { text: 'Company', inputName: 'company' }
        },
        {
            inputKind: 'FullInput',
            props: { text: 'Position', inputName: 'position' }
        },
        {
            inputKind: 'FullInput',
            props: { text: 'Details', inputName: 'details' }
        },
        {
            inputKind: 'HalfInput',
            props: {firstText: 'Start', secondText: 'End', inputName1: 'start', inputName2: 'end'}
        },
        {
            inputKind: 'Confirm',
            props: {}
        }
    ],
    skill: [
        {
            inputKind: 'FullInput',
            props: { text: 'Skill', inputName: 'skillName' }
        },
        {
            inputKind: 'Confirm',
            props: {}
        }
    ],
    project: [
        {
            inputKind: 'FullInput',
            props: { text: 'Title', inputName: 'title' }
        },
        {
            inputKind: 'FullInput',
            props: { text: 'Details', inputName: 'details' }
        },
        {
            inputKind: 'HalfInput',
            props: {firstText: 'Start', secondText: 'End', inputName1: 'start', inputName2: 'end'}
        },
        {
            inputKind: 'Confirm',
            props: {}
        }
    ],
    course: [
        {
            inputKind: 'FullInput',
            props: { text: 'Name', inputName: 'name' }
        },
        {
            inputKind: 'FullInput',
            props: { text: 'Offered By', inputName: 'offeredBy' }
        },
        {
            inputKind: 'FullInput',
            props: { text: 'Details', inputName: 'details' }
        },
        {
            inputKind: 'HalfInput',
            props: {firstText: 'Start', secondText: 'End', inputName1: 'start', inputName2: 'end'}
        },
        {
            inputKind: 'Confirm',
            props: {}
        }
    ],
    skill: [
        {
            inputKind: 'FullInput',
            props: { text: 'Interest', inputName: 'interestName' }
        },
        {
            inputKind: 'Confirm',
            props: {}
        }
    ],
    skill: [
        {
            inputKind: 'FullInput',
            props: { text: 'language', inputName: 'languageName' }
        },
        {
            inputKind: 'Confirm',
            props: {}
        }
    ]
}