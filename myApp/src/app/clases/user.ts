export class User {
         firstName: string;
         lastName: string;
         ratingCount: number;
         rates: string[];
         average: number;

         constructor() {
           this.firstName = '';
           this.lastName = '';
           this.ratingCount = null;
           this.rates = [];
           this.average = null;
         }
       }
