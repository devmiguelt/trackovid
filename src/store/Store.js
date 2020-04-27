import { writable } from 'svelte/store';

export const count_infected = writable(0);
export const count_saved = writable(0);
export const count_dead = writable(0);
export const count_tests = writable(0);
