
import './App.css';
import {BrowserRouter,NavLink,Route, Routes} from "react-router-dom"
import LiveResults from "./LiveResults";
import LeagueTable from "./LeagueTable";
import LeagueTableLive from "./LeagueTableLive";
import Login from "./Login";




function App() {
    const links=[
        // {to:"/", text:"home page"},
        {to:"Login", text:"Login"},
        {to:"LiveResults", text:"LiveResults"},
        {to:"LeagueTableLive", text:"LeagueTableLive"},
        {to:"LeagueTable", text:"LeagueTable"},
    ]

    // const activeMenuClass=({isActive})=>(isActive ? "active-menu" : "non-active-menu");

    return (

    <div className="App">


      <BrowserRouter>
          <ul>
              {
                  links.map((link)=>{
                      return(
                          <button className={"Buttons"}>
                              <NavLink
                                  to={link.to}>{link.text}</NavLink>
                          </button>
                      )
                  })
              }
          </ul>

          <Routes>
            <Route path={"/Login"} element ={<Login/>}/>
            <Route path={"/LiveResults"} element ={<LiveResults/>}/>
            <Route path={"/LeagueTableLive"} element = {<LeagueTableLive/>}/>
            <Route path={"/LeagueTable"}  element={<LeagueTable/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
