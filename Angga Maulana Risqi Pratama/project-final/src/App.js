import "./App.css"
import NavigationBar from "./Component/NavigationBar"
import SuperHero from "./Component/Superhero"
import Trending from "./Component/Tranding"
import Intro from "./Component/Intro"
import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>

      <div className="superhero">
        <SuperHero   />
      </div>
    </div>
  )
}

export default App