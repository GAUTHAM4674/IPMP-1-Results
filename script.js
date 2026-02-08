const answers_no = {
    english: [
        "No",
        "Are you sure?",
        "Are you really sure??",
        "Are you really really sure???",
        "Think again?",
        "Don't believe in second chances?",
        "Why are you being so cold?",
        "Maybe we can talk about it?",
        "I am not going to ask again!",
        "Ok now this is hurting my feelings!",
        "You are now just being mean!",
        "Why are you doing this to me?",
        "Please give me a chance!",
        "I am begging you to stop!",
        "Ok, let's just start over.."
    ],
    malayalam: [
        "വേണ്ട",
        "നിനക്ക് ഉറപ്പാണോ?",
        "വാസ്തവത്തിൽ ഉറപ്പാണോ??",
        "വളരെ വളരെ ഉറപ്പാണോ???",
        "ഒന്നു കൂടി ചിന്തിക്കൂ?",
        "രണ്ടാമത്തെ അവസരത്തിൽ വിശ്വാസമില്ലേ?",
        "ഇത്രയും തണുത്തിരിക്കേണ്ടതുണ്ടോ?",
        "നമുക്ക് ഒന്ന് സംസാരിക്കാമോ?",
        "ഇനി ഞാൻ ചോദിക്കില്ല!",
        "ഇപ്പോൾ എനിക്ക് വേദനിക്കുന്നു!",
        "ഇത് വളരെ ക്രൂരമാണ്!",
        "നീ ഇങ്ങനെ ചെയ്യുന്നത് എന്തിനാണ്?",
        "ദയവായി എനിക്ക് ഒരു അവസരം തരൂ!",
        "ഞാൻ അപേക്ഷിക്കുന്നു, നിർത്തൂ!",
        "ശരി… വീണ്ടും തുടങ്ങാം.."
    ]
};

const answers_yes = {
    english: "Yes",
    malayalam: "അതെ 💖"
};

let language = "english"; // default language
const no_button = document.getElementById("no-button");
const yes_button = document.getElementById("yes-button");

let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener("click", () => {
    const banner = document.getElementById("banner");

    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }

    clicks++;

    const sizes = [40, 50, 30, 35, 45];
    size += sizes[Math.floor(Math.random() * sizes.length)];

    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;

    const total = answers_no[language].length;

    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener("click", () => {
    const banner = document.getElementById("banner");
    banner.src = "public/images/yes.gif";
    refreshBanner();

    document.getElementsByClassName("buttons")[0].style.display = "none";

    const message = document.getElementsByClassName("message")[0];
    message.style.display = "block";
});

function refreshBanner() {
    const banner = document.getElementById("banner");
    const src = banner.src;
    banner.src = "";
    banner.src = src;
}

function changeLanguage() {
    const selectElement = document.getElementById("language-select");
    language = selectElement.value;

    const questionHeading = document.getElementById("question-heading");

    if (language === "malayalam") {
        questionHeading.textContent = "നീ എന്റെ വാലന്റൈൻ ആകുമോ? 💘";
    } else {
        questionHeading.textContent = "Will you be my valentine?";
    }

    yes_button.innerHTML = answers_yes[language];
    no_button.innerHTML = answers_no[language][0];
    clicks = 0;
    i = 1;

    const successMessage = document.getElementById("success-message");

    if (language === "malayalam") {
        successMessage.textContent = "യേയ് 😍 ഇനി പിന്മാറാൻ പറ്റില്ല!";
    } else {
        successMessage.innerHTML = `
            hapihapihapi :D see ya on 14th (or after CTs :( )<br>
            but still YOU CANNOT BACK OUT ❤️
        `;
    }    
}