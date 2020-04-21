import { AbstractControl,ValidationErrors } from '@angular/forms';


export class CustomValidator{

    //Synchronous Validator function
static skuBegin(control:AbstractControl): ValidationErrors | null{

   // if( ! ((control.value as string).match(/^123/)) )
   if(!String(control.value).match(/^123/))
    return { invalidSku : true };

    else
    return null;
    
}


//Asynchronous Validator function

static shouldBeUnique(control:AbstractControl): Promise<ValidationErrors|null>{

    return new Promise( (res,rej ) => {


        setTimeout( ()=>{

            if( (control.value as string) === '123sku' )
            res( {notUnique : true} );
            else
            res(null);

        },2000);

    });

}

}