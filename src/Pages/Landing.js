import '../Global.css';
import './Landing.css';

function Landing() {
    return (
        <>
            <div className="landing-nav">
                <div className="landing-logo">
                    <i className="bx bxs-network-chart"></i>
                    <span><a href="http://localhost:3000/">Sabi-GPT</a></span>
                </div>

                <div className="landing-list">
                    <ul>
                        <li><a href="http://localhost:3000/rearch">Research</a></li>
                        <li><a href="http://localhost:3000/sabi-gpt">Sabi-GPT</a></li>
                        <li><a href="http://localhost:3000/safty">Safty</a></li>
                        <li><a href="http://localhost:3000/team">Team</a></li>
                    </ul>
                </div>

                <div className="landing-menu">
                    <div className="landing-search">
                        <input type='search' name="search" placeholder='Search..' />
                    </div>
                    <div className="landing-login">
                        <a href="http://localhost:3000/login">Login</a>
                    </div>
                    <div className="landing-try">
                        <a href="http://localhost:3000/login">Try Sabi-GPT</a>
                    </div>
                </div>
            </div>

            <div className="landing-main">
                <h1>Introducing Sabi: Conventional</h1>
                <h1>Multi-personality AI chatbot</h1>
            </div>
        </>
    )
}

export default Landing;
