import monsterHead from "../../assets/image/monsterHead.svg";
import star from "../../assets/image/star.svg";
import styles from "./SignUp.module.scss";
import { useState } from "react";
function SignUp({ login, password }) {
  const [data, setData] = useState({
    login: "",
    password: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const changeValueInput = (event, name) => {
    setData({ ...data, [name]: event.target.value });
  };

  const handleCreate = {
    login: data.login,
    password: data.password,
  };

  return (
    <>
      <div className={styles.containerLink}>
        <img src={star} className={styles.imgStar} />
        <a href="#" className={styles.link}>
          Вход
        </a>
      </div>

      <div className={styles.containerForm}>
        <img src={monsterHead} className={styles.imgMonsterHead} />
        <form onSubmit={handleFormSubmit} className={styles.formSign}>
          <input
            placeholder={login}
            type="text"
            className={styles.inputForm}
            value={data.login}
            onChange={(event) => changeValueInput(event, "login")}
            required
          ></input>
          <input
            type="password"
            placeholder={password}
            className={styles.inputForm}
            value={data.password}
            onChange={(event) => changeValueInput(event, "password")}
            required
          ></input>
          <button type="submit" className={styles.submitForm}>
            Регистрация
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
