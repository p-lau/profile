import { browser } from '$app/env';
import { writable } from 'svelte/store';

const { subscribe, set, update } = writable('system', (set) => {
    if (browser) { 
        set(localStorage.getItem('theme'))
    }
    return () => console.log('no more subscribers');
});

