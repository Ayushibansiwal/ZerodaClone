import FAQ from "./FAQ";
function Hero() {
  return (
    <>
      <div className="d-flex flex-column bg-body-tertiary border  px-5 py-3 mb-5">
        <div className=" d-flex justify-content-between align-items-center bg-body-tertiary  my-3">
          <h1 style={{ color: "#424242" }}>Support Portal</h1>
          <button type="button" className="btn btn-outline-primary">
            My Tickets
          </button>
        </div>
        <div className="my-3 border shadow-sm d-flex align-items-center">
          <i className="fa-solid fa-magnifying-glass mx-3 fs-5"></i>
          <input
            className="supportInput"
            type="text"
            placeholder="Eg: How do i open my accoubt, How do i activate F&O..."
          />
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8">
            <FAQ question="Account Opening"  iconName="fa-solid fa-plus"/>
            <FAQ question="Your Zerodha Account"  iconName="fa-regular fa-circle-user"/>
            <FAQ question="Kite"  iconName="fa-brands fa-kickstarter-k"/>
            <FAQ question="Funds" iconName="fa-solid fa-coins" />
            <FAQ question="Console" iconName="fa-solid fa-gamepad"/>
            <FAQ question="Coin"  iconName="fa-brands fa-bitcoin"/>
          </div>
          <div className="col-lg-4">
            <div
              className="w-100 p-3 my-4"
              style={{
                backgroundColor: "rgba(255, 145, 0, 0.1)",
                borderLeft: "5px solid #ff9100",
              }}
            >
              <ul className="mb-0">
                <li className="border-0 bg-transparent px-0">
                  <a href="#" className="text-decoration-none">
                    Surveillance measure on scrips - July 2026
                  </a>
                </li>

                <li className="border-0 bg-transparent px-0">
                  <a href="#" className="text-decoration-none">
                    Current Buybacks - July 2026
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <table className="table border table-bordered">
                <thead className="table-light">
                  <tr>
                  <th>Quick Links</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td><a href="" className="text-decoration-none">Track account opening</a></td>
                </tr>
                <tr>
                  <td><a href="" className="text-decoration-none">Track segment activation</a></td>
                </tr>
                <tr>
                  <td><a href="" className="text-decoration-none">Intraday margins</a></td>
                </tr>
                <tr>
                  <td><a href="" className="text-decoration-none">Kite user manual</a></td>
                </tr>
                <tr>
                  <td><a href="" className="text-decoration-none">Learn how to create a ticket</a></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
