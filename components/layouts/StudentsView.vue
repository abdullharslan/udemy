<template>
    <div class="ud-container component-margin">
        <h2 class="unit-title">Students are viewing</h2>
        <v-card class="d-flex flex-column align-start" :elevation="0">
            <v-window class="w-100" v-model="studentsViewTab" show-arrows>
                <v-window-item>
                    <v-card class="skillhub-comp-wrapper" :elevation="0">
                        <ComponentsSkillHubItem cover="img1.jpg"
                            title="Learn Python: The Complete Python Programming Course"
                            instructor="Avinash Jain, The Codex" star="4" rating="4,000" price="84.99"
                            realprice="429.99" :bestseller="true" />
                        <ComponentsSkillHubItem cover="img2.jpg"
                            title="Microsoft Excel 2013 Course Beginners/ Intermediate Training"
                            instructor="Infinite Skills" star="3" rating="3,250" price="84.99" realprice="429.99"
                            :bestseller="true" />
                        <ComponentsSkillHubItem cover="img3.jpg"
                            title="Become a Certified HTML, CSS, JavaScript Web Developer"
                            instructor="Dollar Design School, Mark Lassoff" star="3" rating="3,250" price="84.99"
                            realprice="429.99" :bestseller="true" />
                        <ComponentsSkillHubItem cover="img4.jpg" title="Javascript for Beginners"
                            instructor="Dollar Design School" star="3" rating="3,250" price="84.99" realprice="429.99"
                            :bestseller="true" />
                        <ComponentsSkillHubItem cover="img5.jpg"
                            title="Data Science A-Z™: Real-Life Data Science Exercises Included"
                            instructor="Kirill Eremenko, Ligency I Team, Ligency Team" star="3" rating="3,250"
                            price="84.99" realprice="429.99" :bestseller="true" />
                    </v-card>
                </v-window-item>
                <v-window-item>
                    <v-card class="skillhub-comp-wrapper" :elevation="0">
                        <ComponentsSkillHubItem cover="img1.jpg"
                            title="Learn Python: The Complete Python Programming Course"
                            instructor="Avinash Jain, The Codex" star="4" rating="4,000" price="84.99"
                            realprice="429.99" :bestseller="true" />
                        <ComponentsSkillHubItem cover="img2.jpg"
                            title="Microsoft Excel 2013 Course Beginners/ Intermediate Training"
                            instructor="Infinite Skills" star="3" rating="3,250" price="84.99" realprice="429.99"
                            :bestseller="true" />
                        <ComponentsSkillHubItem cover="img3.jpg"
                            title="Become a Certified HTML, CSS, JavaScript Web Developer"
                            instructor="Dollar Design School, Mark Lassoff" star="3" rating="3,250" price="84.99"
                            realprice="429.99" :bestseller="true" />
                        <ComponentsSkillHubItem cover="img4.jpg" title="Javascript for Beginners"
                            instructor="Dollar Design School" star="3" rating="3,250" price="84.99" realprice="429.99"
                            :bestseller="true" />
                        <ComponentsSkillHubItem cover="img5.jpg"
                            title="Data Science A-Z™: Real-Life Data Science Exercises Included"
                            instructor="Kirill Eremenko, Ligency I Team, Ligency Team" star="3" rating="3,250"
                            price="84.99" realprice="429.99" :bestseller="true" />
                    </v-card>
                </v-window-item>
            </v-window>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            studentsViewTab: 0
        }
    },
}
</script>