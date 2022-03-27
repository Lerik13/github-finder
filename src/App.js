import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Alert from "./components/layout/Alert";
import User from "./pages/User";

function App() {
	return (
		<GithubProvider>
			<AlertProvider>
				<BrowserRouter>
					<div className="flex flex-col justify-between h-screen">
						<Navbar title="Github Finder" />

						<main className="container mx-auto px-3 pb-12">
							<Alert />
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/about' element={<About />} />
								<Route path='/user/:login' element={<User />} />
								<Route path='/notfound' element={<NotFound />} />
								<Route path='/*' element={<NotFound />} />
							</Routes>
						</main>

						<Footer />
					</div>
				</BrowserRouter>
			</AlertProvider>
		</GithubProvider>
	);
}

export default App;
