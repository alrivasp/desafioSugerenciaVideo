class Multimedia{
    constructor(url){
        let _url = url;
        this.getUrl = () => _url;
    }

    get url(){
        return this.getUrl();
    }

    set setInicio(entry){
        this.getUrl = () => entry;
    }
}

class Reproductor extends Multimedia {
    constructor(url, id){
        super(url)
        let _id = id;
        this.getId = () => _id;
    }

    get id() {
        return this.getId();
    }

    playMultimedia(){
        Video(this.url, this.id);
    }

    set setInicio(time = 0){
        let id_html = document.getElementById(this.id);
        if (!id_html) return;
        id_html.setAttribute("src", `${this.url}?start=${tiempo}`);
    }
}

const Video = (() => {
    const agregarEntry = (url, id) => {
      const id_html = document.getElementById(id);
      if (!id_html) return;
      id_html.setAttribute("src", url);
    };
    const agregarEntryPublic = (url, id) => agregarEntry(url, id);
    return agregarEntryPublic;
})();

let url_musica = "https://www.youtube.com/embed/R2rP8ZU52gU";
let url_pelicula = "https://www.youtube.com/embed/Vux6KhlrERk";
let url_serie = "https://www.youtube.com/embed/Fq5lrpOWy04";

let musica = new Reproductor(url_musica, "iframeMusica");
let pelicula = new Reproductor(url_pelicula, "iframePelicula");
let serie = new Reproductor(url_serie, "iframeSerie");

musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();