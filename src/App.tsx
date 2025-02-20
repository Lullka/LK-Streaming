import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.tsx";
import { HomePage } from "./pages/homepage.tsx";
import { Header } from "./components/header/header.tsx";
import { InfosAboutSeries } from "./pages/InfosAboutSeries.tsx";
import { VideoPage } from "./pages/player.tsx";
import { SearchPage } from "./pages/search.tsx";
import { FilmsPage } from "./pages/filmsPage.tsx";
import { SeriesPage } from "./pages/seriesPage.tsx";
import { UserProfile } from "./pages/yourProfile.tsx";
/* import { Teste } from "./pages/teste.tsx"; */

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      {/* <Teste/> */}
      <Routes>
        {/* <Route path="/C:/browse" element={<HomePage/>}/> */}
        <Route path="/browse" element={<HomePage/>}/>
        <Route path="/about" element={<InfosAboutSeries/>}/>
        <Route path="/watch" element={<VideoPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/films" element={<FilmsPage/>}/>
        <Route path="/series" element={<SeriesPage/>}/>
        <Route path="/user" element={<UserProfile/>}/>
        <Route path="*" element={<Navigate to='/browse'/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
