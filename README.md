# Module: MMM-DateOnly
The `MMM-DateOnly` module is a third party module for the MagicMirror universe.
This module displays the current date. This is module is derived from the standard calender-and-clock modules but with the advantage that you can only display the date (if you want to display the clock somewhere else on the screen or - as in my case - you have several clocks hanging around in the kitchen near the MagicMirror). The information will be updated every minute (might need revision, possibly more elegant if only during the change of the date...).

## Screenshot
![Example](MMM-DateOnly.png)

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: "MMM-DateOnly",
		position: "top_left",	// This can be any of the regions.
		config: {
			// The config property is optional.
			// See 'Configuration options' for more information.
		}
	}
]
````

## Configuration options

The following properties can be configured:

| Option            | Description
| ----------------- | -----------
| `showWeek`        | Turn off or on the Week section. <br><br> **Possible values:** `true` or `false` <br> **Default value:** `false`
| `dateFormat`      | Configure the date format as you like. <br><br> **Possible values:** [Docs](http://momentjs.com/docs/#/displaying/format/) <br> **Default value:** `"dddd, LL"`

## Notifications
not yet implemented
