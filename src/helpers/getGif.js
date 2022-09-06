

export const getGif = async (categoria) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=KO1hiYGlLJM1kkCPK77kEaCaxFEKrwLH&q=${categoria}&limit=5`;

    const resp = await fetch(url);

    const {data} = await resp.json();

    const gifs = data.map( gif =>
        ({
            id: gif.id,
            titulo: gif.title,
            url: gif.images.downsized_medium.url
        })
    )

    console.log(gifs);
    return gifs;

}
