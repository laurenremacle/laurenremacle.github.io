const quotebutton = document.querySelector("#js-new-quote");
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