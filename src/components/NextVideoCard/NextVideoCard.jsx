// import "./NextVideos.scss";

function NextVideoCard({ video, onClick}) {

  return (
    <>
 
        <div onClick ={onClick} className="videos__item">
          <img className="videos__media" src={video.image} />
          <div className="videos__info">
            <h2 className="videos__title">{video.title}</h2>
            <p className="videos__author">by {video.channel}</p>
          </div>
        </div>
      
    </>
  );
}

export default NextVideoCard;
