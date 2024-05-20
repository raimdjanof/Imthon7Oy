import React, { useEffect, useState, useRef } from 'react';
import { useAuth } from '../hook/useAuth';
import SpotifyWebApi from 'spotify-web-api-node';
import Header from "../components/Header";
import PlayBack from '../components/PlayBack';
import { useNavigate } from 'react-router-dom';

function Dashboard({ code }) {
    const spotifyApi = new SpotifyWebApi({
        clientId: "cadbcfa0891b4476bfc43794882415ae"
    });
    const navigate = useNavigate()
    const accessToken = useAuth(code);
    const [artists, setArtists] = useState([]);
    const [artistTracks, setArtistTracks] = useState({});
    const [player, setPlayer] = useState(null);
    const [deviceId, setDeviceId] = useState(null);
    const scrollRef = useRef(null);
    const [title , setTitle] = useState('');
    const [searchTrack , setSearchTrack] = useState([]); 

    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken);

        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb(accessToken); }
            });

            setPlayer(player);

            player.addListener('ready', ({ device_id }) => {
                setDeviceId(device_id);
                console.log('Ready with Device ID', device_id);
            });

            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.connect();
        };

    }, [accessToken]);

    useEffect(() => {
        if (!accessToken) return;

        spotifyApi.searchArtists('Your top mixes')
            .then(res => {
                if (res.body.artists.items.length > 0) {
                    const topArtists = res.body.artists.items.slice(0, 5);
                    setArtists(topArtists);

                    topArtists.forEach(artist => {
                        spotifyApi.getArtistTopTracks(artist.id, 'US')
                            .then(trackRes => {
                                setArtistTracks(prevState => ({
                                    ...prevState,
                                    [artist.id]: trackRes.body.tracks.slice(0, 4)
                                }));
                            })
                            .catch(err => {
                                console.error('Error fetching top tracks', err);
                            });
                    });
                }
            })
            .catch(err => {
                console.error('Error searching artists', err);
            });
    }, [accessToken]);

    const playTrack = (trackUri) => {
        if (!deviceId) return;

        spotifyApi.play({
            device_id: deviceId,
            uris: [trackUri]
        }).catch(err => console.error('Error playing track', err));
    };

    const getRandomColor = () => {
        const colors = ['border-red-500', 'border-green-500', 'border-blue-500', 'border-orange-500', 'border-yellow-500', 'border-purple-500'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const choosPlay = (track) => {
        setPlayer(track.uri);
    }
    const navigateToSinglePage = () => {
        navigate(`/single`);
    };

    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken, title]);

    useEffect(() => {
        if (title) {
            spotifyApi.searchTracks(title)
                .then((res) => {
                    setSearchTrack(res.body.tracks.items.map(item => {
                        const searchData = {
                            img: item.album.images[0].url,
                            name: item.name,
                            uri: item.uri,
                        };
                        return searchData;
                    }));
                })
                .catch(err => console.error('Error searching tracks', err));
        } else {
            setSearchTrack([]);
        }
    }, [title, accessToken]);

    return (
        <div className='flex w-[54%] overflow-y-auto h-[100vh] flex-col mx-auto'>
            <Header />
            <div>
                <input
                    className='bg-[#2e4f90bb] w-[790px] py-2 rounded-lg outline-none mx-5 px-5 text-white font-semibold'
                    value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Search...' />
                <div className='grid ml-4 mt-5 px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
                    {searchTrack.map(item => (
                        <div onClick={() => playTrack(item.uri)} key={item.uri} className='bg-gray-800 cursor-pointer rounded hover:rounded-l-xl hover:rounded-tr-xl hover:rounded-br-none w-[175px] hover:w-[176px] transition-all p-3'>
                            <img className='rounded transition-all' src={item.img} style={{ width: '182px', height: '182px' }} alt="img tracks" />
                            <h2 className='text-[#d7cfcfd8] font-medium'>{item.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
            {searchTrack.length === 0 && (
                <div className='mt-5 mx-5' ref={scrollRef}>
                    <h1 className='text-white text-3xl font-bold mb-5 text-center'>UZB Music</h1>
                    {artists.map(artist => (
                        <div key={artist.id}>
                            <div className='flex justify-between'>
                                <h2 className='text-white font-bold text-xl mb-5'>{artist.name}</h2>
                                <span className='text-white font-bold text-lg' onClick={() => navigateToSinglePage()}>SEE ALL</span>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
                                {artistTracks[artist.id]?.map(track => (
                                    <div onClick={() => choosPlay(track)} key={track.id} className='bg-[#1a1919] cursor-pointer rounded-lg p-4'>
                                        <img
                                            className={`mb-4 rounded-lg border-b-4 ${getRandomColor()}`}
                                            src={track.album.images[0]?.url}
                                            alt={track.name}
                                            style={{ width: '182px', height: '182px' }}
                                            onClick={() => playTrack(track.uri)}
                                        />
                                        <h3 className='text-white font-bold text-lg mb-2'>{track.name}</h3>
                                        <p className='text-[#d7cfcfd8] font-medium text-sm'>
                                            {Math.floor(track.duration_ms / 60000)}:{((track.duration_ms % 60000) / 1000).toFixed(0).padStart(2, '0')}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <PlayBack player={player} accessToken={accessToken} />
        </div>
    );
}

export default Dashboard;