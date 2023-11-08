<template>
     <div>
            <div>
                <NuxtLink to="/artwork">
                    <button>
                        Artwork
                    </button>
                </NuxtLink>
                <NuxtLink to="/contact">
                    <button>
                        Contact
                    </button>
                </NuxtLink>
                <NuxtLink to="/grow">
                    <button>
                        Grow
                    </button>
                </NuxtLink>
            </div>
            <h1> Current Projects </h1>
            <div> <h4>Click each image to view the app!</h4></div>

            <div class="h-screen">
            <section>
                <a href="/Fitness-Tracker.pdf" target="_blank">
                    <img className="image-deco" src='/running.png'>
                </a>
            </section>
            <section>
            <button>Fitness Tracker Design</button>
            </section>
            <section>
                <a href="https://kumoko8.github.io/Front-End-App-DnD-Character-Project/" target="_blank">
                    <img className="image-deco" src='/DnD.png'>
                </a>
            </section>
            <section>
            <a href="https://github.com/Kumoko8/Front-End-App-DnD-Character-Project.git" target="_blank"><button>DnD Character Generator</button></a>
            </section>
            <section>
            <a href="https://kumoko8.github.io/Weather-App-Serverside-API/" target="_blank">
                    <img className="image-deco" src='/WeatherApp.png'>
                </a>
            </section>
            <section>
            <a href="https://github.com/Kumoko8/Weather-App-Serverside-API.git" target="_blank"><button>Weather App</button></a>
            </section>
            
            <section>
            <a href="https://kumoko8.github.io/Web-APIs-Quiz-Homework-4/" target="_blank">
                    <img className="image-deco" src='/quiz.png'>
                </a>
            </section>
            <section>
            <a href="https://github.com/Kumoko8/Web-APIs-Quiz-Homework-4.git" target="_blank"><button>JavaScript Quiz</button></a>
            </section>
           
           

            </div>
            
        </div>
</template>