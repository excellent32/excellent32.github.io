export const routes = [
    {
        name: 'Third Party Login',
        children: [
            {
                path: '/apple',
                name: 'Apple',
                children: null
            },
            {
                path: '/google',
                name: 'Google',
                children: null
            }
        ]
    }
]