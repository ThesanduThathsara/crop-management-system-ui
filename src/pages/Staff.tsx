import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../pages/staff-page.css'
export default function Staff(){
    return (
        <>
            <section id="staff-section">
                <div id="staff-heading">
                    <h2>Staff Management</h2>
                </div>
                <div className="form-floating mb-3" id="staff-id">
                    <input type="text" className="form-control " id="floatingInput13" placeholder="S00A1212212"/>
                    <label htmlFor="floatingInput13">Staff ID</label>
                    <div id="validationServer03Feedback13" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="first-name">
                    <input type="text" className="form-control " id="floatingInput14" placeholder="Kamal"/>
                    <label htmlFor="floatingInput14">First Name</label>
                    <div id="validationServer03Feedback14" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="last-name">
                    <input type="text" className="form-control " id="floatingInput15" placeholder=""/>
                    <label htmlFor="floatingInput15">Last Name</label>
                    <div id="validationServer03Feedback15" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="designation">
                    <input type="text" className="form-control " id="floatingInput16" placeholder=""/>
                    <label htmlFor="floatingInput16">Designation</label>
                    <div id="validationServer03Feedback16" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="joined-date">
                    <input type="date" className="form-control" id="floatingInput17" placeholder=""/>
                    <label htmlFor="floatingInput17">Joined Date</label>
                    <div id="validationServer03Feedback17" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>


                <select className="form-select " aria-label="Default select example" id="gender">
                    <option value="" disabled selected>Select the Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                </select>


                <div className="form-floating mb-3" id="dob">
                    <input type="date" className="form-control  " id="floatingInput18"/>
                    <label htmlFor="floatingInput18">DOB</label>
                    <div id="validationServer03Feedback18" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="address-01">
                    <input type="text" className="form-control  " id="floatingInput19" placeholder=""/>
                    <label htmlFor="floatingInput19">Building No/Name </label>
                    <div id="validationServer03Feedback19" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="address-02">
                    <input type="text" className="form-control  " id="floatingInput20" placeholder=""/>
                    <label htmlFor="floatingInput20">Lane Name</label>
                    <div id="validationServer03Feedback20" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="address-03">
                    <input type="text" className="form-control  " id="floatingInput21" placeholder=""/>
                    <label htmlFor="floatingInput21">Main City</label>
                    <div id="validationServer03Feedback21" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="address-04">
                    <input type="text" className="form-control  " id="floatingInput22" placeholder=""/>
                    <label htmlFor="floatingInput22">State Name</label>
                    <div id="validationServer03Feedback22" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="address-05">
                    <input type="text" className="form-control  " id="floatingInput23" placeholder=""/>
                    <label htmlFor="floatingInput23">Postal Code</label>
                    <div id="validationServer03Feedback23" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="contact-no">
                    <input type="text" className="form-control  " id="floatingInput24" placeholder=""/>
                    <label htmlFor="floatingInput24">Contact Number</label>
                    <div id="validationServer03Feedback24" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="staff-email">
                    <input type="email" className="form-control  " id="floatingInput25" placeholder=""/>
                    <label htmlFor="floatingInput25">Email</label>
                    <div id="validationServer03Feedback25" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <select className="form-select " aria-label="Default select example" id="role">
                    <option value="" disabled selected>Select the Role</option>
                    <option value="1">Manager</option>
                    <option value="2">Senior Assistant Manager</option>
                    <option value="3">Assistant Manager</option>
                    <option value="4">Admin and HR Staff</option>
                    <option value="5">Office Assistant</option>
                    <option value="6">Senior Agronomist</option>
                    <option value="7">Agronomist</option>
                    <option value="8">Soil scientist</option>
                    <option value="9">Senior Technician</option>
                    <option value="10">Technician</option>
                    <option value="11">Supervisors</option>
                    <option value="12">Labors</option>
                </select>

                <select className="form-select " aria-label="Default select example" id="staff-field">
                    <option value="" disabled selected>Select the Role</option>
                    <option value="1">N/A</option>
                </select>

                <select className="form-select " aria-label="Default select example" id="staff-vehicle">
                    <option value="" disabled selected>Select the Vehicle</option>
                    <option value="1">N/A</option>
                </select>

                <button type="button" className="btn btn-primary" id="staff-save-btn">Save</button>

                <div className="table-responsive" id="staff-table">
                    <table className="table">
                        <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Staff ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Joined Date</th>
                            <th scope="col">Gender</th>

                            <th scope="col">DOB</th>
                            <th scope="col">Building No/Name</th>
                            <th scope="col">Lane Name</th>
                            <th scope="col">Main City</th>
                            <th scope="col">State Name</th>
                            <th scope="col">Postal Code</th>
                            <th scope="col">Contact Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Field</th>
                            <th scope="col">Vehicle</th>
                            <th scope="col">Function</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>S001</td>
                            <td>Kamal</td>
                            <td>Perera</td>
                            <td>Manager</td>
                            <td>2022-04-01</td>
                            <td>Male</td>

                            <td>1979-11-24</td>
                            <td>45'A</td>
                            <td>Gamunu Street</td>
                            <td>Kohuwala</td>
                            <td>Colombo</td>
                            <td>10250</td>

                            <td>0775689753</td>
                            <td>kamal@gmail.com</td>
                            <td>Manager</td>
                            <td>F001</td>
                            <td>V001</td>

                            <td>
                                <img width="39" height="39"
                                     src="https://img.icons8.com/glyph-neue/64/FA5252/delete-trash.png"
                                     alt="delete" id="img-delete-btn5"/>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>S001</td>
                            <td>Kamal</td>
                            <td>Perera</td>
                            <td>Manager</td>
                            <td>2022-04-01</td>
                            <td>Male</td>

                            <td>1979-11-24</td>
                            <td>45'A</td>
                            <td>Gamunu Street</td>
                            <td>Kohuwala</td>
                            <td>Colombo</td>
                            <td>10250</td>

                            <td>0775689753</td>
                            <td>kamal@gmail.com</td>
                            <td>Manager</td>
                            <td>F001</td>
                            <td>V001</td>

                            <td>
                                <img width="39" height="39"
                                     src="https://img.icons8.com/glyph-neue/64/FA5252/delete-trash.png"
                                     alt="delete" id="img-delete-btn6"/>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>

            </section>
        </>
    )
}