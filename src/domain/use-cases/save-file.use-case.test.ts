import fs from 'fs';
import { SaveFile } from './save-file.use-case';

describe('SaveFileUseCase', () => { 

	const customOptions = {
		fileContent: 'Custom content',
		fileDestination: 'custom-destination',
		fileName: 'custom-table-name'
	}
	const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`

	afterEach(()  => {
		const outputFolderExist = fs.existsSync('outputs')
		if (outputFolderExist) fs.rmSync( 'outputs', { recursive: true })
		
		const customOutputFolderExist = fs.existsSync('custom-destination')
		if (customOutputFolderExist) fs.rmSync( 'custom-destination', { recursive: true })		
	})

	test('should save file with default values', () => { 
		
		const saveFile = new SaveFile();
		const filePath = 'outputs/table.txt';
		const options = {
			fileContent: 'Test Content'
		}

		const result = saveFile.execute( options )
		const fileExist = fs.existsSync( filePath )
		const fileContent = fs.readFileSync( filePath, { encoding: 'utf-8'} )

		expect( result ).toBe( true );
		expect( fileExist ).toBe( true );
		expect( fileContent ).toBe( options.fileContent );

	})

	test('should save file with custom values', () => { 
		
		const saveFile = new SaveFile()

		const result = saveFile.execute( customOptions )
		const fileExist = fs.existsSync( customFilePath )
		const fileContent = fs.readFileSync( customFilePath, { encoding: 'utf-8'} )

		expect( result ).toBe( true );
		expect( fileExist ).toBe( true );
		expect( fileContent ).toBe( customOptions.fileContent );
	})
 })