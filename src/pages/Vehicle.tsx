import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../pages/vehicle-page.css'

export default function Vehicle() {
    return (
        <>
            <section id="vehicle-section">
                <div id="vehicle-heading">
                    <h2>Vehicle Management</h2>
                </div>
                <div className="form-floating mb-3" id="vehicle-code">
                    <input type="text" className="form-control " id="floatingInput30" placeholder=""/>
                    <label htmlFor="floatingInput30">Vehicle Code</label>
                    <div id="validationServer03Feedback30" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="license-plate-number">
                    <input type="text" className="form-control " id="floatingInput31" placeholder=""/>
                    <label htmlFor="floatingInput31">License Plate Number</label>
                    <div id="validationServer03Feedback31" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="vehicle-category">
                    <input type="text" className="form-control " id="floatingInput32" placeholder=""/>
                    <label htmlFor="floatingInput32">Vehicle Category</label>
                    <div id="validationServer03Feedback32" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="fuel-type">
                    <input type="text" className="form-control " id="floatingInput33" placeholder=""/>
                    <label htmlFor="floatingInput33">Fuel Type</label>
                    <div id="validationServer03Feedback33" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="status">
                    <input type="text" className="form-control " id="floatingInput34" placeholder=""/>
                    <label htmlFor="floatingInput34">Status</label>
                    <div id="validationServer03Feedback34" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <select className="form-select " aria-label="Default select example"
                        id="allocated-staff-member-details">
                    <option value="" disabled selected>Select the Staff Member</option>
                    <option value="1"></option>
                </select>

                <div className="form-floating mb-3" id="remarks">
                    <input type="text" className="form-control " id="floatingInput35" placeholder=""/>
                    <label htmlFor="floatingInput35">Remarks</label>
                    <div id="validationServer03Feedback35" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <button type="button" className="btn btn-primary" id="vehicle-save-btn">Save</button>

                <div className="table-responsive" id="vehicle-table">
                    <table className="table">
                        <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Vehicle Code</th>
                            <th scope="col">License Plate Number</th>
                            <th scope="col">Vehicle Category</th>
                            <th scope="col">Fuel Type</th>
                            <th scope="col">Status</th>
                            <th scope="col">Allocated Staff Member Details</th>
                            <th scope="col">Remarks</th>
                            <th scope="col">Function</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>V001</td>
                            <td>CAB-2356</td>
                            <td>Car</td>
                            <td>Petrol</td>
                            <td>Not Available</td>
                            <td>S001</td>
                            <td>Official Purpose Only</td>

                            <td>
                                <img width="39" height="39"
                                     src="https://img.icons8.com/glyph-neue/64/FA5252/delete-trash.png"
                                     alt="delete" id="img-delete-btn9"/>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>V001</td>
                            <td>CAB-2356</td>
                            <td>Car</td>
                            <td>Petrol</td>
                            <td>Not Available</td>
                            <td>S001</td>
                            <td>Official Purpose Only</td>

                            <td>
                                <img width="39" height="39"
                                     src="https://img.icons8.com/glyph-neue/64/FA5252/delete-trash.png"
                                     alt="delete" id="img-delete-btn10"/>
                            </td>
                        </tr>


                        </tbody>
                    </table>
                </div>

            </section>
        </>
    )
}