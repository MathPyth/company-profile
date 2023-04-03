/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                mathpylue: '#2463EA',
                mathpyDark: '#0F172A',
                mathpyWhite: '#FFFEFE',
                mathpygray: '#8A97A9',
            },
            fontSize: {
                smallest: '0.875rem',
                small: '1rem',
                base: '1.25rem',
                large: '2.5rem',
                extralarge: '3rem',
            },
        },
    },
    plugins: [],
}
