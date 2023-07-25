import useState from "react";

const Home = () => {
  const [steamID, setSteamID] = useState("");
  const handleChange = (e) => {
    const targetValue = e.target.value;
    setSteamID(targetValue);
    console.log(steamID);
  };

  return (
    <>
      <form>
        <label htmlFor="steamID">/steamcommunity.com/profiles/</label>
        <input
          id="steamID"
          type="number"
          value={steamID}
          onchange={handleChange}
          required
        />
      </form>
    </>
  );
};

export default Home;
