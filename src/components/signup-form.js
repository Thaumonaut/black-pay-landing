import React from 'react'
import styles from '../pages/index.module.css'
import CountryDropdown from '../components/countries-dropdown'

export default React.forwardRef((props, ref) => (
  <div className={styles.formsWrapper} ref={ref}>
    <h2>Contact</h2>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field">
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact"/>
      <p hidden>
        <label>
          Don’t fill this out:
          <input name="bot-field"/>
        </label>
      </p>
      <p>
        <label>
          Your name:
          <br/>
          <input className={styles.formInput} type="text" name="name"/>
        </label>
      </p>
      <p>
        <label>
          Your email:
          <br/>
          <input className={styles.formInput} type="email" name="email"/>
        </label>
      </p>
      <p>
        <label>
          Your country:
          <br/>
          <CountryDropdown></CountryDropdown>
        </label>
      </p>
      <p>
        <button className={styles.formButton} type="submit">
          SIGN UP
        </button>
      </p>
    </form>
  </div>
))