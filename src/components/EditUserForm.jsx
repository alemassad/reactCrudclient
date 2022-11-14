
import React from 'react';
import {useForm} from 'react-hook-form';
 
 const EditUserForm = (props) => {

    console.log(props.currentUser)

    const { register, formState: { errors }, handleSubmit, setValue } = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);
    
    const onSubmit = (data, event) => {
        console.log(data)
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)


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
                            maxLength: { value: 10, message: 'El nombre tiene que ser mas corto' }
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
                maxLength: { value: 10, message: 'El Apellido tiene que ser mas corto' }
            })}
            ></input>
            <div>
                {errors?.username?.message}
            </div>
            <button>Edit user</button>
            
        </form>
     );
 }
  
 export default EditUserForm;