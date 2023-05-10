
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from './Component/Footer/Footer';
import Form from './Component/Form/Form';
function App() {
  return (
    <>
      <div className="container-fluid ">
        <div className='container-box container_fluid d-flex flex-column justify-content-center  align-items-center my-auto'>
          <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' />
          <div
            className="form-box"
            style={
              {
                width: "25rem",
                maxHeight: '26rem',
                backgroundColor: 'white',
                borderRadius: '.5rem',
                boxShadow: '0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)',
                marginBottom: '19%'

              }
            }
          >
            <Form />

          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
