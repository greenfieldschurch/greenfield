import React, { useState, useEffect } from "react";
import CardItemVideo from "../CardItemVideo";
import "../Media.css";

function Media() {
  const [videos, setVideos] = useState([]);
  const currentChannelId = "UCtCMxD2mdLynNHSPhLA-OXA";
  const [searchError, setSearchError] = useState();

  const baseUrl =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D";

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(`${baseUrl}${currentChannelId}`).then(
          (response) => response.json()
        );
        if (!data.items) {
          throw new Error();
        }
        setVideos(data.items);
        setSearchError("");
      } catch (error) {
        console.log(error);
        setSearchError(`Couldn't retrieve videos, check your channel ID.`);
      }
    })();
  }, [currentChannelId]);

  return (
    <>
      {searchError}
      <h1 className="title">Latest Feed</h1>
      <main>
        <section className="cards">
          {videos.map((video) => (
            <CardItemVideo
              src={`https://i4.ytimg.com/vi/${
                video.guid.split(":")[2]
              }/mqdefault.jpg`}
              label={video.pubDate}
              path={video.link}
              text={video.title}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Media;
