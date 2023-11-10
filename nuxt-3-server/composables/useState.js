import {NuxtLink} from "nuxt"

export const navigation = () => useState('navigation', () => "" );


export const useNavLinks = () => useState('links', () => [
    "Home",
    "About"
]
    
);

export const useEndpoints = () => useState ('endpoints', () => [
"/",
"/about"
])