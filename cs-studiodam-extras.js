/* 
 * This Home example creates an alternative home view to experiment with custom widgets
 * 
 */
(function(exports) {	
	// Example register, used by the function registerExample to maintain a roster of loaded examples.
	
	var StudiodamHomeView = exports.StudiodamHomeView = otui.define("StudiodamHomeView", function() {
		this.properties = {
			'name' : 'studiodamHome', // Name of the view
		};
		
		// Function called to create the content for this view. Note that initContent functions must always have a name.
		this._initContent = function initStudiodamHomeView(self, placeContent) {
			var template = this.getTemplate('studiodam-home'); // Get the content template
			placeContent(template); // Then call place content to place the template in the UI.
		};
	});
		
	var openHome = StudiodamHomeView.route.as("newhome", // URL format pattern
		otui.withTemplate("main"), // Load the layout template "main"
		StudiodamHomeView.route.to() // Route to the StudiodamHomeView, passing no additional parameters.
	);
	
	// Then bind that route URL into the named route "open".
	StudiodamHomeView.route.define("open", openHome);

	// We wrap the menu registry around an otui.ready() call to ensure that when we create the menu entry, it has the right language pack for translating.
	otui.ready(function() {
		otui.Menus.register({
			'name' : 'newhome', // Unique name for the menu entry. By giving it the same name as the first part of the route (in this case, "demo"), it will highlight the entry whenever we're on that route.
			'title' : otui.tr("Home Widgets"), // Display name for the menu.
			'select' : StudiodamHomeView.route.use("open") // When selected, use the "open" route for the StudiodamHomeView to display itself.
		});
	}, true);
	
})(window);
