class App extends React.Component {
    render () {
        return(
            <div className="container">
                <h1 className="text-center fs-6 mt-5">Jeemacoder Gestion utilisateurs</h1>
                <form id="form" className="shadow p-3 mx-auto w-50">
                    <div className="mb-3 d-sm-flex from-group">
                    <div className="">
                        <label for="prenom" id="prenom" className="from-label">Prenom</label>
                        <input required type="text" class="form-control" id="prenom" aria-describedby="name" />                    </div>

                    <div className="">
                        <label for="nom" id="nom" className="from-label">nom</label>
                        <input required type="text" class="form-control" id="nom" aria-describedby="name" />                    </div>
                    </div>

                    <div className="mb-3 d-sm-flex from-group">
                    <div className="">
                        <label for="email" id="email" className="from-label">Email</label>
                        <input required type="email" class="form-control" id="email" aria-describedby="name" />                    </div>

                    <div className="">
                        <label for="telephone" id="telephone" className="from-label">telephone</label>
                        <input required type="tel" class="form-control" id="telephone" aria-describedby="name" />                    </div>
                    </div>
                </form>

                <hr className="w-100 mt-4"/>

                <h1 className="text-center fs-6">Utilisateurs</h1>
                <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Prenom</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telephone</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('container'))