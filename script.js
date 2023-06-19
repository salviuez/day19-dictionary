async function getWord() {
    var word = document.getElementById('txt').value;
    console.log(word);

    let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    let result = await res.json();
    console.log(result);

    var dict = document.getElementById("dictionary");
    dict.innerHTML = `<div class="card mb-3">                                                    
  <img src="https://t3.ftcdn.net/jpg/02/26/25/76/360_F_226257619_yl8zDKOAgEFQjv0zRYWIaR6KAlgsHX96.jpg" class="card-img-top" alt="..." style="height:70vh">
  <div class="card-img-overlay"
  <div class="card-body">
    <h2 class="card-title">Search Result</h2>
    <p class="card-text">Meaning: ${result[0].meanings[0].definitions[0].definition}</p>
  </div>
</div>
</div>`

}
// getWord();
