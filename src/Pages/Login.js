import "./Login.css";

function Login() {
    return (
        <>
            <div className="login-container">
                <header>Welcome back!</header>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="example@domain.com" required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="password..." required />
                <button type="submit" id="submit">Login</button>
            </div>
        </>
    )
}

export default Login
