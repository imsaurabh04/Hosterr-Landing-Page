import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <div className="bg-amber-50 min-h-screen px-6 py-4 flex flex-col gap-10 md:gap-16 lg:gap-20 justify-between md:px-10 md:py-7 lg:px-16 lg:py-10">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
