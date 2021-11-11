//voice of travel agency asking questions on preference
const questionOne = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2FCL%20Travel%20Agency.mp3?v=1636483409617"
  );
  
  const questionTwoA = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2FunderTwenty.mp3?v=1636575432132"
  );
  const questionTwoB = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2FtwentyTothirty.mp3?v=1636575436663"
  );
  const questionTwoC = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2FthirtyTofourty.mp3?v=1636575441041"
  );
  const questionTwoD = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2FoverFourty.mp3?v=1636575452114"
  );
  const questionTwo = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2FsummerVwinter.mp3?v=1636483461133"
  );
  
  //Joined Version
  const questionThree = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2FsummerLocation.mp3?v=1636575468011"
  );
  const questionFour = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2FsumNatActivity.mp3?v=1636575478712"
  );
  const questionFive = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2FsumCitActivity.mp3?v=1636575488147"
  );
  const questionSix = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2FwinterLocation.mp3?v=1636575472788"
  );
  const questionSeven = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2FwinNatActivity.mp3?v=1636575491186"
  );
  const questionEight = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2FwinCitActivity.mp3?v=1636575495578"
  );
  
  // agency voice suggesting travel location
  const suggestTurkey = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2FfinalIstanbul.mp3?v=1636575540484"
  );
  const suggestNewYork = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2FfinalNYC.mp3?v=1636575545951"
  );
  const suggestSwitzerland = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2FfinalJungfraujoch.mp3?v=1636575545933"
  );
  const suggestFinland = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2FfinalRovaniemi.mp3?v=1636575551749"
  );
  const suggestTaiwan = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2FfinalTaipei.mp3?v=1636575554288"
  );
  const suggestJapan = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2FfinalOsaka.mp3?v=1636575547836"
  );
  const suggestKorea = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2FfinalJeju.mp3?v=1636575542477"
  );
  const suggestBali = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2FfinalBali.mp3?v=1636575558324"
  );
  
  //ambience ==> last layer of sound
  const ambienceTurkey = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2Fturkey.mp3?v=1636464971879"
  );
  const ambienceNewYork = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2Fnewyork.mp3?v=1636581911033"
  );
  const ambienceSwitzerland = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2Fswitzerland.mp3?v=1636464965477"
  );
  const ambienceFinland = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2Ffinland.mp3?v=1636464945971"
  );
  const ambienceTaiwan = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2Ftaiwan.mp3?v=1636464969298"
  );
  const ambienceJapan = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2Fjapan.mp3?v=1636464949774"
  );
  const ambienceKorea = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2Fkorea.mp3?v=1636464953319"
  );
  const ambienceBali = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2Findonesia.mp3?v=1636464948149"
  );
  
  //ambience ==> for optionWindows
  const summerAmbience = new Audio(
    "https://cdn.glitch.me/b23d6624-0186-402c-a8fd-860d2aa897ba%2Fsummer.mp3?v=1636464965250"
  );
  const winterAmbience = new Audio();
  const summerNature = new Audio();
  const winterNature = new Audio();
  const summerCity = new Audio();
  const winterCity = new Audio();
  const summerNatureLeisure = new Audio();
  const summerNatureHiking = new Audio();
  const summerCityFoodTrip = new Audio();
  const summerCityLandmarks = new Audio();
  const winterNatureLeisure = new Audio();
  const winterNatureCamping = new Audio();
  const winterCityIceSkating = new Audio();
  const winterCityLandMarks = new Audio();
  
  function changeQuestion(questionNumber) {
    switch (questionNumber) {
      case 1:
        console.log("Switching to question 1");
        // questionOne.play(); commented out to make checking quicker, but works fine when not commented :)
        // questionOne.loop=false; commented out to make checking quicker, but works fine when not commented :)
        noQuestions();
        document.getElementById("questionOne").style.display = "block";
        break;
      // case 2:
      //   //no layer of music
      //   console.log("Switching to question 2");
      //   questionTwo.play();
      //   questionTwo.loop = false;
      //   noQuestions();
      //   document.getElementById("questionTwo").style.display = "block";
      //   break;
      case 21:
        //no layer of music
        console.log("Switching to question 2");
        questionTwoA.play();
        questionTwoA.loop = false;
        noQuestions();
        document.getElementById("questionTwo").style.display = "block";
        break;
        
      case 22:
        //no layer of music
        console.log("Switching to question 2");
        questionTwoB.play();
        questionTwoB.loop = false;
        noQuestions();
        document.getElementById("questionTwo").style.display = "block";
        break;
        
      case 23:
        //no layer of music
        console.log("Switching to question 2");
        questionTwoC.play();
        questionTwoC.loop = false;
        noQuestions();
        document.getElementById("questionTwo").style.display = "block";
        break;
    
      case 24:
        //no layer of music
        console.log("Switching to question 2");
        questionTwoD.play();
        questionTwoD.loop = false;
        noQuestions();
        document.getElementById("questionTwo").style.display = "block";
        break;
  
      case 3:
        console.log("Switching to question 3");
  
        //add layer of music: summer
        summerAmbience.play();
        summerAmbience.loop = true;
  
        questionThree.play();
        questionThree.loop = false;
        noQuestions();
        document.getElementById("questionThree").style.display = "block";
        break;
      case 4:
        console.log("Switching to question 4");
  
        //add layer of music: summer nature ==> summer+summer nature
        summerNature.play();
        summerNature.loop = true;
  
        questionFour.play();
        questionFour.loop = false;
        noQuestions();
        document.getElementById("questionFour").style.display = "block";
        break;
      case 5:
        console.log("Switching to question 5");
  
        //add layer of music: summer city ==> summer+summer city
        summerCity.play();
        summerCity.loop = true;
  
        questionFive.play();
        questionFive.loop = false;
        noQuestions();
        document.getElementById("questionFive").style.display = "block";
        break;
      case 6:
        console.log("Switching to question 6");
  
        //new layer of music: winter
        winterAmbience.play();
        winterAmbience.loop = true;
  
        questionSix.play();
        questionSix.loop = false;
        noQuestions();
        document.getElementById("questionSix").style.display = "block";
        break;
      case 7:
        console.log("Switching to question 7");
  
        //add layer of music: winter nature ==> winter+winter nature
        winterNature.play();
        winterNature.loop = true;
  
        questionSeven.play();
        questionSeven.loop = false;
        noQuestions();
        document.getElementById("questionSeven").style.display = "block";
        break;
      case 8:
        console.log("Switching to question 8");
  
        //add layer of music: winter city ==> winter+winter nature
        winterCity.play();
        winterCity.loop = true;
  
        questionEight.play();
        questionEight.loop = false;
        noQuestions();
        document.getElementById("questionEight").style.display = "block";
        break;
    }
  }
  
  //A function to switch to the final destinations
  function result(destination) {
    console.log(destination);
    switch (destination) {
      case "turkey":
        //add last sound layer
        ambienceTurkey.play();
        ambienceTurkey.loop = false;
  
        suggestTurkey.play();
        suggestTurkey.loop = false;
  
        noQuestions();
        noFinalImages();
        document.getElementById("turkey").style.display = "block";
        break;
      case "newyork":
        //add last sound layer
        ambienceNewYork.play();
        ambienceNewYork.loop = false;
  
        suggestNewYork.play();
        suggestNewYork.loop = false;
  
        noQuestions();
        noFinalImages();
        document.getElementById("newyork").style.display = "block";
        break;
      case "switzerland":
        //add last sound layer
        ambienceSwitzerland.play();
        ambienceSwitzerland.loop = false;
  
        suggestSwitzerland.play();
        suggestSwitzerland.loop = false;
  
        noQuestions();
        noFinalImages();
        document.getElementById("switzerland").style.display = "block";
        break;
      case "finland":
        //add last sound layer
        ambienceFinland.play();
        ambienceFinland.loop = false;
  
        suggestFinland.play();
        suggestFinland.loop = false;
  
        noQuestions();
        noFinalImages();
        document.getElementById("finland").style.display = "block";
        break;
      case "taiwan":
        //add last sound layer
        ambienceTaiwan.play();
        ambienceTaiwan.loop = false;
  
        suggestTaiwan.play();
        suggestTaiwan.loop = false;
  
        noQuestions();
        noFinalImages();
        document.getElementById("taiwan").style.display = "block";
        break;
      case "japan":
        //add last sound layer
        ambienceJapan.play();
        ambienceJapan.loop = false;
  
        suggestJapan.play();
        suggestJapan.loop = false;
  
        noQuestions();
        noFinalImages();
        document.getElementById("japan").style.display = "block";
        break;
      case "korea":
        //add last sound layer
        ambienceKorea.play();
        ambienceKorea.loop = false;
  
        suggestKorea.play();
        suggestKorea.loop = false;
  
        noQuestions();
        noFinalImages();
        document.getElementById("korea").style.display = "block";
        break;
      case "bali":
        //add last sound layer
        ambienceBali.play();
        ambienceBali.loop = false;
  
        suggestBali.play();
        suggestBali.loop = false;
  
        noQuestions();
        noFinalImages();
        document.getElementById("bali").style.display = "block";
        break;
    }
  }
  
  //A function to disable all the questions
  function noQuestions() {
    let questions = document.getElementsByClassName("options");
    for (let i = 0; i < questions.length; i++) {
      questions[i].style.display = "none";
    }
  }
  
  //A function to disable all the final images
  function noFinalImages() {
    let questions = document.getElementsByClassName("result");
    for (let i = 0; i < questions.length; i++) {
      questions[i].style.display = "none";
    }
  }
  
  function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }
  
  // Dialing
  let dialWindow = document.getElementById("questionZero");
  let phoneCall = document.getElementById("phoneCallsound");
  
  dialWindow.addEventListener("mouseenter", () => {
    phoneCall.play();
  });
  
  dialWindow.addEventListener("mouseleave", () => {
    phoneCall.pause();
  });
  
  