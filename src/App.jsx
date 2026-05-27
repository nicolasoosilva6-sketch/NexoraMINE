import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Guides from "./pages/Guides"
import Streamers from "./pages/Streamers"
import Auth from "./pages/Auth"

import { UserProvider } from "./context/UserContext"

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/streamers" element={<Streamers />} />

          <Route path="/auth" element={<Auth />} />

          {/* fallback seguro */}
          <Route path="*" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}