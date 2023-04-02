generateQuote = () => {
    let quotes = {
        "- Madeline Miller" : '“Bury us, and mark our names above. Let us be free.”',
        "- Aaron Lauritsen" : '“There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow.”',
        "- Alysha Speer" : '“You never really know what coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity.”',
        "- C.S. Lewis" : '“I was not born to be free---I was born to adore and obey.”',
        "- John Galsworthy" : '“Life calls the tune, we dance.”',
    }

    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random()*authors.length)];

    let quote = quotes[author];

    document.querySelector(".quote").innerText = quote;
    document.querySelector(".author").innerText = author;
}