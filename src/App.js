import NavContent from "./components/NavContent";
import Hero from "./components/Hero";
import ContentMain from "./components/ContentMain";
import UserData from "./datafile/UserData";

function App() {

  const eachData = UserData.map((user) => {
    return (
      <ContentMain 
        key={user.id}
        user={user}
      />
    )
  })

  return (
    <>
      <NavContent />
      <Hero/>
      <div className="flexdiv">
      {eachData}
      </div>
    </>
  );
}

export default App;
