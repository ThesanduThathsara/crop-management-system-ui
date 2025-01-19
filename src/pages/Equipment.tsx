import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../pages/equipment-page.css'
export default function Equipment(){
    return (
        <>
            <section id="equipment-section">
                <div id="equipment-heading">
                    <h2>Equipment Management</h2>
                </div>
                <div className="form-floating mb-3" id="equipment-code">
                    <input type="text" className="form-control " id="floatingInput36" placeholder=""/>
                    <label htmlFor="floatingInput36">Equipment Code</label>
                    <div id="validationServer03Feedback36" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="equipment-name">
                    <input type="text" className="form-control " id="floatingInput37" placeholder=""/>
                    <label htmlFor="floatingInput37">Equipment Name</label>
                    <div id="validationServer03Feedback37" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <select className="form-select " aria-label="Default select example" id="equipment-type">
                    <option value="" disabled selected>Select the Equipment Type</option>
                    <option value="1">Electrical</option>
                    <option value="2">Mechanical</option>
                </select>

                <select className="form-select " aria-label="Default select example" id="equipment-status">
                    <option value="" disabled selected>Select the Status</option>
                    <option value="1">Available</option>
                    <option value="2">Not-Available</option>
                </select>


                <select className="form-select " aria-label="Default select example" id="equipment-staff">
                    <option value="" disabled selected>Select the Assign Staff Member</option>
                    <option value="1"></option>
                </select>

                <select className="form-select " aria-label="Default select example" id="equipment-field">
                    <option value="" disabled selected>Select the Assign Field</option>
                    <option value="1"></option>
                </select>


                <button type="button" className="btn btn-primary" id="equipment-save-btn">Save</button>

                <div className="table-responsive" id="equipment-table">
                    <table className="table">
                        <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Equipment Code</th>
                            <th scope="col">Equipment Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Status</th>
                            <th scope="col">Assign Staff Details</th>
                            <th scope="col">Assign Field Details</th>
                            <th scope="col">Function</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>E001</td>
                            <td>Wheelbarrow</td>
                            <td>Mechanical</td>
                            <td>Available</td>
                            <td>S001</td>
                            <td>F001</td>

                            <td>
                                <img width="39" height="39"
                                     src="https://img.icons8.com/glyph-neue/64/FA5252/delete-trash.png"
                                     alt="delete" id="img-delete-btn11"/>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">1</th>
                            <td>E001</td>
                            <td>Wheelbarrow</td>
                            <td>Mechanical</td>
                            <td>Available</td>
                            <td>S001</td>
                            <td>F001</td>

                            <td>
                                <img width="39" height="39"
                                     src="https://img.icons8.com/glyph-neue/64/FA5252/delete-trash.png"
                                     alt="delete" id="img-delete-btn12"/>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>

            </section>
        </>
    )
}