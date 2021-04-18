class daytimeTrackerForm extends FormApplication {
    constructor(...args){
        super(...args);
        game.users.apps.push(this);
    }

    static get defaultOptions() {
        const options = super.defaultOptions;
        options.title = game.i18n.localize("DAYTRACKER.Title");
        options.id = "daytimetracker";
        options.closeOnSubmit = false;
        options.popOut = true;
        options.width = 600;
        options.height = "auto";
        options.template = "daytime-tracker.html"

        return options;
    }

    async getData() {
        // Return data to the template
    }
}
window.daytimeTrackerForm = daytimeTrackerForm;