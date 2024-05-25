function App() {
  return (
    <>
      <div className="card">
        <h3>FIRST TASK</h3>
        <div className="content">
          <h1>Biodata</h1>
          <img
            src="src/image/bece2660-797d-4798-9167-6e1cb4a86dcb.jpg"
            alt=""
          />
          <h2>{biodata.name}</h2>
          <p>{biodata.born}</p>
          <p>Age : {biodata.age}</p>
          <div>{
            biodata.hobby.map((data) => <button key={data}>{data}</button>)
            }</div>
        </div>
      </div>
    </>
  );
}

const biodata = {
  name: "Hanif Fauzan Nurrahman",
  born: "Bandung, 2004-04-18",
  age: 20,
  hobby: ["Ngoding", "Share Meme", "Nyanyi"],
};

export default App;
