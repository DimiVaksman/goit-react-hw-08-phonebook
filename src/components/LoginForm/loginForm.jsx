import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value
    const password = form.elements.password.value
    // dispatch(
    //   logIn({
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );

    console.log("email:", email,  "password:" , password  )
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label >
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};