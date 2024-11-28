const AuthInput = ({inputIcon, type, name, placeholder, title, inputValue, handleInput, feedbackValue, showPassword, setShowPassword, readOnly}) => {
  return (
    <section className="signSec">
      <div className="signDiv">
        <i className={`fa-solid fa-${inputIcon === "email" ? "envelope" : inputIcon === "user" ? "user" : "unlock"} signIcon`}></i>
        <input type={(type === "text" || type === "email") ? `${type === "text" ? "text" : "email"}` : showPassword ? "text" : "password"} name={name} title={title} value={inputValue} onChange={handleInput} placeholder={placeholder} className="signInput" readOnly={readOnly} />
        {name === "password" && <i className={`fa-solid fa-${showPassword ? "eye-slash" : "eye"} showPass`} onClick={() => setShowPassword(!showPassword)}></i>}
      </div>
      <p className="signText">{feedbackValue}</p>
    </section>
  );
};

export default AuthInput;