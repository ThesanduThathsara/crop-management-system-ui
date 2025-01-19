import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../pages/crop-page.css'

export default function Crop(){
    return (
        <>
            <section id="crop-section">
                <div id="crop-heading">
                    <h2>Crop Management</h2>
                </div>
                <div className="form-floating mb-3" id="crop-id">
                    <input type="text" className="form-control " id="floatingInput7" placeholder="C00A1212212"/>
                    <label htmlFor="floatingInput7">Crop ID</label>
                    <div id="validationServer03Feedback7" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="crop-common-name">
                    <input type="text" className="form-control " id="floatingInput8" placeholder="Rice"/>
                    <label htmlFor="floatingInput8">Crop Common Name</label>
                    <div id="validationServer03Feedback8" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="crop-scientific-name">
                    <input type="text" className="form-control " id="floatingInput9" placeholder=""/>
                    <label htmlFor="floatingInput9">Crop Scientific Name</label>
                    <div id="validationServer03Feedback9" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="crop-category">
                    <input type="text" className="form-control " id="floatingInput10" placeholder=""/>
                    <label htmlFor="floatingInput10">Crop Category</label>
                    <div id="validationServer03Feedback10" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <div className="form-floating mb-3" id="crop-season">
                    <input type="text" className="form-control" id="floatingInput11" placeholder=""/>
                    <label htmlFor="floatingInput11">Crop Season</label>
                    <div id="validationServer03Feedback11" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>


                <select className="form-select " aria-label="Default select example" id="crop-field">
                    <option value="" disabled selected>Select the Field</option>
                    <option value="1">Rice A Field</option>
                </select>


                <div className="form-floating mb-3" id="crop-image">
                    <input type="file" className="form-control  " id="floatingInput12"/>
                    <label htmlFor="floatingInput12">Crop Image</label>
                    <div id="validationServer03Feedback12" className="invalid-feedback">
                        {/*// <!--            error msg-->*/}
                    </div>
                </div>

                <button type="button" className="btn btn-primary" id="crop-save-btn">Save</button>

                <div className="table-responsive" id="crop-table">
                    <table className="table">
                        <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Crop Code</th>
                            <th scope="col">Crop Common Name</th>
                            <th scope="col">Crop Scientific Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Crop Season</th>
                            <th scope="col">Field</th>
                            <th scope="col">Images</th>
                            <th scope="col">Functions</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>C001</td>
                            <td>Rice</td>
                            <td>Oryza sativa</td>
                            <td>aromatic</td>
                            <td>mid-September to October</td>
                            <td>Rice A Field</td>
                            <td>
                                <button type="button" className="btn btn-primary" id="img-view-btn3">View</button>
                            </td>
                            <td>
                                <img width="39" height="39"
                                     src="https://img.icons8.com/glyph-neue/64/FA5252/delete-trash.png"
                                     alt="delete" id="img-delete-btn3"/>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>C001</td>
                            <td>Rice</td>
                            <td>Oryza sativa</td>
                            <td>aromatic</td>
                            <td>mid-September to October</td>
                            <td>Rice A Field</td>
                            <td>
                                <button type="button" className="btn btn-primary" id="img-view-btn4">View</button>
                            </td>
                            <td>
                                <img width="39" height="39"
                                     src="https://img.icons8.com/glyph-neue/64/FA5252/delete-trash.png"
                                     alt="delete" id="img-delete-btn4"/>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>

            </section>
        </>
    )
}