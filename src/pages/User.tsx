import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../pages/user.css'

export default function User(){
    return (
        <>
            <section id="user-section">
                <div id="user-heading">
                    <h2>User Accounts</h2>
                </div>

                <div className="table-responsive" id="user-table">
                    <table className="table">
                        <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Role</th>
                            <th scope="col">Function</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>kamal@gmail.com</td>
                            <td>password</td>
                            <td>Manager</td>

                            <td>
                                <img width="39" height="39"
                                     src="https://img.icons8.com/glyph-neue/64/FA5252/delete-trash.png"
                                     alt="delete" id="img-delete-btn13"/>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>

            </section>
        </>
    )
}