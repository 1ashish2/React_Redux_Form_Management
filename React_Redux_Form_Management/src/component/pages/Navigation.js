import React from 'react'
import {Link} from 'react-router-dom'
export const Navigation = () => {
    return (
        <div>
            <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
              <div className="container">
                <Link to="/" className="navbar-brand">Redux Form</Link>
                <div>
                    <Link to="/formdata" className="btn btn-light ml-auto">
                        Form list
                    </Link>
                </div>
              </div>
            </nav>
        </div>
    )
}
