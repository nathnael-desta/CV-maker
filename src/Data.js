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