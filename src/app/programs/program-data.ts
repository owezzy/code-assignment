import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Program } from './program';

export class ProgramData implements InMemoryDbService {

  createDb() {
    const programs: Program[] = [
      {
        'id': 1,
        'name': 'taken',
        'startDate': 'Leaf Rake',
        'endDate': 'GDN-0011'
      },
      {
        'id': 2,
        'name': 'Garden Cart',
        'startDate': 'GDN-0023',
        'endDate': '15 gallon capacity rolling garden cart',
      },
      {
        'id': 5,
        'name': 'Hammer',
        'startDate': 'TBX-0048',
        'endDate': 'Curved claw steel hammer',
      },
      {
        'id': 8,
        'name': 'Saw',
        'startDate': 'TBX-0022',
        'endDate': '15-inch steel blade hand saw',
      },
      {
        'id': 10,
        'name': 'Video Game Controller',
        'startDate': 'GMG-0042',
        'endDate': 'Standard two-button video game controller',
      }
    ];
    return { programs };
  }
}
