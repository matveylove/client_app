import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import { useForm } from 'react-hook-form';

import styles from './Login.module.scss';

import { selectIsAuth, fetchRegister } from '../../redux/slices/auth';

export const Registration = () => {

  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onChange'
  });

  const onSubmit = async (values) => {

    const data = await dispatch(fetchRegister(values));
    console.log('dsfsdfsdfsdfsdfsdf')
    if (data.payload.token) {
      window.localStorage.setItem('token', data.payload.token)
    } else {
      return alert('Не удалось зарегестрироваться')
    }
  }


  if (isAuth) {
    return <Navigate to='/' />
  }



  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Создание аккаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="Полное имя"
          fullWidth
          error={Boolean(errors.name?.message)}
          helperText={errors.name?.message}
          {...register('name', { required: 'Укажите полное имя' })}
        />
        <TextField
          className={styles.field}
          label="E-Mail"
          fullWidth
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          type="email"
          {...register('email', { required: 'Укажите email' })}
        />
        <TextField
          className={styles.field}
          label="Пароль"
          fullWidth
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          type="password"
          {...register('password', { required: 'Укажите пароль' })}
        />

        <Button type='submit' disabled={!isValid} size="large" variant="contained" fullWidth>
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  );
};
