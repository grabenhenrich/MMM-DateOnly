/* Magic Mirror
 * Module: DateOnly
 * By Lasse und Linus
 */

Module.register("MMM-DateOnly",{
	defaults: {
		showWeek: true,
		dateFormat: "dddd, LL"
	},

	getScripts: function() {
		return ["moment.js", "moment-timezone.js"];
	},

	getStyles: function() {
		return ["MMM-DateOnly.css"];
	},

	start: function() {
		Log.info("Starting module: " + this.name);
		var self = this;

		setInterval(function() {
			self.updateDom();
		}, 1000 * 60 * 1); // each minute

		// Set locale.
		moment.locale(config.language);
	},

	getDom: function() {
		var now = moment();
		var wrapper = document.createElement("div");

		var dateWrapper = document.createElement("div");
		dateWrapper.className = "date bright medium";
		dateWrapper.innerHTML = now.format(this.config.dateFormat);
		wrapper.appendChild(dateWrapper);


		if (this.config.showWeek) {
			var weekWrapper = document.createElement("div");
			weekWrapper.className = "week dimmed small";
			weekWrapper.innerHTML = this.translate("WEEK", { weekNumber: now.week() });
			wrapper.appendChild(weekWrapper);
		}

		return wrapper;
	}
});
