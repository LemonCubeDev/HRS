onEvent("Welcome", "click", function( ) {
	playSpeech("Welcome To High Rock Sightseeing!", "female", "English");
});
onEvent("Doors", "click", function( ) {
	playSpeech("The Doors Are Closing! Please Stand Clear Of The Closing Doors!", "female", "English");
});
onEvent("NextObservation", "click", function( ) {
	playSpeech("The Next Stop Is Observation Tower.", "female", "English");
});
onEvent("NextCamping", "click", function( ) {
	playSpeech("The Next Stop Is Camping Area.", "female", "English");
});
onEvent("NextParking", "click", function( ) {
	playSpeech("The Next Stop Is Parking Lot.", "female", "English");
});
onEvent("Music", "click", function( ) {
	setScreen("BackgroundMusic");
});
onEvent("ArrivingObservation", "click", function( ) {
	playSpeech("Arriving At Observation Tower.", "female", "English");
});
onEvent("ArrivingCamping", "click", function( ) {
	playSpeech("Arriving At Camping Area", "female", "English");
});
onEvent("ArrivingParking", "click", function( ) {
	playSpeech("Arriving At Parking Lot.", "female", "English");
});
onEvent("Thank", "click", function( ) {
	playSpeech("Thank You For Riding On High Rock Sightseeing! Have A Great Day!", "female", "English");
});
onEvent("Mingle", "click", function( ) {
	playSound("assets/Mingle.mp3", false);
});
onEvent("jet2", "click", function( ) {
	playSound("assets/jet2Holidays.mp3", false);
});
onEvent("Fart", "click", function( ) {
	playSound("assets/dry-fart.mp3", false);
});
onEvent("21century", "click", function( ) {
	playSound("assets/21centuryfunk.mp3", false);
});
onEvent("Flashbang", "click", function( ) {
	playSound("assets/flashbanggg.mp3", false);
});
onEvent("Eagle", "click", function( ) {
	playSound("assets/eagle-screech.mp3", false);
});
onEvent("Return", "click", function( ) {
	setScreen("HighRockSightseeing");
});
