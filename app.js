 const methodName ='getColor'
 const propName ='color';

 class plain{
    constructor(color){
        this._color =color;
    }
    [methodName](){
        return this._color;
    }
    get [propName] (){
        return this[`_${propName}`]
    }
    set [propName]( value){
        return this[`_${propName}`] =value;
    }

 }
 const whiteJet =new plain('white');

 console.log(whiteJet.color)