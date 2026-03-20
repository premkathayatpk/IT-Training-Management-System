import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import AppRoutes from "./components/common/AppRoutes";

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
};

export default App;
