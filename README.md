# Module: MMM-DateOnly
The `MMM-DateOnly` module is a third party module for the MagicMirror universe.
This module displays the current date. The information will be updated every minute (might need revision).

## Screenshot
(MMM-DateOnly.png)

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
