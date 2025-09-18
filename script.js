// paralellax scroll effect
document.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const parallax = document.querySelector('.parallax-bg');
    parallax.style.transform = `translateY(${scrolled * -0.3}px)`;
});

// song filter

let songs_list = [
    {titel: "Trance Viking",
    genre: "Psytrance",
    artist: "Timmet",
    coverurl: "trance_viking.jpg",
    hyperlink: "https://soundcloud.com/game-crafter-633059615/trance-viking"
    },
    {titel: "Suffocation",
    genre: "Hardtekk",
    artist: "Timmet",
    coverurl: "suffocation.jpg",
    hyperlink: "https://soundcloud.com/game-crafter-633059615/suffocation"
    },
    {titel: "Summer is coming",
    genre: "EDM",
    artist: "Timmet",
    coverurl: "summer_is_comming.jpg",
    hyperlink: "https://soundcloud.com/game-crafter-633059615/summer-is-coming"
    },
    {titel: "Transience",
    genre: "Hardtekk",
    artist: "Timmet",
    coverurl: "transience.jpg",
    hyperlink: "https://soundcloud.com/game-crafter-633059615/transience"
    },
]

function render(genre_attribut) {
    let rendered_song = genre_attribut.map(song =>

    `<a class="song_link" href="${song.hyperlink}">
        <div class="song">
            <img src="${song.coverurl}" width="100%">
            <p class="song_link">${song.titel}</p>
        </div>
    </a>`

    ).join("");

    console.log();

    document.querySelector("#songs").innerHTML = rendered_song;
}

function filter_genre() {
    let gen_input = document.querySelector("#genre_filter").value;
    console.log (gen_input)
    let genre_filtered = songs_list.filter(song => song.genre == gen_input);
    console.log (genre_filtered)

    if (gen_input == "Alles") {
        render(songs_list);
    
    }
    
    else {
        render(genre_filtered);
    }

}

window.onload = function() {
    render(songs_list);
}