import "./App.css";
import { useState } from "react";

function App() {
  const [steamID, setSteamID] = useState("");
  const [gamesList, setGamesList] = useState([]);

  const handleChange = (e) => {
    setSteamID(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`https://steamcommunity.com/profiles/${steamID}/games/?tab=all`)
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        this.setState({ totalReactPackages: data.total });
      })
      .catch((error) => {
        this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  };

  return (
    <>
      <h1> Random Game Picker</h1>
      <p>
        Enter your{" "}
        <a
          href="https://help.steampowered.com/en/faqs/view/2816-BE67-5B69-0FEC"
          target="_blank"
          rel="noreferrer"
        >
          17 digit steam ID number
        </a>{" "}
        and have a random game from your library selected for you. Please make
        sure your steam profile is set to public
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="steamID">/steamcommunity.com/profiles/</label>
        <input
          id="steamID"
          type="text"
          placeholder="steam 17 digit number"
          value={steamID}
          pattern="^[0-9]{17}$"
          onChange={handleChange}
          required
        />
        <input type="submit" value="Enter"></input>
      </form>
    </>
  );
}

export default App;
