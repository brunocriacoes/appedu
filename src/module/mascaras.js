
const lista  = () =>  Object.values( document.querySelectorAll( '[mask]' ) )
const getMak = ( input ) => input.getAttribute( 'mask'  )

function cpf( event ) {
    this.value = this.value.replace( /\D/gi, '' )
    .replace( /(\d{3})(.)/, '$1.$2' )
    .replace( /(\d{3})\.(\d{3})(.)/, '$1.$2.$3' )
    .replace( /(\d{3})\.(\d{3})\.(\d{3})(.)/, '$1.$2.$3-$4' )   
    .substr( 0, 14 )  
}

const masks  = {
    cpf
} 

export default () => {
    lista().forEach( input => {
        let nomeMask = getMak(input)
        let maks =  masks[nomeMask]
        if( maks ) {
            console.log( 'existe mask' )
            input.addEventListener( 'input', maks )
        }
    } )
}