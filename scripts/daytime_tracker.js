import * as settings from "./settings.js";
console.log("Daytime Tracker Module Loaded.");

Hooks.on('init', () => {
    // settings.registerSettings((settings)=>
    // {

    // });
});

Hooks.on('setup', () => {

})

Hooks.on('ready', () => {
    // is this where we load?
    game.daytime_tracker = new DaytimeTracker();
});

Hooks.on('getSceneControlButtons', (controls) => {
    console.log(JSON.stringify(controls));
    // controls.find((c) => c.name === 'token').tools.push({
    //     name: 'EmitterEditor',
    //     title: game.i18n.localize('PARTICLEFX.EmitterEditor'),
    //     icon: 'fas fa-fire',
    //     onClick() {
    //         new ParticleFXApplication(
    //             { title: 'ParticleFX Emitter Editor' }, {
    //             classes: 'particlefx-editor',
    //             width: 750,
    //             height: 750,
    //             resizable: true,
    //         }, 'EmitterEditor',
    //         );
    //     },
    //     button: true,
    // });
});

export class DaytimeTracker {

    constructor() {
        this.createSidebarMenu();
    }

    createSidebarMenu() {
        console.log("creating new sidebar?")
    }
}