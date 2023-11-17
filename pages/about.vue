<template>
    <div class="bg-gradient-to-b from-black to-black">

        <!-- About Me -->
        <div class="grid grid-rows-3 grid-flow-col rounded-xl bg-gradient-to-b from-white via-emerald-300 to-yellow-300">
            <div class="row-span-3">
                <img src="/images/gods-got-u.png">
            </div>

            <div class="flex items-center justify-center text-center ">
                <h2 class="text-5xl font-heading text-black drop-shadow-xl"> About Me </h2>
            </div>


            <p class="row-span-2 font-body-400 m-3 text-black">
                Thank you for visiting my page. Featured are some of my best and most enjoyable applications
                from my time in bootcamp and beyond. I first got into the tech field because of my interest in the
                intersection
                of
                technology, design, and education. I am passionate about using software development to create web services
                that
                make
                learning and communication more effective, enjoyable, and aesthetically pleasing.
            </p>
        </div>

        <!-- Vision -->
        <div>
            <h2 class="text-5xl font-heading text-white drop-shadow-xl m-4"> My Vision </h2>
            <p class="text-white font-body font-extrabold"> I'm aiming to share every bit of beauty I have seen and learned
                in the world with everyone! I want to make learning new things more possible and enjoyable for anyone.
                Software development and design are my platform. </p>
        </div>
        <!-- Projets -->
        <div>
            <div class="flex items-center justify-center text-center ">
                <h2 id="projects" class="text-5xl font-heading text-white drop-shadow-xl m-4"> Current Projects </h2>
            </div>


            <div class="font-body-800 font-extrabold grid grid-cols-2 grid-rows-2 text-white m-3  ">
                <section>
                    <img class="rounded-full" src='/images/DnD.png'>
                    <div class="grid grid-cols-2 place-content-around text-center">
                        <div>
                            <a class="hover:text-yellow-300"
                                href="https://kumoko8.github.io/Front-End-App-DnD-Character-Project/" target="_blank">
                                Learn More
                            </a>
                        </div>

                        <div>
                            <a class="hover:text-yellow-300"
                                href="https://github.com/Kumoko8/Front-End-App-DnD-Character-Project.git" target="_blank">
                                View Site
                            </a>
                        </div>
                    </div>
                </section>
                <section>
                    <img class="rounded-full" src='/images/NVZlogo.png'>

                    <div class="grid grid-cols-2 place-content-around text-center">
                        <div>
                            <a class="hover:text-yellow-300" href="#">
                                Learn More
                            </a>
                        </div>

                        <div>
                            <a class="hover:text-yellow-300" href="https://invizproductivity4.wordpress.com/"
                                target="_blank">
                                View Site
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>



        <div class="center">
            <ContentComingSoon />
        </div>

    </div>
</template>