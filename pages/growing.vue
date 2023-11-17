<template>
     <div>
            <div>
                <NuxtLink to="/fruit">
                    <button>
                        Fruit
                    </button>
                </NuxtLink>
                <NuxtLink to="/contact">
                    <button>
                        Contact
                    </button>
                </NuxtLink>
                <NuxtLink to="/cultivate">
                    <button>
                        Cultivate
                    </button>
                </NuxtLink>
            </div>
            <h1> Current Projects </h1>
            <div> <h4>Click each image to view the app!</h4></div>

            <div class="h-screen">
            
            <section>
                <a href="https://kumoko8.github.io/Front-End-App-DnD-Character-Project/" target="_blank">
                    <img className="image-deco" src='/DnD.png'>
                </a>
            </section>
            <section>
            <a href="https://github.com/Kumoko8/Front-End-App-DnD-Character-Project.git" target="_blank"><button>DnD Character Generator</button></a>
            </section>
            <section>
            <a href="https://kumoko8.github.io/Web-APIs-Quiz-Homework-4/" target="_blank">
                    <img className="image-deco" src='/quiz.png'>
                </a>
            </section>
            <section>
            <a href="https://github.com/Kumoko8/Web-APIs-Quiz-Homework-4.git" target="_blank"><button>JavaScript Quiz</button></a>
            </section>
            <div class="center">

                <p class="app-coming">Coming Soon! Click for sneak peek</p>
            </div>
            <section>
                <a href="/Fitness-Tracker.pdf" target="_blank">
                    <img className="image-deco" src='/running.png'>
                </a>
            </section>
            
            <section>
                <p> Fitness Tracker</p>
            
            </section>
           
           

            </div>
            
        </div>
</template>

<style scoped>
.app-coming {
    background-color: #f8ecb0;
    width:100%;
    padding: 8px;
    border-radius: 12px;
}
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>