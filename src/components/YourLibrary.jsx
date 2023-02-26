import { useSelector } from "react-redux";
import AlbumCardRow from "./AlbumCardRow";

const YourLibrary = () => {
  const savedSons = useSelector((state) => state.fav.savedFavSongs);
  return (
    <>
      <div className="preferiti">
        {savedSons.length > 0 ? (
          <AlbumCardRow title="Your Liked Songs" songs={savedSons} />
        ) : (
          <p>You don't have any liked song</p>
        )}
      </div>
    </>
  );
};
export default YourLibrary;
