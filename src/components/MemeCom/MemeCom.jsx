import { useState, useEffect } from "react";
const Meme = () => {
  const [meme, setMeme] = useState({
    upperText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  function handleRandomImage() {
    let randomIndex = Math.floor(Math.random() * allMemes.length);
    setMeme((old) => ({
      ...old,
      randomImage: allMemes[randomIndex].url,
    }));
  }

  function handleText(event) {
    const { name, value } = event.target;
    setMeme((old) => ({
      ...old,
      [name]: value,
    }));
  }

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);
  return (
    <main className="main">
      <div className="form">
        <input
          type="text"
          className="form_input"
          placeholder="upper text"
          name="upperText"
          value={meme.upperText}
          onChange={handleText}
        />
        <input
          type="text"
          className="form_input"
          placeholder="lower text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleText}
        />
        <button className="form_btn" onClick={handleRandomImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme__image" />
        <h2 className="meme__text meme__text--top">{meme.upperText}</h2>
        <h2 className="meme__text meme__text--bottom">{meme.bottomText}</h2>
      </div>{" "}
    </main>
  );
};

export default Meme;
