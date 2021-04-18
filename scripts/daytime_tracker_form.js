import * as settings from "./settings.js";
export class DaytimeTrackerForm extends FormApplication {
    constructor(...args){
        super(...args);
        game.users.apps.push(this);
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            title: game.i18n.localize("DAYTRACKER.Title"),
            id: "daytimetracker",
            closeOnSubmit: false,
            popOut: true,
            width: 600,
            height: "auto",
            template: "modules/fbl-daytime-tracker/templates/daytime-tracker.html"
        });
    }

    async getData() {
        // Return data to the template
        return {
            selectedQuarter: "Morning"
        }
    }
}