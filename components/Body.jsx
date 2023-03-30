import { useSession } from "next-auth/react";
import { useEffect, useState, useRef } from "react";
import Poster from "./Poster";
import Search from "./Search";
import Track from "./Track";

function Body({ spotifyApi, chooseTrack }) {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [currentReleaseIndex, setCurrentReleaseIndex] = useState(0);
  const releasesRef = useRef(null);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  //Search results

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;
    spotifyApi.searchTracks(search).then((response) => {
      setSearchResults(
        response.body.tracks.items.map((track) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
            popularity: track.popularity,
          };
        })
      );
    });
  }, [search, accessToken]);

  //New releases

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getNewReleases().then((response) => {
      setNewReleases(
        response.body.albums.items.map((track) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.images[0].url,
          };
        })
      );
    });
  }, [accessToken]);

  const releasesToDisplay = newReleases
    .slice(currentReleaseIndex, currentReleaseIndex + 4)
    .map((track) => (
      <Poster key={track.id} track={track} chooseTrack={chooseTrack} />
    ));

  return (
    <div className="bg-black ml-24 py-4 space-y-8 md:max-w-6xl flex-grow md:mr-5">
      <Search search={search} setSearch={setSearch} />
      <div className="flex items-center justify-between">
        <h2 className="text-white font-bold mb-3">
          {searchResults.length === 0 ? "Top Hits" : "Tracks"}
        </h2>
      </div>
      <div
        ref={releasesRef}
        className="grid overflow-y-scroll scrollbar-hide h-96 pb-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8"
      >
        {searchResults.length === 0
          ? releasesToDisplay
          : searchResults
              .slice(0, 4)
              .map((track) => (
                <Poster
                  key={track.id}
                  track={track}
                  chooseTrack={chooseTrack}
                />
              ))}
      </div>
      <div className="flex gap-x-8 absolute min-w-full md:relative ml-6">
        {/* Genres */}

        <div className="hidden xl:inline max-w-[270px]">
          <h2 className="text-white font-bold mb-3">Genres</h2>
          <div className="flex gap-x-2 gap-y-2.5 flex-wrap mb-3">
            <div className="genre">Classic</div>
            <div className="genre">House</div>
            <div className="genre">Minimal</div>
            <div className="genre">Hip-hop</div>
            <div className="genre">Electronic</div>
            <div className="genre">Chillout</div>
            <div className="genre">Blues</div>
            <div className="genre">Country</div>
            <div className="genre">Techno</div>
          </div>
          <button className="btn">All Genres</button>
        </div>

        {/* Tracks */}

        <div>
          <h2 className="text-white font-bold mb-3">
            {searchResults.length === 0 ? "New Releases" : "Tracks"}
          </h2>
          <div className="space-y-3 border-2 border-[#262626] rounded-2xl p-3 bg-[#0D0D0D] overflow-y-scroll h-[1000px] md:h-96 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded hover:scrollbar-thumb-gray-500 w-[830px]">
            {searchResults.length === 0
              ? newReleases
                  .slice(4, newReleases.length)
                  .map((track) => (
                    <Track
                      key={track.id}
                      track={track}
                      chooseTrack={chooseTrack}
                    />
                  ))
              : searchResults
                  .slice(4, searchResults.length)
                  .map((track) => (
                    <Track
                      key={track.id}
                      track={track}
                      chooseTrack={chooseTrack}
                    />
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;