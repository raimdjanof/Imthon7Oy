import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';
import Header from '../components/Header';

const spotifyApi = new SpotifyWebApi({
    clientId: "cadbcfa0891b4476bfc43794882415ae"
});

function Single() {
    const [artistTracks, setArtistTracks] = useState([]);
    const { artistId } = useParams();

    useEffect(() => {
        if (!artistId) return;

        spotifyApi.getArtistTopTracks(artistId, 'US')
            .then(res => {
                setArtistTracks(res.body.tracks.slice(0, 20));
            })
            .catch(err => {
                console.error('Error fetching artist tracks', err);
            });
    }, [artistId]);

    return (
        <div className='w-[54%] overflow-y-auto h-[100vh]'>
            <Header />
            <ul>
               <li></li>
            </ul>
        </div>
    );
}

export default Single;