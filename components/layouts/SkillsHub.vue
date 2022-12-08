<template>
    <div>
        <div class="ud-container">
            <h2 class="heading-serif-xxl ma-0">A broad selection of courses</h2>
            <p class="p-billboard cmt-16">Choose from 213,000 online video courses with new additions published every
                month</p>
            <div class="ud-tabs">
                <div :class="(activeTab === 0) ? 'active' : ''" @click="activeTab = 0">Python</div>
                <div :class="(activeTab === 1) ? 'active' : ''" @click="activeTab = 1">Excel</div>
                <div :class="(activeTab === 2) ? 'active' : ''" @click="activeTab = 2">Web Development</div>
                <div :class="(activeTab === 3) ? 'active' : ''" @click="activeTab = 3">JavaScript</div>
                <div :class="(activeTab === 4) ? 'active' : ''" @click="activeTab = 4">Data Science</div>
                <div :class="(activeTab === 5) ? 'active' : ''" @click="activeTab = 5">AWS Certification</div>
                <div :class="(activeTab === 6) ? 'active' : ''" @click="activeTab = 6">Drawing</div>
            </div>
            <div class="skillhub-wrapper">
                <v-window v-model="activeTab">
                    <v-window-item :transition="false" :reverse-transition="false">
                        <v-card class="d-flex flex-column align-start">
                            <div class="cmb-32 d-flex flex-column align-start">
                                <div>
                                    <h2 class="ud-heading-xl cmb-08">Expand your career opportunities with Python</h2>
                                    <p class="ud-text-md cmw-80 cts-0001">Take one of Udemy’s range of Python courses
                                        and
                                        learn how to code using this incredibly
                                        useful language. Its simple syntax and readability makes Python perfect for
                                        Flask,
                                        Django,
                                        data science, and machine learning. You’ll learn how to build everything from
                                        games
                                        to sites
                                        to apps. Choose from a range of courses that will appeal to both beginners and
                                        advanced
                                        developers alike.</p>
                                </div>
                                <a href="#!" class="white-btn">Explore Python</a>
                            </div>
                            <v-window class="w-100" v-model="pythonWindow" show-arrows>
                                <v-window-item>
                                    <v-card style="height:283.08px;" class="skillhub-comp-wrapper">
                                        <ComponentsSkillHubItem cover="img1.jpg"
                                            title="Learn Python: The Complete Python Programming Course"
                                            instructor="Avinash Jain, The Codex" star="4" rating="4,000" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img1.jpg"
                                            title="Learn Python: The Complete Python Programming Course"
                                            instructor="Avinash Jain, The Codex" star="4" rating="4,000" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img1.jpg"
                                            title="Learn Python: The Complete Python Programming Course"
                                            instructor="Avinash Jain, The Codex" star="4" rating="4,000" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img1.jpg"
                                            title="Learn Python: The Complete Python Programming Course"
                                            instructor="Avinash Jain, The Codex" star="4" rating="4,000" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img1.jpg"
                                            title="Learn Python: The Complete Python Programming Course"
                                            instructor="Avinash Jain, The Codex" star="4" rating="4,000" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                    </v-card>
                                </v-window-item>
                                <v-window-item>
                                    <v-card style="height:283.08px;" class="skillhub-comp-wrapper">
                                        <ComponentsSkillHubItem cover="img1.jpg"
                                            title="Learn Python: The Complete Python Programming Course"
                                            instructor="Avinash Jain, The Codex" star="4" rating="4,000" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img1.jpg"
                                            title="Learn Python: The Complete Python Programming Course"
                                            instructor="Avinash Jain, The Codex" star="4" rating="4,000" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img1.jpg"
                                            title="Learn Python: The Complete Python Programming Course"
                                            instructor="Avinash Jain, The Codex" star="4" rating="4,000" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img1.jpg"
                                            title="Learn Python: The Complete Python Programming Course"
                                            instructor="Avinash Jain, The Codex" star="4" rating="4,000" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img1.jpg"
                                            title="Learn Python: The Complete Python Programming Course"
                                            instructor="Avinash Jain, The Codex" star="4" rating="4,000" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                    </v-card>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </v-window-item>
                    <v-window-item :transition="false" :reverse-transition="false">
                        <v-card class="d-flex flex-column align-start">
                            <div class="cmb-32 d-flex flex-column align-start">
                                <div>
                                    <h2 class="ud-heading-xl cmb-08">Analyze and visualize data with Excel</h2>
                                    <p class="ud-text-md cmw-80 cts-0001">Take a Microsoft Excel course from Udemy, and
                                        learn how to use this industry-standard software. Real-world experts will show
                                        you the basics like how to organize data into sheets, rows and columns, and
                                        advanced techniques like creating complex dynamic formulas. Both small
                                        businesses and large companies use Excel to turn their raw data into actionable
                                        insights.</p>
                                </div>
                                <a href="#!" class="white-btn">Explore Excel</a>
                            </div>
                            <v-window class="w-100" v-model="excelWindow" show-arrows>
                                <v-window-item>
                                    <v-card style="height:283.08px;" class="skillhub-comp-wrapper">
                                        <ComponentsSkillHubItem cover="img2.jpg"
                                            title="Microsoft Excel 2013 Course Beginners/ Intermediate Training"
                                            instructor="Infinite Skills" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img2.jpg"
                                            title="Microsoft Excel 2013 Course Beginners/ Intermediate Training"
                                            instructor="Infinite Skills" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img2.jpg"
                                            title="Microsoft Excel 2013 Course Beginners/ Intermediate Training"
                                            instructor="Infinite Skills" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img2.jpg"
                                            title="Microsoft Excel 2013 Course Beginners/ Intermediate Training"
                                            instructor="Infinite Skills" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img2.jpg"
                                            title="Microsoft Excel 2013 Course Beginners/ Intermediate Training"
                                            instructor="Infinite Skills" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                    </v-card>
                                </v-window-item>
                                <v-window-item>
                                    <v-card style="height:283.08px;" class="skillhub-comp-wrapper">
                                        <ComponentsSkillHubItem cover="img2.jpg"
                                            title="Microsoft Excel 2013 Course Beginners/ Intermediate Training"
                                            instructor="Infinite Skills" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img2.jpg"
                                            title="Microsoft Excel 2013 Course Beginners/ Intermediate Training"
                                            instructor="Infinite Skills" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img2.jpg"
                                            title="Microsoft Excel 2013 Course Beginners/ Intermediate Training"
                                            instructor="Infinite Skills" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img2.jpg"
                                            title="Microsoft Excel 2013 Course Beginners/ Intermediate Training"
                                            instructor="Infinite Skills" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img2.jpg"
                                            title="Microsoft Excel 2013 Course Beginners/ Intermediate Training"
                                            instructor="Infinite Skills" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                    </v-card>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </v-window-item>
                    <v-window-item :transition="false" :reverse-transition="false">
                        <v-card class="d-flex flex-column align-start">
                            <div class="cmb-32 d-flex flex-column align-start">
                                <div>
                                    <h2 class="ud-heading-xl cmb-08">Build websites and applications with Web Development</h2>
                                    <p class="ud-text-md cmw-80 cts-0001">The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.</p>
                                </div>
                                <a href="#!" class="white-btn">Explore Web Development</a>
                            </div>
                            <v-window class="w-100" v-model="webWindow" show-arrows>
                                <v-window-item>
                                    <v-card style="height:283.08px;" class="skillhub-comp-wrapper">
                                        <ComponentsSkillHubItem cover="img3.jpg"
                                            title="Become a Certified HTML, CSS, JavaScript Web Developer"
                                            instructor="Dollar Design School, Mark Lassoff" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img3.jpg"
                                            title="Become a Certified HTML, CSS, JavaScript Web Developer"
                                            instructor="Dollar Design School, Mark Lassoff" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img3.jpg"
                                            title="Become a Certified HTML, CSS, JavaScript Web Developer"
                                            instructor="Dollar Design School, Mark Lassoff" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img3.jpg"
                                            title="Become a Certified HTML, CSS, JavaScript Web Developer"
                                            instructor="Dollar Design School, Mark Lassoff" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img3.jpg"
                                            title="Become a Certified HTML, CSS, JavaScript Web Developer"
                                            instructor="Dollar Design School, Mark Lassoff" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                    </v-card>
                                </v-window-item>
                                <v-window-item>
                                    <v-card style="height:283.08px;" class="skillhub-comp-wrapper">
                                        <ComponentsSkillHubItem cover="img3.jpg"
                                            title="Become a Certified HTML, CSS, JavaScript Web Developer"
                                            instructor="Dollar Design School, Mark Lassoff" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img3.jpg"
                                            title="Become a Certified HTML, CSS, JavaScript Web Developer"
                                            instructor="Dollar Design School, Mark Lassoff" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img3.jpg"
                                            title="Become a Certified HTML, CSS, JavaScript Web Developer"
                                            instructor="Dollar Design School, Mark Lassoff" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img3.jpg"
                                            title="Become a Certified HTML, CSS, JavaScript Web Developer"
                                            instructor="Dollar Design School, Mark Lassoff" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img3.jpg"
                                            title="Become a Certified HTML, CSS, JavaScript Web Developer"
                                            instructor="Dollar Design School, Mark Lassoff" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                    </v-card>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </v-window-item>
                    <v-window-item :transition="false" :reverse-transition="false">
                        <v-card class="d-flex flex-column align-start">
                            <div class="cmb-32 d-flex flex-column align-start">
                                <div>
                                    <h2 class="ud-heading-xl cmb-08">Grow your software development skills with JavaScript</h2>
                                    <p class="ud-text-md cmw-80 cts-0001">JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. With JavaScript online classes, you can learn to build interactive web applications, choose the best framework, and work with other programming languages like HTML and CSS.</p>
                                </div>
                                <a href="#!" class="white-btn">Explore JavaScript</a>
                            </div>
                            <v-window class="w-100" v-model="jsWindow" show-arrows>
                                <v-window-item>
                                    <v-card style="height:283.08px;" class="skillhub-comp-wrapper">
                                        <ComponentsSkillHubItem cover="img4.jpg"
                                            title="Javascript for Beginners"
                                            instructor="Dollar Design School" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img4.jpg"
                                            title="Javascript for Beginners"
                                            instructor="Dollar Design School" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img4.jpg"
                                            title="Javascript for Beginners"
                                            instructor="Dollar Design School" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img4.jpg"
                                            title="Javascript for Beginners"
                                            instructor="Dollar Design School" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img4.jpg"
                                            title="Javascript for Beginners"
                                            instructor="Dollar Design School" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                    </v-card>
                                </v-window-item>
                                <v-window-item>
                                    <v-card style="height:283.08px;" class="skillhub-comp-wrapper">
                                        <ComponentsSkillHubItem cover="img4.jpg"
                                            title="Javascript for Beginners"
                                            instructor="Dollar Design School" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img4.jpg"
                                            title="Javascript for Beginners"
                                            instructor="Dollar Design School" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img4.jpg"
                                            title="Javascript for Beginners"
                                            instructor="Dollar Design School" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img4.jpg"
                                            title="Javascript for Beginners"
                                            instructor="Dollar Design School" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img4.jpg"
                                            title="Javascript for Beginners"
                                            instructor="Dollar Design School" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                    </v-card>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </v-window-item>
                    <v-window-item :transition="false" :reverse-transition="false">
                        <v-card class="d-flex flex-column align-start">
                            <div class="cmb-32 d-flex flex-column align-start">
                                <div>
                                    <h2 class="ud-heading-xl cmb-08">Lead data-driven decisions with Data Science</h2>
                                    <p class="ud-text-md cmw-80 cts-0001">Data science application is an in-demand skill in many industries worldwide — including finance, transportation, education, manufacturing, human resources, and banking. Explore data science courses with Python, statistics, machine learning, and more to grow your knowledge. Get data science training if you’re into research, statistics, and analytics.</p>
                                </div>
                                <a href="#!" class="white-btn">Explore Data Science</a>
                            </div>
                            <v-window class="w-100" v-model="dataWindow" show-arrows>
                                <v-window-item>
                                    <v-card style="height:283.08px;" class="skillhub-comp-wrapper">
                                        <ComponentsSkillHubItem cover="img5.jpg"
                                            title="Data Science A-Z™: Real-Life Data Science Exercises Included"
                                            instructor="Kirill Eremenko, Ligency I Team, Ligency Team" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img5.jpg"
                                            title="Data Science A-Z™: Real-Life Data Science Exercises Included"
                                            instructor="Kirill Eremenko, Ligency I Team, Ligency Team" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img5.jpg"
                                            title="Data Science A-Z™: Real-Life Data Science Exercises Included"
                                            instructor="Kirill Eremenko, Ligency I Team, Ligency Team" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img5.jpg"
                                            title="Data Science A-Z™: Real-Life Data Science Exercises Included"
                                            instructor="Kirill Eremenko, Ligency I Team, Ligency Team" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img5.jpg"
                                            title="Data Science A-Z™: Real-Life Data Science Exercises Included"
                                            instructor="Kirill Eremenko, Ligency I Team, Ligency Team" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                    </v-card>
                                </v-window-item>
                                <v-window-item>
                                    <v-card style="height:283.08px;" class="skillhub-comp-wrapper">
                                        <ComponentsSkillHubItem cover="img5.jpg"
                                            title="Data Science A-Z™: Real-Life Data Science Exercises Included"
                                            instructor="Kirill Eremenko, Ligency I Team, Ligency Team" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img5.jpg"
                                            title="Data Science A-Z™: Real-Life Data Science Exercises Included"
                                            instructor="Kirill Eremenko, Ligency I Team, Ligency Team" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img5.jpg"
                                            title="Data Science A-Z™: Real-Life Data Science Exercises Included"
                                            instructor="Kirill Eremenko, Ligency I Team, Ligency Team" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img5.jpg"
                                            title="Data Science A-Z™: Real-Life Data Science Exercises Included"
                                            instructor="Kirill Eremenko, Ligency I Team, Ligency Team" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img5.jpg"
                                            title="Data Science A-Z™: Real-Life Data Science Exercises Included"
                                            instructor="Kirill Eremenko, Ligency I Team, Ligency Team" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                    </v-card>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </v-window-item>
                    <v-window-item :transition="false" :reverse-transition="false">
                        <v-card class="d-flex flex-column align-start">
                            <div class="cmb-32 d-flex flex-column align-start">
                                <div>
                                    <h2 class="ud-heading-xl cmb-08">Become an expert in cloud computing with AWS Certification</h2>
                                    <p class="ud-text-md cmw-80 cts-0001">Prep for your AWS certification with an AWS course on Udemy. Learn the fundamentals of AWS such as working with a serverless platform, the various frameworks, security and more. With these courses, you’ll build the valuable skills you need to implement cloud initiatives — and open up new career opportunities. If you want to become an AWS developer, we’ve got the course for you.</p>
                                </div>
                                <a href="#!" class="white-btn">Explore AWS Certification</a>
                            </div>
                            <v-window class="w-100" v-model="awsWindow" show-arrows>
                                <v-window-item>
                                    <v-card style="height:283.08px;" class="skillhub-comp-wrapper">
                                        <ComponentsSkillHubItem cover="img6.jpg"
                                            title="Amazon Web Services (AWS) Certified 2022 - 4 Certifications!"
                                            instructor="BackSpace Academy, Paul Coady" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img6.jpg"
                                            title="Amazon Web Services (AWS) Certified 2022 - 4 Certifications!"
                                            instructor="BackSpace Academy, Paul Coady" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img6.jpg"
                                            title="Amazon Web Services (AWS) Certified 2022 - 4 Certifications!"
                                            instructor="BackSpace Academy, Paul Coady" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img6.jpg"
                                            title="Amazon Web Services (AWS) Certified 2022 - 4 Certifications!"
                                            instructor="BackSpace Academy, Paul Coady" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img6.jpg"
                                            title="Amazon Web Services (AWS) Certified 2022 - 4 Certifications!"
                                            instructor="BackSpace Academy, Paul Coady" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                    </v-card>
                                </v-window-item>
                                <v-window-item>
                                    <v-card style="height:283.08px;" class="skillhub-comp-wrapper">
                                        <ComponentsSkillHubItem cover="img6.jpg"
                                            title="Amazon Web Services (AWS) Certified 2022 - 4 Certifications!"
                                            instructor="BackSpace Academy, Paul Coady" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img6.jpg"
                                            title="Amazon Web Services (AWS) Certified 2022 - 4 Certifications!"
                                            instructor="BackSpace Academy, Paul Coady" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img6.jpg"
                                            title="Amazon Web Services (AWS) Certified 2022 - 4 Certifications!"
                                            instructor="BackSpace Academy, Paul Coady" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img6.jpg"
                                            title="Amazon Web Services (AWS) Certified 2022 - 4 Certifications!"
                                            instructor="BackSpace Academy, Paul Coady" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img6.jpg"
                                            title="Amazon Web Services (AWS) Certified 2022 - 4 Certifications!"
                                            instructor="BackSpace Academy, Paul Coady" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                    </v-card>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </v-window-item>
                    <v-window-item :transition="false" :reverse-transition="false">
                        <v-card class="d-flex flex-column align-start">
                            <div class="cmb-32 d-flex flex-column align-start">
                                <div>
                                    <h2 class="ud-heading-xl cmb-08">Expand your creative skillset with Drawing</h2>
                                    <p class="ud-text-md cmw-80 cts-0001">Want to start drawing for fun or take your craft to the next level? Explore our online drawing classes and learn pencil drawing, figure drawing, cartoon drawing, character drawing for cartoons and anime, illustration, sketching, shading and more. Take an overview course on the fundamentals of drawing or zero in on an area you’d like to improve with a specialized course. We’ve got tons of options to get — and keep — you going.</p>
                                </div>
                                <a href="#!" class="white-btn">Explore Drawing</a>
                            </div>
                            <v-window class="w-100" v-model="drawingWindow" show-arrows>
                                <v-window-item>
                                    <v-card style="height:283.08px;" class="skillhub-comp-wrapper">
                                        <ComponentsSkillHubItem cover="img7.jpg"
                                            title="The Secrets to Drawing"
                                            instructor="Matthew Fussell" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img7.jpg"
                                            title="The Secrets to Drawing"
                                            instructor="Matthew Fussell" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img7.jpg"
                                            title="The Secrets to Drawing"
                                            instructor="Matthew Fussell" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img7.jpg"
                                            title="The Secrets to Drawing"
                                            instructor="Matthew Fussell" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img7.jpg"
                                            title="The Secrets to Drawing"
                                            instructor="Matthew Fussell" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                    </v-card>
                                </v-window-item>
                                <v-window-item>
                                    <v-card style="height:283.08px;" class="skillhub-comp-wrapper">
                                        <ComponentsSkillHubItem cover="img7.jpg"
                                            title="The Secrets to Drawing"
                                            instructor="Matthew Fussell" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img7.jpg"
                                            title="The Secrets to Drawing"
                                            instructor="Matthew Fussell" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img7.jpg"
                                            title="The Secrets to Drawing"
                                            instructor="Matthew Fussell" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img7.jpg"
                                            title="The Secrets to Drawing"
                                            instructor="Matthew Fussell" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                        <ComponentsSkillHubItem cover="img7.jpg"
                                            title="The Secrets to Drawing"
                                            instructor="Matthew Fussell" star="3" rating="3,250" price="84.99"
                                            realprice="429.99" :bestseller="true" />
                                    </v-card>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </v-window-item>
                </v-window>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 0,
            pythonWindow: 0,
            excelWindow: 0,
            webWindow: 0,
            jsWindow: 0,
            dataWindow: 0,
            awsWindow: 0,
            drawingWindow: 0
        }
    },
}
</script>