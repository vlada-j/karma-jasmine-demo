describe('First testing section', function(){
	//	var reverse;
	//	beforeEach(inject(function($filter){ //initialize your filter
	//		reverse = $filter('reverse',{});
	//	}));

	it('first test', function(){
		expect(typeof app).toBe('function');
		expect(app(5)).toBe(25);
	});
});



describe('Second testing section', function(){
	var instance = new app(5);

	it('second test', function(){
		expect(typeof instance).toBe('object');
		expect(app(app(5))).toBe(125);
	});
});