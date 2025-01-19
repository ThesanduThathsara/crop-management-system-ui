import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../pages/log-service-page.css'

export default function Logs(){
    return (
        <>
            <section id="log-section">
                <div id="log-heading">
                    <h2>Log Service Management</h2>
                </div>
                <div className="form-floating mb-3" id="log-code">
                    <input type="text" className="form-control " id="floatingInput26" placeholder=""/>
                    <label htmlFor="floatingInput26">Log Code</label>
                    <div id="validationServer03Feedback26" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="log-date">
                    <input type="date" className="form-control " id="floatingInput27" placeholder=""/>
                    <label htmlFor="floatingInput27">Log Date</label>
                    <div id="validationServer03Feedback27" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="log-details">
                    <input type="text" className="form-control " id="floatingInput28" placeholder=""/>
                    <label htmlFor="floatingInput28">Log Details</label>
                    <div id="validationServer03Feedback28" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="observed-image">
                    <input type="file" className="form-control " id="floatingInput29" placeholder=""/>
                    <label htmlFor="floatingInput29">Observed Image</label>
                    <div id="validationServer03Feedback29" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>


                <select className="form-select " aria-label="Default select example" id="log-field">
                    <option value="" disabled selected>Select the field</option>
                    <option value="1"></option>
                </select>

                <select className="form-select " aria-label="Default select example" id="log-crop">
                    <option value="" disabled selected>Select the Crop</option>
                    <option value="1"></option>
                </select>

                <select className="form-select " aria-label="Default select example" id="log-staff">
                    <option value="" disabled selected>Select the Staff</option>
                    <option value="1"></option>
                </select>

                <button type="button" className="btn btn-primary" id="log-save-btn">Save</button>

                <div className="table-responsive" id="log-table">
                    <table className="table">
                        <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Log Code</th>
                            <th scope="col">Log Date</th>
                            <th scope="col">Log Details</th>
                            <th scope="col">Observed Image</th>
                            <th scope="col">Field</th>
                            <th scope="col">Crop</th>
                            <th scope="col">Staff</th>
                            <th scope="col">Functions</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>L001</td>
                            <td>2022-12-14</td>
                            <td>Observed Crop Growing Process</td>
                            <td>
                                <button type="button" className="btn btn-primary" id="img-view-btn7">View</button>
                            </td>
                            <td>F001</td>
                            <td>C001</td>
                            <td>S001</td>

                            <td>
                                <img width="39" height="39"
                                     src="https://img.icons8.com/glyph-neue/64/FA5252/delete-trash.png"
                                     alt="delete" id="img-delete-btn7"/>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>L001</td>
                            <td>2022-12-14</td>
                            <td>Observed Crop Growing Process</td>
                            <td>
                                <button type="button" className="btn btn-primary" id="img-view-btn8">View</button>
                            </td>
                            <td>F001</td>
                            <td>C001</td>
                            <td>S001</td>

                            <td>
                                <img width="39" height="39"
                                     src="https://img.icons8.com/glyph-neue/64/FA5252/delete-trash.png"
                                     alt="delete" id="img-delete-btn8"/>
                            </td>
                        </tr>


                        </tbody>
                    </table>
                </div>

            </section>

        </>
    )

}