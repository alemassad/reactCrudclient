
import React from 'react';
import {useForm} from 'react-hook-form';
 
 const AddUserForm = (props) => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const onSubmit = (data, event) => {
        console.log(data)

        //agregamos user
        props.addUser(data)

        //limpiar casillas
        event.target.reset();
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit) }>
            <label>Name</label>
            <input type='text' name='name' 
            {...register('name', {
                            required: { value: true, message: 'El nombre es requerido' },
                            minLength: { value: 2, message: 'El nombre tiene que ser mas largo' },
                            maxLength: { value: 6, message: 'El nombre tiene que ser mas corto' }
                        })
            }></input>
            <div>
                {errors?.name?.message}
            </div>
            <label>Username</label>
            <input type='text' name='username' 
            {...register('username', {
                required: { value: true, message: 'El Apellido es requerido' },
                minLength: { value: 2, message: 'El Apellido tiene que ser mas largo' },
                maxLength: { value: 6, message: 'El Apellido tiene que ser mas corto' }
            })}
            ></input>
            <div>
                {errors?.username?.message}
            </div>
            <button>Add new user</button>
            
        </form>
     );
 }
  
 export default AddUserForm;