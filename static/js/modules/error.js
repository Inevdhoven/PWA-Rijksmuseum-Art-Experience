
export function errorState() {
    return `
        <div class="error">
            <svg xmlns="http://www.w3.org/2000/svg" width="230" height="294" viewBox="0 0 230 294" fill="none">
                <rect x="0.5" y="0.5" width="229" height="293" stroke="white"/>
                <rect x="20.5" y="19.4068" width="189" height="255.186" stroke="white"/>
                <path d="M0.5 0.472672L20.5 19.3794" stroke="white"/>
                <path d="M209 274.148L229 293.055" stroke="white"/>
                <path d="M21 274.148L0.999999 293.055" stroke="white"/>
                <path d="M229 0.945343L209 19.8521" stroke="white"/>
                <path d="M110.67 89.5C112.594 86.1667 117.406 86.1667 119.33 89.5L173.89 184C175.814 187.333 173.409 191.5 169.56 191.5H60.4404C56.5914 191.5 54.1858 187.333 56.1103 184L110.67 89.5Z" fill="white"/>
                <path d="M114.524 170.648C113.336 170.648 112.4 170.324 111.716 169.676C111.068 169.028 110.744 168.092 110.744 166.868C110.744 165.68 111.068 164.762 111.716 164.114C112.4 163.466 113.336 163.142 114.524 163.142C115.64 163.142 116.54 163.484 117.224 164.168C117.908 164.816 118.25 165.716 118.25 166.868C118.25 168.056 117.908 168.992 117.224 169.676C116.54 170.324 115.64 170.648 114.524 170.648ZM112.04 159.362L110.582 135.71H118.412L116.954 159.362H112.04Z" fill="#1E1E1E"/>
            </svg>
            <h1>Oops er is iets mis gegaan!</h1>
            <p>Probeer het later nog eens</p>
            <a href="/spa/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 9H18.33H21V6.33V4" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 9C18.5 5.44 15.92 3 12 3C10.55 3 9.17 3.35 7.96 3.96C5.02 5.44 3 8.48 3 12C3 16.97 7.03 21 12 21C15.52 21 18.56 18.98 20.04 16.04" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
    `
}
