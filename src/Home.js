import './Global.css';
import Type from './util/TypingWriter';
// eslint-disable-all
function Home() {
    return (
        <>
            <div className="container-main">
                <nav className="nav-header">
                    <div className="nav-logo">
                        <i className="bx bxs-network-chart"></i>
                        <span>SabiAI</span>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">GitHub</a></li>
                    </ul>
                    <div className="nav-menu">
                        <a href="#">Search</a>
                        <a href="#">Login</a>
                        <a href="#">Try SabiGPT</a>
                    </div>
                </nav>
                <main className="main-body">
                    <div className="main-landing">
                        <div className="landing-title">
                            <Type />
                            <a href="#">Learn more about SabiGPT</a>
                        </div>
                    </div>
                    <div className="main-paragraphs">
                        <div className="section">
                            <div className="paragraph-post">
                                <h2>Pioneering research on the path to AGI</h2>
                                <a href="#">Learn about our Research</a>
                            </div>
                            <div className="paragraph-post">
                                <h2>Transforming work and creativity with AI</h2>
                                <a href="#">Learn about our products</a>
                            </div>
                            <div className="paragraph-post">
                                <h2>Join us in shaping the future of technology</h2>
                                <a href="#">View careers</a>
                            </div>
                        </div>
                        <div className="seaction">
                            <div className="paragraph">
                                <h1>Safty and responsibility</h1>
                                <div className="text">
                                    <p>Our work to create safe and beneficial AI requires a deep understanding of the potential risks and benefits, as well as careful consideration of the impact.</p>
                                    <a href="#">Learn about safty</a>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <img alt="Banner" />
                        </div>
                        <div className="seaction">
                            <div className="paragraph">
                                <h1>Research</h1>
                                <div className="text">
                                    <p>We research generative models and how to align them with human values.</p>
                                    <a href="#">Learn about our research</a>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="chart">
                                <img alt="image-1" />
                                <a href="#">Video generation mdoels as world simulators</a>
                                <p>Feb 15, 2024</p>
                            </div>
                            <div className="chart">
                                <img alt="Image-2" />
                                <a href="#">Building an early warning system for LLM-aided biological threat creation</a>
                                <p>Jan 31, 2024</p>
                            </div>
                            <div className="chart">
                                <img alt="image-3" />
                                <a href="#">Weak-to-strong generalization</a>
                                <p>Dec 13, 2023</p>
                            </div>
                            <div className="chart">
                                <img alt="image-4" />
                                <a href="#">Practices for Governing Agentic AI systems</a>
                                <p>Dec 14, 2023</p>
                            </div>
                        </div>
                        <div className="seaction">
                            <div className="paragraph">
                                <h1>Careers at SabiAI</h1>
                                <div className="text">
                                    <p>Developing safe and beneficial AI requires people from a wide range of disciplines and backgrounds.</p>
                                    <a href="#">View careers</a>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <img alt="image here!" />
                        </div>
                    </div>
                    <div className="main-quote">
                        <div className="quote">
                            <h2>I encourage my team to keep learning. Ideas in different topics or fields can often inspire new ideas and broaden the potential solution space.</h2>
                            <p>Lilian Weng</p>
                            <p>Applied AI at OpenAI</p>
                        </div>
                        <div className="main-join">
                            <h2>Join us in shaping the future of technology.</h2>
                            <button>View careers</button>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Home;