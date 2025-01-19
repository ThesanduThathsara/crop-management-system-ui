import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../pages/field-page.css'

export default function Field(){
    return (
        <>
            <section id="field-section">
                <div id="field-heading">
                    <h2>Field Management</h2>
                </div>
                <div className="form-floating mb-3" id="field-id">
                    <input type="text" className="form-control " id="floatingInput1" placeholder="F00A1212212"/>
                    <label htmlFor="floatingInput1">Field ID</label>
                    <div id="validationServer03Feedback1" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="field-name">
                    <input type="text" className="form-control " id="floatingInput2" placeholder="Mix Palate A "/>
                    <label htmlFor="floatingInput2">Field Name</label>
                    <div id="validationServer03Feedback2" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="field-location">
                    <input type="text" className="form-control " id="floatingInput3" placeholder="panadura "
                           /*onClick="getLocation()"*//>
                    <label htmlFor="floatingInput3">Location/Address</label>
                    <div id="validationServer03Feedback3" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="field-size">
                    <input type="number" className="form-control " id="floatingInput4" placeholder="103.12"/>
                    <label htmlFor="floatingInput4">Field Size</label>
                    <div id="validationServer03Feedback4" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <select className="form-select " aria-label="Default select example" id="field-crops">
                    <option value="" disabled selected>Select the Crop</option>
                    <option value="1">Rice</option>
                </select>

                <select className="form-select " aria-label="Default select example" id="field-staff">
                    <option value="" disabled selected>Select the Staff</option>
                    <option value="1">S001</option>
                </select>

                <div className="form-floating mb-3" id="field-image-01">
                    <input type="file" className="form-control  " id="floatingInput5"/>
                    <label htmlFor="floatingInput5">Field Image-01</label>
                    <div id="validationServer03Feedback5" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="field-image-02">
                    <input type="file" className="form-control " id="floatingInput6"/>
                    <label htmlFor="floatingInput6">Field Image-02</label>
                    <div id="validationServer03Feedback6" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <button type="button" className="btn btn-primary" id="field-save-btn">Save</button>
                <div className="table-responsive" id="field-table">
                    <table className="table">
                        <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Field ID</th>
                            <th scope="col">Field Name</th>
                            <th scope="col">Location</th>
                            <th scope="col">Field Size</th>
                            <th scope="col">Crop Type</th>
                            <th scope="col">Staff</th>
                            <th scope="col">Images</th>
                            <th scope="col">Functions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>F001</td>
                            <td>Rice Palate A</td>
                            <td>Panadura</td>
                            <td>2000</td>
                            <td>Rice</td>
                            <td>Manager</td>
                            <td>
                                <button type="button" className="btn btn-primary" id="img-view-btn">View</button>
                            </td>
                            <td>
                                <img width="39" height="39"
                                     src="https://img.icons8.com/glyph-neue/64/FA5252/delete-trash.png"
                                     alt="delete" id="img-delete-btn"/>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>F002</td>
                            <td>Kadala Palate A</td>
                            <td>Kaluthara</td>
                            <td>1000</td>
                            <td>Kadala</td>
                            <td>Senior-Manager</td>
                            <td>
                                <button type="button" className="btn btn-primary" id="img-view-btn2">View</button>
                            </td>
                            <td>
                                <img width="39" height="39"
                                     src="https://img.icons8.com/glyph-neue/64/FA5252/delete-trash.png"
                                     alt="delete" id="img-delete-btn2"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </section>
        </>
    )
}