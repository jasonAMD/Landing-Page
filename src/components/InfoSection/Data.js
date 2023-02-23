export const homeObjOne = {
    id: 'athena',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Project Athena',
    headline: 'AMD Product Data',
    description: 'The goal of Project Athena is to understand how our users use AMD products (both CPU & GPU) in the real world. To achieve this, a telemetry component is included as part of the Radeon Software driver download from AMD.com, and when the user installs Radeon Software, the user is presented with an opportunity to participate in data sharing with AMD in an anonymous manner. Project Athena is approved in over 40 countries, with strict compliance to applicable laws including GDPR (for the European Union countries) and CCPA (California). The Athena team publishes monthly reports. If you wish to be included in the monthly distribution, please email Stephen.Wong@amd.com.',
    buttonLabel: 'See Dashboard',
    buttonLabel2: 'See Past Reports',
    imgStart: false,
    img: require('../images/svg-1.svg').default,
    alt: 'Athena',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjTwo = {
    id: 'performance',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Preformance',
    headline: 'Prioritization Dashboard',
    description: 'To goal of this projects is to provide an over-arching priority generation tool to help support business decisions in performance optimizations, testing and title selection at AMD. This project will focus on the following key areas: Gathering game information from current AMD sources (Nema) and external data repositories (IGDB, etc...), the creation of a new SQL database and cronjob scripts to ensure daily collection of major social media data indicators, the scoring and prioritization of current and future popularity of games with future release dates using a data-driven approach and it will provide a use case for multiple teams for their own prioritization of resources (ISV/Driver/QA/etc...)',
    buttonLabel: 'See Dashboard',
    buttonLabel2: 'See Past Reports',
    imgStart: true,
    img: require('../images/svg-2.svg').default,
    alt: 'Prioritization',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjThree = {
    id: 'vanguard',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Team Vanguard',
    headline: 'Sentiment Analyzer',
    description: 'The goal of this dashboard is to be able to provide sentiment insight on reddit threads, in addition to providing a comment tagging system for the purpose of highlighting issues found on AMD reddit threads. Additional threads of interest can be added to this dashboard upon request to the Vanguard Team, please contact Rob Marcelo, Tyrone Buccione or Vikash Ratanji. All new threads will be added to the navigation bar visible on the dashboard.',
    buttonLabel: 'See Dashboard',
    buttonLabel2: 'See Past Reports',
    imgStart: false,
    img: require('../images/svg-3.svg').default,
    alt: 'Vanguard',
    dark: false,
    primary: false,
    darkText: true
}