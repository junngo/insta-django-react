const sentence_list = document.querySelector(".sentence_list"),
    html_sentence_ko = sentence_list.querySelector(".sentence_ko"),
    html_sentence_eng = sentence_list.querySelector(".sentence_eng");

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
}

function clearSentence() {
    html_sentence_ko.innerText = '';
    html_sentence_eng.innerText = '';
}

function delay(ms) {
    return new Promise(res => setTimeout(res, ms));
}

async function printSentence(sentence) {
    html_sentence_ko.innerText = sentence.fields.sentence_ko;
    await delay(130 * sentence.fields.sentence_eng.length);

    html_sentence_eng.innerText = sentence.fields.sentence_eng;
    await delay(4000);
}

async function init() {

    await shuffle(sentence_json);

    for (let i = 0; i < sentence_json.length; i++) {
        clearSentence();
        await printSentence(sentence_json[i]);
    }
}

init();
