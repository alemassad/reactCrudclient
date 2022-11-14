import React, { useState } from 'react';
import UseTable from './components/UserTable';
import { v4 as uuidv4} from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

function App() {
  const usersData = [
    { id: uuidv4() , name: 'ana' , username: 'bella'},
    { id: uuidv4() , name: 'roberto' , username: 'roboto'},
    { id: uuidv4() , name: 'pedro' , username: 'picapiedra'}
  ]
  //state
  const [users, setUsers] = useState(usersData);

    //Editar usuario

  const [editing, setEditing] = useState(false);
  
  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  });
  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  //actualiza usuario
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id ===id ? updateUser :user))) 
  }

  //agregar usuarios
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar usuarios
  const deleteUser = (id) => {
    console.log(id)
    const arrayFiltrado= users.filter(user => user.id !==id);
    setUsers(arrayFiltrado)
  }

  return (
    <div className='container'>
      <h1>Hola mundo</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ):(
              <div>
                <h2>Agregar Usuario</h2>
                <AddUserForm addUser={addUser}/>
              </div>
            )
          }
        </div>
        <div className='flex-large'>
          <h2>Ver usuarios</h2>
          <UseTable 
            users={users} 
            deleteUser={deleteUser} 
            
            editRow={editRow} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
