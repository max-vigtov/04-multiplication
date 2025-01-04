
const runCommand = async( args: string[] ) => { 
	process.argv = [ ...process.argv, ...args ];
	const { yarg } = await import('./args.plugin')
	return yarg;
}

const customOptions = {
	b: '5',
	l: '10',      
	n: 'multiplication-table',
	d: 'outputs',
	s: false,		
};

describe('Test arg.plugin.ts', () => { 
	
	const originalArgv = process.argv;

	beforeEach ( () => {
		process.argv = originalArgv;
		jest.resetModules();
	});

	test('should return default values', async() => {
		const argv = await runCommand(['-b', '5'])
		//console.log( argv );
		
		expect( argv ).toEqual( expect.objectContaining({ 
			b: 5,
			l: 10,      
			n: 'multiplication-table',
			d: 'outputs',
			s: false,		
		}))
	});	 

	test('Should return configuration with custom values', async() => { 
		const argv = await runCommand(['-b', '5', '-l', '20', '-s', '-n', 'custom-name', '-d', 'custom-dir' ])
		
		expect( argv ).toEqual( expect.objectContaining({ 
			b: 5,
			l: 20,      
			n: 'custom-name',
			d: 'custom-dir',
			s: true,		
		}))
	})

 })