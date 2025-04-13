/*const quotebutton = document.querySelector("#js-new-quote");
const quotetext = document.querySelector("#js-quote-text");
async function generatequote(event) {
    let result = await fetch("https://thequoteshub.com/api")
    console.log(result)
    let json = await result.json() 
    console.log(json)

    quotetext.innerHTML = json.question


}
quotebutton.addEventListener("click", generatequote)


-r_bkxs-niglqtaZU_ox2FsG2vcpYnfEE7yItIHYaUJ5E2lLNYC2KDjOMJhcnAmO

4N11R3jOZVxoZy2RvklQxSOprHBeU9t3EnFuKLCkZVFWwUL7W6UQwjfG1zjPg4DfimhX-8IrFPnfuaTC4n9Leg
*/

var newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
//var answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);

var endpoint = "https://api.adviceslip.com/advice";

const pictures = ["images/IMGG1.jpg","images/IMGG2.jpg","images/IMGG3.jpg","images/IMGG4.jpg"]
let currnet = {
   question: "",
   answer: ""
};

getQuote()

async function getQuote() {
   try {
       const response = await fetch(endpoint);

       if (!response.ok){
           throw Error(response.statusText);
       }
       const json  = await response.json();
       
       displayQuote(json.slip.advice);

       //currnet.question = json.question ;
       //currnet.answer = json.answer;
       

   } catch(err) {
       console.log(err);
       alert('Fail');
   }
}

   function displayQuote(quote) {
   const quoteText = document.querySelector('#js-quote-text');
   quoteText.textContent = quote;
   let number = Math.floor(Math.random()*4)
   let pictureurl = pictures[number]
   //const answerText = document.querySelector('#js-answer-text');
    //answerText.textContent = ""
    document.querySelector("img").setAttribute("src", pictureurl)

}

   function displayAnswer(event) {
       const answerText = document.querySelector('#js-answer-text');
       answerText.textContent = currnet.answer;
       
      


   
}