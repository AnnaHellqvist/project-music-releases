import React from 'react';
import CoverImage from './Cover-image'
import AlbumName from './Album-name'
import ArtistName from './Artist-name'
import data from './data.json';
import AlbumCoverOverlay from './Album-cover-overlay'

const albumsArray = data.albums.items;
console.log(albumsArray)

const Card = () => {
    return (
        <>
            {albumsArray.map((album) => {
                return (
                    <div className="card">
                        <AlbumCoverOverlay />
                        <CoverImage
                            alt="Album"
                            key={album.images[1].url}
                            src={album.images[1].url}
                        />
                        <AlbumName
                            key={album.name}
                            name={album.name}
                            url={album.external_urls.spotify}
                        />
                        <ArtistName
                            key={album.artists[0].name}
                            name={album.artists.map((artist) => { return artist.name })}
                            url={album.artists.map((url) => {return url.external_urls.spotify})}
                        />
                    </div>
                )
            })}

        </>
            
    );
}

export default Card;