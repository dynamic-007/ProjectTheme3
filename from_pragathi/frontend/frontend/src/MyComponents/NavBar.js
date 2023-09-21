import React from 'react'

export default function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">About</a>
                            <a class="nav-link" href="#">Current Requests</a>
                            <a class="nav-link" href="#">Previous Requests</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
