import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const handleSubmit = (e) => {
    //event as argument
    e.preventDefault();

    axios
      .post(`/api/set_user`, { user: input })
      .then((res) => {
        console.log(res);
        setInput("");
        setUpdateUI(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get(`/api/get_user`).then((res) => {
      setUser(res.data);
      console.log(res.data);
    });
  }, [updateUI]);
  return (
    <>
      <div>
        <Navbar />
        <h1>Landing Page</h1>
      </div>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>

        <ul>
          {user.map((t) => (
            <li key={t._id}>{t.user}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
