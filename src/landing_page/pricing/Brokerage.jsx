import React from 'react'
function Brokerage() {
    const freeBadge = (
    <span
      style={{
        backgroundColor: "#4caf50",
        fontSize: "11px",
        fontWeight: "500",
        padding: "6px 10px",
        color:"#fff",
        borderRadius:"3px"
      }}
    >
      FREE
    </span>
  );
    return (<>
        <div className="container my-5 ">
            <div className="row">
                <div className="col">
                    <h3
                        className="mt-3"
                        style={{ color: "#424242" }}
                    >
                        Demat AMC (Annual Maintenance Charge)
                    </h3>
                    
                    <div className="col flag my-4">Free for first year*</div>
                    <p style={{fontSize:"12px"}}>From second year onwards, for BSDA accounts:</p>

                    <div className="border rounded">
                        <table className="table mb-0 table-striped bTable">
                        <thead>
                            <tr>
                                <th>Value of holdings</th>
                                <th>AMC</th>
                            </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Up to ₹4 lakh</td>
                            <td>{freeBadge}</td>
                        </tr>

                        <tr>
                            <td>₹4 lakh – ₹10 lakh</td>
                            <td>₹100 per year + 18% GST, charged quarterly</td>
                        </tr>

                        <tr>
                            <td>Above ₹10 lakh</td>
                            <td>₹300 per year + 18% GST, charged quarterly</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            <p style={{fontSize:"12px", marginTop:"15px"}}>For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.</p>
            <p style={{fontSize:"12px"}}>To learn more about BSDA, 
                <a href="" className='text-decoration-none'>click here</a>. To learn more about AMC, <a href="" className='text-decoration-none'>click here</a>.</p>
            <p style={{fontSize:"12px"}}>*Resident individual accounts only.</p>
        </div>
    </>);
}

export default Brokerage;