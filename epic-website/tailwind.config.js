module.exports = {
  purge: [
    './src/components/App/App.js',
    './src/components/ConnectionIcon/index.js',
    './src/components/ContactButton/index.js',
    './src/components/ContactModal/index.js',
    './src/components/ContactUsButton/index.js',
    './src/components/BlogPage/index.js',
    './src/components/Footer/index.js',
    './src/components/Introduction/index.js',
    './src/components/LinesIntroduction/index.js',
    './src/components/MainPage/index.js',
    './src/components/MenuButton/index.js',
    './src/components/MenuExpanded/index.js',
    './src/components/MenuList/index.js',
    './src/components/Methodology/index.js',
    './src/components/NavBar/index.js',
    './src/components/PabloVidal/index.js',
    './src/components/PeopleIcon/index.js',
    './src/components/Services/index.js',
    './src/components/StayInTouch/index.js',
    './src/components/TravisGiggy/index.js',
  ],
  theme: {
    extend: {
      fontSize: {
        "epicTitle": "30px",
        "beBetterSize": "35px",
        "descriptionSize": "14px",
        "personNameSize": "40px",
        "personNameMdSize": "80px",
        "personJobSize": "22px",
        "contactFontSize": "16px",
        "menuFontSize": "10px",
        "methodologyTitleSize": "25px",
        "numberSize": "5.6rem",
        "buttonSize": "20px",
        "beBetterMdSize": "45px"
      },
      colors: {
        "epicTitleBlue" : "#0891C4",
        "beBetterBlue": "#011865",
        "personDescriptionColor": "#303030",
        "stayInTouchDescriptionColor": "#191919",
        "nameSecondaryColor": "#303030",
        "darkPurpleAccent": "#5636D0"
      },
      backgroundColor: {
        "blueButtonColor": "#0891C4",
        "lightBlue": "#F9FBFF",
        "stayInTouchBlue": "#011865",
        "buttonColor": "#0891C4"
      },
      fontFamily: {
        "epicLogo": ["Comfortaa", "Sans-serif"],
        "beBetter": ["Raleway", "Sans-serif"],
        // "openSans": ["OpenSans", "Sans-serif"]
      },
      inset: {
        "1/2": "50%",
      },
      margin: {
        "28": "30%",
        "20": "5rem"
      },
      height: {
        "28": "7rem",
        "70": "24rem",
        "6": "2.8rem",
        "50px": "50px",
        "40vh": "40vh",
        "120px":"120px",
      },
      width: {
        "126": "26rem",
        "124": "25rem",
        "112": "21rem",
        "160px":"160px",
      },
      minWidth: {
        "1/2": "50%",
        "400px": "400px",
        "600px": "600px",
      },
      maxWidth: {
        "80%": "80%"
      },

      spacing: {
        "124": "-24rem"
      },
      borderColor: {
        "epicBlue": "#011865"
      },
      borderRadius: {
        "xlg" : "1rem"
      },
      zIndex: {
        "75": "75",
        "80":  "80",
        "90": "90",
        "100": "100",
        "110": "110"
      }
    },
  },
  variants: {},
  plugins: [],
}
