function Dashboard() {
    return (
        <div className="dashboard">

            <div className="sidebar">
                <h3>Profile</h3>

                <ul>
                    <li>🏠 Dashboard</li>
                    <li>📚 Materi</li>
                    <li>📝 Quiz</li>
                    <li>🎥 Video</li>
                    <li>📊 Progress</li>
                </ul>
            </div>

            <div className="main">

                <div className="header">
                    <h1>Dunia Belajar</h1>

                    <input
                        className="search"
                        type="text"
                        placeholder="Search"
                    />
                </div>

                <div className="hello-box">
                    <h2>Hello, User 👋</h2>
                    <p>What do you want to learn today?</p>

                    <div className="topics">
                        <button>Interaksi Sosial</button>
                        <button>Geografis</button>
                        <button>Limbah</button>
                    </div>
                </div>


                <div className="continue">
                    <h2>Continue Learning</h2>

                    <div className="continue-card">
                        <h3>Interaksi Sosial</h3>
                        <p>Progress</p>

                        <div className="progress-bar">
                            <div className="progress"></div>
                        </div>
                    </div>
                </div>

                <div className="features">

                    <div className="feature-card">
                        <h3>Materi Pembelajaran</h3>
                        <p>Lihat semua topik</p>
                    </div>

                    <div className="feature-card">
                        <h3>Quiz & Latihan</h3>
                        <p>Kerjakan soal</p>
                    </div>

                    <div className="feature-card">
                        <h3>Video Pembelajaran</h3>
                        <p>Tonton video</p>
                    </div>

                </div>

            </div>


            <div className="right-panel">

                <div className="calendar">
                    <h3>Maret 2026</h3>

                    <div className="calendar-grid">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                        <span>7</span>
                    </div>
                </div>

                <div className="tasks">
                    <h3>Tasks Board</h3>

                    <p>☑ Kerjakan Quiz Geografi</p>
                    <p>☑ Baca Materi Interaksi Sosial</p>
                </div>

                <div className="schedule">
                    <h3>Upcoming Schedule</h3>

                    <p>🕒 10 Mar : Quiz Limbah</p>
                    <p>🕒 15 Mar : Quiz Interaksi Sosial</p>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;