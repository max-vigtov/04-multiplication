
export interface CreateTableUseCase {
	execute: ( options: CreateTableOptions) => string;	
}

export interface CreateTableOptions {
	base: number;
	limit?: number;
}

export class CreateTable implements CreateTableUseCase{
	constructor(

	){}
	execute({ base, limit = 10 }: CreateTableOptions){

		let outputMessage = '';
		for (let index = 0; index < limit; index++) {
			outputMessage += `${base} X ${index + 1} = ${(index + 1) * base}\n`
		}
		return outputMessage;
	}
}