import React from 'react';

const Login = () => {
    return (
        <div className=" p-5 m-5 border border-info bg-secondary text-white  container-fill">
            <h1>Sign In</h1>
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
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button className="btn btn-primary btn-block wbdv-login"><a className="text-white"
                                                                                    href="../home/user/123">Sign
                            in</a>
                        </button>
                        <div className="row">
                            <div className="col-6">
                                <a href="#">Forgot Password?</a>
                            </div>
                            <div className="col-6">
                                <a href="#" className="float-right">Sign up</a>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-12">
                                <a href="#" className="float-right">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}
export default Login
