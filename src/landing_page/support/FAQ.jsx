import React from 'react'
function FAQ({question,iconName}) {
    return (<>
        <div className="container my-4 ">
            <div className="row border ">
                <div className="col-1 d-flex flex-row justify-content-center align-items-center fs-5"
                 style={{backgroundColor:"#f2f8fe"}}>
                    <i className={iconName} style={{color: "#74c0fc"}}></i>
                </div>
                <div className="col ms-3"><h3 className='fs-5 p-2' style={{color:"#424242"}}>{question}</h3></div>
                <div className="col-1 d-flex flex-row justify-content-center align-items-center">
                    <i className="fa-solid fa-angle-down" style={{color: "#74c0fc"}}></i>
                </div>
            </div>
        </div>
    </>);
}

export default FAQ;