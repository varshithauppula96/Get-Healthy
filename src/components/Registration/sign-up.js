import React from 'react';

const SignUp = () => {
    return (
        <div className="p-5 m-5 border border-info bg-secondary text-white container-fill">
            <h1>Sign Up</h1>
            <form>
                <div className="form-group row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">
                        Username </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username"
                               id="username"
                               placeholder="Alice"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">
                        Password </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control wbdv-field wbdv-password"
                               id="password" placeholder="123qwe#$%"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Verifypassword" className="col-sm-2 col-form-label">
                        Verify Password </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control wbdv-field wbdv-password"
                               id="verifypassword" placeholder="123qwe#$%"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button className="btn btn-primary btn-block wbdv-login"><a className="text-white"
                                                                                    href="../profile/profile.template.client.html">Sign
                            Up</a></button>
                        <div className="row">
                            <div className="col-6">
                                <a href="../login/login.template.client.html">Login</a>
                            </div>
                            <div className="col-6">
                                <a href="../index.html" className="float-right">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}
export default SignUp
