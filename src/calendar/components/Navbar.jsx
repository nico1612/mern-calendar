

export const Navbar=()=>{
    return(
        <>
            <div className="navbar navbar-dark bg-dark mg-4 px-4">
                <span className="navbar-brand">
                    <i className="fas fa-calendar-alt"></i>
                    &nbsp;
                    nicolas
                </span>
                <button className="btn btn-outline-danger">
                    <span className="fas fa-sing-out-alt">
                        salir
                    </span>
                </button>
            </div>
        </>
    )
}