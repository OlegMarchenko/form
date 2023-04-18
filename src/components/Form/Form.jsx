import { useForm } from 'react-hook-form';
import './Form.scss'

function Form() {

  const { register, handleSubmit, formState: { errors } } = useForm();


  function onSubmit(data) {
    console.log(data);
  }

  const testSubmit = (data) => console.log(data);

  function handleSubmitForm(e) {
    e.preventDefault();
    console.log(e);
  }


  return (
    <div className='form-holder'>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='form__group'>
          <input className='form__input' {...register("firstName")} />
          {errors.firstName && <span>This is required</span>}
        </div>

        <div className='form__group'>
          <input className='form__input' {...register("lastName")} />
          {errors.lastName && <span>This is required</span>}
        </div>

        <div className="form__group">
          <input
            className='form__input'
            placeholder="Email"
            {...register('email', {
                // required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              }
            )} />
          {errors.email && <p>Email is required</p>}
        </div>


        <div className="form__group">
          <select {...register("gender")}>
            <option value=""></option>
            <option value="female">female</option>
            <option value="male">male</option>

          </select>
        </div>

        <img src="" alt="" />

        <label htmlFor="field-rain">
          <input
            {...register("weather")}
            type="radio"
            value="rain"
            id="field-rain"
          />
          Rain
        </label>
        <label htmlFor="field-wind">
          <input
            {...register("weather")}
            type="radio"
            value="wind"
            id="field-wind"
          />
          Lots of wind
        </label>
        <label htmlFor="field-sun">
          <input
            {...register("weather")}
            type="radio"
            value="sun"
            id="field-sun"
          />
          Sunny
        </label>

        <button className='form__btn' type='submit'>Submit</button>

      </form>
      <form onSubmit={handleSubmitForm}>
        <input type="text" placeholder='name' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form;