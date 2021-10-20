let names = ['josh', 'joe', 'ben', 'dylan'];
// index and sourceArr are optional, sourceArr == ['josh', 'joe', 'ben', 'dylan']
names.forEach((name, index, sourceArr) => {
	console.log(color, idx, sourceArr)
});

// josh 0 ['josh', 'joe', 'ben', 'dylan']
// joe 1 ['josh', 'joe', 'ben', 'dylan']
// ben 2 ['josh', 'joe', 'ben', 'dylan']
// dylan 3 ['josh', 'joe', 'ben', 'dylan']