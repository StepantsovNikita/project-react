import { useState } from 'react'
import styles from './styled.module.css'

const Home = () => {
const [user, setUser] = useState("")
const [inputValue, setInputValue] = useState("")


  return (
    <div className={styles.Home}>


      <div className={styles.container}>

        <h2>Регистрация</h2>

        <form className={styles.regform}>

          <div className={styles.formrow}>

            <label htmlFor="email">Email:</label>
            <input id="email" type="email" />
          </div>

          <div className={styles.formrow}>

            <label htmlFor="submit"> Submit:</label>
            <input id="submit" type="submit" />
          </div>

          <div className={styles.formrow}>

            <label htmlFor="password">Password:</label>
            <input id="password" type="password" />
          </div>

          <div className={styles.formrow}>

            <label htmlFor="form_about">About:</label>
            <textarea name="about" id="form_about"></textarea>

          </div>

          <div className={styles.formrow} >
            <input type="submit" value="Go" />
          </div>


          {user && (
            <div>
              <div>Приветствую, Вас уважаемый {user}</div>
              <button onClick={() => setUser("")}>Выйти</button>
            </div>
          )}


          {!user && (
            <div>
              <label>Введите Ваше имя:</label>
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button onClick={() => setUser(inputValue)}>Сохранить</button>
            </div>

          )}

        </form>
      </div>

    </div>

  )

}

export default Home