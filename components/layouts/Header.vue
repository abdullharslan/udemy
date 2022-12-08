<template>
    <div>
        <div class="fake-header"></div>
        <header class="header-wrapper">
            <a href="#" class="logo-wrapper">
                <img src="@/assets/images/logo-udemy.svg" alt="Udemy" width="91" height="34">
            </a>
            <nav class="nav-wrapper">
                <v-menu transition="scale-transition" open-on-hover>
                    <template v-slot:activator="{ props }">
                        <button class="nav-btn" v-bind="props">
                            Categories
                        </button>
                    </template>
                    <v-list class="nav-menu-list">
                        <v-list-item>
                            <v-list-item-title>test</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </nav>
            <div class="search-wrapper">
                <span class="search-btn">
                    <v-icon>mdi-magnify</v-icon>
                </span>
                <input type="text" class="search-bar" placeholder="Search for anything">
            </div>
            <nav class="nav-wrapper">
                <v-menu transition="scale-transition" open-on-hover>
                    <template v-slot:activator="{ props }">
                        <button class="nav-btn" v-bind="props">
                            Udemy Business
                        </button>
                    </template>
                    <v-list class="nav-menu-list">
                        <v-list-item>
                            <v-list-item-title>test</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </nav>
            <nav class="nav-wrapper">
                <v-menu transition="scale-transition" open-on-hover>
                    <template v-slot:activator="{ props }">
                        <button class="nav-btn" v-bind="props">
                            Teach on Udemy
                        </button>
                    </template>
                    <v-list class="nav-menu-list">
                        <v-list-item>
                            <v-list-item-title>test</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </nav>
            <nav class="nav-wrapper">
                <v-menu transition="scale-transition" open-on-hover>
                    <template v-slot:activator="{ props }">
                        <button class="nav-btn icon-24" v-bind="props">
                            <v-icon class="d-flex">mdi-cart-outline</v-icon>
                        </button>
                    </template>
                    <v-list class="nav-menu-list">
                        <v-list-item>
                            <v-list-item-title>test</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </nav>
            <button class="white-btn ms-8r">Log in</button>
            <button class="black-btn ms-8r">Sign up</button>
            <button class="white-btn icon ms-8r">
                <v-icon>mdi-web</v-icon>
            </button>
        </header>
    </div>
</template>