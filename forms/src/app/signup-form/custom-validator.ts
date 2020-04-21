import { AbstractControl, ValidationErrors } from '@angular/forms';


export class CustomValidator {

    static noSpace(control: AbstractControl): ValidationErrors | null {

        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true };

        else
            return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise< ValidationErrors | null> {

        return new Promise( (resolve, rej) => {

            setTimeout( () => {

                if ((control.value as string) === 'password')
                resolve( { shouldBeUnique: true } );

                else
                resolve(null);


            }, 5000);

        });


    }


    static passwordGet(control: AbstractControl): Promise< ValidationErrors | null> {

        return new Promise( (resolve, rej) => {

            setTimeout( () => {

                if ((control.value as string) !== 'password')
                resolve( { passwordNotMatch: true } );

                else
                resolve(null);


            }, 2000);

        });


    }


}