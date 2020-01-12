const sentence_list = document.querySelector(".sentence_list"),
    html_sentence_ko = sentence_list.querySelector(".sentence_ko"),
    html_sentence_eng = sentence_list.querySelector(".sentence_eng");

let eng_length;

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

function printSentence(sentence, kind) {
    if (kind == 'ko') {
        html_sentence_ko.innerText = sentence.fields.sentence_ko;

    } else if(kind == 'eng') {
        html_sentence_eng.innerText = sentence.fields.sentence_eng;

    } else if(kind == 'both') {
        html_sentence_ko.innerText = sentence.fields.sentence_ko;
        html_sentence_eng.innerText = sentence.fields.sentence_eng;
    }
}

function delay(ms) {
    return new Promise(res => setTimeout(res, ms));
}

async function runWorking(sentence) {
    eng_length = sentence.fields.sentence_eng.length;

    if (learning_method == 'blink_nomal') {
        printSentence(sentence, 'both');
        await delay(6000);

    } else if(learning_method == 'blink_blink') {
        printSentence(sentence, 'ko');
        await delay(155 * eng_length);

        printSentence(sentence, 'eng');
        await delay(6000);

    } else {
        printSentence(sentence, 'ko');
        await delay(150 * eng_length);
    }
}

async function init() {

    if (learning_method !== 'blink_nomal') {
        await shuffle(sentence_json);
    }

    for (let i = 0; i < sentence_json.length; i++) {
        clearSentence();
        await runWorking(sentence_json[i]);
    }
}

init();
