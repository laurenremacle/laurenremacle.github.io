 var newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
 var answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);

 var endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";


let currnet = {
    question: "",
    answer: ""
};

async function getQuote() {
    try {
        const response = await fetch(endpoint);

        if (!response.ok){
            throw Error(response.statusText);
        }
        const json  = await response.json();
        
        displayQuote(json.question);

        currnet.question = json.question ;
        currnet.answer = json.answer;

    } catch(err) {
        console.log(err);
        alert('Fail');
    }
}

    function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;

}

    function displayAnswer(answer) {
        const answerText = document.querySelector('#js-answer-text');
        answerText.textContent = answer;
        
        quotebutton.addEventListener("click", generatequote)
        getQuote();


    
}