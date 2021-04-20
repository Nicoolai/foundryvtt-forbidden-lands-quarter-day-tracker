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
            height: 450,
            template: "modules/fbl-daytime-tracker/templates/daytime-tracker.html"
        });
    }

    async getData() {
        // Return data to the template
        return {
            selectedQuarter: {
                Name: game.i18n.localize("DAYTRACKER.morning"),
                IsDark: false,
                Id: "morning"
            },
            quarters: {
                morning: { 
                    Name: game.i18n.localize("DAYTRACKER.morning"),
                    IsDark: false
                },
                midday: {
                    Name: game.i18n.localize("DAYTRACKER.midday"),
                    IsDark: false
                },
                evening: { 
                    Name: game.i18n.localize("DAYTRACKER.evening"),
                    IsDark: true
                },
                night: {
                    Name: game.i18n.localize("DAYTRACKER.night"),
                    IsDark: true
                }
            }
        }
    }
}