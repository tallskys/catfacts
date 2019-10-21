import { Controller, Get } from '@nestjs/common';

const catFacts = [
    "Cats are cool",
    "Cats sleep a lot",
    "Cats are furry",
    "Cats can jump high"
]

@Controller('facts')
export class FactsController {

    @Get('random')
    getRandomFact(): string {
        return catFacts[Math.floor(Math.random() * catFacts.length)];
    }
}
