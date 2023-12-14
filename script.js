// COMPASANT PARENT
class App extends React.Component {
    // initialisez l'état initial du composant
    constructor(props) {
      super(props);
      this.state = {
        tasks: [],
        prenom: '',
        nom: '',
        email:'',
        phone:'', 
        editIndex: null
      };
    }
    

    addTask = () => {
      const { prenom, nom, email, phone, tasks, editIndex } = this.state;
    
      const newTask = {
        id: Math.floor(Math.random() * 10000),
        prenom,
        nom,
        email,
        phone,
      };
    
      if (editIndex !== null) {
        const newUser = this.state.tasks.map((user))
        // Si editIndex est défini, mettez à jour la tâche existante
        const updatedTasks = [...tasks];
        // updatedTasks= newTask;
    
        this.setState({
          tasks: updatedTasks,
          prenom: '',
          nom: '',
          email: '',
          phone: '',
          editIndex: null, // Réinitialisez editIndex après l'édition
        });
      } else {
        // Sinon, ajoutez une nouvelle tâche
        this.setState((prev) => ({
          tasks: [...prev.tasks, newTask],
          prenom: '',
          nom: '',
          email: '',
          phone: '',
        }));
        }
      }
   
    
    

    handleChangePrenom = (e) => {
      this.setState({prenom: e.target.value});

    }

    handleChangeNom = (e) => {
      this.setState({nom: e.target.value});
    }

    handleChangeEmail = (e) => {
      this.setState({email: e.target.value});
    }

    handleChangePhone = (e) => {
      this.setState({phone: e.target.value});
    }
  
    // pour supprimer une tâche
    removeTask = (index) => {
      const { tasks } = this.state;
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      this.setState({
        tasks: updatedTasks,
      });
    };

    editTask = (index) => {
      const { tasks } = this.state;
      const editTasks = tasks[index];
      console.log("edit", editTasks);
      this.setState({
        prenom: editTasks.prenom,
        nom: editTasks.nom,
        email: editTasks.email,
        phone: editTasks.phone,
      });
    }
  
    render() {
      console.log(this.state.tasks);
      const {  prenom, nom, email, phone } = this.state;
      return (
        <div className="App  text-center">       
          <h1>Jeemacoder-React</h1>
          <div className="container row mx-auto">
            <div className="col-md-6">
            <InputTodo type="text" name="prenom"  value={this.state.prenom}  onChange={this.handleChangePrenom} />

            </div>

            <div className="col-md-6">
            <InputTodo type="text" name="nom" value={this.state.nom}  onChange={this.handleChangeNom} />

            </div>

            <div className="col-md-6">
            <InputTodo type="email" name="email" value={this.state.email} onChange={this.handleChangeEmail} />

            </div>

            <div className="col-md-6">

            <InputTodo type="tel" name="phone" value={this.state.phone}  onChange={this.handleChangePhone} />
            </div>
            
              <Button 
                className="mt-5 w-100"
                onClick={this.addTask} 
                titre='Ajouter' 
                />
           
          </div>
          
          <Mytable tasks={this.state.tasks}  removeTask={this.removeTask} editTask={this.editTask}/>
        </div>
       
      );
    }
  };

  class InputTodo extends React.Component {
    render() {
      const {type, value, name, onChange, children} = this.props
     return <div className='mx-auto w-100 '>
             <label htmlFor=
             {name}>{children}
             </label>
             <input type={type} 
             value={value} onChange={onChange} id={name} name={name} className='form-control'/>  
         </div>  
 }
  }
  
  class Button extends React.Component{
    render() {
      return (
        <button className="btn btn-danger mt-4" onClick={this.props.onClick}>{this.props.titre}</button>
        )
    }
  }

  class Mytable extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
      return (
        <div className="container mt-4">
            <hr/>
                    <h1 className="text-center fs-6">Utilisateurs</h1>
                <table className="table table-responsive">
                    <thead>
                        <tr>
                        <th scope="col">Prenom</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telephone</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <Tablebody tasks={this.props.tasks} removeTask={this.props.removeTask} editTask={this.props.editTask}/>
                    </table>
                </div>
           
      )
    }
  }

  class Tablebody extends React.Component {
    constructor(props){
        super(props);
    }
        render (){
            return (
              <tbody>
                {this.props.tasks.map((item, index)=> (
                  <tr key={item.id}>
                    <td>{item.prenom}</td>
                    <td>{item.nom}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => this.props.removeTask(index)}>Supprimer</button>
                      <button className="btn btn-warning" onClick={() => this.props.editTask(index)}>modifier</button>
                      </td>
                  </tr>
                  
                ))}
              </tbody>
            )
               
            
        }
  }
  

  
 
  
  ReactDOM.render(<App />, document.getElementById('container'));
  
  
  