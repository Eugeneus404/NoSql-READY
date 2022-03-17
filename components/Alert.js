import {Error} from '../styles/Error';

const Alert = (props) => {

  const isHidden = props.isHidden;

  if (isHidden == 1) {
    return <Error hidden></Error>;
  } else if (isHidden == 2) {
    return <Error>Введите имя и пароль!</Error>
  } else if (isHidden == 3) {
    return <Error>Имя занято!</Error>
  }
}

const AlertLogin = (props) => {

  const isHidden = props.isHidden;

  if (isHidden == 1) {
    return <Error hidden></Error>;
  } else if (isHidden == 2) {
    return <Error>Введите имя и пароль!</Error>
  } else if (isHidden == 3) {
    return <Error>Имя пользователя или пароль неверный!</Error>
  }
}

const AlertChangeName = (props) => {

  const isHidden = props.isHidden;

  if (isHidden == 1) {
    return <Error hidden></Error>;
  } else if (isHidden == 2) {
    return <Error>Введите имя!</Error>
  } else if (isHidden == 3) {
    return <Error>Имя занято!</Error>
  }
}

export {Alert, AlertLogin, AlertChangeName}
