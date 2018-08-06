<template id="main">
<v-ons-page>
<h1>{{$route.meta.title}}</h1>
testing
 <v-list>
                <v-list-tile v-for="(item, index) in items" :key="index" :to="item.path">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
</v-ons-page>
</template>
