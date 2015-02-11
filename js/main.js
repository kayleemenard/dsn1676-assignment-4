var blueberries = {
	fruitName: 'Blueberries',
	latinName: 'Vaccinium corybosum',
	isShrub: true,
	energy: '240 kJ',
	carbs: '14.49 g',
	protein: '0.74 g',
};

var grapes = {
	fruitName: 'Grapes',
	latinName: 'Vitis inifera',
	isShrub: false,
	energy: '288 kJ',
	carbs: '18.1 g',
	protein: '0.72 g',
};

var redCurrant = {
	fruitName: 'Red Currant',
	latinName: 'ribes rubrum',
	isShrub: true,
	energy: '234 kJ',
	carbs: '13.8 g',
	protein: '1.4 g',
}

var writeFruitInfo = function (fruit) {
	document.write('<h1>' + fruit.fruitName + '</h1>');
	document.write('<dl>');
		document.write('<dt>Latin Name</dt>')
		document.write('<dd>' + fruit.latinName + '</dd>')
		
		document.write('<dt>Grows on shrub</dt>')	
		document.write('<dt>' + fruit.isShrub + '</dt>')

		document.write('<dt>Energy</dt>')			
		document.write('<dd>' + fruit.energy + '</dd>')

		document.write('<dt>Carbohydrates</dt>')	
		document.write('<dd>' + fruit.carbs + '</dd>')

		document.write('<dt>Protein</dt>')	
		document.write('<dd>' + fruit.protein + '</dd>')
	document.write('</dl>')
}

writeFruitInfo(blueberries);
writeFruitInfo(grapes);
writeFruitInfo(redCurrant);